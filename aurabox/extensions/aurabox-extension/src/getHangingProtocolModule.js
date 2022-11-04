/**
 * @deprecated
 * @type {{createdDate: string, hasUpdatedPriorsInformation: boolean, toolGroupIds: string[], name: string, modifiedDate: string, stages: [{createdDate: string, viewports: [{displaySets: [{options: *[], id: string}], viewportOptions: {toolGroupId: string, initialImageOptions: {preset: string}}}], name: string, id: string, viewportStructure: {layoutType: string, properties: {columns: number, rows: number}}, displaySets: [{seriesMatchingRules: [{weight: number, constraint: {doesNotEqual: {value: string}}, id: string, attribute: string, required: boolean}], studyMatchingRules: *[], id: string}]}], id: string, editableBy: {}, numberOfPriorsReferenced: number, locked: boolean, protocolMatchingRules: *[], availableTo: {}}}
 */
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
  // imageLoadStrategy: 'default', // "default" , "interleaveTopToBottom",  "interleaveCenter"
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
          //imageMatchingRules: [],
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
          viewportOptions: {
            toolGroupId: 'default',
            initialImageOptions: {
              //index: 180,
              preset: 'first', // 'first', 'last', 'middle'
            },
            viewportType: 'volume',
            orientation: 'sagittal',
            syncGroups: [
              {
                type: 'cameraposition',
                id: 'axialSync',
                source: true,
                target: true,
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
