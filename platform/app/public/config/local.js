window.config = {
  //routerBasename: '/viewers/v3',
  routerBasename: '/',
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
      sourceName: 'dicomweb-aura',
      configuration: {
        name: 'Aurabox DICOMWeb',
        wadoUriRoot: 'https://uhura-prod-au.abxlink.com/dicomweb/v3/raw',
        qidoRoot: 'https://uhura-prod-au.abxlink.com/dicomweb/v3/raw',
        wadoRoot: 'https://uhura-prod-au.abxlink.com/dicomweb/v3/raw',
        qidoSupportsIncludeField: true,
        supportsReject: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: false,
        staticWado: true,
        singlepart: 'bulkdata,video,pdf',
      },
    },
    {
      friendlyName: 'Aurabox DICOMWeb Server',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb-uk',
      configuration: {
        name: 'Aurabox DICOMWeb',
        wadoUriRoot: 'https://uhura-prod-uk.abxlink.com/v2/wado-rs',
        qidoRoot: 'https://uhura-prod-uk.abxlink.com/v2/wado-rs',
        wadoRoot: 'https://uhura-prod-uk.abxlink.com/v2/wado-rs',
        qidoSupportsIncludeField: false,
        supportsReject: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: false,
        supportsWildcard: true,
        staticWado: true,
        singlepart: 'bulkdata,video,pdf',
        showWarningMessageForCrossOrigin: true,
        omitQuotationForMultipartRequest: false,
        requestTransferSyntaxUID: '*',

        bulkDataURI: {
          enabled: true,
          relativeResolution: 'studies',
        },
      },
    },
    {
      friendlyName: 'dcmjs DICOMWeb Server',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        name: 'aws',
        // old server
        // wadoUriRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado',
        // qidoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        // wadoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',

        // new server
        wadoUriRoot: 'https://d33do7qe4w26qo.cloudfront.net/dicomweb',
        qidoRoot: 'https://d33do7qe4w26qo.cloudfront.net/dicomweb',
        wadoRoot: 'https://d33do7qe4w26qo.cloudfront.net/dicomweb',
        qidoSupportsIncludeField: false,
        supportsReject: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: false,
        supportsWildcard: true,
        staticWado: true,
        singlepart: 'bulkdata,video',
        // whether the data source should use retrieveBulkData to grab metadata,
        // and in case of relative path, what would it be relative to, options
        // are in the series level or study level (some servers like series some study)
        bulkDataURI: {
          enabled: true,
          relativeResolution: 'studies',
        },
        omitQuotationForMultipartRequest: true,
        requestTransferSyntaxUID: '*',
        acceptHeader: [],
        requestOptions: {
          auth: options => `Bearer ZHVtbXlfdXNlcjpkdW1teV9wYXNzd29yZA==`,
        },
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
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJhdS5hdXJhYm94LmFwcCIsImF1ZCI6ImF1LmF1cmFib3guYXBwIiwic3ViIjoiZDY1NzFiOGUtYWY3ZC00ZjRkLWEyZjMtMDllMjgxMWI2MjRmIiwia2V5IjoiJDJ5JDEwJGdIRlNVdkh0OHdPZE1tTmdaaVJRNU9VRklDcUNscmlSSC8zNnU5ajRqL0tUTlhBOW1GdzFlIiwiZW5kcG9pbnQiOiJodHRwczovL2F1LmF1cmFib3guYXBwL2FwaSIsImlhdCI6MTczNjIxMDk4MywibmJmIjoxNzM2MjEwOTgzLCJleHAiOjE3MzYyMTQ1ODMsInN0b3JlX2lkIjoiIiwicGVyc29uX2lkIjoiMWJmMzkyMTktNmZkYy00NTEyLWJhY2EtNmU4NTk2YjdhZjZkIn0.aInBtjQkhiup1qEonACG03UIZBpfRuaPPdDR98QqDM_yPNWk4hK9EEPs0yIQldZAwh7xBL_eIUtCANFocAO4pKgvoSpkDqs5MO8tgEK_nD9Jx22Qlp3fAzTlT3767godjV4ckqR05c2SXjuXX4ONC_InLvJ1ICHF24BMYHeCTvLSuN6rgh5ETAHJFG_lKaeYAddID7PWkOFYvLFwJFR55JDjX0SDV7JBW2lME_D4xSP7O0-5HqdnLAMRDuICbgBceo--eKw1WABfdv6bIiBwvecknHr_E1m-7PskefvOXF9zqq9qZQAPvafUBZnsxGjRqsM0yE-f0sj54eYdFqhLog',
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
  defaultDataSourceName: 'dicomweb-aura',
  // defaultDataSourceName: 'dicomweb',
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
