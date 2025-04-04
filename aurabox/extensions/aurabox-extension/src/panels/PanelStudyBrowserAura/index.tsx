import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
//
import PanelStudyBrowserAura from './PanelStudyBrowserAura';
import getImageSrcFromImageId from './getImageSrcFromImageId';
import PanelStudyBrowserTracking from '@ohif/extension-measurement-tracking/src/panels/PanelStudyBrowserTracking/PanelStudyBrowserTracking';

const requestDisplaySetCreationForStudy = (
  dataSource,
  DisplaySetService,
  StudyInstanceUID,
  madeInClient
) => {
  if (
    DisplaySetService.activeDisplaySets.some(
      (displaySet) => displaySet.StudyInstanceUID === StudyInstanceUID
    )
  ) {
    return;
  }

  dataSource.retrieve.series.metadata({ StudyInstanceUID, madeInClient });
};

function _getStudyForPatientUtility(extensionManager) {
  const utilityModule = extensionManager.getModuleEntry(
    'aurabox-extension.utilityModule.common'
  );

  //window.extensionManager = extensionManager;

  const { getStudiesForPatient } = utilityModule.exports;
  return getStudiesForPatient;
}

/**
 * Wraps the PanelStudyBrowser and provides features afforded by managers/services
 *
 * @param {object} params
 * @param {object} commandsManager
 * @param {object} extensionManager
 */
function WrappedPanelStudyBrowserAura({
  commandsManager,
  extensionManager,
  servicesManager,
}) {
  const dataSource = extensionManager.getActiveDataSource()[0];

  const getStudiesForPatientByMRN =
    _getStudyForPatientUtility(extensionManager);
  const _getStudiesForPatientByMRN = getStudiesForPatientByMRN.bind(
    null,
    dataSource
  );
  const _getImageSrcFromImageId = useCallback(
    _createGetImageSrcFromImageIdFn(extensionManager),
    []
  );
  const _requestDisplaySetCreationForStudy =
    requestDisplaySetCreationForStudy.bind(null, dataSource);

  return (
    <PanelStudyBrowserAura
      servicesManager={servicesManager}
      commandsManager={commandsManager}
      dataSource={dataSource}
      getImageSrc={_getImageSrcFromImageId}
      getStudiesForPatientByMRN={_getStudiesForPatientByMRN}
      requestDisplaySetCreationForStudy={_requestDisplaySetCreationForStudy}
    />
  );
}

/**
 * Grabs cornerstone library reference using a dependent command from
 * the @ohif/extension-cornerstone extension. Then creates a helper function
 * that can take an imageId and return an image src.
 *
 * @param {func} getCommand - CommandManager's getCommand method
 * @returns {func} getImageSrcFromImageId - A utility function powered by
 * cornerstone
 */
function _createGetImageSrcFromImageIdFn(extensionManager) {
  const utilities = extensionManager.getModuleEntry(
    '@ohif/extension-cornerstone.utilityModule.common'
  );

  try {
    const { cornerstone } = utilities.exports.getCornerstoneLibraries();
    return getImageSrcFromImageId.bind(null, cornerstone);
  } catch (ex) {
    throw new Error('Required command not found');
  }
}

WrappedPanelStudyBrowserAura.propTypes = {
  commandsManager: PropTypes.object.isRequired,
  extensionManager: PropTypes.object.isRequired,
  servicesManager: PropTypes.object.isRequired,
};

export default WrappedPanelStudyBrowserAura;
