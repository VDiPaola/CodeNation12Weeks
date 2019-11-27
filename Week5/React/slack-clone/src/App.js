import React from 'react';
import './App.css';
import $ from 'jquery'

//gets data from json file and sets it to MessageObject var
getData();


//resets the json file
// let template = {general:{messages:[],messageUser:[]}}
// setData(template)
//

class App extends React.Component{
  state ={
    Message:'',
    Username:'john smith',
    Workspace:'important',
    currentChannel:'',
  }
  render(){
    return(
      <div className='mainWrapper'>
        <button onClick={this.readState}></button>
        <SideBar Username={this.state.Username} WorkspaceName={this.state.Workspace}/>
        <ChatBox />
        <Messages />
      </div>
    )
  }
}

//purple side bar
function SideBar(SideBar){
  return(
    <div className="sidebar">
      <div onMouseOver={topHover} onMouseOut={topHoverOut} id="sideTop">
        <div id="sideProfile">
          <h1>{SideBar.WorkspaceName}<span id="topspan">▼</span></h1>
          <div id="online"></div>
          <p id="sideName">{SideBar.Username}</p>
          <i className="fa fa-bell"></i>
        </div>
        <div id="sideSearch">
        </div>
      </div>
      <div id="sideBottom">
        <h2 id="channels">Channels</h2>
        <Channel Name='# general' Id='1'/>
        <Channel Name='# resources' Id='2'/>
        <Channel Name='# code' Id='3'/>
        <Channel Name='# challenges' Id='4'/>
      </div>
    </div>
  )
}

//chatbox
function ChatBox(ChatBox){
  return(
    <div className ='ChatBox'>
      <textarea id="chatbox"></textarea>
      <button onClick={send}>SEND</button>
    </div>
  )
}
function Messages(){
  return(
    <div className='mc'>
      <p id='messages'></p>
    </div>
  )
}


function Channel(Channel){
  return(
    <div>
      <button className="chatButtons" data-id={Channel.Id} onClick={chatChange} onMouseOver={channelHover} onMouseOut={channelHoverOut}>{Channel.Name}</button>
    </div>
  )
}
let activeButton = '0';
function chatChange(x){
  loadChats();
  activeButton = x.target.dataset.id;
  let buttons = document.getElementsByClassName("chatButtons");
  for(let i=0;i<buttons.length;i++){
    buttons[i].style.backgroundColor = "#3F0E40";
    buttons[i].style.color = "rgb(207,195,207)";
  }
  let button = x.target;
  button.style.backgroundColor = "#1164A3";
  button.style.color = "white";
}
function channelHover(e){
  if( !(e.target.dataset.id == activeButton) ){
    e.target.style.backgroundColor = "rgb(44, 7, 44)";
    e.target.style.border = "none";
  }
}
function channelHoverOut(e){
  if( !(e.target.dataset.id == activeButton) ){
    e.target.style.backgroundColor = "#3F0E40";
  }
}

function topHover(){
  let element1 = document.getElementById("sideName");
  let element2 = document.getElementById("topspan");
  element1.style.color = "white";
  element2.style.color = "white";
}
function topHoverOut(){
  let element1 = document.getElementById("sideName");
  let element2 = document.getElementById("topspan");
  element1.style.color = "rgb(202, 200, 200)";
  element2.style.color = "rgb(202, 200, 200)";

}

function send(){
  var input = document.getElementById('chatbox');
  var messagebox = document.getElementById('messages');
console.log(MessageObject)
  MessageObject.general.messages[MessageObject.general.messages.length] = input.value;
  messagebox.innerHTML += MessageObject.general.messages[MessageObject.general.messages.length-1] + '<br>';

  
  setData(MessageObject)
  messagebox.scrollTop = messagebox.scrollHeight - messagebox.clientHeight;
}

var MessageObject = 0;
async function getData(){
  await getDataPromise()
  return MessageObject
}

function getDataPromise(){
  new Promise((resolve,reject) =>{
    $.get( "https://api.myjson.com/bins/17y9r6", function( data ) {
      console.log( "Data Loaded: ");
      MessageObject = data;
      resolve();
    });
  })
}


function setData(data){
  $.ajax({
    url:"https://api.myjson.com/bins/17y9r6",
    type:"PUT",
    data: JSON.stringify(data),
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){
      console.log("updated")
    }
  });
}

function loadChats(){
  getData()
  var messagebox = document.getElementById('messages');
  messagebox.innerHTML = '';
  for(var i=0;i<MessageObject.general.messages.length;i++){
    messagebox.innerHTML += MessageObject.general.messages[i] + "<br>";
  }
  messagebox.scrollTop = messagebox.scrollHeight - messagebox.clientHeight;

}

window.setInterval(loadChats, 1000);


export default App;