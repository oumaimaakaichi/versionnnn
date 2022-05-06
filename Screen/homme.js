import React from 'react';

import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  Button,
  ScrollView,
  Dimensions
 
} from 'react-native';
const {width:WIDTH} =Dimensions.get('window')

const Homme = ({navigation}) => {
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'whitesmoke'}}>
    <ScrollView >

    {/* Onboarding Image */}
    <Image
      source={require('../assets/b.webp')}
    style={styles.image}
    />
    

    <View style={{paddingHorizontal: 20, paddingTop: 50}}>
        {/* Title container */}
        <View>
          <Text style={styles.title}>Welcome to Aghsalni</Text>
          
        </View>

        {/* Text container */}
        <View style={{marginTop: 10}}>
          
          <Text style={styles.textStyle}>visit in just a few clicks</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 30,
        }}>
        {/* button */}
        <Pressable  onPress={() => navigation.navigate('OnBoardScreenL')}>
          <View style={styles.btn}>
            <Text style={{color: 'white'}}>Get Started</Text>
          </View>
        </Pressable>
      </View>
      </ScrollView>
  </SafeAreaView>


  );
};

const styles = StyleSheet.create({
  image: {
    
    height: 320,
    width: WIDTH,
    borderBottomLeftRadius: 140,
 marginBottom:20
   
   
   
  },
  scrollView: {
    backgroundColor: '#E6E6E6',
    marginVertical: 0,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: 'grey',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: 'black',
  },
  btn: {
    height: 50,
    marginHorizontal: 20,
    backgroundColor: '#004792',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:80
  },
  title: {fontSize: 20 , fontWeight:'bold', fontFamily: 'monospace'},
  textStyle: {fontSize: 15 },
});
export default Homme;