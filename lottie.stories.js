import React from 'react';
import { number, boolean, color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Lottie from './lottie';

import loadingIndicator from './animations/loadingIndicator.json'
import reactAnimExample from './animations/reactAnimExample.json'

const stories = storiesOf('Lottie', module);

stories.add('Lottie animation', () => {
  const loop = boolean('loop', true);
  const directionForward = boolean('direction-forward?', true);
  const speed = number('speed', 1.2);
  const containerWidth = number('container width', 300);
  const containerBackgroundColor = color('container background color', '#000');
  
  return (
    <div style={{ background: containerBackgroundColor, width: containerWidth }}>
    <Lottie
      id={`story-book-lottie`}
      options={{
        renderer: 'svg',
        loop,
        autoplay: true,
        animationData: loadingIndicator,
        rendererSettings: {
          preserveAspectRatio: 'xMinYMin slice',
        }

      }}
      playingState="play"
      speed={speed}
      direction={directionForward ? 1 : -1}
    />
    </div>
  )
});