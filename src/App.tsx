import React from 'react';

import {NativeBaseProvider} from 'native-base';
import {nativeBaseTheme} from './theme/nativeBaseTheme';
import {PostsList} from './screens/PostsList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationTheme} from './theme/navigationTheme';
import {PostDetails} from './screens/PostDetails';
import {Splash} from './screens/Splash';

export type HomeStackParamList = {
  ' ': undefined;
  Posts: undefined;
  'Post Details': undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const App: React.FC = () => {
  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      <NavigationContainer theme={navigationTheme}>
        <HomeStack.Navigator>
          <HomeStack.Screen name=" " component={Splash} />
          <HomeStack.Screen
            name="Posts"
            component={PostsList}
            options={{headerBackVisible: false, gestureEnabled: false}}
          />
          <HomeStack.Screen name="Post Details" component={PostDetails} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
