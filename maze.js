const mazeDiv = document.getElementById("mazeDiv");
const avatar = document.getElementById("avatar");
const youWonDiv = document.getElementById("youWonDiv")

// Size of the squares in the grid, in pixels.
const delta = 33;

// Coordinates of the player's avatar.
let avatarRow
let avatarCol;

for(let row = 0; row < map.length; row++) {
    const rowStr = map[row];
    const rowDiv = document.createElement("div");

    rowDiv.className = "row";

    // START HERE -------------------------------------------------------------/
    // There are currently two things missing from this for loop:
    // - First, we do not mark the start and finish positions with an "S" and an
    //   "F", respectively. Write a conditional below that checks for these two
    //   cases and adds their respective text to the cell. If done properly, you
    //   should see an "S" at the maze's entrance, and an "F" at the maze's
    //   exit.
    // - Second, Chok doesn't start where he is supposed to. Write a conditional
    //   that checks for an "S" in the map and moves Chok there. You can move
    //   him by updating the "avatarRow" and "avatarCol" variables accordingly.
    //   If done properly, you should see "Chok" drawn above the "S" that you
    //   inserted earlier.
    
    for(let i = 0; i < rowStr.length; i++) {
        let cellClass = rowStr[i];
        const cellDiv = document.createElement("div");

        cellDiv.className = "cell " + cellClass;

        rowDiv.appendChild(cellDiv);
    }

    mazeDiv.appendChild(rowDiv);

    // Move on to STEP 2
}

// Update the coordinates of the player's avatar.
// Add a class indicating which animation to show.
// Set a timeout to remove the animation class after the animation completes.
function redrawAvatar() {
    avatar.className = "";
    avatar.style.top = avatarRow*delta + "px";
    avatar.style.left = avatarCol*delta + "px";
}

// Move the player's avatar in the specified direction
// dRow is the desired change in row (-1, 0, or +1)
// dCol is the desired change in column (-1, 0, or +1)
function move(dRow, dCol) {
    // STEP 2 -----------------------------------------------------------------/
    // "avatarRow" and "avatarCol" are the current row and column the player is
    // on.  The way this function should work is that "dRow" is used to
    // determine how many rows to move the player, and "dCol" is used to
    // determine how many columns to move the player.

    // Using avatarRow and dRow, compute destRow (where the player should move
    // vertically). You'll need to replace "undefined" to do so.
    const destRow = undefined; 
    // Using avatarCOl and dCol, compute destCol (where the player should move
    // vertically). You'll need to replace "undefined" to do so.
    const destCol = undefined;
    const destCell = map[destRow][destCol];

    // Check that it is within the bounds of the map, and not a wall.
    if(destCell && destCell !== "W") {
        // Now that you know the player's destination, you need to actually
        // update "avatarRow" and "avatarCol". Add statements to update those
        // two variables below, before "redrawAvatar()".
        redrawAvatar();
    }

    checkForWin();
    // Move on to STEP 3
}

function checkForWin() {
    if(map[avatarRow][avatarCol] === "F") {
        youWonDiv.classList.remove("hidden");
        const audio = new Audio('wow.mp3');
        audio.play();
    }
}

document.addEventListener('keydown', (event) => {
    // STEP 3 -----------------------------------------------------------------/
    
    // "move" takes 2 arguments: a row offset, and a column offset.  For example
    // move(1, 0) would move the player 1 square down and 0 squares to the
    // right.

    // Write some logic to check the value of "event.key" and call "move()"
    // with the proper arguments.
});

youWonDiv.addEventListener("click", () => location.reload());
