window.config = {
  routerBasename: '/',
  // routerBasename: '/',
  // whiteLabelling: {},
  extensions: [],
  modes: [],
  showStudyList: true,
  maxNumberOfWebWorkers: 3,
  maxNumRequests: {
    interaction: 100,
    thumbnail: 75,
    prefetch: 10,
  },
  // filterQueryParam: false,

  defaultDataSourceName: 'dicomweb',

  dataSources: [
    {
      friendlyName: 'Aurabox DICOMWeb Server',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        name: 'Aurabox DICOMWeb',
        wadoUriRoot: 'https://uhura.lndo.site/wado-rs',
        qidoRoot: 'https://uhura.lndo.site/wado-rs',
        wadoRoot: 'https://uhura.lndo.site/wado-rs',
        qidoSupportsIncludeField: true,
        supportsReject: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: false,

        // requestOptions: {
        //     auth: (options) => {
        //         return 'Bearer ' + 'WHEREAMI' //token
        //     }
        // }
      },
    },
    {
      friendlyName: 'Aurabox DICOMWeb Server',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb2',
      configuration: {
        name: 'Aurabox DICOMWeb',
        wadoUriRoot: 'https://uhura-nfnewhtcta-ts.a.run.app/wado-rs',
        qidoRoot: 'https://uhura-nfnewhtcta-ts.a.run.app/wado-rs',
        wadoRoot: 'https://uhura-nfnewhtcta-ts.a.run.app/wado-rs',
        qidoSupportsIncludeField: true,
        supportsReject: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: false,

        // requestOptions: {
        //     auth: (options) => {
        //         return 'Bearer ' + 'WHEREAMI' //token
        //     }
        // }
      },
    },
    {
      friendlyName: 'dcmjs DICOMWeb Server',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb1',
      configuration: {
        name: 'DCM4CHEE',
        wadoUriRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado',
        qidoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        wadoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        qidoSupportsIncludeField: true,
        supportsReject: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: true,
      },
    },
    {
      friendlyName: 'dicom json',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
      sourceName: 'dicomjson',
      configuration: {
        name: 'json',
      },
    },
    {
      friendlyName: 'dicom local',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomlocal',
      sourceName: 'dicomlocal',
      configuration: {},
    },
  ],

  headers: {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1cmEubG5kby5zaXRlIiwiYXVkIjoiaHR0cHM6Ly9hdXJhLmxuZG8uc2l0ZSIsInN1YiI6ImEzMzVjOWRiLTQ0YTEtNDcyMi04ZDc5LTJiMzVjY2Q0ZGViZCIsInBlcnNvbiI6ImEwODJlMGFlLTRhYmYtNGNkZC1hZTNmLTU3YmE4ODVkNzQ3MyIsInN0b3JlX2lkIjoiMDgyNzBhMGUtNTcwOC00NmQyLWFkYmQtZWQ2NjJjNDMzYzEyIiwiaWF0IjoxNjY2NDEyNjY2LCJuYmYiOjE2NjY0MTI2NjYsImV4cCI6MTY2NjQ5OTA2Nn0.e4shKLE91KBh9vaX2iVpqnJdhiooG-dHGV8BIm6aFN7dNUNSImxWRNuis92emAqZNM5qQKe-q5XNR_06rg4_g8eBebWz8-zqfx8d6d3qH6Aob-wXm_sSxXOhRZs0Mj62FoPcml7F8K-VdVw9LGl8VmNEglHojyWY5FYf4UR4iSGNmEwPw3xBGLVaIVGIlbxTEgAN5oJEcYWIMdZ8EC33pO2uAZVI6GNENprB60AVQthQOPP9W6D3lwWLMFmAQo4oAqsx702Klt7d7Gokf12sFXAG02nkqNUh6qjRQxJwh_yyMDMSRylSby8X9a8i-HUuw4aAvk6J46NDoDRdEsrIxA',
  },

  httpErrorHandler: error => {
    // This is 429 when rejected from the public idc sandbox too often.
    console.warn(error.status);

    // Could use services manager here to bring up a dialog/modal if needed.
    console.warn('test, navigate to https://ohif.org/');
  },
  // whiteLabeling: {
  //   /* Optional: Should return a React component to be rendered in the "Logo" section of the application's Top Navigation bar */
  //   createLogoComponentFn: function (React) {
  //     return React.createElement(
  //       'a',
  //       {
  //         target: '_self',
  //         rel: 'noopener noreferrer',
  //         className: 'text-purple-600 line-through',
  //         href: '/',
  //       },
  //       React.createElement('img',
  //         {
  //           src: './customLogo.svg',
  //           className: 'w-8 h-8',
  //         }
  //       ))
  //   },
  // },

  hotkeys: [
    {
      commandName: 'incrementActiveViewport',
      label: 'Next Viewport',
      keys: ['right'],
    },
    {
      commandName: 'decrementActiveViewport',
      label: 'Previous Viewport',
      keys: ['left'],
    },
    { commandName: 'rotateViewportCW', label: 'Rotate Right', keys: ['r'] },
    { commandName: 'rotateViewportCCW', label: 'Rotate Left', keys: ['l'] },
    { commandName: 'invertViewport', label: 'Invert', keys: ['i'] },
    {
      commandName: 'flipViewportHorizontal',
      label: 'Flip Horizontally',
      keys: ['h'],
    },
    {
      commandName: 'flipViewportVertical',
      label: 'Flip Vertically',
      keys: ['v'],
    },
    { commandName: 'scaleUpViewport', label: 'Zoom In', keys: ['+'] },
    { commandName: 'scaleDownViewport', label: 'Zoom Out', keys: ['-'] },
    { commandName: 'fitViewportToWindow', label: 'Zoom to Fit', keys: ['='] },
    { commandName: 'resetViewport', label: 'Reset', keys: ['space'] },
    { commandName: 'nextImage', label: 'Next Image', keys: ['down'] },
    { commandName: 'previousImage', label: 'Previous Image', keys: ['up'] },
    // {
    //   commandName: 'previousViewportDisplaySet',
    //   label: 'Previous Series',
    //   keys: ['pagedown'],
    // },
    // {
    //   commandName: 'nextViewportDisplaySet',
    //   label: 'Next Series',
    //   keys: ['pageup'],
    // },
    {
      commandName: 'setToolActive',
      commandOptions: { toolName: 'Zoom' },
      label: 'Zoom',
      keys: ['z'],
    },
    // ~ Window level presets
    {
      commandName: 'windowLevelPreset1',
      label: 'W/L Preset 1',
      keys: ['1'],
    },
    {
      commandName: 'windowLevelPreset2',
      label: 'W/L Preset 2',
      keys: ['2'],
    },
    {
      commandName: 'windowLevelPreset3',
      label: 'W/L Preset 3',
      keys: ['3'],
    },
    {
      commandName: 'windowLevelPreset4',
      label: 'W/L Preset 4',
      keys: ['4'],
    },
    {
      commandName: 'windowLevelPreset5',
      label: 'W/L Preset 5',
      keys: ['5'],
    },
    {
      commandName: 'windowLevelPreset6',
      label: 'W/L Preset 6',
      keys: ['6'],
    },
    {
      commandName: 'windowLevelPreset7',
      label: 'W/L Preset 7',
      keys: ['7'],
    },
    {
      commandName: 'windowLevelPreset8',
      label: 'W/L Preset 8',
      keys: ['8'],
    },
    {
      commandName: 'windowLevelPreset9',
      label: 'W/L Preset 9',
      keys: ['9'],
    },
  ],
};
