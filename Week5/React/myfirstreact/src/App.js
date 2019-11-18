import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 id="title">Frequently Asked Questions</h1>
      <Panel title="What is Netflix?"></Panel>
      <Panel title="How much does Netflix cost?"></Panel>
      <Panel title="Where can I watch?"></Panel>
      <Panel title="How do I cancel?"></Panel>
      <Panel title="What can I watch on Netflix?"></Panel>
      <Panel title="How does the free trial work?"></Panel>

      <Button></Button>

    </div>
  );
}

function Panel(props){
  return (
    <div className="Panel">
      <h3>{props.title}</h3>
      <h1>+</h1>
    </div>
  )
}
function Button(){
  return(
    <div id="buttonContainer">
      <div id="button">
        <p>TRY 30 DAYS FREE</p>
          
      </div>
    </div>
  )
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
