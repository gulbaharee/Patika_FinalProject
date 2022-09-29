import React from 'react';
import StackNavigator from './src/navigator/StackNavigator';
import { Provider } from "react-redux";
import { store } from "./src/store/index";

const App= () => {

  return (
    <Provider store={store}>
      <StackNavigator/>
    </Provider>
    
  );
};

export default App;
