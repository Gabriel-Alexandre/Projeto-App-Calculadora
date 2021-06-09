import React ,{useState} from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Display from './components/Display'
import Tecla from './components/Tecla'

export default function App() {
  const [display, setDisplay] = useState('');
  const [index0, setIndex0] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [result, setResult] = useState(0);

  function functionDisplay(concatenar) {
    setDisplay(display + concatenar)
    console.warn(`${display}`)
  }

  function functionClear() {
    setDisplay('')
  }

  function functionOperetion(operador) {
    if(index0 == 0 && index1 == 0) {
      setIndex0(parseFloat(display))
      functionClear()
    }else{
      setIndex1(parseFloat(display))
      
      switch (operador) {
        case '+':
          setResult(parseFloat(index0) + parseFloat(index1))
          setDisplay(`${result}`)
          console.warn(`${parseFloat(index0)}`)
          break;
        case '-':
          setResult(parseFloat(index0) - parseFloat(index1))
          setDisplay(`${result}`)
          break;
        case '*':
          setResult(parseFloat(index0) * parseFloat(index1))
          setDisplay(`${result}`)
          break;
        case '/':
          setResult(parseFloat(index0) / parseFloat(index1))
          setDisplay(`${result}`)
          break;
        default:
          console.warn('error')
      }
      
      //setIndex0(0)
      //setIndex1(0)
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
