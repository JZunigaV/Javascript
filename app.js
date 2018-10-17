//Autor: Jesús Zuñiga Vega
//fecha: 16/10/2018




// Rover Object Goes Here
// ======================

var rover = {
  direccion : "N",
  x : 0,
  y : 0,
  travelLog : [0,0],
};
// ======================



function turnLeft(rover){
  console.log("turnLeft was called!");


  switch (rover.direccion) {
    case "N":  
    rover.direccion = "W";
    console.log("Rover is facing west!!");
      break;
  
    case "S":
    rover.direccion = "E";
    console.log("Rover is facing east!!");
    break;

    case "E":
    rover.direccion = "N";
    console.log("Rover is facing north!!");
    break;

    case "W":
    rover.direccion = "S";
    console.log("Rover is facing south!!");
    break;

    default:
    console.log("invalid command");
    break;
  }
}

function turnRight(rover){
  
  console.log("turnRight was called!");


  switch (rover.direccion) {
    case "N":  
    rover.direccion = "E";
    console.log("Rover is facing east!!");
      break;
  
    case "S":
    rover.direccion = "W";
    console.log("Rover is facing west!!");
    break;

    case "E":
    rover.direccion = "S";
    console.log("Rover is facing south!!");
    break;

    case "W":
    rover.direccion = "N";
    console.log("Rover is facing north!!");
    break;

    default:
    console.log("invalid command");
    break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");

  switch (rover.direccion) {
    
    //Eje de las Y
    case "N":
      rover.y -= 1;
      console.log("your rover's current position is " + "X: " + rover.x +  " Y: " + rover.y  );

      rover.travelLog.push(rover.x, rover.y);
      break;

    case "S":
      rover.y += 1;
      console.log("your rover's current position is " + "X: " + rover.x +  " Y: " + rover.y  );
      rover.travelLog.push(rover.x, rover.y);
      break;

    //Eje de las X
      case "W":
      rover.x -= 1;
      console.log("your rover's current position is " + "X: " + rover.x +  " Y: " + rover.y  );
      rover.travelLog.push(rover.x, rover.y);
      break;
    
      case "E":
      rover.x += 1;
      console.log("your rover's current position is " + "X: " + rover.x +  " Y: " + rover.y  );
      rover.travelLog.push(rover.x, rover.y);
      break;

      default:
      console.log("invalid command");
      break;

      console.log("travel History of your rover: " + rover.travelLog);
  }
}


    function Orders(commands){

      console.log("commands was called");
        for (var i = 0; i < commands.length; i++) {
            switch (commands[i]) {
              case "f":
              moveForward(rover);
              break;
        
              case "r":
              turnRight(rover);
              break;

              case "l":
              turnLeft(rover);
              break;

              default:
              console.log("invalid command");
              break;        
            } 
          }
          
      console.log("travel History of your rover: " + rover.travelLog);
    }

