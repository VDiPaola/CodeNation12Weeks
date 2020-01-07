
let dataCache = null;


//GENERATOR
function  generateSudoku(){
    let difficulty = document.getElementById('difficulty');
    difficulty = difficulty.options[difficulty.selectedIndex].value;
    console.log("difficulty: " + difficulty)
    $.get(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`,function( data ){
      $( '.result').html( data )
      console.log('success')
      console.log(data)
      let iterations = Object.keys(data.board);
      let tempArr = "[";
      //save to cache in right format
      for(let i=0;i< iterations.length;i++){
          tempArr+="[";
        tempArr += data.board[iterations[i]].join(",");
        tempArr+="]";
        if(i+1 < iterations.length){tempArr += ","}
      }
      tempArr += "]";

      console.log(tempArr)
      dataCache = tempArr;

      

      drawBoxes(data.board);


    }).done(()=>{
      console.log('success')
    }).fail(()=> {
      console.log('err')
    })
  }
/*

var data = {
  board: "[[0,0,1,0,0,0,0,0,0],
          [2,0,0,0,0,0,0,7,0],
          [0,7,0,0,0,0,0,0,0],
          [1,0,0,4,0,6,0,0,7],
          [0,0,0,0,0,0,0,0,0],
          [0,0,0,0,1,2,5,4,6],
          [3,0,2,7,6,0,9,8,0],
          [0,6,4,9,0,3,0,0,1],
          [9,8,0,5,2,1,0,6,0]]"
}

*/

  //SOLVER
  function solveSudoku(){
      if(dataCache != null){
        const data = {board: dataCache}
        console.log(data)

        $.post('https://sugoku.herokuapp.com/solve', data)
        .done(function (response) {
            console.log(response)  
            //draw solution
            drawBoxes(response.solution);
      
        });

     }
     
 
}


function drawBoxes(data){
          //create HTML to represent puzzle
          let iterations = Object.keys(data);
          let finalHTML = '';
          for(let i=0;i< iterations.length;i++){
            let template = "<div class='sodukuBox'>NUMBERS</div>";
            let numberTemplate = "<p><input value='NUMBER'></input></p>";
            let numbers = '';
            for(let x=0;x<data[iterations[i]].length;x++){
                numbers += numberTemplate.replace("NUMBER", data[iterations[i]][x]);
            }
            template = template.replace("NUMBERS", numbers)
            finalHTML += template;
          }
          //clear div then write to it
          document.getElementById('sudukuContainer').innerHTML = '';
          document.getElementById('sudukuContainer').innerHTML += finalHTML;
    
}


function empty(){
  //creates empty grid
            //create HTML to represent puzzle
            let iterations = 9;
            let finalHTML = '';
            for(let i=0;i< iterations;i++){
              let template = "<div class='sodukuBox'>NUMBERS</div>";
              let numberTemplate = "<p><input value='NUMBER'></input></p>";
              let numbers = '';
              for(let x=0;x<iterations;x++){
                  numbers += numberTemplate.replace("NUMBER", '');
              }
              template = template.replace("NUMBERS", numbers)
              finalHTML += template;
            }
            document.getElementById('sudukuContainer').innerHTML = finalHTML;
      
}