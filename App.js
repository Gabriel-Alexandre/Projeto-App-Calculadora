import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Display from './components/Display'
import Tecla from './components/Tecla'

export default function App() {
  const [display, setDisplay] = useState('');
  const [index0, setIndex0] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [operation, setOperation] = useState('');

  function functionDisplay(concatenar) {
    setDisplay(display + concatenar)
  }

  function functionClear() {
    setDisplay('')
  }

  function functionOperetion(operador) {
    if (index0 == 0 && index1 == 0) {
      setIndex0(parseFloat(display))
      setOperation(operador)
      functionDisplay(operador)
    } else if (index0 != 0 && index1 == 0) {
      setIndex1(parseFloat(display))
    } else if ((index0 != 0 && index1 != 0) || operador == '=') {

      if (operador = '=') {
        switch (operation) {
          case '+':
            setDisplay(`${parseFloat(index0) + parseFloat(index1)}`)
            setIndex0(0)
            setIndex1(0)
            setOperation('')
            break;
          case '-':
            setDisplay(`${parseFloat(index0) - parseFloat(index1)}`)
            setIndex0(0)
            setIndex1(0)
            setOperation('')
            break;
          case '*':
            setDisplay(`${parseFloat(index0) * parseFloat(index1)}`)
            setIndex0(0)
            setIndex1(0)
            setOperation('')
            break;
          case '/':
            setDisplay(`${parseFloat(index0) / parseFloat(index1)}`)
            setIndex0(0)
            setIndex1(0)
            setOperation('')
            break;
        }
      }

      switch (operation) {
        case '+':
          setDisplay(`${parseFloat(index0) + parseFloat(index1)}`)
          setIndex0(parseFloat(index0) + parseFloat(index1))
          setIndex1(0)
          setOperation('+')
          break;
        case '-':
          setDisplay(`${parseFloat(index0) - parseFloat(index1)}`)
          setIndex0(parseFloat(index0) - parseFloat(index1))
          setIndex1(0)
          setOperation('-')
          break;
        case '*':
          setDisplay(`${parseFloat(index0) * parseFloat(index1)}`)
          setIndex0(parseFloat(index0) * parseFloat(index1))
          setIndex1(0)
          setOperation('*')
          break;
        case '/':
          setDisplay(`${parseFloat(index0) / parseFloat(index1)}`)
          setIndex0(parseFloat(index0) / parseFloat(index1))
          setIndex1(0)
          setOperation('/')
          break;
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Display value={display} />
      </View>

      <View style={styles.button}>
        <Tecla propriedade="7" display={functionDisplay} />
        <Tecla propriedade="8" display={functionDisplay} />
        <Tecla propriedade="9" display={functionDisplay} />
        <Tecla propriedade="/" operation={true} display={functionOperetion} />
        <Tecla propriedade="4" display={functionDisplay} />
        <Tecla propriedade="5" display={functionDisplay} />
        <Tecla propriedade="6" display={functionDisplay} />
        <Tecla propriedade="*" operation={true} display={functionOperetion} />
        <Tecla propriedade="1" display={functionDisplay} />
        <Tecla propriedade="2" display={functionDisplay} />
        <Tecla propriedade="3" display={functionDisplay} />
        <Tecla propriedade="+" operation={true} display={functionOperetion} />
        <Tecla propriedade="0" display={functionDisplay} />
        <Tecla propriedade="." display={functionDisplay} />
        <Tecla propriedade="=" display={functionOperetion} />
        <Tecla propriedade="-" operation={true} display={functionOperetion} />
        <Tecla propriedade="Clear" operation={true} multi={true} display={functionClear} />
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
 * Próximos passos:
 * 
 * 1- Resolver bugs
 * 2- Resolver problema na limpeza de tela
 * 3- Atualizar função de limpeza
 * 4- Tratar validação de dados
 * 5- Otimizar layout
 * 
 * Obs:
 * 
 * >> Como consigui cumprir meu principal objetivo (Que era aprender o uso do useState), posso me focar apenas em otimizar o código agora.
 * 
 * -> Continuar estudo normal
 * -> Otimizar código nos momentos de exercitar
 */