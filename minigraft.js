1-
  moveForward();
  moveForward();
2-
  moveForward();
  moveForward();
  destroyBlock();
3-
  moveForward();
  moveForward();
  shear();
  turnRight();
  moveForward();
  shear();
4-
  moveForward();
  moveForward();
  moveForward();
  destroyBlock();
  turnLeft();
  moveForward();
  moveForward();
  moveForward();
  destroyBlock();
  turnLeft();
5-
for (var count = 0; count < 4; count++) {
  placeBlock("planksBirch");
  moveForward();
}
6-
for (var count = 0; count < 3; count++) {
    moveForward();
    placeBlock("planksBirch");
  }
  turnRight();
  for (var count2 = 0; count2 < 3; count2++) {
    moveForward();
    placeBlock("planksBirch");
  }
  turnRight();
7-
  for (var count = 0; count < 6; count++) {
    plantCrop();
    moveForward();
  }
  turnRight();
  moveForward();
  moveForward();
  turnRight();
  for (var count2 = 0; count2 < 6; count2++) {
    plantCrop();
8-
  for (var count = 0; count < 4; count++) {
    moveForward();
  }
  turnLeft();
  for (var count2 = 0; count2 < 4; count2++) {
    moveForward();
  }
  turnLeft();
  for (var count3 = 0; count3 < 2; count3++) {
    moveForward();
9-
  placeTorch();
  turnLeft();
  destroyBlock();
  moveForward();
  destroyBlock();
  turnLeft();
  placeTorch();
10-
    moveForward();
  placeBlockAhead("stone");
  moveForward();
  moveForward();
  for (var count = 0; count < 2; count++) {
    destroyBlock();
    moveForward();
}
