import { Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BackIcon, CircleEllipsisIcon } from '../../../../../assets/appIcons'
import truncateText from '../../../../helpers/truncateText'
import metrics from '../../../../metrics'
import { styles } from './styles'

const PlayerHeaderTitleView = () => {
  const navigation = useNavigation()
  const onBackPress = () => navigation.goBack()

  return (
    <View style={styles.playerHeaderTitleView}>
      <View style={styles.playerHeaderTitle_leftView}>
        <Pressable hitSlop={metrics.makeHitSlop()} onPress={onBackPress}>
          <BackIcon />
        </Pressable>

        <Text style={styles.playerHeaderTitleText}>
          {truncateText('The Jordan Harbinger Sh...', 15)}
        </Text>
      </View>

      <Pressable>
        <CircleEllipsisIcon />
      </Pressable>
    </View>
  )
}

export default PlayerHeaderTitleView
