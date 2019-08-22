import React from 'react';
import {View, Text} from 'react-native';

const Header = ({textHeaders}) => {
  const {head, textSize} = styles;
  return (
    <View style={head}>
      <Text style={textSize}> {textHeaders} </Text>
    </View>
  );
};

const styles = {
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative',
  },
  textSize: {
    fontSize: 30,
  },
};

export default Header;
