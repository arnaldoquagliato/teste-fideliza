import React from 'react';
import { View, TextInput, Dimensions } from 'react-native';

// import { Container } from './styles';
const {width} = Dimensions.get('window')

const Input = ({
  state,
  setState,
  placeholder = "Inserir texto",
  colorPlaceholder ,
  theme,
  style,
  gutter = false,
  show = false,
  widthPercentage = 8,
  keyboardType = 'default'
}) => {

  const colorDefultPlaceholder = colorPlaceholder ? colorPlaceholder : theme.colors.black

  const percentage = widthPercentage*0.1
  return (
    <TextInput 
      placeholder={placeholder}
      value={state}
      onChangeText={setState}
      style={[
        {
          width: width*percentage ,
          height: 45,
          borderRadius: 30,
          backgroundColor: theme.colors.white,
          borderWidth: 2,
          borderColor: theme.colors.white,
          textAlign: "center",
        },
        style,
        gutter && {marginVertical: 20},
      ]}
      secureTextEntry={show}
      placeholderTextColor={colorDefultPlaceholder}
      keyboardType={keyboardType}
    />
  );
}

export default Input;