import { View } from 'react-native'
import SafeArea from '../SafeArea'
import { styles } from './styles'

const Screen = props => {
  return (
    <View style={styles.screen}>
      <SafeArea flex={1}>{props.children}</SafeArea>
    </View>
  )
}

export default Screen
