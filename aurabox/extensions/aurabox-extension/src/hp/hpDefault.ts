export default {
  id: 'auraDefault',
  locked: true,
  hasUpdatedPriorsInformation: false,
  name: 'Default',
  createdDate: '2022-09-21T19:22:08.894Z',
  modifiedDate: '2022-09-21T19:22:08.894Z',
  availableTo: {},
  editableBy: {},
  //protocolMatchingRules: [],
  protocolMatchingRules: [
    {
      id: 'Aura 2x2',
      weight: 50,
      // attribute: 'maxNumImageFrames',
      // constraint: {
      //   greaterThan: 10,
      // },
      required: true,
    },
  ],
  toolGroupIds: ['default'],
  imageLoadStrategy: 'default', // "default" , "interleaveTopToBottom",  "interleaveCenter"
  stages: [
    {
      id: 'YbmMy3b7pz7GLiaTsd',
      name: 'default',
      viewportStructure: {
        layoutType: 'grid',
        properties: {
          rows: 2,
          columns: 2,
        },
      },
      displaySets: [
        {
          id: 'displaySet',
          findAll: true,
          // Unused currently
          //imageMatchingRules: [],
          // Matches displaysets, NOT series
          seriesMatchingRules: [
            // {
            //   id: 'YbmMy3b7pz7GLiaT',
            //   weight: 4,
            //   attribute: 'SeriesDescription',
            //   constraint: {
            //     doesNotEqual: {
            //       value: 'Report',
            //     },
            //   },
            //   required: true,
            // },
          ],
          studyMatchingRules: [],
        },
      ],
      viewports: [
        {
          viewportOptions: {
            toolGroupId: 'default',
            viewportType: 'volume',
            orientation: 'sagittal',
            initialImageOptions: {
              //index: 180,
              preset: 'first', // 'first', 'last', 'middle'
            },
            // syncGroups: [
            //   {
            //     type: 'cameraposition',
            //     id: 'axialSync',
            //     source: true,
            //     target: true,
            //   },
            //   {
            //     type: 'voi',
            //     id: 'ctWLSync',
            //     source: true,
            //     target: true,
            //   },
            // ],
          },
          displaySets: [
            {
              options: [],
              id: 'displaySet',
            },
          ],
        },
      ],
      createdDate: '2021-02-23T18:32:42.850Z',
    },
  ],
  numberOfPriorsReferenced: -1,
};
