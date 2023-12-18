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
        // wadoUriRoot: 'https://uhura-qb5zrxv3jq-ts.a.run.app/wado-rs',
        // qidoRoot: 'https://uhura-qb5zrxv3jq-ts.a.run.app/wado-rs',
        // wadoRoot: 'https://uhura-qb5zrxv3jq-ts.a.run.app/wado-rs',
        // wadoUriRoot:
        //   'https://pr-190-pcovu3i-pghszvpk65pns.au.platformsh.site/api/wado-rs',
        // qidoRoot:
        //   'https://pr-190-pcovu3i-pghszvpk65pns.au.platformsh.site/api/wado-rs',
        // wadoRoot:
        //   'https://pr-190-pcovu3i-pghszvpk65pns.au.platformsh.site/api/wado-rs',
        // wadoUriRoot: 'https://uhura-nfnewhtcta-ts.a.run.app/wado-rs',
        // qidoRoot: 'https://uhura-nfnewhtcta-ts.a.run.app/wado-rs',
        // wadoRoot: 'https://uhura-nfnewhtcta-ts.a.run.app/wado-rs',
        wadoUriRoot: 'https://d33do7qe4w26qo.cloudfront.net/dicomweb',
        qidoRoot: 'https://d33do7qe4w26qo.cloudfront.net/dicomweb',
        wadoRoot: 'https://d33do7qe4w26qo.cloudfront.net/dicomweb',
        // wadoUriRoot: 'https://uhura.lndo.site/wado-rs',
        // qidoRoot: 'https://uhura.lndo.site/wado-rs',
        // wadoRoot: 'https://uhura.lndo.site/wado-rs',
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

  // headers: {
  //   Authorization:
  //     'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1cmEubG5kby5zaXRlIiwiYXVkIjoiaHR0cHM6Ly9hdXJhLmxuZG8uc2l0ZSIsInN1YiI6ImEzMzVjOWRiLTQ0YTEtNDcyMi04ZDc5LTJiMzVjY2Q0ZGViZCIsInBlcnNvbiI6ImU5NDliNjIwLTBmY2EtNGUyMS1iMmM3LTg1OWYyZjhkMWExNyIsInN0b3JlX2lkIjoiMjNhYzE1MGMtOGU5My00YmM4LTk5NmItZTFiYTlhNmU4YWRmIiwiaWF0IjoxNjc0NjEyNjkyLCJuYmYiOjE2NzQ2MTI2OTIsImV4cCI6MTY3NDY5OTA5Mn0.LCPvwldLYj4siTvK_VFyzpUY3PUoIbJ3BCSd8wiy4ymceuewt4np_eaC_23l3jRRPhSH3rWMoBviIATzcmaVkDzxs7SXZIbe0wK4n97Kpmuqjd223wQ6E7Da8q5h9g1_zD5ZKfuH7ahvpofXL8OPjqKGWeVdDzWMPrqaW0ZMz1xAwkzi892ADNq3g9_TNDvlCFnfqkiMklspodQ9hSeU0gsgJCqFtHuIqV5NPPYbi74Bmp4aI5R5x_IFiRK7yTGk151F0azt7Aj_kxO7mEHWvNpe_dbLhYRiMUqQ2VoFSrxdLqI86GvcsLRjhGIKmPEDYFONqMeh_1M4ALElP1xepQ',
  // },

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
