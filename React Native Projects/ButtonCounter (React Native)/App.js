import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {counter:0,


    };
    this.btnClick = this.btnClick.bind(this)

  }

  btnClick(){
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.counter}</Text>
        <Button onPress={this.btnClick}
            title="Press Me"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
