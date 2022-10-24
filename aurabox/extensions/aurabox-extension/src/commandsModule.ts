import {
  getEnabledElement,
  StackViewport,
  volumeLoader,
  cache,
  utilities as csUtils,
  Enums as coreEnums,
} from '@cornerstonejs/core';
import {
  ToolGroupManager,
  Enums,
  segmentation,
  utilities as csToolsUtils,
  SynchronizerManager,
} from '@cornerstonejs/tools';
import {
  getEnabledElement as OHIFgetEnabledElement,
  setEnabledElement,
} from '@ohif/extension-cornerstone/src/state';
import { SyncGroup } from '@ohif/extension-cornerstone/src/services/SyncGroupService/SyncGroupService';
//import { Types } from '@ohif/core';

const asSyncGroup = (syncGroup: string | SyncGroup): SyncGroup =>
  typeof syncGroup === 'string' ? { type: syncGroup } : syncGroup;

const commandsModule = ({ servicesManager }) => {
  const {
    // CineService,
    // UIDialogService,
    // DisplaySetService,
    // UINotificationService,

    ViewportGridService,
    ToolGroupService,
    ToolBarService,
    CornerstoneViewportService,
    SegmentationService,
    HangingProtocolService,
    SyncGroupService,
  } = servicesManager.services;

  function _getActiveViewportEnabledElement() {
    const { activeViewportIndex } = ViewportGridService.getState();
    const { element } = OHIFgetEnabledElement(activeViewportIndex) || {};
    const enabledElement = getEnabledElement(element);
    return enabledElement;
  }

  //const defaultGroup = {} as SyncGroup;

  function _getToolGroup(toolGroupId) {
    let toolGroupIdToUse = toolGroupId;

    if (!toolGroupIdToUse) {
      // Use the active viewport's tool group if no tool group id is provided
      const enabledElement = _getActiveViewportEnabledElement();

      if (!enabledElement) {
        return;
      }

      const { renderingEngineId, viewportId } = enabledElement;
      const toolGroup = ToolGroupManager.getToolGroupForViewport(
        viewportId,
        renderingEngineId
      );

      if (!toolGroup) {
        console.warn(
          'No tool group found for viewportId:',
          viewportId,
          'and renderingEngineId:',
          renderingEngineId
        );
        return;
      }

      toolGroupIdToUse = toolGroup.id;
    }

    const toolGroup = ToolGroupService.getToolGroup(toolGroupIdToUse);
    return toolGroup;
  }

  const actions = {
    toggleLink({ toggledState }) {
      console.log('find:toggledState', toggledState);

      const { viewports } = ViewportGridService.getState();

      const syncGroup = asSyncGroup('cameraposition');

      console.log('find:viewports', viewports);
      // const cameraPositionSynchronizer = SynchronizerManager.createSynchronizer(
      //   'synchronizerName',
      //   coreEnums.Events.CAMERA_MODIFIED,
      //   (
      //     synchronizerInstance,
      //     sourceViewport,
      //     targetViewport,
      //     cameraModifiedEvent
      //   ) => {
      //     // Synchronization logic should go here
      //     //console.log('find:synchronizerInstance', synchronizerInstance);
      //     //console.log('find:sourceViewport', sourceViewport);
      //     console.log('find:targetViewport', targetViewport);
      //     //console.log('find:cameraModifiedEvent', cameraModifiedEvent);
      //   }
      // );

      for (const viewportKey in viewports) {
        console.log('find:viewportKey', viewportKey);
        const key = parseInt(viewportKey);

        const viewportInfo = CornerstoneViewportService.getViewportInfoByIndex(
          key
        );

        // console.log('find:viewportInfo', viewportInfo);
        // if (key === 0) {
        //   cameraPositionSynchronizer.addSource(viewportInfo);
        // } else {
        //   cameraPositionSynchronizer.addTarget(viewportInfo);
        // }

        //cameraPositionSynchronizer.add(viewportInfo);

        SyncGroupService.addViewportToSyncGroup(
          viewportInfo.viewportId,
          viewportInfo.renderingEngineId,
          [syncGroup]
        );
      }

      console.log('find:viewports', viewports);

      // const firstViewport = CornerstoneViewportService.getViewportInfoByIndex(
      //   0
      // );
      //
      // const firstViewportInfo = CornerstoneViewportService.getCornerstoneViewport(
      //   firstViewport.getViewportId()
      // );
      //
      // const secondViewport = CornerstoneViewportService.getViewportInfoByIndex(
      //   1
      // );
      //
      // const secondViewportInfo = CornerstoneViewportService.getCornerstoneViewport(
      //   secondViewport.getViewportId()
      // );
      //
      // const syncGroups = firstViewport.getSyncGroups();
      //
      // console.log('find:syncGroups', syncGroups);
      // SyncGroup
      //const viewportIndex = viewportInfo.getViewportIndex();
      //setEnabledElement(viewportIndex, element);
      //const renderingEngineId = viewportInfo.getRenderingEngineId();

      // console.log('find:firstViewport', firstViewport);
      // console.log('find:secondViewport', secondViewport);

      // cameraPositionSynchronizer.addSource(firstViewport);
      // cameraPositionSynchronizer.addTarget(secondViewport);

      // cameraPositionSynchronizer.add(firstViewport);
      // cameraPositionSynchronizer.add(secondViewport);
      //
      // SyncGroupService.addViewportToSyncGroup(
      //   firstViewport.viewportId,
      //   firstViewport.renderingEngineId,
      //   [syncGroup]
      // );
      //
      // SyncGroupService.addViewportToSyncGroup(
      //   secondViewport.viewportId,
      //   secondViewport.renderingEngineId,
      //   [syncGroup]
      // );

      // const synchronizer = SynchronizerManager.getSynchronizer(
      //   cameraSynchronizerId
      // );
      //
      // if (!synchronizer) {
      //   return;
      // }
      //
      // if (toggle) {
      //   synchronizer.add({
      //     renderingEngineId: renderingEngineId,
      //     viewportId: viewportId,
      //   });
      // } else {
      //   synchronizer.remove({
      //     renderingEngineId: renderingEngineId,
      //     viewportId: viewportId,
      //   });
      // }

      // const { isCineEnabled } = CineService.getState();
      // CineService.setIsCineEnabled(!isCineEnabled);
      // ToolBarService.setButton('Cine', { props: { isActive: !isCineEnabled } });
      // viewports.forEach((_, index) =>
      //   CineService.setCine({ id: index, isPlaying: false })
      // );
    },
    setWindowLevel({ window, level, toolGroupId }) {
      // convert to numbers
      const windowWidthNum = Number(window);
      const windowCenterNum = Number(level);

      const { viewportId } = _getActiveViewportEnabledElement();
      const viewportToolGroupId = ToolGroupService.getToolGroupForViewport(
        viewportId
      );

      if (toolGroupId && toolGroupId !== viewportToolGroupId) {
        return;
      }

      // get actor from the viewport
      const renderingEngine = CornerstoneViewportService.getRenderingEngine();
      const viewport = renderingEngine.getViewport(viewportId);

      const { lower, upper } = csUtils.windowLevel.toLowHighRange(
        windowWidthNum,
        windowCenterNum
      );

      viewport.setProperties({
        voiRange: {
          upper,
          lower,
        },
      });
      viewport.render();
    },
    toggleCrosshairs({ toolGroupId, toggledState }) {
      const toolName = 'Crosshairs';
      // If it is Enabled
      if (toggledState) {
        actions.setToolActive({ toolName, toolGroupId });
        return;
      }
      const toolGroup = _getToolGroup(toolGroupId);

      console.log(toolGroup, toolName, toolGroupId, toggledState);

      if (!toolGroup) {
        return;
      }

      toolGroup.setToolDisabled(toolName);

      // Get the primary toolId from the ToolBarService and set it to active
      // Since it was set to passive if not already active
      const primaryActiveTool = ToolBarService.state.primaryToolId;
      if (
        toolGroup?.toolOptions[primaryActiveTool]?.mode ===
        Enums.ToolModes.Passive
      ) {
        toolGroup.setToolActive(primaryActiveTool, {
          bindings: [{ mouseButton: Enums.MouseBindings.Primary }],
        });
      }
    },
    setToolActive: ({ toolName, toolGroupId = null }) => {
      const toolGroup = _getToolGroup(toolGroupId);

      if (!toolGroup) {
        console.warn('No tool group found for toolGroupId:', toolGroupId);
        return;
      }
      // Todo: we need to check if the viewports of the toolGroup is actually
      // parts of the ViewportGrid's viewports, if not we return

      const { viewports } = ViewportGridService.getState() || {
        viewports: [],
      };

      // iterate over all viewports and set the tool active for the
      // viewports that belong to the toolGroup
      for (let index = 0; index < viewports.length; index++) {
        const ohifEnabledElement = OHIFgetEnabledElement(index);

        if (!ohifEnabledElement) {
          continue;
        }

        const viewport = getEnabledElement(ohifEnabledElement.element);

        if (!viewport) {
          continue;
        }

        // Find the current active tool and set it to be passive
        const activeTool = toolGroup.getActivePrimaryMouseButtonTool();

        if (activeTool) {
          toolGroup.setToolPassive(activeTool);
        }

        // Set the new toolName to be active
        toolGroup.setToolActive(toolName, {
          bindings: [{ mouseButton: Enums.MouseBindings.Primary }],
        });

        return;
      }
    },
    incrementActiveViewport: () => {
      const { activeViewportIndex, viewports } = ViewportGridService.getState();
      const nextViewportIndex = (activeViewportIndex + 1) % viewports.length;
      ViewportGridService.setActiveViewportIndex(nextViewportIndex);
    },
    decrementActiveViewport: () => {
      const { activeViewportIndex, viewports } = ViewportGridService.getState();
      const nextViewportIndex =
        (activeViewportIndex - 1 + viewports.length) % viewports.length;
      ViewportGridService.setActiveViewportIndex(nextViewportIndex);
    },
    setHangingProtocol: ({ protocolId }) => {
      HangingProtocolService.setProtocol(protocolId);
    },
    scroll: ({ direction }) => {
      const enabledElement = _getActiveViewportEnabledElement();

      if (!enabledElement) {
        return;
      }

      const { viewport } = enabledElement;
      const options = { delta: direction };

      csToolsUtils.scroll(viewport, options);
    },
  };

  const definitions = {
    setWindowLevel: {
      commandFn: actions.setWindowLevel,
      storeContexts: [],
      options: {},
    },
    setToolActive: {
      commandFn: actions.setToolActive,
      storeContexts: [],
      options: {},
    },
    toggleCrosshairs: {
      commandFn: actions.toggleCrosshairs,
      storeContexts: [],
      options: {},
    },

    incrementActiveViewport: {
      commandFn: actions.incrementActiveViewport,
      storeContexts: [],
    },
    decrementActiveViewport: {
      commandFn: actions.decrementActiveViewport,
      storeContexts: [],
    },

    nextImage: {
      commandFn: actions.scroll,
      storeContexts: [],
      options: { direction: 1 },
    },
    previousImage: {
      commandFn: actions.scroll,
      storeContexts: [],
      options: { direction: -1 },
    },

    toggleLink: {
      commandFn: actions.toggleLink,
      storeContexts: [],
      options: {},
    },

    setHangingProtocol: {
      commandFn: actions.setHangingProtocol,
      storeContexts: [],
      options: {},
    },
  };

  return {
    actions,
    definitions,
    defaultContext: 'CORNERSTONE',
  };
};

export default commandsModule;
