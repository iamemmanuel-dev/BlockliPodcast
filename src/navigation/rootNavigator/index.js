import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabNavigator from '../tabNavigator'
import AllPodcastsScreen from '../../screens/AllPodcast'
import EpisodesAndAuthorsScreen from '../../screens/EpisodesAndAuthors'

const RootNavigator = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={TabNavigator} />

        <Stack.Screen name='AllPodcastsScreen' component={AllPodcastsScreen} />

        <Stack.Screen
          name='EpisodesAndAuthorsScreen'
          component={EpisodesAndAuthorsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
