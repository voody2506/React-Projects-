import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27
import ChangeImage from './ChangeImage'
import App from './App'

export default class DetailsScreen extends React.Component {

	static navigationOptions = {
    title: 'Details',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Picture Menu"
          onPress={() => this.props.navigation.navigate('Change')}
        />
      </View>
    );
  }
}