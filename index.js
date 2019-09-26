$(function() {
  createRedFlag();

  // 红旗
  function createRedFlag() {
    for (let index = 0; index < 160; index ++) {
      let redLine = document.createElement('div');
      redLine.className = 'line';
      redLine.style =
          'left: ' +
        index * 0.1 +
          'em; --delay: calc(-' +
        (16 - 0.1 * index) +
          's);';
      document.getElementById('redFlag').appendChild(redLine);
    }
  }
})
