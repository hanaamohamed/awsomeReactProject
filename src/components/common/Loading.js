import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default Loading = (props) => {
    const {loadingContainerStyle,loadinTextStyle} = styles;
    return (
        <View style={loadingContainerStyle}>
            <Text style={loadinTextStyle}>Loading {props.loadingText}...</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    loadingContainerStyle:{
        flex:2,
        backgroundColor: 'powderblue',          
        alignItems: 'center',
        justifyContent:'center',
    },
    loadinTextStyle:{
        color: 'white',
        fontSize: 30,

    }
});