/*

This component provides simple horizontal scrolling colour options that you can select from

Example Usage:

<ColourPanner 
  onColourSelect={
    (hex) => {
      this.props.onColourSelect(hex);
    }
  }
/>

*/

import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  colourPanner: {
    paddingTop: 5
  },
  scrollContainer: {
  },
  colourItem: {
    marginTop: 4,
    marginBottom: 4
  }
});

export default class ColourPanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHex: '#ffffff'
    }

    // Dynamic colour item size based on device height
    this.defaultOptionStyle = {
      width: 32, 
      height: 50
    }   

    this.colourChoices = ["#ffffff", "#000000", "#101010", "#666666", "#808080", "#999999", "#ff1493", "#ff00ff", "#8a2be2", "#800080", "#660066", "#794044", "#c39797", "#cbbeb5", "#c0c0c0", "#cccccc", "#c0d6e4", "#b0e0e6", "#afeeee", "#b6fcd5", "#d3ffce", "#b4eeb4", "#a0db8e", "#bada55", "#fef65b", "#ffff66", "#fff68f", "#ffc3a0", "#ffdab9", "#ffc0cb", "#ffb6c1", "#ffe4e1", "#faebd7", "#f5f5dc", "#dddddd", "#e6e6fa", "#eeeeee", "#f5f5f5", "#f0f8ff",  "#c6e2ff", "#008080", "#088da5", "#0099cc", "#20b2aa", "#00ced1", "#40e0d0", "#7fffd4", "#81d8d0", "#66cccc", "#66cdaa", "#6897bb", "#468499", "#3b5998", "#000080", "#191970", "#003366", "#0e2f44", "#133337", "#333333", "#065535", "#008000", "#00ff00", "#00ff7f", "#00ffff", "#3399ff", "#0000ff", "#800000", "#8b0000", "#990000", "#cc0000", "#ff0000", "#ff4040", "#ff4444", "#f6546a", "#ff6666", "#ff7373", "#fa8072", "#f08080", "#ff7f50", "#daa520", "#ffa500", "#ffd700", "#ffff00", "#ccff00"];
  
  }

  /**
   * Handles the press event on a colour
   */
  handleOnPress(hex) {

    this.setState({
      selectedHex: hex
    })

    // Calls prop function
    if ( typeof this.props.onColourSelect == 'function' ) {
      setTimeout(() => {
        this.props.onColourSelect(hex);        
      }, 1)
    }

  }

  render() {
      
    let optionStyle;
    if ( typeof this.props.optionStyle != 'undefined' ) {
      optionStyle = this.props.optionStyle
    }
    else {
      optionStyle = this.defaultOptionStyle;
    }

    let scaledDiff = ((optionStyle.height * 1.25) - optionStyle.height) / 2;

    return (
      <View style={[this.props.style, styles.colourPanner]}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          {this.colourChoices.map(hex => {
            return (
              <TouchableWithoutFeedback 
                onPress={() => this.handleOnPress(hex)}
                key={hex}
              >
                <View 
                  style={
                    [
                      optionStyle,
                      {
                        backgroundColor: hex,
                        marginTop: scaledDiff,
                        marginBottom: scaledDiff,
                        elevation: hex == this.state.selectedHex ? 10 : 1,
                        zIndex: hex == this.state.selectedHex ? 2 : 1,
                        transform: [
                          { scale: hex == this.state.selectedHex ? 1.25 : 1 },
                          { translateY: hex == this.state.selectedHex ? ((scaledDiff / 2) * -1) : 0 },
                        ]
                      }, 
                      styles.colourItem
                    ]
                  }
                >
                </View>
              </TouchableWithoutFeedback>
            )
          })}
        </ScrollView>
      </View>
    )
  }

}
