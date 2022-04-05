//Fase 6
for (var count = 0; count < 3; count++) {
    moveForward();
    placeBlock("planksOak");
  }
  turnRight();
  for (var count2 = 0; count2 < 3; count2++) {
    moveForward();
    placeBlock("planksOak");
  }
  turnRight();
  for (var count3 = 0; count3 < 2; count3++) {
    moveForward();
    placeBlock("planksOak");
  }


  //Fase 7
  for (var count = 0; count < 6; count++) {
    plantCrop();
    moveForward();
  }
  turnRight();
  for (var count2 = 0; count2 < 2; count2++) {
    moveForward();
  }
  turnRight();
  for (var count3 = 0; count3 < 6; count3++) {
    moveForward();
    plantCrop();
  }

  //Fase 8 
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
  }

  //Fase 9 
  turnLeft();
destroyBlock();
placeTorch();
moveForward();
destroyBlock();
placeTorch();

//Fase 10
moveForward();
placeBlockAhead("planksOak");
for (var count = 0; count < 2; count++) {
  moveForward();
}
destroyBlock();
moveForward();
destroyBlock();
