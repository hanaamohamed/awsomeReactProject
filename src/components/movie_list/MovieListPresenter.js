import React from 'react';
import axios from 'axios';
import ReactObserver from 'react-event-observer';


export default MovieListPresenter = (observer) => {
   
    axios.get('https://facebook.github.io/react-native/movies.json')
    .then(response => {
            console.log(response.data);
            observer.publish("moviesChannel", response.data)
        })
    .catch(error => {
        observer.publish('error',error);
        console.log(error);
    });

}