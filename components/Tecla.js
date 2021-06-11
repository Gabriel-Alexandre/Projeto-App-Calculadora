import React from "react"
import { StyleSheet, Text, TouchableHighlight, Dimensions } from "react-native"

export default function(props) {
   const stylesButton = [styles.button]

   if(props.multi)
      stylesButton.push(styles.buttonMulti)
   if(props.operation)
      stylesButton.push(styles.operationButton)

   return( 
    <TouchableHighlight
      onPress={() => {
         if(props.propriedade != 'Clear') {
            props.display(props.propriedade)
         }else{
            props.display()
         }
      }}
      >
       <Text style={stylesButton}>{props.propriedade}</Text>
    </TouchableHighlight>
   )
}

const styles = StyleSheet.create({
   button: {
      fontSize: 35,
      height: Dimensions.get('window').width / 4,
      width: Dimensions.get('window').width / 4,
      padding: 20,
      textAlign: "center",
      borderWidth: 1,
      backgroundColor: '#1E90FF',
      color: '#FFF',
   },

   operationButton: {
      backgroundColor: '#212A38',
   },

   buttonMulti: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width / 5,
      fontSize: 28,
   },

   text: {
      color: '#FFF',
   },
})
