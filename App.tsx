import React from 'react';
import Home from './src/screens/Home/Home';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home screen */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
