// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('BGSlideshow', {
      photos: [
        // { uri: './static_assets/360_world.jpg', title: '360 World', format: '2D' },
        { uri: './static_assets/flys-eye--bw.jpg', title: "Fly's Eye", format: '2D' },
        { uri: './static_assets/patio-1--bw.jpg', title: 'Patio #1', format: '2D' },
        { uri: './static_assets/patio-2--bw.jpg', title: 'Patio #2', format: '2D' },
        { uri: './static_assets/spider--bw.jpg', title: 'Big Spider', format: '2D' }
        // Add your own 180 / 360 photos to this array,
        // with an associated title and format
      ]
    }),
    r360.getDefaultSurface()
  );
}

window.React360 = { init };
