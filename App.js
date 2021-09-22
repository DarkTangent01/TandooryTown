import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { OrderDeliver, Restaurat, Home } from './views';
import Tabs from './navigation/BottomNavigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"Home"}>
        <Stack.Screen name="BottomNavigation" component={Tabs}/>
        <Stack.Screen name="Restaurant" component={Restaurat}/>
        <Stack.Screen name="OrderDelivery" component={OrderDeliver}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;