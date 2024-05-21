import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AllPodcastsScreen from '../../screens/AllPodcast'
import TabNavigator from '../tabNavigator'

const RootNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={TabNavigator} />

        <Stack.Screen name='AllPodcastsScreen' component={AllPodcastsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
