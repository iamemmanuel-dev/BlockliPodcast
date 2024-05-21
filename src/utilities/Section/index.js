import { View } from 'react-native'
import { styles } from './styles'

const Section = props => {
  return <View style={styles.section}>{props.children}</View>
}

export default Section
