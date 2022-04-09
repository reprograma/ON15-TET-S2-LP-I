startsGame();
choose(Jen);
level1{
    moveForward();
    moveForward();
}

level2{
    moveForward();
    moveForward();
    destroyBlock();
}

level3{
    moveForward();
    moveForward();
    shear();
    turnRight();
    moveForward();
    shear();
}

level4{
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
    moveForward();
    moveForward();
    moveForward();
    destroyBlock();
}

level5{
    for (var count = 0; count < 4; count++) {
        placeBlock("planksBirch");
        moveForward();
      }
}

level6{
    chooseFloor(hard);
    for (var count = 0; count < 2; count++) {
        moveForward();
        placeBlock("planksBirch");
      }
      turnLeft();
      moveForward();
      placeBlock("planksBirch");
      turnRight();
      for (var count2 = 0; count2 < 2; count2++) {
        moveForward();
        placeBlock("planksBirch");
      }
      turnRight();
      for (var count3 = 0; count3 < 3; count3++) {
        moveForward();
        placeBlock("planksBirch");
      }
      moveForward();
      turnRight();
      for (var count4 = 0; count4 < 3; count4++) {
        moveForward();
        placeBlock("planksBirch");
      }
      
}

level7{
    for (var count = 0; count < 6; count++) {
        plantCrop();
        moveForward();
      }
      turnRight();
      for (var count2 = 0; count2 < 2; count2++) {
        moveForward();
      }
      turnRight();
      for (var count3 = 0; count3 < 7; count3++) {
        plantCrop();
        moveForward();
      }
      
}

level8{
        turnLeft();
    for (var count = 0; count < 3; count++) {
    moveForward();
    }
    turnRight();
    moveForward();
    turnLeft();
    moveForward();
    turnRight();
    moveForward();
}

level9{
    for (var count = 0; count < 3; count++) {
        moveForward();
      }
      turnRight();
      moveForward();
      placeTorch();
      turnLeft();
      for (var count2 = 0; count2 < 3; count2++) {
        turnLeft();
        moveForward();
        turnRight();
        destroyBlock();
      }
      turnLeft();
      for (var count3 = 0; count3 < 2; count3++) {
        moveForward();
      }
      placeTorch();
      
}

level10{
     moveForward();
    placeBlockAhead("cobblestone");
    for (var count = 0; count < 2; count++) {
    moveForward();
    }
    for (var count2 = 0; count2 < 2; count2++) {
    destroyBlock();
    moveForward();
    }

}

level11{
    for (var count = 0; count < 7; count++) {
        destroyBlock();
        ifLavaAhead(function() {
          placeBlockAhead("cobblestone");
        });
        moveForward();
      }
}

level12{
    for (var count = 0; count < 2; count++) {
        moveForward();
      }
      destroyBlock();
      ifLavaAhead(function() {
        placeBlockAhead("cobblestone");
      });
      moveForward();
      turnLeft();
      for (var count2 = 0; count2 < 2; count2++) {
        moveForward();
      }
      destroyBlock();
      moveForward();
      turnRight();
      destroyBlock();
      
}

level13{
    turnRight();
    for (var count = 0; count < 6; count++) {
    placeBlock("rail");
    moveForward();
    }
    turnRight();
    for (var count2 = 0; count2 < 6; count2++) {
    placeBlock("rail");
    moveForward();
    }
}

