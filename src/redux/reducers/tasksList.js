import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actionsTypes'

const defaultState = [
    {
        id: 1,
        title: 'Nouvelle tâche reducer',
        completed: false
    },
];

export const tasksList = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case TOGGLE_TASK:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        id: task.id,
                        title: task.title,
                        completed: !task.completed
                    }
                } else {
                    return task;
                }
            })
        case DELETE_TASK: 
        return state.filter(task => task.id !== action.id)
        default: 
            return state
    }
};