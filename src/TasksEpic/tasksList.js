import React from 'react';
import { FlatList } from 'react-native';
import TaskTile from './taskTile';


const TasksList = ({ tasks }) => {
const _renderItem = ({ item }) => (
    <TaskTile 
        id={item.id}
        title={item.title}
        completed={item.completed}
    />
);

    return (
        <FlatList 
            data={tasks}
            renderItem={_renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default TasksList;