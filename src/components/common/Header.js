import React,{ Component }  from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * This a class based component to handle the header compoennet 
 */
export default class Header extends Component{

    render(){
        const { container,titleStyle } = styles;
        
        return (
            <View style={container}>
                <Text style={titleStyle}>{this.props.headerText}</Text>
            </View>
        )
            
    };  
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f8f8f8',
        
      paddingTop:10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5},
      shadowOpacity: 0.8,
      elevation:1,
      alignItems: 'center',
      justifyContent:'center',
      paddingBottom:10,
    },
    titleStyle:{
        fontSize:25,
    },
  });