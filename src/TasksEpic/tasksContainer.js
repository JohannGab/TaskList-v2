import React, { useState } from 'react';
import { View, Text } from 'react-native';

import TasksList from './tasksList';
import TaskForm from './taskForm';
import CountersContainer from './countersContainer';

const TasksContainer = (props) => {
    const [tasks, setTasks] = useState([
        {   
            id: new Date().getTime(),
            title: 'Nouvelle tâche',
            completed: false 
        }
    ]);
    
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


    return (
        <View>
            <TaskForm onAddTask={onAddTask} />
            <CountersContainer 
                nbTasks={tasks.length} 
                nbTasksCompleted={() => getTasksCompeted()}
            />
            <TasksList 
                tasks={tasks}
                onChangeStatus={onChangeStatus}
                onDeleteTask={onDeleteTask}
            />
        </View>
    )
}

export default TasksContainer