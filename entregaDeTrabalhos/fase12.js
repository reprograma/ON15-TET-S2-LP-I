// Fase 12
turnLeft();
for (var count = 0; count < 2; count++) {
ifLavaAhead(function() {
  placeBlockAhead("planksSpruce");
  moveForward();
});
}
destroyBlock();
moveForward();
turnRight();
for (var count2 = 0; count2 < 2; count2++) {
moveForward();
}
destroyBlock();
moveForward();
destroyBlock();
