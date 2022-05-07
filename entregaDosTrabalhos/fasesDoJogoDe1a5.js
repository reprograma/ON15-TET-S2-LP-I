//Fase 1
moveForward();
moveForward();

//Fase 2
moveForward();
moveForward();
destroyBlock();

//Fase 3
moveForward();
moveForward();
shear();
turnRight();
moveForward();
shear();

//fase 4
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

//fase 5
for (var count = 0; count < 4; count++) {
    placeBlock("planksOak");
    moveForward();
  }
  



