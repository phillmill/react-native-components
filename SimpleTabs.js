import React from 'react';
import { View, Animated, TouchableWithoutFeedback, Text, Image, StyleSheet, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  simpleTabs: {
    flex: 1,
    alignItems: 'center'
  },
  tabLabels: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingRight: 50
  },
  tabLabel: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 30,
    paddingRight: 30
  },
  tabActiveBorder: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  tabLabelText: {
    fontWeight: '700',
    color: '#FFFFFF'
  },
  tabContents: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 7
  },
  tabContent: {
    flex: 1
  }
});

export default class SimpleTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    }
  }

  render() {

    return (
      <Animated.View style={styles.simpleTabs}>
        
        {/* Tab labels */}
        <View style={[{height: this.props.tabHeight}, styles.tabLabels]}>
          {this.props.children.map((child, index) => {
            let thisTabActive = (this.state.activeTab == index);
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => this.setState({activeTab: index})}
              >
                <View style={[styles.tabLabel, {opacity: thisTabActive ? 1 : 0.5}]}>
                  <Text style={styles.tabLabelText}>{child.props.title}</Text>
                  <View style={
                    [
                      styles.tabActiveBorder,
                      {
                        height: thisTabActive ? 3 : 0
                      } 
                    ]
                  } />
                </View>
              </TouchableWithoutFeedback>
            )
          })}
        </View>

        {/* Tab content */}
        <View style={styles.tabContents}>
          {this.props.children.map((child, index) => {
            let thisTabActive = (this.state.activeTab == index);
            return (
              <View 
                key={index}
                // Using scale to hide inactive tabs here because display: none doesn't high some elements (ie. Slider)
                style={[!thisTabActive ? {position: 'absolute', top: SCREEN_HEIGHT} : {}, styles.tabContent]}
              >
                {child}
              </View>
            )
          })}
        </View>

      </Animated.View>
    )
  }

}

export class Tab extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View>
        {this.props.children}
      </View>
    )
  }
}