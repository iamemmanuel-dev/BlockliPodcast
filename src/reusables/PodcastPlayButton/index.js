import { Text, Pressable } from 'react-native'
import { PlayIcon } from '../../../assets/appIcons'
import { styles } from './styles'

const PodcastPlayButton = props => {
  return (
    <Pressable onPress={props.onPlay} style={styles.button}>
      <PlayIcon />
      <Text style={styles.buttonText}>Play</Text>
    </Pressable>
  )
}

export default PodcastPlayButton
