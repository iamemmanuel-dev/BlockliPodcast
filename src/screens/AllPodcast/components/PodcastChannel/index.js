import { View, Text, Pressable, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import truncateText from '../../../../helpers/truncateText'
import theme from '../../../../theme'
import { styles } from './styles'

const PodcastChannelsList = props => {
  return (
    <Pressable style={styles.podcastChannel}>
      <View style={styles.podcastChannelInfoView}>
        <View style={styles.podcastChannelImageView}>
          <Image source={props.image} style={styles.podcastChannelImage} />
        </View>

        <View>
          <Text style={styles.podcastChannelName}>
            {truncateText(props.name)}
          </Text>

          <Text style={styles.channelPodcastsCount}>
            {`${props.numberOfPodcasts} Podcasts`}
          </Text>
        </View>
      </View>

      <Pressable>
        <Ionicons name='ellipsis-vertical' size={20} color={theme.grey3} />
      </Pressable>
    </Pressable>
  )
}

export default PodcastChannelsList
