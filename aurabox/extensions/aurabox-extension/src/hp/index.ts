import hpVolume from './hpVolume';
import hpDefault from './hpDefault';
import hpShow from './hpShow';

function getHangingProtocolModule() {
  return [
    {
      id: hpVolume.id,
      protocol: hpVolume,
    },
    {
      id: hpShow.id,
      protocol: hpShow,
    },
  ];
}

export default getHangingProtocolModule;
