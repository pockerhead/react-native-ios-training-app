/**
 * @flow
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Text_Actions from '../actions/text_action'
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
// import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
      'u'
});
class CompApp extends Component < {} > {
  saveText(text){
    this.props.Text_Actions.TEXT(text);
  }
  clearText(text){
    this.props.Text_Actions.TEXT('');
    
  }
  render() {
    const {text} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React!
        </Text>
        <TextInput
          multiline={true}
          numberOfLines={5}
          placeholder='Type your text here'
          onChangeText={this.saveText.bind(this)}/>
        <Text style={styles.instructions}>
          To get started, увшt App.js
        </Text>
        <Text style={styles.instructions}>
          {text}
        </Text>

        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button title='Стереть' onPress={this.clearText.bind(this)}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

function mapDispatchToProps(dispatch) {
  return {
    Text_Actions: bindActionCreators(Text_Actions, dispatch)
  }
}
function mapStateToProps(state) {
  return {text: state.reducer.text}
}

export default connect(mapStateToProps, mapDispatchToProps)(CompApp)
