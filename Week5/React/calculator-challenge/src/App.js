import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

class App extends React.Component{
  render(){
    return(
      <div id="app" className="App">
        <button onClick={this.showSimple} className="choice">simple calculator</button>
        <button onClick={this.showAdvanced} className="choice">advanced calculator</button>
      </div>
    )
  }
  showSimple(){
    document.getElementById("app").innerHTML = "";
    ReactDOM.render(<SimpleCalc />, document.getElementById("app"))
    
  }
  showAdvanced(){
    document.getElementById("app").innerHTML = "";
    ReactDOM.render(<Calc />, document.getElementById("app"))
  }
}

class SimpleCalc extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      output: 0
    }
    this.calculate = this.calculate.bind(this)
  }
  render(){
    return(
      <div className="simpleCalc">
        <input onChange={this.calculate} ref="inputsc"></input>
        <p>{this.state.output}</p>
      </div>
    )
  }
  calculate(){
    try{
      this.setState({
        output: math.evaluate(this.refs.inputsc.value)
      })
    }catch(err){
      console.log(err)
    }
  }
}

class Calc extends React.Component{
  render(){
    return(
      <div className="calc">
        <Output />
        <Buttons />
      </div>
    )
  }
}

function Output(props){
  return(
    <div id="outputContainer" className="outputContainer">
      <p id="output">0</p>
      <div onClick={backKey} id="backButton"></div>

    </div>
  )
}

function Buttons(props){
  return(
    <div id="buttons" className="buttons">
      <p onClick={addKey}>+</p>
      <p onClick={addKey}>-</p>
      <p onClick={addKey}>*</p>
      <p onClick={addKey}>/</p>

      <p onClick={addKey}>1</p>
      <p onClick={addKey}>2</p>
      <p onClick={addKey}>3</p>
      <p onClick={addKey}>%</p>

      <p onClick={addKey}>4</p>
      <p onClick={addKey}>5</p>
      <p onClick={addKey}>6</p>
      <p onClick={addKey}>(</p>

      <p onClick={addKey}>7</p>
      <p onClick={addKey}>8</p>
      <p onClick={addKey}>9</p>
      <p onClick={addKey}>)</p>

      <p onClick={addKey}>0</p>
      <p onClick={addKey}>.</p>
      <p onClick={addKey}>=</p>
      <p onClick={addKey}>CE</p>
    </div>
  )
}

let code = "puggy";
function addKey(e){
  let key = e.target.innerHTML;
  if(document.getElementById("output").innerHTML == "0"){
    document.getElementById("output").innerHTML = "";
  }


    
  if(key=="="){

    if(document.getElementById("output").innerHTML == code){
      let question = prompt("find m: 39m+674=153m−90070 and then encrypt the answer with haval128,3 hash encryption and answer that in the prompt to unlock pugs")
      if(question == "046dbb671f5d730a419a12abe03b387b"){
        pugTheme();
      }else{
        alert("wrong, cats are better")
      }
    }else{
      try{
        document.getElementById("output").innerHTML = math.evaluate(document.getElementById("output").innerHTML)
    }catch(err){
      console.log(err)
      alert("cannot calculate this")
    }
    }



  }else if(key=="CE"){
    document.getElementById("output").innerHTML = "0";
  }else{
    document.getElementById("output").innerHTML += key;
  }

  if(pugthemeEnabled){
    //play sound
    // let sound = new Audio('pug.mp3');
    // sound.play();
  }
}

function backKey(){
  let x = document.getElementById("output").innerHTML
  x = x.slice(0,-1)
  document.getElementById("output").innerHTML = x;
}
let pugthemeEnabled = false;
function pugTheme(){
  pugthemeEnabled = true;
  let buttons = document.getElementsByClassName("buttons")[0]
  buttons.style.background = "url('https://i.imgur.com/P6isWLb.jpg')"
  buttons.style.backgroundRepeat = "no-repeat";
  buttons.style.backgroundSize = "100% 50%";
  buttons.style.backgroundPositionY = "90%";

  let images = [
    "https://i.pinimg.com/originals/78/31/c8/7831c8f6e62af64ce1b9cf379fa71069.jpg",
    "https://previews.123rf.com/images/expressiovisual/expressiovisual1310/expressiovisual131000115/23701801-pug-dog-in-black-and-white-and-his-eyes-wide-open.jpg",
    "http://getwallpapers.com/wallpaper/full/f/0/2/759433-free-download-pug-puppies-wallpaper-1920x1200-for-windows-7.jpg",
    "http://hd.wallpaperswide.com/thumbs/pug_2-t2.jpg",
    "https://ak5.picdn.net/shutterstock/videos/1024147055/thumb/1.jpg",
    "https://irp-cdn.multiscreensite.com/94f3e251/dms3rep/multi/mobile/pug-eyes-1-299x233.dm.edit_OcPi09.jpg",
    "https://i.pinimg.com/originals/52/14/5b/52145b102339347f16c2a91cc44df7eb.jpg",
    "https://external-preview.redd.it/YqhbYgu2KCD9nERpxA_kGW4ApuD9_0zambeWaN0ZGAA.jpg?auto=webp&s=340f92f2f8b55018df733bf649926bea4c297001",
    "https://i.redd.it/sbi9bbh0eu821.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-C0uv2NrZBG2397DhjtdVF_X_FviXo7IIJjU2-Pk6IakdkzYgAA&s",
    "https://previews.123rf.com/images/genitchka/genitchka1909/genitchka190900017/129556153-close-up-face-of-cute-black-color-pug-dog-breed-listening-to-somebody-or-something-funny-tilt-head-a.jpg",
    "https://ak8.picdn.net/shutterstock/videos/1022773588/thumb/1.jpg",
    "https://i1.wp.com/puppytoob.com/wp-content/uploads/2015/01/5434910295_d59a0acb8f_z.jpg?resize=640%2C427",
    "https://cdn1-www.dogtime.com/assets/uploads/gallery/pug-dog-breed-pictures/3-sidesitting.jpg",
    "https://www.abc.net.au/news/image/8350522-3x2-700x467.jpg",
    "https://assets.capitalfm.com/2017/50/pop-up-pug-cafe-1513263441-herowidev4-0.jpg",
    "https://images.wallpaperscraft.com/image/pug_dog_tongue_hanging_out_144417_2560x1080.jpg",
    "http://www.desktopimages.org/pictures/2014/1016/1/animals-dogs-pug-blurred-background-wide-76347.jpg",
    "https://i.pinimg.com/originals/91/f7/c6/91f7c69003f9328a14010c18cb022b55.jpg",
    "https://lh3.googleusercontent.com/Vc9qH9qSy5wZz2Izuwr4nuxlQt7dptM_LzkB6jsCpW0-Lk_ForIoxQdoa8CwLoElLl8=s300"
  ]
  let clicky = document.getElementById("buttons").childNodes
  for(let i=0;i<clicky.length;i++){
    clicky[i].style.background = 'url('+images[i]+')'
    clicky[i].style.backgroundRepeat = "no-repeat";
    clicky[i].style.backgroundSize = "100% 100%";
   
  }
  document.getElementById("buttons").style.color = "white";
  document.getElementById("buttons").style.textStroke = "2px black";

  document.getElementById("output").innerHTML = "0";
  
  document.getElementById("outputContainer").style.background = "url('https://ak0.picdn.net/shutterstock/videos/1023256000/thumb/1.jpg')"
  document.getElementById("outputContainer").style.backgroundRepeat = "no-repeat";
  document.getElementById("outputContainer").style.backgroundSize = "100% 100%"
}

export default App;