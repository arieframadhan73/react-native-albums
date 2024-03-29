import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
const Button = ({text, onPress}) => {
  const {btnStyles, textStyle} = styles;
  return (
    <TouchableOpacity style={btnStyles} onPress={onPress}>
      <Text style={textStyle}> {text} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  btnStyles: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export default Button;
