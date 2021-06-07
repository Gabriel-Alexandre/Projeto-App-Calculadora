import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Display from './components/Display'
import Tecla from './components/Tecla'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Display value={10}/>
      </View>

      <View style={styles.button}>
        <Tecla propriedade="7"/>
        <Tecla propriedade="8"/>
        <Tecla propriedade="9"/>
        <Tecla propriedade="/" operation={true}/>
        <Tecla propriedade="4"/>
        <Tecla propriedade="5"/>
        <Tecla propriedade="6"/>
        <Tecla propriedade="-" operation={true}/>
        <Tecla propriedade="1"/>
        <Tecla propriedade="2"/>
        <Tecla propriedade="3"/>
        <Tecla propriedade="+" operation={true}/>
        <Tecla propriedade="0"/>
        <Tecla propriedade="."/>
        <Tecla propriedade="="/>
        <Tecla propriedade="-" operation={true}/>
        <Tecla propriedade="Clear" operation={true} multi={true}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  display: {
    flex: 1,
  },
});
