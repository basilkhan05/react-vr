import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  VrButton,
  Text
} from 'react-vr';

export default class react_vr extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <VrButton
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [0, 0, -1 ] }]
          }}
          onInput={(evt) => {
            console.log('type', evt.nativeEvent.inputEvent.type)
            console.log('eventType', evt.nativeEvent.inputEvent.eventType)
          }}
          onMove={(evt) => {
            console.log('onMove', evt.nativeEvent)
          }}
          onExit={() => { console.log('onExit')}}
          onEnter={() => { console.log('onEnter')}}
          onClick={() => {console.log('clicked')}}
          onLongClick={() => {console.log('clicked long')}}
          onButtonPress={() => {console.log('pressed')}}
          onButtonRelease={() => {console.log('released')}}
          longClickDelayMS={4000}
        >
          <Text>Update</Text>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr', () => react_vr);
