import React ,{useState} from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Display from './components/Display'
import Tecla from './components/Tecla'

export default function App() {
  const [display, setDisplay] = useState('');
  const [operation, setOperetion] = useState([]);

  function functionDisplay(concatenar) {
    setDisplay(display + concatenar)
  }

  function functionClear() {
    setDisplay('')
  }

  function functionOperetion(operador) {
    if(operation == 0) {
      setOperetion([display])
      functionClear()
    }else{
      setOperetion([,display])
      functionClear()
      // setDisplay(`${operation[0]} ${operation[1]}`)
      // try{
      //   setDiplay(`${eval(`${operation[0]} ${operador} ${operation[1]}`)}`)
      // }catch{
      //   console.warn('0')
      // }
      // setOperetion(operation.shift())
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Display value={display}/>
      </View>

      <View style={styles.button}>
        <Tecla propriedade="7" display={functionDisplay}/>
        <Tecla propriedade="8" display={functionDisplay}/>
        <Tecla propriedade="9" display={functionDisplay}/>
        <Tecla propriedade="/" operation={true} display={functionOperetion}/>
        <Tecla propriedade="4" display={functionDisplay} />
        <Tecla propriedade="5" display={functionDisplay}/>
        <Tecla propriedade="6" display={functionDisplay}/>
        <Tecla propriedade="*" operation={true} display={functionOperetion}/>
        <Tecla propriedade="1" display={functionDisplay}/>
        <Tecla propriedade="2" display={functionDisplay}/>
        <Tecla propriedade="3" display={functionDisplay}/>
        <Tecla propriedade="+" operation={true} display={functionOperetion}/>
        <Tecla propriedade="0" display={functionDisplay}/>
        <Tecla propriedade="." display={functionDisplay}/>
        <Tecla propriedade="=" display={functionOperetion}/>
        <Tecla propriedade="-" operation={true} display={functionOperetion}/>
        <Tecla propriedade="Clear" operation={true} multi={true} display={functionClear}/>
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
