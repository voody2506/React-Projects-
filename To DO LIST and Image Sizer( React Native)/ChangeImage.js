import React from 'react';
import { StyleSheet, Text, View,Button,Alert,Image,Slider } from 'react-native';

export default class ChangeImage extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: `Welcome ${navigation.state.params.screen}`,
    }
    };
  constructor(props) {
    super(props);
    this.state = {value: 100,sWidth:100,sHeight:100};
  }

 change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
        sWidth: parseFloat(value),
        sHeight: parseFloat(value)
      };
    });
  }


  render() {
    return (
      <View style={styles.container}>

       <Image
       style={{width: this.state.sWidth, height: this.state.sHeight}}
       source={{uri: 'https://vignette.wikia.nocookie.net/note/images/1/1b/621715.jpg/revision/latest?cb=20130115120351&path-prefix=ru'}}
       />
       <Slider 
          style={{width: 200}}
          step={1}
          maximumValue={200}
          minimumValue={0}
          onValueChange={this.change.bind(this)}
          value={this.state.value}
       />
       <Button
        onPress={() => this.props.navigation.navigate('ToDo')}
       title="Go to Table vieew"
       color="#841584"
       accessibilityLabel="Learn more about table View"
       />
      </View>
    );
  }
}

ChangeImage.navigationOptions = {
  title: 'Second Screen Title',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

  },
});

module.exports = ChangeImage;
