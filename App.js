import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';

import Header from './src/_Shared/Header';
import TasksContainer from './src/TasksEpic/tasksContainer';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TasksContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default App;