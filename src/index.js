import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'mobx-react';
import ListStore from './store/root';
import Home from './screens/home';

const Stack = createStackNavigator();

const stores = {
  root: ListStore,
};

const AppRoot = () => (
  <Provider {...stores}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
export default AppRoot;
