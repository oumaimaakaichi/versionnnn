import React, {useContext, useState , useEffect} from 'react';
import { StyleSheet, Text, View , ImageBackground ,ScrollView,SafeAreaView, Image , TextInput ,TouchableOpacity} from 'react-native';
//import bgImage from './assets/logo.jpg'
import logo from '../assets/loggg.jpg'
import { Dimensions, input } from 'react-native-web';
import Icon from 'react-native-vector-icons/Ionicons'
import { Component } from 'react/cjs/react.production.min';
const {width:WIDTH} =Dimensions.get('window')
import * as ImagePicker from 'expo-image-picker';
import { StackActions } from '@react-navigation/native';
//import {AuthContext} from '../contexte/AuthContext';
const Register = ({navigation}) => { 
  const [Nom_station, setNom_station] = useState('');
  const [type_lavage, setType_lavage] = useState('');
  const [ville, setVille] = useState('');
  const [adresse, setAdresse] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const[station , setStation] = useState('')
const [avatar, setAvatar] = useState('');
  const [progress, setProgress] = useState(0);
 
  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }

    if (status === 'granted') {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!response.cancelled) {
        setAvatar(response.uri);
      }
    }
  };
  //  const {isLoading, register} = useContext(AuthContext);
  async function Add(){
    console.log({
      Nom_station,
      email,
      ville,
      adresse,
      avatar

    })
    
    
   
      fetch("http://192.168.43.230:3001/utilisateur/register" , {
          method: 'POST',
        
          headers:{
              "Content-Type" : 'application/json',
             
          },
          body:JSON.stringify({
            Nom_station,
            type_lavage,
            ville,
            adresse,
            longitude,
            latitude,
            email,
            password,
            Role:'lavage',
            avatar


          }),

        
      }).then(res=>res.json())
      .then(async data=>{
        setStation(data)
        if(data){
         if(data.email!='' && data.password!=''){
          navigation.navigate('signin')
        }}
        
      })
      .catch(err=>{
        console.log(err)
      });
     
      
     
  }
  useEffect(async () => {
   
        setEmail(station.email)
        setNom_station(station.Nom_station)
       setVille(station.ville)
       setAdresse(station.adresse)
       setAvatar(station.avatar)
       setLatitude(station.longitude)
       setLatitude(station.latitude)
       setType_lavage(station.type_lavage)
        console.log(station)
  }, []);
 
 /* const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append('profile', {
      name: new Date() + '_profile',
      uri: profileImage,
      type: 'image/jpg',
    });

    try {
      const res = await station.post('/register', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
       
        },
      });

      if (res.data.success) {
        props.navigation.dispatch(StackActions.replace('StationProfile'));
      }
    } catch (error) {
      console.log(error.message);
    }
  };*/

  
  return (
    <>
    {station  != undefined ?
      <SafeAreaView style={{backgroundColor:'white'}}>
      <ScrollView style={styles.scrollView}>
      <View style={{alignItems:'center' , alignSelf:'center'}}>
     <Text style={{color:'#4A919E' , fontWeight:'bold' , marginBottom:20 , fontSize:20}}>Register</Text>
      </View>
      <View style={styles.containerr}>
      <View>
        <TouchableOpacity
          onPress={openImageLibrary}
          style={styles.uploadBtnContainer}
        >
         {avatar ? (
            <Image
              source={{ uri: avatar }}
              style={{ width: '100%', height: '100%' }}
            
            />
            ) : ( <Text style={styles.uploadBtn} onChangeText={(text)=>setAvatar(text)}>image</Text>
              
            )}
        </TouchableOpacity>
        
        
      </View>
      
    </View>
        
    

     
      <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Nom station'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setNom_station(text)}
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Type lavage'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setType_lavage(text)}
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Ville'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setVille(text)}
        />
    </View>
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Adresse'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setAdresse(text)}
        />
    </View>
    
    <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'logitude'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setLongitude(text)}
        />
    </View>
    <View  >
     
     
     <TextInput 
      style={styles.input}
      placeholder={'latitude'}
      placeholderTextColor={'grey'}
      underLineColorAndroid='transparent'
      onChangeText={text => setLatitude(text)}
      />
  </View>
      <View  >
     
     
       <TextInput 
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor={'grey'}
        underLineColorAndroid='transparent'
        onChangeText={text => setEmail(text)}
        />
    </View>
    <View >
       
        <TextInput 
        style={styles.input}
        placeholder={'Password'}
        placeholderTextColor={'grey'}
        secureTextEntry
        underLineColorAndroid='black'
        onChangeText={text => setPassword(text)}
        required
        />
        
        
        
      </View>
      <TouchableOpacity style={styles.btnLogin} onPress={() => {
            Add();
          }}>
       <Text style={styles.TextBtn}>Register</Text>

      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 20 ,marginBottom:30 ,alignItems:'center',
alignSelf:'center'}}>
          <Text>Already have an accoutn? </Text>
          <TouchableOpacity >
            <Text style={styles.link} onPress={() => navigation.navigate('signin')}>Login</Text>
          </TouchableOpacity>
        </View>
    
       
        
    </ScrollView>
    </SafeAreaView>
    : null}
    </>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width : null,
    height: null,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    marginVertical: 10,
  },
  icon:{
  
    top:8,
    left:37,
  },
  btnLogin:{
width: 200,
height : 45,
borderRadius : 25,
backgroundColor: 'black',
justifyContent: 'center',
marginTop : 20,
alignItems:'center',
alignSelf:'center'
  },
  TextBtn :{
    color : 'white',
    fontSize:16,
    textAlign: 'center'
  },
  link: {
    color: 'blue',
  },
  input:{
    width:300,
    height:45,
    marginTop:10,
    marginBottom:10,
    borderRadius:25,
    fontSize:10,
    paddingLeft:45,
    backgroundColor: '#f5f5f5',
    color: 'black',
    marginHorizontal : 15,
    alignSelf:'center',
    alignItems:'center'

  },
  logoContainer:{
alignItems:'center'
},
btnEye:{

  top:17,
  right:60,
}
,
logoText:{
  color:'black',
fontWeight:600,
  fontSize:20,
  fontWeight:'400',
  marginTop:10,
  opacity:0.5,
  marginBottom:10
},
  logo:{
    width:150,
    height:180,
    marginBottom:20
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
 
  link: {
    color: 'blue',
  },
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    overflow: 'hidden',
  },
  uploadBtn: {
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.3,
    fontWeight: 'bold',
  },
  skip: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    opacity: 0.5,
  },
  containerr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
export default Register;