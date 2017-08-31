import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View
} from 'react-vr';

export default class react_vr extends React.Component {
  render() {
    return (
      <View>
        <Pano 
          source={asset('chess-world.jpg')}
          />
        <Text 
          style={{
            transform: [{ translateZ: -1 }] ,
            color: 'lightblue',
            backgroundColor: '#335',
            fontSize: 0.1,
            fontWeight: "300",
            width: 0.45,
            height: 0.45,
            textAlign: 'center',
            textAlignVertical: 'center',
            layoutOrigin: [0.5, 0.5]
          }}
        >
        Hello Basil
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr', () => react_vr);
