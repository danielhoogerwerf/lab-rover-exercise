// Rover object goes here
const Rover = {
  direction: 'N',
  x: 0,
  y: 0,
  obstacles: [{x:1,y:9},{x:2,y:4},{x:3,y:7},{x:7,y:8}],
  travelLog: [{x:0,y:0}] 
};

// FUNCTION DEFINITIONS
// ====================
function turnLeft(rover){
  // Function where the rover instance will turn left, depending on the 
  // current 'direction'.
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
  // Update the travelLog parameter with the current change.
  rover.travelLog.push({x: rover.x, y: rover.y}); 
}

function turnRight(rover){
  // Function where the rover instance will turn right, depending on the 
  // current 'direction'.
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
  // Update the travelLog parameter with the current change.
  rover.travelLog.push({x: rover.x, y: rover.y}); 
}

function moveForward(rover){
  // Move the rover instance forward, depending on the current direction.
  // First check for any 'obstacles' configured in the rover 'obstacle' parameter.
  for (let i = 0; i < rover.obstacles.length; i++) {
    if (rover.obstacles[i].x === rover.x && rover.obstacles[i].y === rover.y) {
      console.log('Obstacle detected! Cannot move forward.');
      rover.y--;
      return;
    }
  }
  // Check direction and position and only move if the rover does not move of the grid
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
  // Update the travelLog parameter with the current change.
  rover.travelLog.push({x: rover.x, y: rover.y}); 
}

function moveBackward(rover){
  // Move the rover instance backward, depending on the current direction.
  // First check for any 'obstacles' configured in the rover 'obstacle' parameter.
  for (let i = 0; i < rover.obstacles.length; i++) {
    if (rover.obstacles[i].x === rover.x && rover.obstacles[i].y === rover.y) {
      console.log('Obstacle detected! Cannot move forward.');
      rover.y++;
      return;
    }
  }
  // Check direction and position and only move if the rover does not move of the grid
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
  // Update the travelLog parameter with the current change.
  rover.travelLog.push({x: rover.x, y: rover.y}); 
}

function commandRover(rover, commands) {
  // Slice the commands string and call connected function.
  // If the command is not defined, then say so.
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

  // Loop over and display the rover.travelLog contents at the end of the script
  for (let i = 0; i < rover.travelLog.length; i++) {
    console.log(`Travel sequence: ${i} => Position: ${rover.travelLog[i].x}, ${rover.travelLog[i].y}`)
  }
}

// MAIN PROGRAM
// ============
// Create a rover instance and execute specified commands
commandRover(Rover, 'rffrff');

// Provide a final overview of the current state.
console.log(`Final direction: ${Rover.direction}. Position: ${Rover.x}, ${Rover.y}`);


