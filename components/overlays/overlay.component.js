/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Modal,
  View,
  Button,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

export default class Overlay extends Component<{}> {

  state = {
    modelView : false,
  }

  showModel = () =>{
    this.setState({modelView : true})
  }
  hideModel = () =>{
    this.setState({modelView : false})
  }
  
  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity onPress={this.showModel} style={styles.btnStyle}>
          <Text>Click Me </Text>
        </TouchableOpacity>
        <Modal  visible={this.state.modelView} transparent={true}>
          <TouchableWithoutFeedback  onPress={this.hideModel}>
            <View style={styles.containerStyle}>
            <Text>This is a Overlay </Text>
              <TouchableWithoutFeedback>
                <View style={styles.modelStyle}>
                  <Text>This is Text</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
          </Modal>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  btnStyle:{
    width:100,
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'green'
  },
  viewStyle: {
    flex:1,
    paddingTop:'10%'
  },
  containerStyle: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(37, 8, 10, 0.78)'
  },
  modelStyle:{
    height:200,
    width:'80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  }
});
