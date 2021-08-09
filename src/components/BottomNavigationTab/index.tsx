import React from 'react';
import { View, Image } from 'react-native';

interface Props{
  focused: boolean,
  width: number,
  height: number,
  inactiveIcon: any,
  activeIcon: any
}

const BottomNavigationTab : React.FC<Props> = ({focused, width, height, inactiveIcon, activeIcon}) => {

  if(!focused){
    return (
      <View style={{ paddingTop: 13 }}>
        <Image
          style={{width: width, height: height, resizeMode: 'contain'}}
          source={inactiveIcon}
        />
      </View>
    )
  } else {
    return (
      <View style={{ paddingTop: 13 }}>
        <Image
          style={{width: width, height: height, resizeMode: 'contain'}}
          source={activeIcon}
        />
      </View>
    )
  }
};

export default BottomNavigationTab;
