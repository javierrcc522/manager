import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyBW5-idGWnrnh51J5TBE7C6oMoO4d6sAbc',
      authDomain: 'manager-fa707.firebaseapp.com',
      databaseURL: 'https://manager-fa707.firebaseio.com',
      projectId: 'manager-fa707',
      storageBucket: 'manager-fa707.appspot.com',
      messagingSenderId: '98453829472'
    };
    firebase.initializeApp(config);
  }

  render() {
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
