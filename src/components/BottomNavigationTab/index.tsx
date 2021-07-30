import React from 'react';
import { View} from 'react-native';

interface Props{
  focused: boolean,
  inactiveIcon: any,
  activeIcon: any
}

const BottomNavigationTab : React.FC<Props> = ({focused, inactiveIcon, activeIcon}) => {

  if(!focused){
    return (
      <View>{inactiveIcon}</View>
    )
  } else {
    return (
      <View>{activeIcon}</View>
    )
  }
}

export default BottomNavigationTab;
