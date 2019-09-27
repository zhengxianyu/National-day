$(function() {
  function numberRandom(max, min) {
    var num = ( Math.random() * ( max - min ) + min ).toFixed( 2 )
    return num;
  }

  createRedFlag();
  createInsideWall();

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

  // 内墙
  function createInsideWall() {
    for (let index = 0; index < 5; index ++) {
      let wallBlock = document.createElement('div');
      wallBlock.className = 'wall-block';
      wallBlock.style = 'left: ' + 1.3 * index + 'vw;';

      let wallColumn = document.createElement('div');
      wallColumn.className = 'wall-column';
      wallColumn.style = 'left: ' + (1 + 1.3 * index) + 'vw;';

      document.getElementById('rightInsideWall').appendChild(wallBlock);
      document.getElementById('rightInsideWall').appendChild(wallColumn);
    }
  }
})
