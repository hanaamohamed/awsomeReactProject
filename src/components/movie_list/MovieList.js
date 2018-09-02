import React,{ Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import MovieItem from './MovieItem';
import Loading from '../common/Loading';
import Card from '../common/Card';

import ReactObserver from 'react-event-observer';
import MovieListPresenter from './MovieListPresenter';

// const loadingStat: emum{
//     LOADING,
//     DONE_LOADING_SUCCESSFULLY,
//     FAILED_TO_LOAD
// };

export default class MovieList extends Component{
    observer = ReactObserver();

    

    constructor(props){
        super(props);
        this.state = {isLoading: 0,dataSource: null,mError:null};
  
    }

    componentWillMount(){ 
        console.log("componentWillMount");
        MovieListPresenter(this.observer);
        this.registerListener();
    }

    registerListener(){
        listener =  this.observer.subscribe("moviesChannel",(movies) =>{
            console.log("movies are ready");
            this.setState({
                            isLoading: 1,
                            dataSource: movies 
                        });
        }).on('error',(e)=>{
            console.log('Your function has error:')
            console.log(e);
        });
    }

    renderMovies(){
       return this.state.dataSource.movies.map(movie =>
            <Card key={movie.id}>    
              <MovieItem  movie={movie} />
            </Card>
        );
    }


    render(){ 
        const {listStyle,errorStyle} = styles;
    
        if(this.state.isLoading == 0){
            return (
               <Loading loadingText='movies'/>
            );
        }else if (this.state.isLoading == 1){
            console.log(this.state.dataSource);
            return (
                <View style={listStyle}>
                  {this.renderMovies()}
                </View>
            
            );
        }else if (this.state.isLoading == 2){
            return (
                <View style={errorStyle} >
                    <Text>error: {this.state.mError[0]}</Text>
                </View>
            );
        }
      
    }

    componentWillUnmount(){
        listener.unsubscribe();
    }

}


const styles = StyleSheet.create({
    listStyle:{
        marginStart: 10,
        marginTop:10
    },
    errorStyle:{
        flex:2,
        backgroundColor: 'powderblue',          
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'red'
    }
});

