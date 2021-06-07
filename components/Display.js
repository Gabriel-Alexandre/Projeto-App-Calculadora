import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function (props) {
    return(
        <View style={styles.display}>
            <Text style={styles.text}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        color: '#FFF',
    },

    display: {
        flex: 1,
        backgroundColor: '#708090',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 25,
    },
})