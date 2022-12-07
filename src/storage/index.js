import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeStringData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      throw e 
    }
}

export const storeObjectData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    throw e 
  }
}

export const getStringData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      return value
    }
  } catch(e) {
    throw e
  }
}

export const getObjectData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    throw e
  }
}

export const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
    throw e
  }
}
