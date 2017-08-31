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
          onLoad={() => { console.log('loaded') } }
          style={{
            transform: [{ rotateY: -90 }]
          }}
          // source={[
          //   asset('right.png'),
          //   asset('left.png'),
          //   asset('up.png'),
          //   asset('down.png'),
          //   asset('back.png'),
          //   asset('front.png')
          //   ]}
          />
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr', () => react_vr);
