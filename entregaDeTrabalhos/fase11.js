// Fase 11
for (var count = 0; count < 7; count++) {
    destroyBlock();
    ifLavaAhead(function() {
      placeBlockAhead("cobblestone");
    });
    moveForward();
  }
