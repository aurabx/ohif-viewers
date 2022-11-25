import { PanelStudyBrowserAura } from './panels';

// TODO:
// - No loading UI exists yet
// - cancel promises when component is destroyed
// - show errors in UI for thumbnails if promise fails
const getPanelModule = ({
  commandsManager,
  extensionManager,
  servicesManager,
}) => {
  return [
    {
      name: 'seriesList',
      iconName: 'group-layers',
      iconLabel: 'Studies',
      label: 'Studies',
      component: () =>
        PanelStudyBrowserAura({
          commandsManager,
          extensionManager,
          servicesManager,
        }),
    },
  ];
};

export default getPanelModule;
