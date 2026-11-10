import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useViewportRef } from '@ohif/core';
import { DisplayableDocumentType } from '../utils/displayableDocumentTypes';
import { DocumentLoadFailureReason } from '../utils/loadDisplayableDocument';
import './OHIFCornerstonePdfViewport.css';

/** Translation keys in the EncapsulatedDocument namespace, by failure reason. */
const FAILURE_MESSAGE_KEYS: Record<DocumentLoadFailureReason, string> = {
  'unsupported-type': 'This document type cannot be displayed',
  'signature-mismatch': 'Document content does not match its declared type',
  'retrieve-failed': 'Unable to retrieve this document',
  aborted: 'Loading document...',
};

/**
 * Aura PDF auth: the browser-native <object> fetch cannot send Authorization
 * headers, so a `token` query was appended to WADO URLs (20ad6da4a0).
 *
 * After GHSA-xwgp-w3pj-q5h3, encapsulated documents are retrieved via
 * retrieveBulkData (which already uses userAuthenticationService headers)
 * and embedded as a blob: URL whose MIME type comes from an allowlist.
 * Appending `token` to a blob: URL would break rendering and is unnecessary.
 * Keep the query-param behaviour only for residual http(s) URLs.
 */
function appendAuthToken(url: string, token?: string): string {
  if (!token || !url || url.startsWith('blob:') || url.startsWith('data:')) {
    return url;
  }

  return url.includes('?') ? `${url}&token=${token}` : `${url}?token=${token}`;
}

function OHIFCornerstonePdfViewport({ displaySets, viewportId = 'pdf-viewport', token }) {
  const [embeddedDocument, setEmbeddedDocument] = useState<{
    url: string;
    documentType: DisplayableDocumentType;
  } | null>(null);
  const [failure, setFailure] = useState<DocumentLoadFailureReason | null>(null);
  const viewportElementRef = useRef(null);
  const viewportRef = useViewportRef(viewportId);
  const { t } = useTranslation('EncapsulatedDocument');

  useEffect(() => {
    document.body.addEventListener('drag', makePdfDropTarget);
    return function cleanup() {
      document.body.removeEventListener('drag', makePdfDropTarget);
      viewportRef.unregister();
    };
  }, []);

  const [style, setStyle] = useState('pdf-yes-click');

  const makePdfScrollable = () => {
    setStyle('pdf-yes-click');
  };

  const makePdfDropTarget = () => {
    setStyle('pdf-no-click');
  };

  if (displaySets && displaySets.length > 1) {
    throw new Error(
      'OHIFCornerstonePdfViewport: only one display set is supported for dicom pdf right now'
    );
  }

  const { getDocument, label } = displaySets[0];

  useEffect(() => {
    let isCancelled = false;
    let revokeUrl;
    const abortController = new AbortController();

    const load = async () => {
      const result = await getDocument({ signal: abortController.signal });

      if (isCancelled) {
        if (result.ok) {
          result.revoke();
        }
        return;
      }

      if (!result.ok) {
        setEmbeddedDocument(null);
        setFailure(result.reason);
        return;
      }

      revokeUrl = result.revoke;
      setEmbeddedDocument({
        url: appendAuthToken(result.url, token),
        documentType: result.documentType,
      });
      setFailure(null);
    };

    setEmbeddedDocument(null);
    setFailure(null);

    load();

    return () => {
      isCancelled = true;
      abortController.abort();
      revokeUrl?.();
    };
  }, [getDocument, token]);

  return (
    <div
      className="bg-primary-black h-full w-full text-white"
      onClick={makePdfScrollable}
      ref={el => {
        viewportElementRef.current = el;
        if (el) viewportRef.register(el);
      }}
      data-viewport-id={viewportId}
    >
      {embeddedDocument ? (
        renderDocument(embeddedDocument, style, t, label)
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          {t(failure ? FAILURE_MESSAGE_KEYS[failure] : 'Loading document...')}
        </div>
      )}
    </div>
  );
}

function renderDocument(
  { url, documentType }: { url: string; documentType: DisplayableDocumentType },
  style: string,
  t: (key: string, options?: Record<string, unknown>) => string,
  label?: string
) {
  // <object> is used only for the types the allowlist marks as un-sandboxable -
  // in practice PDF, whose built-in browser viewer will not run in a sandboxed
  // browsing context. The type attribute now matches the Blob type exactly,
  // because loadDisplayableDocument set both from the same allowlist entry.
  if (documentType.strategy === 'object') {
    return (
      <object
        data={url}
        type={documentType.mimeType}
        className={style}
      >
        <div>{t('No viewer installed for {{mimeType}}', { mimeType: documentType.mimeType })}</div>
      </object>
    );
  }

  return (
    <iframe
      src={url}
      title={label || t('Encapsulated document')}
      className={`${style} border-0`}
      sandbox={documentType.sandbox ?? ''}
      referrerPolicy="no-referrer"
      allow=""
    />
  );
}

OHIFCornerstonePdfViewport.propTypes = {
  displaySets: PropTypes.arrayOf(PropTypes.object).isRequired,
  viewportId: PropTypes.string,
  token: PropTypes.string,
};

export default OHIFCornerstonePdfViewport;
