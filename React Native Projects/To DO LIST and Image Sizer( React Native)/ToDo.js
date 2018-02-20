import React from 'react';
import {FlatList,SectionList,StyleSheet, Text, View,Button,Alert,Image,Slider, TextInput } from 'react-native';

export default class ToDo extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    text: '',
    myArray:[{
      key:'This is my first row'
    },
    {
      key:'This is my second Row'
    },
    {
      key:'Hello World!'
    },
    {
      key:'Checking new Row in React Native'
    }
    ]
  };

  this.onPressButton = this.onPressButton.bind(this);
}

onPressButton(){
  this.setState({
    myArray:[...this.state.myArray,{key:this.state.text}],
    text: ''
  });
  
}


FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

    GetItem (item) {
   
  Alert.alert(item);

  }

render(){
	return(
    <View style={styles.container}>
      <View style={styles.row}>
      <TextInput
          value={this.state.text}
          style={{height: 40,width:150}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button
            onPress={this.onPressButton}
            title="Press Me"
            color= "#841584"
            />
        </View>

      <FlatList 
        ItemSeparatorComponent = {this.FlatListItemSeparator}      
       data = {this.state.myArray}
      keyExtractor={(item, index) => item.key}
      renderItem={({item}) => <Text style={styles.list} onPress={this.GetItem.bind(this, item.key)}>{item.key}</Text>}
/>
			

			</View>

	);
}

}

const styles = StyleSheet.create({

  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 60,
    paddingRight:40
  },

  container: {
    justifyContent: 'center',
    flex:1,
    margin: 10

  },
  list:{
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
