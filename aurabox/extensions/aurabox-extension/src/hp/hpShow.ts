export default {
  id: 'auraShow',
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
      // required: true,
    },
  ],
  toolGroupIds: ['default'],
  imageLoadStrategy: 'default', // "default" , "interleaveTopToBottom",  "interleaveCenter"

  displaySetSelectors: {
    ctDisplaySet: {
      seriesMatchingRules: [
        {
          weight: 1,
          attribute: 'Modality',
          constraint: {
            equals: {
              value: 'CT',
            },
          },
          required: true,
        },
        {
          attribute: 'SeriesDescription',
          constraint: {
            contains: 'CT',
          },
        },
        {
          attribute: 'SeriesDescription',
          constraint: {
            contains: 'CT WB',
          },
        },
      ],
    },
    ptDisplaySet: {
      seriesMatchingRules: [
        {
          attribute: 'Modality',
          constraint: {
            equals: 'PT',
          },
          required: true,
        },
        {
          attribute: 'SeriesDescription',
          constraint: {
            contains: 'Corrected',
          },
        },
        {
          weight: 2,
          attribute: 'SeriesDescription',
          constraint: {
            doesNotContain: {
              value: 'Uncorrected',
            },
          },
        },
      ],
    },
  },

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
          findAll: true,
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
            viewportId: 'ctAXIAL',
            viewportType: 'volume',
            orientation: 'axial',
            toolGroupId: 'ctToolGroup',
            initialImageOptions: {
              // index: 5,
              preset: 'first', // 'first', 'last', 'middle'
            },
            syncGroups: [
              {
                type: 'cameraPosition',
                id: 'axialSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ctWLSync',
                source: true,
                target: true,
              },
            ],
          },
          displaySets: [
            {
              id: 'ctDisplaySet',
            },
          ],
        },
        {
          viewportOptions: {
            viewportId: 'ctSAGITTAL',
            viewportType: 'volume',
            orientation: 'sagittal',
            toolGroupId: 'ctToolGroup',
            syncGroups: [
              {
                type: 'cameraPosition',
                id: 'sagittalSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ctWLSync',
                source: true,
                target: true,
              },
            ],
          },
          displaySets: [
            {
              id: 'ctDisplaySet',
            },
          ],
        },
        {
          viewportOptions: {
            viewportId: 'ctCORONAL',
            viewportType: 'volume',
            orientation: 'coronal',
            toolGroupId: 'ctToolGroup',
            syncGroups: [
              {
                type: 'cameraPosition',
                id: 'coronalSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ctWLSync',
                source: true,
                target: true,
              },
            ],
          },
          displaySets: [
            {
              id: 'ctDisplaySet',
            },
          ],
        },
        {
          viewportOptions: {
            viewportId: 'ptAXIAL',
            viewportType: 'volume',
            background: [1, 1, 1],
            orientation: 'axial',
            toolGroupId: 'ptToolGroup',
            initialImageOptions: {
              // index: 5,
              preset: 'first', // 'first', 'last', 'middle'
            },
            syncGroups: [
              {
                type: 'cameraPosition',
                id: 'axialSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ptWLSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ptFusionWLSync',
                source: true,
                target: false,
              },
            ],
          },
          displaySets: [
            {
              options: {
                voi: {
                  windowWidth: 5,
                  windowCenter: 2.5,
                },
                voiInverted: true,
              },
              id: 'ptDisplaySet',
            },
          ],
        },
        {
          viewportOptions: {
            viewportId: 'ptSAGITTAL',
            viewportType: 'volume',
            orientation: 'sagittal',
            background: [1, 1, 1],
            toolGroupId: 'ptToolGroup',
            syncGroups: [
              {
                type: 'cameraPosition',
                id: 'sagittalSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ptWLSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ptFusionWLSync',
                source: true,
                target: false,
              },
            ],
          },
          displaySets: [
            {
              options: {
                voi: {
                  windowWidth: 5,
                  windowCenter: 2.5,
                },
                voiInverted: true,
              },
              id: 'ptDisplaySet',
            },
          ],
        },
        {
          viewportOptions: {
            viewportId: 'ptCORONAL',
            viewportType: 'volume',
            orientation: 'coronal',
            background: [1, 1, 1],
            toolGroupId: 'ptToolGroup',
            syncGroups: [
              {
                type: 'cameraPosition',
                id: 'coronalSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ptWLSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ptFusionWLSync',
                source: true,
                target: false,
              },
            ],
          },
          displaySets: [
            {
              options: {
                voi: {
                  windowWidth: 5,
                  windowCenter: 2.5,
                },
                voiInverted: true,
              },
              id: 'ptDisplaySet',
            },
          ],
        },
        {
          viewportOptions: {
            viewportId: 'fusionAXIAL',
            viewportType: 'volume',
            orientation: 'axial',
            toolGroupId: 'fusionToolGroup',
            initialImageOptions: {
              // index: 5,
              preset: 'first', // 'first', 'last', 'middle'
            },
            syncGroups: [
              {
                type: 'cameraPosition',
                id: 'axialSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ctWLSync',
                source: false,
                target: true,
              },
              {
                type: 'voi',
                id: 'fusionWLSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ptFusionWLSync',
                source: false,
                target: true,
              },
            ],
          },
          displaySets: [
            {
              id: 'ctDisplaySet',
            },
            {
              options: {
                colormap: 'hsv',
                voi: {
                  windowWidth: 5,
                  windowCenter: 2.5,
                },
              },
              id: 'ptDisplaySet',
            },
          ],
        },
        {
          viewportOptions: {
            viewportId: 'fusionSAGITTAL',
            viewportType: 'volume',
            orientation: 'sagittal',
            toolGroupId: 'fusionToolGroup',
            // initialImageOptions: {
            //   index: 180,
            //   preset: 'middle', // 'first', 'last', 'middle'
            // },
            syncGroups: [
              {
                type: 'cameraPosition',
                id: 'sagittalSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ctWLSync',
                source: false,
                target: true,
              },
              {
                type: 'voi',
                id: 'fusionWLSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ptFusionWLSync',
                source: false,
                target: true,
              },
            ],
          },
          displaySets: [
            {
              id: 'ctDisplaySet',
            },
            {
              options: {
                colormap: 'hsv',
                voi: {
                  windowWidth: 5,
                  windowCenter: 2.5,
                },
              },
              id: 'ptDisplaySet',
            },
          ],
        },
        {
          viewportOptions: {
            viewportId: 'fusionCoronal',
            viewportType: 'volume',
            orientation: 'coronal',
            toolGroupId: 'fusionToolGroup',
            // initialImageOptions: {
            //   index: 180,
            //   preset: 'middle', // 'first', 'last', 'middle'
            // },
            syncGroups: [
              {
                type: 'cameraPosition',
                id: 'coronalSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ctWLSync',
                source: false,
                target: true,
              },
              {
                type: 'voi',
                id: 'fusionWLSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ptFusionWLSync',
                source: false,
                target: true,
              },
            ],
          },
          displaySets: [
            {
              id: 'ctDisplaySet',
            },
            {
              options: {
                colormap: 'hsv',
                voi: {
                  windowWidth: 5,
                  windowCenter: 2.5,
                },
              },
              id: 'ptDisplaySet',
            },
          ],
        },
        {
          viewportOptions: {
            viewportId: 'mipSagittal',
            viewportType: 'volume',
            orientation: 'sagittal',
            background: [1, 1, 1],
            toolGroupId: 'mipToolGroup',
            syncGroups: [
              {
                type: 'voi',
                id: 'ptWLSync',
                source: true,
                target: true,
              },
              {
                type: 'voi',
                id: 'ptFusionWLSync',
                source: true,
                target: false,
              },
            ],

            // Custom props can be used to set custom properties which extensions
            // can react on.
            customViewportProps: {
              // We use viewportDisplay to filter the viewports which are displayed
              // in mip and we set the scrollbar according to their rotation index
              // in the cornerstone extension.
              hideOverlays: true,
            },
          },
          displaySets: [
            {
              options: {
                blendMode: 'MIP',
                slabThickness: 'fullVolume',
                voi: {
                  windowWidth: 5,
                  windowCenter: 2.5,
                },
                voiInverted: true,
              },
              id: 'ptDisplaySet',
            },
          ],
        },
      ],
      createdDate: '2021-02-23T18:32:42.850Z',
    },
  ],
  numberOfPriorsReferenced: -1,
};
