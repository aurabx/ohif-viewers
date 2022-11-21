const auraDefault = {
  id: 'auraDefault',
  locked: true,
  hasUpdatedPriorsInformation: false,
  name: 'Default',
  createdDate: '2022-09-21T19:22:08.894Z',
  modifiedDate: '2022-09-21T19:22:08.894Z',
  availableTo: {},
  editableBy: {},
  protocolMatchingRules: [],
  toolGroupIds: ['default'],
  displaySetSelectors: {
    defaultDisplaySetId: {
      // Unused currently
      imageMatchingRules: [],
      // Matches displaysets, NOT series
      seriesMatchingRules: [
        {
          id: 'YbmMy3b7pz7GLiaT',
          weight: 4,
          attribute: 'SeriesDescription',
          constraint: {
            doesNotEqual: {
              value: 'Report',
            },
          },
          required: true,
        },
      ],
      studyMatchingRules: [],
    },
  },
  stages: [
    {
      id: 'hYbmMy3b7pz7GLiaT',
      name: 'default',
      viewportStructure: {
        layoutType: 'grid',
        properties: {
          rows: 1,
          columns: 1,
        },
      },
      viewports: [
        {
          viewportOptions: {
            toolGroupId: 'default',
            // initialImageOptions: {
            //   index: 180,
            //   preset: 'middle', // 'first', 'last', 'middle'
            // },
          },
          displaySets: [
            {
              options: [],
              id: 'defaultDisplaySetId',
            },
          ],
        },
      ],
      createdDate: '2021-02-23T18:32:42.850Z',
    },
  ],
  //imageLoadStrategy: 'default', // "default" , "interleaveTopToBottom",  "interleaveCenter"
  numberOfPriorsReferenced: -1,
};

function getHangingProtocolModule() {
  return [
    {
      id: auraDefault.id,
      protocol: auraDefault,
    },
  ];
}

export default getHangingProtocolModule;
