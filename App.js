import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/redux/store'
import Header from './src/_Shared/Header';
import TasksContainer from './src/TasksEpic/tasksContainer';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <TasksContainer />
      </SafeAreaView>
    </Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default App;