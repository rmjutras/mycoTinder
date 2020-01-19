'use strict';

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import QuestionTree from './QuestionTree';
 
class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      text: QuestionTree.text,
      gestureName: 'none',
      backgroundColor: '#fff',
      currentNode: QuestionTree
    };
  }
 
  onSwipeUp(gestureState) {
    this.setState({text: 'You swiped up!'});
  }
 
  onSwipeDown(gestureState) {
    this.setState({text: 'You swiped down!'});
  }
 
  onSwipeLeft(gestureState) {
    let nextNode = this.state.currentNode.ifno;
    this.setState({
      currentNode: nextNode,
      text: nextNode.text
    });
  }
 
  onSwipeRight(gestureState) {
    let nextNode = this.state.currentNode.ifyes;
    this.setState({
      currentNode: nextNode,
      text: nextNode.text
    });
  }
 
  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      // case SWIPE_UP:
      //   this.setState({backgroundColor: 'red'});
      //   break;
      // case SWIPE_DOWN:
      //   this.setState({backgroundColor: 'green'});
      //   break;
      case SWIPE_LEFT:
        this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: 'yellow'});
        break;
    }
  }
 
  render() {
 
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
 
    return (
      <GestureRecognizer
        onSwipe={this.onSwipe.bind(this)}
        onSwipeUp={this.onSwipeUp.bind(this)}
        onSwipeDown={this.onSwipeDown.bind(this)}
        onSwipeLeft={this.onSwipeLeft.bind(this)}
        onSwipeRight={this.onSwipeRight.bind(this)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <Text>{this.state.text}</Text>
        <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
      </GestureRecognizer>
    );
  }
}
 
export default App;