import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native'
import Display from './components/Display'
import Tecla from './components/Tecla'

export default function App() {
  const [display, setDisplay] = useState('');

  function functionDisplay(concatenar) {
    setDisplay(display + concatenar)
  }

  function functionClear(propriedade) {
    if(propriedade == 'Clear'){
      setDisplay('')
    }else{
      setDisplay(display.slice(0,-1))
    }
  }

  function functionOperetion() {
    try{
      setDisplay(`${eval(display)}`)
    }catch{
      setDisplay('sintax error')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content"/>
      <View style={styles.display}>
        <Display value={display} />
      </View>

      <View style={styles.button}>
        <Tecla propriedade="7" display={functionDisplay} />
        <Tecla propriedade="8" display={functionDisplay} />
        <Tecla propriedade="9" display={functionDisplay} />
        <Tecla propriedade="/" operation={true} display={functionDisplay} />
        <Tecla propriedade="4" display={functionDisplay} />
        <Tecla propriedade="5" display={functionDisplay} />
        <Tecla propriedade="6" display={functionDisplay} />
        <Tecla propriedade="*" operation={true} display={functionDisplay} />
        <Tecla propriedade="1" display={functionDisplay} />
        <Tecla propriedade="2" display={functionDisplay} />
        <Tecla propriedade="3" display={functionDisplay} />
        <Tecla propriedade="+" operation={true} display={functionDisplay} />
        <Tecla propriedade="0" display={functionDisplay} />
        <Tecla propriedade="." display={functionDisplay} />
        <Tecla propriedade="=" display={functionOperetion} />
        <Tecla propriedade="-" operation={true} display={functionDisplay} />
        <Tecla propriedade="Clear" operation={true} multi={true} display={functionClear} />
        <Tecla propriedade="Delete" operation={true} multi={true} display={functionClear} />
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

/**
 * Implementações futuras:
 * 
 * 1- Validar melhor o 'sintax error'
 * 2- Display de resultado (Modelo calculadora moderna)
 * 3- Otimizar visualização dos resultados
 * 4- Implementar mais funcionalidades
 * 
 * O que eu aprendi:
 * 
 * >> Otimizar o uso de useStates
 * >> É melhor utilizar funções que executam melhor meu objetivo. (Além de facilitar minha vida, são melhor testadas) -> Isso é algo bem importante, que quando for fazer um projeto é importante pensar muito bem em que ferramentas eu vou usar, pois isso poder tanto ajudar como dificultar minha vida.
 * 
 * >> Anotações: versão 1.0
 */