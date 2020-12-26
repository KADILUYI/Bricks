onEvent("button1", "click", function( ) {
  var totalBricks = 0;
  for (var i = 1; i <= (getNumber("bricks")); i++) {
    totalBricks = totalBricks + i;
  }
  setText("faceBricks", totalBricks);
  setText("allbricks", totalBricks * 4);
});

