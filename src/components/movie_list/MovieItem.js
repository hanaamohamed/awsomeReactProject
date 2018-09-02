import React,{Component}from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default class MovieItem extends Component{

    render(){
        return(
            <View> 
                <Text style={styles.itemStyle}>{this.props.movie.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemStyle:{
            fontSize: 15,
            margin: 10,
        }
}); 
