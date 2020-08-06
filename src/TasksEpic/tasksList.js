import React from 'react';
import { FlatList } from 'react-native';
import TaskTile from './taskTile';


const TasksList = ({ tasks, onChangeStatus, onDeleteTask }) => {
const _renderItem = ({ item }) => (
    <TaskTile 
        id={item.id}
        title={item.title}
        completed={item.completed}
        onChangeStatus={onChangeStatus}
        onDeleteTask={onDeleteTask}
    />
);

    return (
        <FlatList 
            data={tasks}
            renderItem={_renderItem}
            keyExtractor={item => item.id}
        />
    )
}

export default TasksList;