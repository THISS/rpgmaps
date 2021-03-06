const React = require('react');
const {connect} = require('react-redux');
const CanvasImage = require('./CanvasImage.jsx');

const mapStateToProps = state => ({
  className: 'play-canvas',
  imageSmoothingEnabled: false,
  opacity: 1,
  width: state.ui.workspace.width,
  height: state.ui.workspace.height,
  buffers: [{
    imageData: state.ui.graphics.outputBuffer,
    alpha: state.ui.graphics.outputOpacity,
    scale: state.ui.workspace.scale / state.settings.output.quality,
    x: state.ui.workspace.x,
    y: state.ui.workspace.y
  }, {
    imageData: state.ui.graphics.crossfadeBuffer,
    alpha: state.ui.graphics.crossfadeOpacity,
    scale: state.ui.workspace.scale / state.settings.output.quality,
    x: state.ui.workspace.x,
    y: state.ui.workspace.y
  }]
});

module.exports = connect(mapStateToProps)(CanvasImage);
