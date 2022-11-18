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
  dataSources: [
    {
      friendlyName: 'Aurabox DICOMWeb Server',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
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
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1LmF1cmFib3guYXBwIiwiYXVkIjoiaHR0cHM6Ly9hdS5hdXJhYm94LmFwcCIsInN1YiI6IjExMjA3OGE5LTlmODMtNDI0NC1iY2U5LWEyZDU4NTRhZDc2NCIsInBhdGllbnQiOiI3YjNlZmNmNy05ZjlmLTQ1YzEtODI0Yy0zZGRhMzc5ODYyMjIiLCJzdG9yZV9pZCI6IjlkYTliZWM0LTE1N2QtNDg1Zi1hMjY0LTNhZWQyZTBiZjM2MiIsImlhdCI6MTY2MzczNzM3MywibmJmIjoxNjYzNzM3MzczLCJleHAiOjE2NjM4MjM3NzN9.hIJBaJwLGQr2b4Pd8ayADDE30jdXa6MgMkOx-jmYCpIvFcz798XNRexNV9QSnRqUZg9ZLlhdTAK4Pm7V0gvz5l3LozGaIgEuHTW0CDaoiSbCHumTuDk1TraVvs6LHrV-UX5-WEOnAWZJAe5ePzGcjAKzZLkcM-qLKP6H8NM3H1Fy4MPA4tOnBVbIw6Kvhy25rTdoEKtyAysrhYSf7YFZkVYNVj1Ul1yLrZ7080mkxFxSTDCyfIm9okdHE2Y8mhy3FhOAGtubXs8eG3s0qABQ-1k_gseFNu2fPuWdIOA4gCYU7vI-yP2HuSiHNLBFmGUkvDbWfCxqnQAuUOdrABGumg',
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
  defaultDataSourceName: 'dicomweb',
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
