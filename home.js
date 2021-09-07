import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity,Button } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import firebaseSetup from "./setup";
const Home = (props) => {
  console.log(props);
  // const auth = firebaseSetup();
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userid, setUserid] = useState("");

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        setUseremail(userInfo.user.email);
        setUsername(userInfo.user.name);
        setUserid(userInfo.user.id);
        // setUserid(user.uid)
      } else {
        setUseremail("");
        setUsername("");
        setUserid("");
      }
      //   this.setState({ userInfo });
      console.log({ userInfo });
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };
  const signOut = async () => {
    try {
      const userInfo =  await GoogleSignin.signOut();
      console.log('logout',userInfo)
        setUseremail('');
        setUsername('');
        setUserid('');
        setUserid('') 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
      <Button
      title="Sign out"
      onPress= {signOut}
    />
      
      <View style={{marginTop:20,}}>
      <Text style={{textAlign:'center'}}>USER LOGIN DETAIL</Text>
      <Text style={{fontSize:15,textAlign:'center'}}>Username:-{username}</Text>
      <Text style={{fontSize:15,textAlign:'center'}}>useremail:{useremail}</Text>
      <Text style={{fontSize:15,textAlign:'center'}}>userid:{userid}</Text>
      
      </View>
    </View>
  );
};

export default Home;
