import React, {Component} from 'react'; 
import {Button, StyleSheet, View} from 'react-native';
import getDarkStyleSheet from './styles';
 
export default class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      darkTheme: false
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  };
  
  toggleTheme() {
    this.setState({ 
      darkTheme: !this.state.darkTheme, 
    })
  };  
  
  render() {
    const styles = getDarkStyleSheet(this.state.darkTheme);
    const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Button title={backgroundColor} onPress={this.toggleTheme} />
        </View>
      </View>
    );
  }
}
