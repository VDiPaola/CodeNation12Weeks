/*

The scoring for the game will look like so: 
. = dot ball, no run scored  
1, 2, 3, 4, 6 = numbers of runs made off of the ball bowled 
W = wicket taken, the facing batsman is out and no run is made 


score 1 run by hitting the ball and running to other end of the pitch (crossing with partner) }
score 2 runs by hitting the ball and running to other end of the pitch and back (crossing twice with partner) }
score 3 runs by hitting the ball and running to other end of the pitch and back and back to other end again (crossing three times with partner) }
score 4 runs by hitting the ball to the boundary. Batsmen do not change ends. }
score 6 runs by hitting the ball over the boundary. Batsmen do not change ends.

11 in a team, 2 must be on field at all times
a batsman in cricket can bat as long as he doesn’t get out—and when he’s out, he’s out for good
Switching of batting and bowling ends after every over
*/



//require file system
var fs = require('fs');
//open file called game
fs.readFile("game.txt", {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        
        let game = '';
        let players = [1,2,3,4,5,6,7,8,9,10,11];
        let score = [0,0,0,0,0,0,0,0,0,0,0];
        let sum = 0;

        //whats being saved into the file
        let toSave = "";

        game = data;
    

        function swapPlayer(){
            players = players.reverse()
            let temp = players[players.length-1]
            players.pop()
            players = players.reverse()
            return temp
        }

        let player1 = swapPlayer()
        let player2 = swapPlayer()

        let current = 1;

        arr = game.split('')

        var count;

        for(var i=0;i<arr.length;i++){
            if(arr[i].toLowerCase() == 'w' && players.length > 0){
                if(current == 1){
                    if(arr[i-1].toLowerCase() == 'w'){
                        score[player1 - 1] = '-'
                    }
                    player1 = swapPlayer()
                }else{
                    if(arr[i -1].toLowerCase() == 'w'){
                        score[player2 - 1] = '-'
                    }
                    player2 = swapPlayer()
                }
            }else if (arr[i] == '.'){

            }else if(arr[i] == Number(arr[i])){
                if(arr[i] % 2 !== 0){
                    if (current == 1){
                        current = 2
                        score[player1 -1] += Number(arr[i])


                    }else{
                        current = 1
                        score[player2 -1] += Number(arr[i])
                    }
                }else{
                    if (current == 1){
                        score[player1 -1] += Number(arr[i])


                    }else{
                        score[player2 -1] += Number(arr[i])
                    }
                
                }
                sum += Number(arr[i])
            }

            
        }

        for(i=0;i<score.length;i++){
            toSave += ('player ' +i +"'s score is " +score[i] + "\n")
        }
        toSave += ('Total: ' +sum +'\ntotal divided by 2: ' +sum/2)

        //write to score file toSave variable
        fs.writeFile("score.txt", toSave, function(err) {
            if(!err) {
                console.log("file saved")
            }else{
                console.log(err);
            }
        }); 

    } else {
        console.log(err);
    }

    });