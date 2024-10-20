import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from './screens/ProductScreen';
import ColorSelectionScreen from './screens/ColorSelectionScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">
        <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ColorSelection" component={ColorSelectionScreen} options={{ title: 'Chọn Màu' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
