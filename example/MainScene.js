import React from 'react';
import { StyleSheet, View } from 'react-native';
import HelloWorld from 'react-native-helloworld';
export default class MainScene extends React.Component {

  render() {
    return <HelloWorld style={styles.hello} />;
  }
}

const styles = StyleSheet.create({
  hello: {
    width: 300,
    height: 200,
  },
});
