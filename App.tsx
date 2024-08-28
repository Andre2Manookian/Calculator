import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { TheamContext } from './Src/Context/TheamContex';
import { useState } from 'react';
import { myColors } from './Src/Styles/Colors';
import Button from './Src/Components/Button';
import MyKeyboard from './Src/Components/myKeyboard';

export default function App() {
  const [theam, setTheam] = useState('light')
  return (
    <TheamContext.Provider value={theam}>
    <SafeAreaView style={theam === 'light' ? styles.container :[styles.container , {backgroundColor:"#000"}]}>
      <StatusBar style="auto" />
      <Switch 
        value={theam === 'light'}
        onValueChange={() => setTheam(theam === 'light' ? 'dark' : 'light')}
      />
      <MyKeyboard/>
     
    </SafeAreaView>
    
    </TheamContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
