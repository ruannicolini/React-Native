import React, { Component } from 'react';
import { View, Image } from 'react-native';

class Topo extends Component{
    render(){
      return(
        <View> 
          <Image source = { require('../../img/jokenpo.png') }/>  
        </View>
      );
    }
  }

export default Topo;