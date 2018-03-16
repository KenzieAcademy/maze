const mazeDiv = document.getElementById("mazeDiv");
const avatar = document.getElementById("avatar");
const youWonDiv = document.getElementById("youWonDiv")

// Size of the squares in the grid, in pixels.
const delta = 33;

// Coordinates of the player's avatar.
let avatarRow
let avatarCol;

// Initial scan of the map.
// Create all the visual elements (divs).
// The static parts of the map will be a grid of flex positioned divs.
// They will get created here, and never modified again.
// The moving player will be an absolutely positioned div on top.
for(let row = 0; row < map.length; row++) {
    const rowStr = map[row];
    const rowDiv = document.createElement("div");

    rowDiv.className = "row";
    
    for(let i = 0; i < rowStr.length; i++) {
        let cellClass = rowStr[i];
        const cellDiv = document.createElement("div");

        cellDiv.className = "cell " + cellClass;

        if(cellClass === "S") {
            avatarCol = i;
            avatarRow = row;
        }

        if(cellClass === "S" || cellClass === "F") {
            cellDiv.innerHTML = cellClass;
        }

        rowDiv.appendChild(cellDiv);
    }

    mazeDiv.appendChild(rowDiv);
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
    // START HERE -------------------------------------------------------------/
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
        avatarRow += dRow;
        avatarCol += dCol;
        redrawAvatar();
    }

    checkForWin();
    // Move on to STEP 2
}

function checkForWin() {
    if(map[avatarRow][avatarCol] === "F") {
        youWonDiv.classList.remove("hidden");
        const audio = new Audio('wow.mp3');
        audio.play();
    }
}

document.addEventListener('keydown', (event) => {
    // STEP 2 -----------------------------------------------------------------/
    
    // "move" takes 2 arguments: a row offset, and a column offset.  For example
    // move(1, 0) would move the player 1 square down and 0 squares to the
    // right.

    // Write some logic to check the value of "event.key" and call "move()"
    // with the proper arguments.
});

youWonDiv.addEventListener("click", () => location.reload());
