//Fase 11
for (var count = 0; count < 7; count++) {
    destroyBlock();
    ifLavaAhead(function() {
      placeBlockAhead("cobblestone");
    });
    moveForward();
  }

  //Fase 12
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

//Fase 13
turnRight();
for (var count = 0; count < 6; count++) {
  placeBlock("rail");
  moveForward();
}
placeBlock("rail");
turnRight();
for (var count2 = 0; count2 < 6; count2++) {
  placeBlock("rail");
  moveForward();
}


//Fase 14
for (var count = 0; count < 3; count++) {
    moveForward();
  }
  turnRight();
  destroyBlock();
  turnRight();
  for (var count2 = 0; count2 < 6; count2++) {
    moveForward();
  }
  turnLeft();
  moveForward();
  destroyBlock();
  turnRight();
  moveForward();
  turnRight();
  moveForward();
  for (var count3 = 0; count3 < 5; count3++) {
    ifBlockAhead("water", function() {
      placeBlockAhead("bedrock");
      moveForward();
    });
  }
  for (var count4 = 0; count4 < 3; count4++) {
    moveForward();
  }
  shear();
  turnLeft();
  moveForward();
  turnLeft();
  shear();
  turnRight();
  moveForward();
  shear();
  turnRight();
  moveForward();
  moveForward();
  turnLeft();
  moveForward();
  shear();
  turnLeft();
  moveForward();
  turnRight();
  moveForward();
  turnLeft();
  for (var count5 = 0; count5 < 2; count5++) {
    moveForward();
  }
  shear();
// link da fase 14 - https://studio.code.org/c/1619380481 