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
const hostname = "127.0.0.1";
const hostnameBack = "127.0.0.1";

//main styles
const styles = StyleSheet.create({
 mainBG:{
  backgroundColor:"#03CEA4",
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
  backgroundColor:"#FF9B42",
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
_username = 'Stan Smith';
_password = '';
_email = '';
_profilePic = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';

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
          ( (this.state.page == 1) && (<Profile />) ) ||
          ( (this.state.page == 2) && (<Forums />) ) ||
          ( (this.state.page == 3) && (<Help />) )
          }
          </View>
          
        </View>
        </GestureRecognizer>
    );
  }
}

//HELP
function Help(props){
  return(
    <View style={{flex:0.9,marginTop:60}}>
      <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
        <Text style={{fontSize:25}}>Anxiety UK: </Text>
        <Text style={{color:"blue",fontSize:25}}>03444 775 774</Text>
      </View>
      <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
        <Text style={{fontSize:25}}>CALM: </Text>
        <Text style={{color:"blue",fontSize:25}}>0800 58 58 58</Text>
      </View>
      <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
        <Text style={{fontSize:25}}>MIND: </Text>
        <Text style={{color:"blue",fontSize:25}}>0300 123 3393</Text>
      </View>
      <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
        <Text style={{fontSize:25}}>No Panic: </Text>
        <Text style={{color:"blue",fontSize:25}}>0844 967 4848</Text>
      </View>
      <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
        <Text style={{fontSize:25}}>OCD UK: </Text>
        <Text style={{color:"blue",fontSize:25}}>0333 212 7890</Text>
      </View>
      <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
        <Text style={{fontSize:25}}>Samaritans: </Text>
        <Text style={{color:"blue",fontSize:25}}>116 123</Text>
      </View>
    </View>
  )
}

//TITLE
function TitleBar(props){
  return(
    <View style={styles.mainView1}>
      <Text style={styles.mainTitle}>Mind Break</Text>
    </View>
  )
}

//NAVBAR
function Navbar(props){
  return(
    <View style={styles.mainView2}>
      <Text style={styles.Navbar} onPress={props.pageChangeFunc(0)}>HOME</Text>
      <Text style={styles.Navbar} onPress={props.pageChangeFunc(1)}>PROFILE</Text>
      <Text style={styles.Navbar} onPress={props.pageChangeFunc(2)}>FORUMS</Text>
      <Text style={styles.Navbar} onPress={props.pageChangeFunc(3)}>HELP</Text>
    </View>
  )
}

//HOME PAGE 
const styleSlides = StyleSheet.create(
  {
    slideView:{
      flex:1,
      justifyContent:"center",
      alignItems:"stretch",
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
      backgroundColor:"#bababa",
      fontSize:30,
      textAlign:"center"

    },
    slide:{
      textAlign:"center"
    },
    loginOut:{
      backgroundColor:"#db4c4c",
      marginTop:20,
      padding:50,
      paddingTop:5,
      paddingBottom: 5,
      borderRadius:5,
    }
  }
)
class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      slide:0,
      login:false,
      loginPassword: '',
      loginUsername: '',
      signupPage: false,
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

  passwordChange=(text)=>{
    //update the state
    this.setState({
      loginPassword: text
    })
  }

  usernameChange=(text)=>{
    //update the state
    this.setState({
      loginUsername: text
    })
  }

  toggleLoginPage=(login)=>{
    this.setState({
      signupPage: !login
    })
  }

  login=()=>{
    let username = this.state.loginUsername;
    let password = this.state.loginPassword;

    if(username != '' && password != ''){
      //check user credentials
      
      fetch(`http://${hostnameBack}:4000/users/verifylogin?user=${username}&pass=${password}`)
      .then(response=>response.json())
      .then((data)=>{
        console.log(data)
        if(data == true){
          //logged in
          //update vars
          _loggedIn = true;
          _username = username;
          _password = password;

          console.log(_username)
          fetch(`http://${hostnameBack}:4000/users/getfield?field=profilepic&user=${username}`)
          .then(response=>{response.json()})
          .then(data=>{
            if(data != ''){
              _profilePic = data;
            }
          })

          alert('logged in')
          //update UI
          this.setState({
            login:false,
          })
          
        }else if(data.data && data.data=='rightuser'){
          //wrong password
          alert('incorrect password')
        }else{
          //username not found
          alert('username not found')
        }
      })
      .catch(err=>{console.log(err)})
    }

  }
  signup=()=>{
    let username = this.state.loginUsername;
    let password = this.state.loginPassword;

    if(username != '' && password != ''){
      //sign up if user doesnt already exist
      
      fetch(`http://${hostnameBack}:4000/users/add?user=${username}&pass=${password}`)
      .then(response=>response.json())
      .then((data)=>{
        console.log(data)
        if(data == true){
          //signed up

          //update vars
          _loggedIn = true;
          _username = username;
          _password = password;


          console.log(_username)
          alert(`thank you for signing up ${username}`)
          //update UI
          this.setState({
            login:false,
          })
          
        }else{
          //username exists
          alert('username is already in use')
        }
      })
      .catch(err=>{console.log(err)})
    }
  }

  logout=()=>{
    //change global var
    _loggedIn = false;
    
    //update state
    this.setState({
      login:true
    })
  }

  render(){
    return(
      <View
      style={{flex:1,alignItems:"center"}}
      >
        <View>
          {(!_loggedIn) && (
            <TouchableOpacity style={styleSlides.login} onPress={this.loginActive.bind(this)}><Text >LOGIN</Text></TouchableOpacity>
          ) || (_loggedIn) && (
            <TouchableOpacity style={styleSlides.loginOut} onPress={this.logout.bind(this)}><Text style={{color:"white"}}>LOG OUT</Text></TouchableOpacity>
          )}
          
        </View>
      <GestureRecognizer style={{width:400,height:300,marginTop:60,backgroundColor:"#bbede6"}}
      onSwipeUp={this.slideChange.bind(this)}
      
      >
        <View style={styleSlides.slideView}>
        {( (this.state.login) && (<LoginSlide signupButton={this.signup} login={this.login} userChange={this.usernameChange} passChange={this.passwordChange} signup={this.state.signupPage} togglePage={this.toggleLoginPage} />) ) ||
        ( (this.state.slide == 0) && (<Text style={styleSlides.slide}>Welcome to Mind Break! We aim to help bring people with mental health issues together in a positive community</Text>) ) ||
        ( (this.state.slide == 1) && (<Text style={styleSlides.slide}>Here you can get to know others aswell as yourself, you can read and share stories in the forums to engage with the community</Text>) ) ||
        ( (this.state.slide == 2) && (<Text style={styleSlides.slide}>the help tab is there for numbers that may help you or someone you know</Text>) )
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
    <View style={{flex:1,backgroundColor:"white",}}>

              <View style={{flex:1,marginTop:10}}>
              <Text style={{textAlign:"center",fontSize:30,flex:1}}>Username</Text>
            <TextInput placeholder="username" style={{textAlign:"center",fontSize:15,flex:2}}  onChangeText={(text)=>{props.userChange(text)}}></TextInput>
            <Text style={{textAlign:"center",fontSize:30,flex:1}} >Password</Text>
            <TextInput secureTextEntry={true} placeholder="username" style={{textAlign:"center",fontSize:15,flex:2}}  onChangeText={(text)=>{props.passChange(text)}} autoCorrect={false} ></TextInput>   
            </View>

          <View style={{flex:0.2,flexDirection:"row", justifyContent:"space-around", alignContent:"space-around", alignItems:"center"}}>

          <TouchableOpacity style={{flex:1}} onPress={props.login}><Text style={styleSlides.loginButtons} >Login</Text></TouchableOpacity>
          <TouchableOpacity style={{flex:1}} onPress={props.signupButton}><Text style={[styleSlides.loginButtons,{backgroundColor:"#c6c6c6"}]} >Sign Up</Text></TouchableOpacity>         

          </View>

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
  constructor(props){
    super(props)
    this.state = {
      change: 0,
      changeVal: '',
      username: _username,
      password: _password,
      profilepic: _profilePic
    }
  }

  change=(x)=>{
    this.setState({
      change: x
    })
  }
  onChange=()=>{
    console.log(_username)
    if(this.state.changeVal != ''){
      let field = 'name';
      if(this.state.change == 2){field='password';}
      if(this.state.change == 3){field='profilepic';}
      let data = this.state.changeVal;
      
      fetch(`http://${hostnameBack}:4000/users/changefield?field=${field}&data=${data}&user=${_username}`)
      .then(response=>{response.json()})
      .then(data2=>{
        console.log(this.state.username + " 1")
        switch(field){
          case 'name':
            _username = data;
            break;
          case 'password':
            _password = data;
            break;
          case 'profilepic':
            _profilePic = data;
            break;
        }
        this.setState({
          change:0,
          username: _username,
          password: _password,
          profilepic: _profilePic
        })
        console.log(this.state.username + " 2")

      })

    }else{
      this.setState({
        change: 0
      })
    }
  }


  render(){
    return(
      <View style={{flex:1}}>
        {( (_loggedIn) && (
          <View style={{flex:1}}>
              <View style={{flex:0.3,backgroundColor:"#98FB98",marginTop:10,flexDirection:"row"}}>
                <Image style={{flex:0.6,backgroundColor:"white"}} source={{uri: this.state.profilepic}}></Image>

                <View style={{flex:1}}>
                <Text style={{flex:1.5, textAlign:'center',paddingTop:20,fontSize:20}}>{this.state.username}</Text>

                {((this.state.change == 0) && (
                   <View style={{flex:1}}>
                                  <TouchableOpacity style={{flex:1}} onPress={this.change.bind(this,1)}>
                                  <Text style={{textAlign:"center",color:"blue"}}>change username</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1}} onPress={this.change.bind(this,2)}>
                                  <Text style={{textAlign:"center",color:"blue"}}>change password</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1}} onPress={this.change.bind(this,3)}>
                                  <Text style={{textAlign:"center",color:"blue"}}>change profile picture</Text>
                                </TouchableOpacity>
                    </View>
                )) || ((this.state.change != 0) && (
                    <View style={{flex:0.3,flexDirection:"row"}}>
                      <TextInput type="text" style={{flex:2,backgroundColor:"white"}} onChangeText={(text)=>{this.setState({changeVal:text})}}></TextInput>
                      <TouchableOpacity  style={{flex:1,backgroundColor:"black",justifyContent:"center",alignItems:"center"}} onPress={this.onChange}>
                        <Text style={{flex:0.8,color:"white"}}>Change</Text>
                      </TouchableOpacity>
                    </View>
                ))}


                </View>
              </View>
              
          </View>
        ) ) ||
        ( (!_loggedIn) && (
          <Text style={{textAlign:"center",marginTop:10,backgroundColor:"white",flex:1}}>You must be logged in to view this page</Text>
        ) )}
        
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
    paddingTop:15

  },
  items:{
    backgroundColor:"#EDDEA4",
    marginTop:5,
    flex:1,
    height:80,
    textAlign:"center",
    justifyContent:"center"

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
      forumTopics: ["Anxiety", "Depression", "Bipolar", "Body Dismorphia"],
      forumViewIndex: -1,
      createTopic: "Topic",
      curContent: "",
      curTitle: ""

    }

  }

  topicClick=(topicIndex)=>{
    //function when you click a topic
    console.log("test")
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
    if(_loggedIn){
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
    if(this.state.curTitle != ''){
      //set variables
      console.log('creating post')
      let title = this.state.curTitle;
      let content = this.state.curContent;
      let username = _username;
      let topic = this.state.createTopic;
      let date = Date.now();
      content = content.replace(/\n/g,'╝');

      //send to backend to store in database
      //user,contents, topic
      fetch(`http://${hostname}:4000/forums/createpost?user=${username}&contents=${content}&topic=${topic}&date=${date}&title=${title}`)
      
      //put them back to forum main page
      this.setState({
        forumPage:0,
        forumTitle: "Forums",
        curTitle: ''
      })

    }
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
        <TextInput style={{fontSize:20,flex:0.4,color:"black",backgroundColor:"white",textAlign:"center"}} type="text" placeholder='title' onChangeText={(text)=>{
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
    <SafeAreaView style={{flex:1,}}>

        <Text onPress={props.create} style={forumStyles.createpost}>Create A Post</Text>

        <FlatList style={{flexGrow:1,}} data={props.list} renderItem={({ item,index }) => (
          <TouchableOpacity style={forumStyles.items} onPress={()=>{props.viewPost(index)}}>
        <Text style={{textAlign:"center",fontWeight:"bold"}}>{item.title}</Text>
        <Text style={{textAlign:"center"}}>by {item.name}</Text>
        <Text style={{textAlign:"center"}}>{new Date(parseInt(item.date)).getDate()}/{new Date(parseInt(item.date)).getMonth()+1}/{new Date(parseInt(item.date)).getFullYear()}</Text>
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