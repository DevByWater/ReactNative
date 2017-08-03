import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainComponent from './src/MainComponent'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.empty} />
       <MainComponent/>
       <View style={styles.empty} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#abcdef',
    },
    empty: {
        flex: 1
    }
});
