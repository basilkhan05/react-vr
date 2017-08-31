import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Sphere, Box, Cylinder, Plane,
  AmbientLight, DirectionalLight, PointLight, SpotLight
} from 'react-vr';

export default class react_vr extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight
          intensity={2}
          style={{ color: 'brown' }}
         />
        <Sphere
          lit
          style={{
            color: 'yellow',
            transform: [{ 
              translate: [-1.5, 0, -4 ] 
            }]
          }}
          heightSegments={20}
          widthSegments={20}
        />
        <Box
          lit
          style={{
            color: 'blue',
            transform: [{ 
              translate: [0, 0, -6 ] 
            }]
          }}
        />
        <Cylinder
          lit
          radiusTop={0}
          segments={20}
          style={{
            color: 'red',
            transform: [{ 
              translate: [1.5, 0, -4 ]  
            }]
          }}
        />
        <Plane
          lit
          dimWidth={4}
          dimHeight={4}
          style={{
            color: 'green',
            transform: [{ 
              translate: [0, -0.5, -5] 
            },
            {
              rotateX: -90
            }]
          }}
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
