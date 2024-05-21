import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../../screens/Home'
import DiscoverScreen from '../../screens/Discover'
import LibraryScreen from '../../screens/Library'
import ProfileScreen from '../../screens/Profile'

import {
  CompassIcon,
  HomeIcon,
  ListIcon,
  UserIcon,
} from '../../../assets/appIcons'
import theme from '../../theme'

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  const screenOptions = route => ({
    headerShown: false,
    tabBarActiveTintColor: theme.primary,
    tabBarInactiveTintColor: theme.grey1,

    tabBarLabel: ({ focused }) => (
      <Text
        style={{
          family: focused ? 'Urbanist_Bold' : 'Urbanist_Medium',
          fontSize: 10,
          lineHeight: 16,
          color: focused ? theme.primary : theme.grey1,
        }}
      >
        {route.name}
      </Text>
    ),
  })

  return (
    <Tab.Navigator screenOptions={({ route }) => screenOptions(route)}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{ tabBarIcon: ({ color }) => <HomeIcon color={color} /> }}
      />

      <Tab.Screen
        name='Discover'
        component={DiscoverScreen}
        options={{ tabBarIcon: ({ color }) => <CompassIcon color={color} /> }}
      />

      <Tab.Screen
        name='Library'
        component={LibraryScreen}
        options={{ tabBarIcon: ({ color }) => <ListIcon color={color} /> }}
      />

      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{ tabBarIcon: ({ color }) => <UserIcon color={color} /> }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
