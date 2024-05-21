import { Pressable, Text, View } from 'react-native'
import metrics from '../../metrics'
import { styles } from './styles'

const SectionTitleView = props => {
  return (
    <View style={styles.sectionTitleView}>
      <Text style={styles.sectionTitle}>{props.title}</Text>

      <Pressable
        hitSlop={metrics.makeHitSlop()}
        onPress={props.onTapOnLinkText}
      >
        <Text style={styles.sectionLinkText}>{props.linkText}</Text>
      </Pressable>
    </View>
  )
}

export default SectionTitleView
