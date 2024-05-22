import { View, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { AddItemIcon, DownloadIcon } from '../../../assets/appIcons'
import PodcastPlayButton from '../PodcastPlayButton'
import metrics from '../../metrics'
import theme from '../../theme'
import { styles } from './styles'

const PodcastPlayAndActionsView = () => {
  const navigation = useNavigation()
  const onPlay = () => navigation.navigate('PlayerScreen')

  return (
    <View style={styles.actionsView}>
      <View style={styles.actionsLeftView}>
        <PodcastPlayButton onPlay={onPlay} />
        <AddItemIcon />
        <DownloadIcon />
      </View>

      <Pressable hitSlop={metrics.makeHitSlop()}>
        <Ionicons name='ellipsis-vertical' size={20} color={theme.grey3} />
      </Pressable>
    </View>
  )
}

export default PodcastPlayAndActionsView
