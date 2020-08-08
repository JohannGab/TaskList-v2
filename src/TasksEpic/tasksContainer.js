import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { getTasks } from '../redux/selectors'
import TaskForm from './taskForm';
import TasksList from './tasksList';
import CountersContainer from './countersContainer';
import FloatinButton from '../_Shared/FloatingButton';

const TasksContainer = () => {
const tasks = useSelector(getTasks);

const [isFormOpened, setIsFormOpened] = useState(false)
    
const onDeleteTask = id => {

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
            {isFormOpened && <TaskForm />}
            <CountersContainer nbTasks={tasks.length} 
                nbTasksCompleted={() => getTasksCompeted()}
            />
            <TasksList tasks={tasks} />
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