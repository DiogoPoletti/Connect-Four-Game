var player1 = prompt("Player One: NAME, BLUE");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player Two: NAME, RED");
var player2Color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr');

// Winner report
function reportWin(rowNum, colNum) {
    console.log("You won at this row,col");
    console.log(rowNum);
    console.log(colNum);
}

// This function will set the color of the button according to the color of the player's background
function setColor(rowIndex, colIndex, color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('backgroun-color', color);
}

// This funciton will get the current color of the button 
function getColor(rowIndex, colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// Identify and returns the bottom row that is still gray 'rgb(128, 128, 128)'
function checkBottom(colIndex) {
    var colorReport = getColor(5, colIndex);
    for (var row = 5; row > -1; row--){
        colorReport = getColor(row, colIndex);
        if (colorReport === 'rgb(128, 128, 128)') {
            return row
        }
    }
}

// Will identify and be set to true when four buttons in a row are of the same color announcing the winner
function colorMatchCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined)
}

// This function will check each button in a horizontal pattern looking for four buttons 
// in a row with the same attributes
function checkHorizontalWin() {
    for (var row = 0; row < 6; row++) {
      for (var col = 0; col < 4; col++) {
        if (colorMatchCheck(getColor(row,col), getColor(row,col+1) ,getColor(row,col+2), getColor(row,col+3))) {
          console.log('horiz');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
  }

// Checks vertically for a winner
  function checkVerticalWin() {
    for (var col = 0; col < 7; col++) {
      for (var row = 0; row < 3; row++) {
        if (colorMatchCheck(getColor(row,col), getColor(row+1,col) ,getColor(row+2,col), getColor(row+3,col))) {
          console.log('vertical');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
  }

// Checks diagonal for a winner
function checkDiagonalWin() {
    for (var col = 0; col < 5; col++) {
        for (var row = 0; row < 7; row++){
            if (colorMatchCheck(getColor(row, col), getColor(row+1, col+1), getColor(row+2, col+2), getColor(row+3, col+3))) {
                console.log('diag');
                reportWin(row, col);
                return true;
            }
            else if(colorMatchCheck(getColor(row, col), getColor(row-1, col+1), getColor(row-2, col+2), getColor(row-3, col+3)))
            {
                console.log("diag");
                reportWin(row, col);
                return true;
            }
            else {
                continue;
            }
        }
    }
}

// Finalise the game if there is a winner
function gameEnd(winningPlayer) {
    for (var col = 0; col < 7; col++){
        for (var row = 0; col < 7; row++){
            $('p').fadeOut('fast');
            $('h2').fadeOut('fast');
            $('h1').text(winningPlayer + " won! Refresh to play again!").css("fontSize" , "60px")

        }
    }
}

// Player One on the start of a new game
var cur_player = 1;
var cur_name = player1;
var cur_color = player1Color;

$('p').text(player1 + ": Your turn, pick a colum to place your blue chip.");

$('.board button').on('click', function() {
  
    // Find what column was chosen
    var col = $(this).closest("td").index();

    // Get bottom available row to be changed
    var bottomAvail = checkBottom(col);

    // Place chip at the pottom of the column
    setColor(bottomAvail, col, cur_color);

    // Check for a win or a tie in the game
    if(checkHorizontalwin() && checkVerticalWin() && checkDiagonalWin()) {
        gameEnd(cur_name);
    }


    // If no win or tie, continue to the next player
    cur_player = cur_player * -1;


    // Re-check who is the current player 1 and player 2
    if(cur_player === 1){
        cur_name = player1;
        $('p').text(cur_name + ": Your turn, pick a column to drop your blue chip.");
    }
    else{
        cur_name = player2
        $('p').text(cur_name + ": Your turn, pick a colum to drop your red chip.");
        cur_color = player2;
    }

})




