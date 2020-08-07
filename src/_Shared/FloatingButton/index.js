import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FloatinButton = ({ toggleForm, isFormOpened }) => {
    return (
        <TouchableOpacity onPress={toggleForm} style={styles.container}>
            <Text style={styles.title}>{isFormOpened ? 'x' : '+' }</Text>   
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#59e489",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        fontSize: 35,
    }
})

export default FloatinButton;