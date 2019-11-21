import React from 'react';
import './App.css';
class Menu extends React.Component{

  constructor(){
    super()
    this.state = {
      foodItems:[
        {name: "Apple", type:"fruit", cost:"£1"},
        {name: "Chips", type:"Awesome", cost:"50p"},
        {name: "Chicken", type:"Meat", cost:"£2"}
      ],
      counter: 0,
      name: "Enzo"
    }
    this.x = true;
  }
  render(){
    return(
      <div className="menu">
      <h1>list</h1>
      <Fooditem foodItem={this.state.foodItems[0].name} foodCost={this.state.foodItems[0].cost}></Fooditem>
      <Fooditem foodItem={this.state.foodItems[1].name} foodCost={this.state.foodItems[1].cost}></Fooditem>
      <Fooditem foodItem={this.state.foodItems[2].name} foodCost={this.state.foodItems[2].cost}></Fooditem>
      <Counter counter={this.state.counter}></Counter>
      <HelloName name={this.state.name}></HelloName>
      {/* sets ref to variable storing a reference */}
      <input  ref="inputRef" type="text" name="user"></input>
      <button  onClick={this.changeState}>change list</button>
      </div>
    )
  }

  changeState = () =>{
    if(this.x){
      this.x = false;
      this.setState({
        foodItems:[
          {name: "pear", type:"fruit", cost:"£5"},
          {name: "pie", type:"Awesome", cost:"90p"},
          {name: "cake", type:"Meat", cost:"£7"}
        ],
        counter: this.state.counter + 1,
        // sets name to the value of what the reference is pointing to
        name: this.refs.inputRef.value
        
      });
    }else{
      this.x = true;
      this.setState({
        foodItems:[
          {name: "Apple", type:"fruit", cost:"£1"},
          {name: "Chips", type:"Awesome", cost:"50p"},
          {name: "Chicken", type:"Meat", cost:"£2"}
        ],
        counter: this.state.counter + 1,
        // sets name to the value of what the reference is pointing to
        name: this.refs.inputRef.value
      });
    }

    
  }
}
function Fooditem(props){
  return(
    <div className="foodDiv">
      <h2 className="food">{props.foodItem} - </h2>
      <h2 className="cost">{props.foodCost}</h2>
    </div>
  )
}

function Counter(props){
  return (
    <div className="counter">
      <h3>Counter: {props.counter}</h3>
    </div>
  )
}

function HelloName(props){
  return(
    <div className="helloName">
      <h3>hello  {props.name}</h3>
    </div>
  )
}



export default Menu;
