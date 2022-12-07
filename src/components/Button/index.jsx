import React from 'react';
import { TouchableOpacity, Dimensions} from 'react-native';
const {width} = Dimensions.get('window')


const Button = ({
  children, 
  theme, 
  style,
  backgroundcolor,
  onPress,
  gutter,
  buttonSize = .8
}) => {
  
  const background = (color) => {
    switch (color) {
      case 'purple': theme.colors.purple
        return 
      case 'dark': 
        return theme.colors.dark
      default:
        return theme.colors.blue
    }
  }

  const backgroundColor = background(backgroundcolor)

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: width*buttonSize,
          height: 45,
          borderRadius: 30,
          backgroundColor: backgroundColor,
        },
        gutter && {marginVertical: 20},
        style,
      ]}
    >
        {children}
    </TouchableOpacity>
    );
}

export default Button;