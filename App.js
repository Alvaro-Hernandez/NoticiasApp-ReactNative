import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsList from './src/NewsList';
import NewsDetail from './src/NewsDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#222',
          },
          headerTintColor: '#EDEDED',
        }}>
        <Stack.Screen
          name="NewsList"
          component={NewsList}
          options={{title: 'Techcrunch'}}
        />
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{title: 'Techcrunch - Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
