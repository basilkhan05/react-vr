import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Model,
  AmbientLight, DirectionalLight
} from 'react-vr';

export default class react_vr extends React.Component {
  render() {
    return (
      <View>
        <Model 
          source={{
            obj: asset('Astronaut.obj')
          }}
          style={{
            color: 'orange',
            transform: [{ translate: [0,-2, -5 ] }]
          }}
          lit
          texture={asset('chess-world.jpg')}
        />
        <DirectionalLight
          style={{ transform: [{ translateX: -1000 }]}}
        />
        <AmbientLight
          intensity={0.4}
         />
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr', () => react_vr);
