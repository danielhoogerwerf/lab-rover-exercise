// Rover Object Goes Here
// ======================
const Rover = {
  direction: 'N',
  x: 0,
  y: 0,
  obstacles: [{x:1,y:9},{x:2,y:4},{x:3,y:7},{x:7,y:8}],
  travelLog: [{x:0,y:0}] 
};

// ======================
function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}


function turnLeft(rover){
  //console.log("turnLeft was called");
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      console.log(`currently facing: ${rover.direction}`);
      break;
    case 'W':
      rover.direction = 'S';
      console.log(`currently facing: ${rover.direction}`);
      break;  
    case 'S':
      rover.direction = 'E';
      console.log(`currently facing: ${rover.direction}`);
      break; 
    case 'E':
      rover.direction = 'N';
      console.log(`currently facing: ${rover.direction}`);
      break; 
  }
  rover.travelLog.push({x: rover.x, y: rover.y}); 
}

function turnRight(rover){
  //console.log("turnRight was called");
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      console.log(`currently facing: ${rover.direction}`);
      break;
    case 'E':
      rover.direction = 'S';
      console.log(`currently facing: ${rover.direction}`);
      break;  
    case 'S':
      rover.direction = 'W';
      console.log(`currently facing: ${rover.direction}`);
      break; 
    case 'W':
      rover.direction = 'N';
      console.log(`currently facing: ${rover.direction}`);
      break; 
  }
  rover.travelLog.push({x: rover.x, y: rover.y}); 
}

function moveForward(rover){
  //console.log("moveForward was called");
  for (let i = 0; i < rover.obstacles.length; i++) {
    if (rover.obstacles[i].x === rover.x && rover.obstacles[i].y === rover.y) {
      console.log('Obstacle detected! Cannot move forward.');
      rover.y--;
      return;
    }
  }
  switch (rover.direction) {
    case 'N':
      if (rover.y === 0) {
        console.log('Rover cannot move outside the grid!');
        break;
      } else {
        rover.y--;
        console.log(`The current position is: ${rover.x}, ${rover.y}`);
        break;
      }
    case 'E':
      if (rover.x === 10) {
        console.log('Rover cannot move outside the grid!');
        break;
      } else {
        rover.x++;
        console.log(`The current position is: ${rover.x}, ${rover.y}`);
        break;
      }
    case 'S':
      if (rover.y === 10) {
        console.log('Rover cannot move outside the grid!');
        break;
      } else {
        rover.y++;
        console.log(`The current position is: ${rover.x}, ${rover.y}`);
        break; 
      }
    case 'W':
      if (rover.x === 0) {
        console.log('Rover cannot move outside the grid!');
        break;
      } else {
        rover.x--;
        console.log(`The current position is: ${rover.x}, ${rover.y}`);
        break; 
      }
  }
  rover.travelLog.push({x: rover.x, y: rover.y}); 
}

function moveBackward(rover){
  //console.log("moveBackward was called");
  for (let i = 0; i < rover.obstacles.length; i++) {
    if (rover.obstacles[i].x === rover.x && rover.obstacles[i].y === rover.y) {
      console.log('Obstacle detected! Cannot move forward.');
      rover.y++;
      return;
    }
  }
  switch (rover.direction) {
    case 'N':
      if (rover.y === 10) {
        console.log('Rover cannot move outside the grid!');
        break;
      } else {
        rover.y++;
        console.log(`The current position is: ${rover.x}, ${rover.y}`);
        break;
      }
    case 'E':
      if (rover.x === 0) {
        console.log('Rover cannot move outside the grid!');
        break;
      } else {
        rover.x--;
        console.log(`The current position is: ${rover.x}, ${rover.y}`);
        break;
      }
    case 'S':
      if (rover.y === 0) {
        console.log('Rover cannot move outside the grid!');
        break;
      } else {
        rover.y--;
        console.log(`The current position is: ${rover.x}, ${rover.y}`);
        break; 
      }
    case 'W':
      if (rover.x === 10) {
        console.log('Rover cannot move outside the grid!');
        break;
      } else {
        rover.x++;
        console.log(`The current position is: ${rover.x}, ${rover.y}`);
        break; 
      }
  }
  rover.travelLog.push({x: rover.x, y: rover.y}); 
}

function commandRover(rover, commands) {
  for (let i = 0; i < commands.length; i++) {
    switch(commands[i]) {
      case 'f':
        moveForward(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'b':
        moveBackward(rover);
        break;
      default:
        console.log('Command not supported');
    }
  }

  for (let i = 0; i < rover.travelLog.length; i++) {
    console.log(`Travel sequence: ${i} => Position: ${rover.travelLog[i].x}, ${rover.travelLog[i].y} `)
  }
}

//console.log(`Starting direction: ${Rover.direction}. Position: ${Rover.x}, ${Rover.y}`);

commandRover(Rover, 'rffrff');

console.log(`Final facing: ${Rover.direction}. Position: ${Rover.x}, ${Rover.y}`);


