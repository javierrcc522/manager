import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
