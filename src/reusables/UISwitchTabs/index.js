import { View, Text, Pressable } from 'react-native'
import theme from '../../theme'
import { styles } from './styles'

const UISwitchTabs = props => {
  return (
    <View style={styles.tabsView}>
      {props.tabs.map(tab => (
        <Pressable
          onPress={() => props.onTabSwitch(tab)}
          key={tab}
          style={[
            styles.tab,
            {
              borderBottomWidth: tab === props.activeTab ? 4 : 2,
              borderColor:
                tab === props.activeTab ? theme.primary : theme.grey7,
            },
          ]}
        >
          <Text
            style={[
              styles.tabText,
              { color: tab === props.activeTab ? theme.primary : theme.grey1 },
            ]}
          >
            {tab}
          </Text>
        </Pressable>
      ))}
    </View>
  )
}

export default UISwitchTabs
