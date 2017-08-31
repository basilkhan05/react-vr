import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  PointLight,
  View,
  Sphere, 
  Box, 
  Cylinder,
  Plane
} from 'react-vr';

export default class react_vr extends React.Component {
  render() {
    return (
      <View>
        <Sphere
          style={{
            color: 'lightblue',
            transform: [{ translateZ: -2 }]
          }}
          lit
          texture={asset('mountains.jpg')}
          heightSegments={20}
          widthSegments={20}
        />
        <PointLight
          intensity={1}
          style={{
            transform: [{ translate: [0, 700, 700 ]}]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr', () => react_vr);
