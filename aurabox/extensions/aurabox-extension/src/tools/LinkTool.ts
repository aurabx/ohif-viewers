import {
  getEnabledElement,
  VolumeViewport,
  StackViewport,
} from '@cornerstonejs/core';
import { BaseTool } from '@cornerstonejs/tools/dist/esm';
import { scrollVolume } from '@cornerstonejs/tools/dist/esm/utilities/scroll';
class LinkTool extends BaseTool {
  constructor(
    toolProps = {},
    defaultToolProps = {
      supportedInteractionTypes: ['Mouse', 'Touch'],
      configuration: {
        invert: false,
        debounceIfNotLoaded: true,
      },
    }
  ) {
    super(toolProps, defaultToolProps);
  }
  mouseWheelCallback(evt) {
    const { wheel, element } = evt.detail;
    const { direction } = wheel;
    const { invert } = this.configuration;
    const { viewport } = getEnabledElement(element);
    const delta = direction * (invert ? -1 : 1);
    if (viewport instanceof StackViewport) {
      viewport.scroll(delta, this.configuration.debounceIfNotLoaded);
    } else if (viewport instanceof VolumeViewport) {
      const targetId = this.getTargetId(viewport);
      const volumeId = targetId.split('volumeId:')[1];
      scrollVolume(viewport, volumeId, delta);
    } else {
      throw new Error('LinkTool: Unsupported viewport type');
    }
  }
}
LinkTool.toolName = 'Link';
export default LinkTool;
