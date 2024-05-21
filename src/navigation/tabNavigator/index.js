import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()

  const screenOptions = route => ({
    headerShown: false,
    tabBarActiveTintColor: 'red',
    tabBarInactiveTintColor: 'blue',

    tabBarLabel: ({ focused }) => (
      <Text
        style={{
          family: focused ? 'Urbanist_Bold' : 'Urbanist_Medium',
          fontSize: 10,
          lineHeight: 16,
          color: 'grey',
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
        component={() => <></>}
        options={{ tabBarIcon: ({ color }) => <></> }}
      />

      <Tab.Screen
        name='Discover'
        component={() => <></>}
        options={{ tabBarIcon: ({ color }) => <></> }}
      />

      <Tab.Screen
        name='Library'
        component={() => <></>}
        options={{ tabBarIcon: ({ color }) => <></> }}
      />

      <Tab.Screen
        name='Profile'
        component={() => <></>}
        options={{ tabBarIcon: ({ color }) => <></> }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
