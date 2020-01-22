import React, { Component } from 'react';
import { 
  Text, 
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  Alert,
  TextInput
} from 'react-native';
import {styleTemplate} from './mainStyles'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

//global vars
const hostname = "127.0.0.1"

//main styles
const styles = StyleSheet.create({
 mainBG:{
  backgroundColor:"#0ceb99",
  flex:1,

  
 },
mainTitle:{
  flex:1,
  fontSize:30,
  textAlign:"center",
  paddingTop:55

},
mainView1:{
  flex:0.15,
  backgroundColor:"#00fff7",
},
mainView2:{
  flex:0.05,
  backgroundColor:"#00ffd9",
  flexDirection:"row"
  
},
Navbar:{
  fontSize: 11,
  flex:1,
  textAlign:"center",
  paddingTop:10,
},
});

//global vars
_loggedIn = false;
_username = '';
_password = '';
_email = '';
_profilePic = '';

//APP
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      page: 0
    }

  }

pageChange=(num)=>{
  if (num<0){num = 0}
  if (num>4){num = 4}
   this.setState({page: num})
 }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <GestureRecognizer 
        style={{flex:1}}
        onSwipeLeft={this.pageChange.bind(this, this.state.page+1)}
        onSwipeRight={this.pageChange.bind(this, this.state.page-1)}
        
      >
        <View style={styles.mainBG}>
          <TitleBar />
          <Navbar pageChangeFunc={(num)=>this.pageChange.bind(this,num)} active={this.state.page}/>
          <View style={{flex:1}}>
          { ( (this.state.page == 0) && (<Home />) ) ||
          ( (this.state.page == 1) && (<Questionaire />) ) ||
          ( (this.state.page == 2) && (<Profile />) ) ||
          ( (this.state.page == 3) && (<Forums />) )
          }
          </View>
          
        </View>
        </GestureRecognizer>
    );
  }
}


//TITLE
function TitleBar(props){
  return(
    <View style={styles.mainView1}>
      <Text style={styles.mainTitle}>TITLE</Text>
    </View>
  )
}

//NAVBAR
function Navbar(props){
  return(
    <View style={styles.mainView2}>
      <Text style={styles.Navbar} onPress={props.pageChangeFunc(0)}>HOME</Text>
      <Text style={styles.Navbar} onPress={props.pageChangeFunc(1)}>QUESTIONAIRE</Text>
      <Text style={styles.Navbar} onPress={props.pageChangeFunc(2)}>PROFILE</Text>
      <Text style={styles.Navbar} onPress={props.pageChangeFunc(3)}>FORUMS</Text>
      <Text style={styles.Navbar} onPress={props.pageChangeFunc(4)}>TAB</Text>
    </View>
  )
}

//HOME PAGE 
const styleSlides = StyleSheet.create(
  {
    slideView:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      alignContent:"center"
    },
    login:{
      backgroundColor:"#db9704",
      marginTop:20,
      padding:50,
      paddingTop:5,
      paddingBottom: 5,
      borderRadius:5,
    },
    loginButtons:{
      flex:1,
      backgroundColor:"red",
      fontSize:30,

    }
  }
)
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      slide:0,
      login:false
    }

  }

  slideChange(){
    let num = this.state.slide
    num++;
    if(num > 2){num = 0}
    this.setState({
      login:false,
      slide: num
    })
    
  }

  loginActive(){
    this.setState({login:true})
  }

  render(){
    return(
      <View
      style={{flex:1,alignItems:"center"}}
      >
        <View>
          <TouchableOpacity style={styleSlides.login} onPress={this.loginActive.bind(this)}><Text>LOGIN</Text></TouchableOpacity>
        </View>
      <GestureRecognizer style={{width:400,height:300,marginTop:60,backgroundColor:"#bbede6"}}
      onSwipeUp={this.slideChange.bind(this)}
      
      >
        <View style={styleSlides.slideView}>
        {( (this.state.login) && (<LoginSlide />) ) ||
        ( (this.state.slide == 0) && (<Text>SLIDE1</Text>) ) ||
        ( (this.state.slide == 1) && (<Text>SLIDE2</Text>) ) ||
        ( (this.state.slide == 2) && (<Text>SLIDE3</Text>) )
        }
        </View>
      </GestureRecognizer>
      </View>
    )
  }
}

//login slide
function LoginSlide(props){
  return(
    <View style={{flex:1,backgroundColor:"black"}}>
      <View style={{flex:1,flexDirection:"row", justifyContent:"space-around", alignContent:"space-around", alignItems:"center"}}>
        <Text style={styleSlides.loginButtons}>Login</Text>
        <Text style={styleSlides.loginButtons}>Sign up</Text>
      </View>
      <Text style={{flex:1}}>ADSJFAIOSD</Text>
    </View>
  )
}

//QUESTIONAIRE PAGE
class Questionaire extends Component{

  render(){
    return(
      <View>
        <Text>CONTENT PAGE 2</Text>
      </View>
    )
  }
}

//PROFILE PAGE
class Profile extends Component{

  render(){
    return(
      <View>
        <Text>CONTENT PAGE 3</Text>
      </View>
    )
  }
}


//FORUMS
const forumStyles = StyleSheet.create({
  topicsContainer:{
    
  },
  topic:{
    backgroundColor: "#8de3c8",
    marginTop:10,
    paddingTop: 10,
    paddingBottom: 10,
    
  },
  title:{
    fontSize:40,
    textAlign:"center"
  },
  topicText:{
    fontSize:25,
    textAlign:"center",
  },
  back:{
    backgroundColor:"red",
    
  },
  createpost:{

    backgroundColor:"aqua",
    marginTop:5,

    height:50,
    textAlign:"center",

  },
  items:{
    backgroundColor:"#79e660",
    marginTop:5,
    flex:1,
    height:80,
    textAlign:"center"

  },
  itemContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"stretch",

    
  },
  postTitle:{
    fontSize:40
  }
})

class Forums extends Component{

  constructor(props){
    super(props);
    
    this.state = {
      forumItems: [],
      forumPage: 0,
      forumTitle: 'Forums',
      forumTopics: ["Topic1", "Topic2", "Topic3", "Topic4"],
      forumViewIndex: -1,
      username: 'default',
      loggedIn: true,
      createTopic: "Topic",
      curContent: "",
      curTitle: ""

    }

  }

  topicClick=(topicIndex)=>{
    //function when you click a topic

    //update state from values in db
    let topicName = this.state.forumTopics[topicIndex]
    fetch(`http://${hostname}:4000/forums/getposts?topic=${topicName}`)
    .then(response => response.json())
    .then((data)=>{
      console.log(data)
      this.setState({
        forumPage:1,
        forumTitle: topicName,
        forumItems: data.reverse()
      })
    })
    .catch(err=>{console.log(err)})
  }

  back(){
    this.setState({
    forumPage:0,
    forumTitle:"Forums"  
    })
  }

  createPostShow=()=>{
    if(this.state.loggedIn){
      this.setState({
        createTopic: this.state.forumTitle,
        forumPage:2,
        forumTitle: "Create A Post"
      })
    }else{
      alert('not logged in')
    }

  }

  updateCreateTitle=(text)=>{
    this.setState({
      curTitle: text
    })
  }
  updateCreateContent=(text)=>{
    this.setState({
      curContent: text
    })
  }

  createPost=()=>{
    //set variables
    let title = this.state.curTitle;
    let content = this.state.curContent;
    let username = this.state.username;
    let topic = this.state.createTopic;
    let date = Date.now();
    content = content.replace(/\n/g,'╝');

    //send to backend to store in database
    //user,contents, topic
    fetch(`http://${hostname}:4000/forums/createpost?user=${username}&contents=${content}&topic=${topic}&date=${date}&title=${title}`)
    
    //put them back to forum main page
    this.setState({
      forumPage:0,
      forumTitle: "Forums"
    })

  }

  viewPost=(index)=>{
    //get post from uid
    console.log(index)
   this.setState({
     forumPage:3,
     forumTitle: '',
     forumViewIndex: index
   })
  }

  render(){
    return(
      <View scroll={{flex:1}} style={{flex:1}}>
        {(this.state.forumPage != 0) && (
          <Button onPress={this.back.bind(this)} style={forumStyles.back} title="back"></Button>
        )}
        
        <Text style={forumStyles.title}>{this.state.forumTitle}</Text>
        {(this.state.forumPage==0 && (
                  <View className="topicsContainer" style={forumStyles.topicsContainer}>
                  <Topics text={this.state.forumTopics[0]} click={this.topicClick.bind(this,0)}></Topics>
                  <Topics text={this.state.forumTopics[1]} click={this.topicClick.bind(this,1)}></Topics>
                  <Topics text={this.state.forumTopics[2]} click={this.topicClick.bind(this,2)}></Topics>
                  <Topics text={this.state.forumTopics[3]} click={this.topicClick.bind(this,3)}></Topics>
                  </View>
        )) || (this.state.forumPage==1 && (
          <ForumItem viewPost={this.viewPost.bind(this)} list={this.state.forumItems} create={this.createPostShow.bind(this)}/>
        )) ||
        (this.state.forumPage==2 && (
          <CreatePost post={this.createPost} updatetitle={this.updateCreateTitle} updatecontent={this.updateCreateContent}/>
        )) ||
        (this.state.forumPage==3 && (
          <ViewPost post={this.state.forumItems[this.state.forumViewIndex]}/>
        ))
        }
        
      </View>
    )
  }
}

function ViewPost(props){
  return(
  <View  style={{flex:1,alignItems:"center"}}>
  <Text >by {props.post.name} posted {new Date(parseInt(props.post.date)).getDate()}/{new Date(parseInt(props.post.date)).getMonth()+1}/{new Date(parseInt(props.post.date)).getFullYear()}</Text>
  <Text style={forumStyles.postTitle}>{props.post.title}</Text>
  <Text >{props.post.contents.replace(/╝/g,'\n')}</Text>
  </View>
  )
}

function CreatePost(props){
  return(
    <View style={{flex:1,alignItems:"stretch",marginTop:10}}>
        <Text style={{fontSize:35,flex:0.5,textAlign:"center"}}>Title</Text>
        <TextInput style={{fontSize:20,flex:0.4,color:"#a8ffdc",backgroundColor:"white",textAlign:"center"}} type="text" placeholder='title' onChangeText={(text)=>{
          props.updatetitle(text);
        }} />
        <Text style={{fontSize:20,flex:0.4,textAlign:"center",marginTop:10}}>Share your story: </Text>
        <View style={{flex:5}}>
          <TextInput style={{fontSize:15,flex:1,backgroundColor:"white"}} multiline={true} type="TextInput" placeholder='Write here' onChangeText={(text)=>{
          props.updatecontent(text);
        }} />
        </View>
        <TouchableOpacity onPress={props.post} style={{flex:1,backgroundColor:"#1adbed",justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:30}}>Post</Text></TouchableOpacity>
    </View>
  )
}

function ForumItem(props){
  return(
    <SafeAreaView style={{flex:1}}>

        <Text onPress={props.create} style={forumStyles.createpost}>Create A Post</Text>

        <FlatList style={{flexGrow:1}} data={props.list} renderItem={({ item,index }) => (
          <TouchableOpacity style={forumStyles.items} onPress={()=>{props.viewPost(index)}}>
        <Text>{item.title}</Text>
        <Text>{item.name}</Text>
        <Text>{new Date(parseInt(item.date)).getDate()}/{new Date(parseInt(item.date)).getMonth()+1}/{new Date(parseInt(item.date)).getFullYear()}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.UID}
        />

    </SafeAreaView>
  )
}

function Topics(props){
  return(
    <TouchableOpacity onPress={props.click}>
    <View style={forumStyles.topic} >
      <Text style={forumStyles.topicText}>{props.text}</Text>
    </View>
    </TouchableOpacity>
  )
}