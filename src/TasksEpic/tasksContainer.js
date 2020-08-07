import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import TasksList from './tasksList';
import TaskForm from './taskForm';
import CountersContainer from './countersContainer';
import FloatinButton from '../_Shared/FloatingButton';

const TasksContainer = () => {
    const [tasks, setTasks] = useState([
        {   
            id: new Date().getTime(),
            title: 'Nouvelle tâche',
            completed: false 
        }
    ]);

const [isFormOpened, setIsFormOpened] = useState(false)
    
const onAddTask = (title) => {
    const newTask = 
    {
        id: new Date().getTime(),
        title: title,
        conpleted: false
    }
    setTasks([newTask, ...tasks])
}

const onChangeStatus = id => {
    let newTask = [];
    tasks.forEach(task => {
        if (task.id == id) {
            newTask.push({
                id: id,
                title: task.title,
                completed: !task.completed
            })
        } else {
            newTask.push(task)
        }
    })
    setTasks(newTask)
}

const onDeleteTask = id => {
    let newTask = [];
    tasks.forEach(task => {
        if (task.id !== id) {
            newTask.push(task)
        } 
        setTasks(newTask)
    })
}

const getTasksCompeted = () => {
    let counter = 0;

    tasks.forEach(task => {
        if (task.completed) {
            counter++ 
        }
    })
    return counter
}

const toggleForm = () => {
    setIsFormOpened(!isFormOpened)
}


    return (
        <View style={styles.container}>
            {isFormOpened && <TaskForm onAddTask={onAddTask} />}
            <CountersContainer 
                nbTasks={tasks.length} 
                nbTasksCompleted={() => getTasksCompeted()}
            />
            <TasksList 
                tasks={tasks}
                onChangeStatus={onChangeStatus}
                onDeleteTask={onDeleteTask}
            />
            <FloatinButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    }
})

export default TasksContainer