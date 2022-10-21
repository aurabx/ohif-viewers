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
  //imageLoadStrategy: 'default', // "default" , "interleaveTopToBottom",  "interleaveCenter"
  stages: [
    {
      id: 'YbmMy3b7pz7GLiaT',
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
      ],
      viewports: [
        {
          // viewportSettings: [
          //   {
          //     options: {
          //       itemId: 'SyncScroll',
          //       interactionType: 'toggle',
          //       commandName: 'toggleSynchronizer',
          //       commandOptions: { toggledState: true },
          //     },
          //     commandName: 'setToolActive',
          //     type: 'props',
          //   },
          // ],
          viewportOptions: {
            toolGroupId: 'default',
            // initialImageOptions: {
            //   index: 180,
            //   preset: 'first', // 'first', 'last', 'middle'
            // },
            //viewportId: 'default',
            viewportType: 'stack',
            orientation: 'axial',
            syncGroups: [
              {
                type: 'zoomPan',
                id: 'axialSync',
              },
            ],
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

function getHangingProtocolModule() {
  return [
    {
      id: auraDefault.id,
      protocol: auraDefault,
    },
  ];
}

export default getHangingProtocolModule;
