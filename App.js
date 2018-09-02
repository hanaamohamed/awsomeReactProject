import React,{ Component }  from 'react';
import { StyleSheet, Text, View, Dev } from 'react-native';
import Header from './src/components/common/Header';
import MovieList from './src/components/movie_list/MovieList'


export default class App extends Component {
  render() {
    return (
      <View style={styles.bodyContainer}>
       <Header headerText={"Albums!"}/>
       <MovieList/>
       
      </View>
    );
  }
}

const styles =  StyleSheet.create({
  bodyContainer: {
    flex:1,
    marginTop:24,
    flexDirection:'column',

  }
});
