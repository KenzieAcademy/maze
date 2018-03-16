const mazeDiv = document.getElementById("mazeDiv");
const avatar = document.getElementById("avatar");
const youWonDiv = document.getElementById("youWonDiv")

// Size of the squares in the grid, in pixels.
const delta = 33;

// Coordinates of the player's avatar.
let avatarRow
let avatarCol;

// START HERE -----------------------------------------------------------------/

// Using the map in map.js, create a mazze game. "W" represents walls, "S"
// represents the player's starting postion, and "F" represents the maze finish
// position. Consult maze.css for hints at what classes/ids to give various
// elements. 
//
// For instance, the player should have an id of "avatar". Don't
// forget that you can use more than one class. For instance, all squares within
// the maze itself can have a class of "cell" so that they are the right size,
// but walls will have an additional "W" class to ensure they player cannot walk
// through them. 
//
// In plain HTML, that would look like this:
//      <div class="cell W"></div>
//
// Move on to STEP 2.


function move(dRow, dCol) {
    // STEP 2 -----------------------------------------------------------------/
    // Complete this move function. "dRow" (destination row) and "dCol"
    // (destination column) should be used as offsets to calculate the player's
    // (avatar) next position. 
    //
    // In doing so, you also need to determine if the
    // player is actually able to move where she wants to be checking that
    // destination on the map. That is, a player can't move to a "W", because
    // that represents a wall. 
    //
    // Once you've moved the player (if they can), you'll need to redraw them
    // and see if the player won the game. We've provided two helper functions
    // below to assist with this 
    //
    // Move on to STEP 3
}

// Call this function to update the position of the player on the screen once
// you've already updated "avatarRow" and "avatarCol".
function redrawAvatar() {
    avatar.className = "";
    avatar.style.top = avatarRow*delta + "px";
    avatar.style.left = avatarCol*delta + "px";
}

// Call this function after you move a player to determine if the "You won"
// modal should show up or not.
function checkForWin() {
    if(map[avatarRow][avatarCol] === "F") {
        youWonDiv.classList.remove("hidden");
        const audio = new Audio('wow.mp3');
        audio.play();
    }
}

document.addEventListener('keydown', (event) => {
    // STEP 3 -----------------------------------------------------------------/
    // Write some logic to move the playe based on which arrow key they pressed.
});

youWonDiv.addEventListener("click", () => location.reload());
