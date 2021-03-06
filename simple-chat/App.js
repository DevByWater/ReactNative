import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'

import Home from './src/components/Home'
import Chat from './src/components/Chat'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={styles.container} >
          <Scene key='home' component={Home} title="Home"/>
          <Scene key='chat' component={Chat} title="Chat"/>          
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    backgroundColor: '#fff'
  }
});
