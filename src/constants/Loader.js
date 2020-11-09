import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { LoaderLogo } from '../assets';

export default class Loader extends Component {
  _renderLoader = () => {
    if (this.props.isLoading) return (
      <View style={styles.background}>
        <Image source={LoaderLogo} />
      </View>
    )
    else return null;
  }
render () {
    return (
      this._renderLoader()
    )
  }
}
const styles = StyleSheet.create ({
  background: {
    // backgroundColor: <>,
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});