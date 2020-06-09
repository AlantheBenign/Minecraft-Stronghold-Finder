function makeArr(startValue, stopValue, cardinality) {
  var arr = [];
  var step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    arr.push(startValue + (step * i));
  }
  return arr;
}

function hitCircle(pX,pZ,angle){
	var xHit,yHit
  var xST, yST
	cos = Math.cos(angle*Math.PI/180);
	if (cos >= 0){
    var y = [];
    x = makeArr(pX-10, 2700,2700);
    a = Math.tan(angle*Math.PI/180);
    b = pZ - pX * a;
    for (i = 0; i < 2700; i++) {
      y.push(x[i] * a + b);
    }
    for (i = 0; i < 2700; i++) {
      if (x[i]*x[i] + y[i]*y[i] >= 1408*1408){
                xHit = x[i];
                yHit = y[i];
                break;
      }
    }
    pos1 = [xHit,yHit];
    var y2 = []
    x2 = makeArr(xHit, xHit+100,500);
    a2 = -1/Math.tan(angle*Math.PI/180)
    b2 = yHit - xHit * a2
    for (i = 0; i < 500; i++) {
      y2.push(x2[i] * a2 + b2);
    }
    for (i = 0; i < 500; i++) {
      if (Math.abs(x2[i] - xHit)**2 + Math.abs(y2[i] - yHit)**2 >= 42*42){
                xST = x2[i];
                yST = y2[i];
                break;
      }
    }
    pos2 = [xST,yST];
  }
  else {
    var y = [];
    x = makeArr(pX+10,-2700,2700);
    a = Math.tan(angle*Math.PI/180);
    b = pZ - pX * a;
    for (i = 0; i < 2700; i++) {
      y.push(x[i] * a + b);
    }
    for (i = 0; i < 2700; i++) {
      if (x[i]*x[i] + y[i]*y[i] >= 1408*1408){
                xHit = x[i];
                yHit = y[i];
                break;
      }
    }
    pos1 = [xHit,yHit];
    var y2 = []
    x2 = makeArr(xHit, xHit+100,500);
    a2 = -1/Math.tan(angle*Math.PI/180)
    b2 = yHit - xHit * a2
    for (i = 0; i < 500; i++) {
      y2.push(x2[i] * a2 + b2);
    }
    for (i = 0; i < 500; i++) {
      if (Math.abs(x2[i] - xHit)**2 + Math.abs(y2[i] - yHit)**2 >= 42*42){
                xST = x2[i];
                yST = y2[i];
                break;
      }
    }
    pos2 = [xST,yST];
  }
  return [pos1,pos2]
}

function StrongholdCoords(){
    var f3c0 = "/execute in minecraft:overworld run tp @s 158.49 71.00 -306.67 -540.90 10.50";
    f3c0 = f3c0.slice(42);
    f3c0 = f3c0.split(" ");
    //console.log(f3c0) ;
    px0 = Number(f3c0[0]);
    pz0 = Number(f3c0[2]);
    angle0 = Number(f3c0[3])%360;

    if (angle0 >= 0){
        angle0 = (angle0+90)%360;
    }
    else{
        angle0 = (angle0-270)%360;
    }

    distOrigin = Math.sqrt(px0*px0 + pz0*pz0);
    //console.log("You're this far from the Origin: ", distOrigin)

    if (distOrigin >= 1400){
      console.log("Move 27 blocks perpendicularly to the Ender Eye flight direction and throw the second one. (4 seconds sprinting)");
    }
    else{
      [circlePoint, secThrowPoint] = hitCircle(px0,pz0,angle0)
      console.log("Go to: ", secThrowPoint) //\nCircle starts at: ", circlePoint);
    }

    var f3c1 = "/execute in minecraft:overworld run tp @s 140.49 71.00 -1429.67 -2.90 10.50";
    f3c1 = f3c1.slice(42);
    f3c1 = f3c1.split(" ");
    //console.log(f3c1) 
    px1 = Number(f3c1[0]);
    pz1 = Number(f3c1[2]);
    angle1 = Number(f3c1[3])%360;

    if (angle1 >= 0){
      angle1 = (angle1+90)%360;
    }
    else{
      angle1 = (angle1-270)%360;
    }

    a0 = Math.tan(angle0*Math.PI/180);
    a1 = Math.tan(angle1*Math.PI/180);
    b0 = pz0 - px0 * a0;
    b1 = pz1 - px1 * a1;
    pxS = (b1 - b0)/(a0 - a1);
    pzS = pxS * a0 + b0;

    console.log("Go to: ", [pxS, pzS], "\nGOOD LUCK :D")

}
