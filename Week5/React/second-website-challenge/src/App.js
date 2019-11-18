import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Topics topicName="Long Reads" image1="https://news.files.bbci.co.uk/include/extra/shorthand/assets/news/D1qVRFeHpC/assets/z1rSNu0psZ/fire-976x549.jpeg" text1="the hunt for 500,000 dangerous dryers" image2="https://upload.wikimedia.org/wikipedia/commons/5/52/Evel_Knievel_c1974cr.jpg" text2="The daredevil that flew across an ocean" image3="https://aleteiaen.files.wordpress.com/2018/04/web3-elderly-aging-mature-woman-daughter-granddaughter-young-woman-photo-album-home-shutterstock.jpg?quality=100&strip=all&w=620&h=310&crop=1" text3="One day you will need care - will you get it?" image4="https://www.thesun.co.uk/wp-content/uploads/2019/06/NINTCHDBPICT000494863253-e1559599630337.jpg" text4="The people who moved to Chernobyl" image5="https://media2.s-nbcnews.com/j/streams/2013/April/130418/1C6998701-tdy-130418-baby-holding-stock.fit-760w.jpg" text5="'I always feared id go mad and when i had a baby i did'"></Topics>
      <Topics topicName="Newsbeat" image1="https://akns-images.eonline.com/eol_images/Entire_Site/201946/rs_634x1024-190506192217-634-katy-perry-met-gala-2019-cheeseburger.jpg?fit=inside|900:auto&output-quality=90" text1="Katy Perry appears in Taylor Swift video" image2="https://www.billboard.com/files/styles/article_main_image/public/media/Khalid-bb23-2018-beat-billboard-jkaejiepp-1548.jpg" text2="BTS and the many collaborations of Khalid" image3="https://media.nastygal.com/i/nastygal/agg76196_neon-lime_xl?pdp.template" text3="Neon - just a trend?" image4="https://thenypost.files.wordpress.com/2019/11/drake-boo-flog-gnaw-01.jpg?quality=90&strip=all&w=618&h=410&crop=1" text4="The Drake curse could finally be over" image5="https://i.ytimg.com/vi/ek-5vIz_gDw/maxresdefault.jpg" text5="Keanu Reeves: Games dont need legitimising"></Topics>
    </div>
  );
}

function Topics(props){
  return (
    <div className="topics">
      <h3 id="topicName">{props.topicName}</h3>
      <p id="line">-----------------------------------------------------------------------------------------------------</p>
      <h3 id="topicAll">See All</h3>
      <Story image={props.image1} text={props.text1} />
      <Story image={props.image2} text={props.text2} />
      <Story image={props.image3} text={props.text3} />
      <Story image={props.image4} text={props.text4} />
      <Story image={props.image5} text={props.text5} />
    </div>
  )
}

function Story(props){
  return (
    <div className="story">
      <img src={props.image} alt="?"></img>
      <p className="text">{props.text}</p>
    </div>
  )
}

export default App;
