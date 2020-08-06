import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Button,
    Platform
} from 'react-native';

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState("")
    const _onChangeText = (value) => {
        setTitle(value)
    }

const _onPressBtn = () => {
    if(title.length > 0) {
        onAddTask(title); 
        setTitle("")
    } 
}

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput 
                    value={title}
                    onChangeText={_onChangeText}
                />
            </View>
            <View style={styles.colorButton}>
                <Button 
                    onPress={_onPressBtn}
                    title="Ajouter"
                    color={Platform.OS == "android" ? "#841584" : "white"}
                />
            </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },

    containerInput: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 4,
        paddingLeft: 7,
        width: "75%",
    },
    colorButton: {
        backgroundColor: "#841584",
    }
})

export default TaskForm;