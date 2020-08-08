import React, { useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Button,
    Platform
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskForm = () => {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()

    const _onChangeText = (value) => {
        setTitle(value)
    }

const _onPressBtn = () => {
    if(title.length > 0) {
        dispatch(addTask(title))
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
                    color={Platform.OS == "android" ? "#59e489" : "white"}
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
        backgroundColor: "#59e489",
        borderRadius: 16,
    }
})

export default TaskForm;