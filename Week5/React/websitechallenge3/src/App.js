import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container></Container>
    </div>
  );
}
let text1="Gary was a great host in brighton. He made us feel at home and was super helpful with any questions we had";
let name1 = <p><span className="nameSpan">Cheryl</span> <br /> United States</p>

let text2= "Very accommodating with my booking and welcoming to all of us, thanks."
let name2= <p><span className="nameSpan">Charlie</span> <br /> United Kingdom</p>
let image2="https://amp.businessinsider.com/images/5a8d77a5391d941d008b461a-750-563.jpg"

let text3="WOW...Alyson is turly a amazing person. 1st class accomadations and we got the difficult news that a loved had passed the morning we were scheduled to leave. Alyso..."
let name3 = <p><span className="nameSpan">John Barrack</span> <br /> Canada</p>
let image3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6oWIA-GzY-VFY1ZYMyS5n_2beVQGAB_-V9clfDK6mbAWcj5n&s"

function Container(){
  return (
    <div className="panelContainer">
      <Panel image="https://www.bedsos.co.uk/images/time-living-durham-faux-leather-stone-4ft6-double-bed-p538-27214_image.jpg" text={text1} name={name1} image2="https://images.pexels.com/photos/2092709/pexels-photo-2092709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Panel>
      <Panel image="https://www.tvbedstore.co.uk/wp-content/uploads/2018/08/Avalon_tv_bed_tv_up.jpg" text={text2} name={name2} image2={image2}></Panel>
      <Panel image="https://www.theplancollection.com/Upload/Designers/196/1050/Plan1961050MainImage_17_10_2017_2_891_593.jpg" text={text3} name={name3} image2={image3}></Panel>
    </div>
  )
}

let star = <img alt="?" src="https://www.fourjay.org/myphoto/f/39/397370_blue-stars-png.png" className="star"></img>

class Panel extends React.Component {
  render() {
    return (
      <div className="panel">
        <img className="image" alt="?" src={this.props.image}></img>
        <div className="stars">
          {star}
          {star}
          {star}
          {star}
          {star}
        </div>
        <p className="text">{this.props.text}</p>
        <div className="footer">
          <img className="personImage" alt="?" src={this.props.image2}></img>
          <p className="name">{this.props.name}</p>
        </div>
      
      </div>
    )
  }
}

export default App;
