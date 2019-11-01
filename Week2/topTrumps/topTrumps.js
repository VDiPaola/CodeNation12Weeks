/*
    code for getting all cards and attributes

    console.log(cards[0]);
    let a = Object.keys(cards)
    console.log(a[0])

    let b = cards[a[0]];
    let c = Object.keys(b)
    console.log(c[0])
*/

//topics / cardsl
let dinosaurs = {
  "Archaeopteryx": {
  
      "Height": 0.3,
      "Weight": 6,
      "Length": 0.3,
      "KillerRating": 6,
      "Intelligence": 5,
      "Age": 150
  
  },
  
  "Barosaurus":{
  
      "Height": 26,
      "Weight": "40,000",
      "Lenght": 26,
      "KillerRating": 3,
      "Intelligence": 2,
      "Age": 156
  
  },
  
  "Brachiosaurus":{
  
      "Height": 16,
      "Weight": "80,000",
      "Lenght": 26,
      "KillerRating": 3,
      "Intelligence": 2,
      "Age": 156
  
  },
  "Camarasaurus":{
  
      "Height": 9,
      "Weight": "20,000",
      "Lenght": 19,
      "KillerRating": 3,
      "Intelligence": 2,
      "Age": 150
  
  },
  
  "Maiasaura":{
  
      "Height": 2.5,
      "Weight": "3,000",
      "Lenght": 9,
      "KillerRating": 2,
      "Intelligence": 3,
      "Age": 80
  
  },
  
  "Megalosaurus":{
  
      "Height": 3,
      "Weight": "1,000",
      "Lenght": 9,
      "KillerRating": 9,
      "Intelligence": 8,
      "Age":175
  
  },
  
  "Oriraptor":{
  
      "Height": 0.8,
      "Weight": 20,
      "Lenght": 1.8,
      "KillerRating": 5,
      "Intelligence": 8,
      "Age": 70
  
  },
  
  "Pachycephalosaurus":{
  
      "Height": 6,
      "Weight": "3,000",
      "Lenght": 8,
      "KillerRating": 2,
      "Intelligence": 7,
      "Age": 76
  
  },
  
  
  "Ceatrosaurus":{
  
      "Height": 2,
      "Weight": "1,000",
      "Lenght": 6,
      "KillerRating": 2,
      "Intelligence": 4,
      "Age": 76
  
  },
  
  "Coelephysis":{
  
      "Height": 2,
      "Weight": 27,
      "Lenght": 3,
      "KillerRating": 4,
      "Intelligence": 7,
      "Age": 225
  
  },
  
  "Compsegnathus":{
  
      "Height": 0.7,
      "Weight": 3,
      "Lenght": 1.4,
      "KillerRating": 5,
      "Intelligence": 7,
      "Age": 145
  
  },
  
  "Corythosaurus":{
  
      "Height": 5,
      "Weight": "5,000",
      "Lenght": 8,
      "KillerRating": 2,
      "Intelligence": 5,
      "Age": 80
  
  },
  
  "Pachyrhinosaurus":{
  
      "Height": 3,
      "Weight": "3,630",
      "Lenght": 7,
      "KillerRating": 2,
      "Intelligence": 4,
      "Age": 70
  
  },
  
  "Tyrannosaurus Rex":{
  
      "Height": 5.6,
      "Weight": "6,000",
      "Lenght": 13,
      "KillerRating": 9,
      "Intelligence": 9,
      "Age": 67
  
  }
  };

let animals = {
    "Cat": {
    
        "Height": 40,
        "Weight": 3,
        "Lenght": 60,
        "size": 10,
        "Age": 2
    
    },
    
    "cheetah":{
    
        "Height": 80,
        "Weight": 46,
        "Lenght": 1.3,
        "size": 78,
        "Age": 11
    
    },
    
    "tiger":{
    
        "Height": 112,
        "Weight": 250,
        "Lenght": 2.6,
        "size": 280,
        "Age": 8
    
    },
    "puma":{
    
        "Height": 75,
        "Weight": 67,
        "Lenght": 120,
        "size": 52,
        "Age": 4
    
    },
    "leopard":{
    
        "Height": 60,
        "Weight": 32,
        "Lenght": 90,
        "size": 280,
        "Age": 6
    
    },
        "Cat": {
        
            "Height": 40,
            "Weight": 3,
            "Lenght": 60,
            "size": 10,
            "Age": 2
        
        },
        
        "cheetah":{
        
            "Height": 80,
            "Weight": 46,
            "Lenght": 1.3,
            "size": 78,
            "Age": 11
        
        },
        
        "tiger":{
        
            "Height": 112,
            "Weight": 250,
            "Lenght": 2.6,
            "size": 280,
            "Age": 8
        
        },
        "puma":{
        
            "Height": 75,
            "Weight": 67,
            "Lenght": 120,
            "size": 52,
            "Age": 4
        
        },
        "leopard":{
        
            "Height": 60,
            "Weight": 32,
            "Lenght": 90,
            "size": 280,
            "Age": 6
        
        },
        
        "lion":{
        
            "Height": 116,
            "Weight": 190,
            "Lenght": 2.6,
            "size": 180,
            "Age": 10
        
        },
    
            "Cat": {
            
                "Height": 40,
                "Weight": 3,
                "Lenght": 60,
                "size": 10,
                "Age": 2
            
            },
            
            "cheetah":{
            
                "Height": 80,
                "Weight": 46,
                "Lenght": 1.3,
                "size": 78,
                "Age": 11
            
            },
            
            "tiger":{
            
                "Height": 112,
                "Weight": 250,
                "Lenght": 2.6,
                "size": 280,
                "Age": 8
            
            },
            "puma":{
            
                "Height": 75,
                "Weight": 67,
                "Lenght": 120,
                "size": 52,
                "Age": 4
            
            }
            
            
            


}


//global variables
let cards = [];
let topics = ["dinosaurs", "animals"];
let topicChoice;
let topicArray = [dinosaurs];
foundTopic = false;

//keep asking user for topic until they pick a valid one
while(!foundTopic){
  topicChoice = prompt("type a topic: " + topics.join(","));
  topicChoice = topicChoice.toLowerCase();
  if(topics.includes(topicChoice)){
    foundTopic = true;
  }
}

//array for each players cards
let player1 = [];
let player2 = [];

//randomly picks cards putting numbers from 1-30 in the array that represent the cards

for(i=0;i<2;i++){
  for(i=0;i<15 ;i++){
    let rndNum = Math.floor(Math.random() * 15);
    if(i<15){
      while(player1.includes(rndNum) || player2.includes(rndNum)){
        rndNum = Math.floor(Math.random() * 15);
      }
      player1.push(rndNum);
    }else{
      while(player1.includes(rndNum) || player2.includes(rndNum)){
        rndNum = Math.floor(Math.random() * 15);
      }
      player2.push(rndNum);
    }

  }
}

//pile of cards in center
let pile = []

//overcomplicated because of time
function game(){

  
  let cardObject = topicArray[topics.indexOf(topicChoice)];
  let keys = Object.keys(cardObject);

  let CardStats = "";
  for(i=0;i<Object.keys(cardObject[keys[0]]).length;i++){
    CardStats += Object.keys(cardObject[keys[0]])[i] + " " + cardObject[keys[0]][Object.keys(cardObject[keys[0]])[i]] + "\n"
  }

  let validStat = false;
  while(!validStat){
    let playerStatChoice  = prompt("you card:\n" + keys[0] + "\n" + CardStats)
    playerStatChoice = playerStatChoice.toLowerCase();

    let tempArray = [];
    for(i=0;i<Object.keys(cardObject[keys[0]]).length;i++){
      tempArray.push(Object.keys(cardObject[keys[0]])[i].toLowerCase());
      
    }
    console.log(tempArray)
    

    if(tempArray.includes(playerStatChoice)){
      validStat = true;
    }


  }

  //after stat has been selected




  

}

game();