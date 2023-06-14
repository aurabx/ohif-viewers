import React from 'react';
import PropTypes from 'prop-types';
//
import PanelStudyBrowserAura from './PanelStudyBrowserAura';
import getImageSrcFromImageId from './getImageSrcFromImageId';

const requestDisplaySetCreationForStudy = (
  dataSource,
  DisplaySetService,
  StudyInstanceUID,
  madeInClient
) => {
  if (
    DisplaySetService.activeDisplaySets.some(
      displaySet => displaySet.StudyInstanceUID === StudyInstanceUID
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

  console.log('here', utilityModule);

  window.extensionManager = extensionManager;

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
  const getStudiesForPatient = _getStudyForPatientUtility(extensionManager);
  const _getStudiesForPatient = getStudiesForPatient.bind(null, dataSource);
  const _getImageSrcFromImageId = _createGetImageSrcFromImageIdFn(
    extensionManager
  );
  const _requestDisplaySetCreationForStudy = requestDisplaySetCreationForStudy.bind(
    null,
    dataSource
  );

  return (
    <PanelStudyBrowserAura
      servicesManager={servicesManager}
      dataSource={dataSource}
      getImageSrc={_getImageSrcFromImageId}
      getStudiesForPatient={_getStudiesForPatient}
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
