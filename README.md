![Header Image](https://github.com/DiogoPoletti/Connect-Four-Game/blob/main/Documentation/HeaderImage2.png)

# Connect Four Game
## Description
This is a Game that uses the FullStack knowledge on CSS, HTML, JavaScript and DOM to create a intuitive and responsive game. The objective of this game is to score 4 dots with the 
same color in a row from any direction. It is multiplayer with maximum 2 players per match.

## Screenshot
![Game Running](https://github.com/DiogoPoletti/Connect-Four-Game/blob/main/Documentation/GameRunning.gif)

## What have I learnt
Creating this game enabled me to practice a few aspects:
* Get familiar with DOM methods and funcitons.
* Engage multiple laguages in a project.
* Get familiar with conditions and loops.
* Strenghten knowledge in jQuery.

## Code highlight
In order to check diagonally, this block of code was needed as previously the only way to check if there was a winner was by using vertical column checker or horizotal row checker.
This implementation had major impact of how the game operates enabling a new win condition.

```
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
```


> This is a companion project to Python 3.8 Full Stack Masterclass, check out the full course at www.udemy.com


![Footer Image](https://github.com/DiogoPoletti/Connect-Four-Game/blob/main/Documentation/FooterImage.png)
