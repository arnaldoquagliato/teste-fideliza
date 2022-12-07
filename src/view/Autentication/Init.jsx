import React, {useState} from 'react';
import { View, Image} from "react-native";
import {
  Containers,
  Typografy,
  Button,
  Input
} from "../../components";
import { Entypo } from "@expo/vector-icons";
import { fidelizaLogo } from "../../assets/media";
const Init = ({ theme, navigation }) => {
  
  const handle = () => alert("clico foi?")
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <Containers.Center>
      <View
        style={{
          backgroundColor: theme.colors.blue,
          borderRadius: 20,
          padding: 10
        }}
      >
      <Image 
        source={fidelizaLogo}
        style={{
          height: 133,
          width: 267
        }}
        resizeMode='contain'
      />
      <Input 
        theme={theme}
        state={email}
        setState={setEmail}  
        placeholder='Email'
        gutter
      />
      <Containers.SpaceBetween
        style={{
          alignItems: "center",
        }}>
        <Input 
          theme={theme}
          state={password}
          setState={setPassword}  
          placeholder='senha'
          gutter
          show={!showPassword}
        />
        <Entypo 
          name={!showPassword ? "eye-with-line":"eye" }
          size={24} 
          color={theme.colors.white}
          style={{
            marginLeft: 5
          }}
          onPress={() => setShowPassword(!showPassword)}
          />
      </Containers.SpaceBetween>
        <Button 
          theme={theme}
          gutter
          style={{
            backgroundColor: theme.colors.purple
          }}
          onPress={() => handle()}
          >
          <Containers.Center>
            <Typografy 
              size={'h3'}
              color={'white'}
              theme={theme}>
              Entrar
            </Typografy>
          </Containers.Center>
        </Button>
      </View>

      <Typografy 
        size={'h3'}
        color={'white'}
        theme={theme}>
        ou
      </Typografy>

      <Button 
          theme={theme}
          gutter
          onPress={() => handle()}
          backgroundcolor="dark"
          >
          <Containers.Center>
            <Typografy 
              size={'h3'}
              color={'white'}
              theme={theme}>
              Reinvindicar uma fidelização
            </Typografy>
          </Containers.Center>
        </Button>
      <Button 
          theme={theme}
          gutter
          onPress={() => handle()}
          backgroundcolor="dark"
          >
          <Containers.Center>
            <Typografy 
              size={'h3'}
              color={'white'}
              theme={theme}>
              Recuperar senha
            </Typografy>
          </Containers.Center>
        </Button>      
    </Containers.Center>
  );
}

export default Init;