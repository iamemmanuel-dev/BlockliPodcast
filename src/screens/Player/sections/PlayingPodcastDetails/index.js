import { Image, Text, View } from 'react-native'
import { styles } from './styles'

const PlayingPodcastDetails = () => {
  return (
    <View style={styles.podcastDetailsView}>
      <View style={styles.podcastImageView}>
        <Image
          source={require('../../../../../assets/images/img4.png')}
          style={styles.podcastImage}
        />
      </View>

      <View style={styles.podcastTextView}>
        <Text style={styles.podcastTitle}>
          685: Steve Rambam | The Real Life of a Private Investigator
        </Text>

        <Text style={styles.podcastChannelName}>The Jordan Harbinger Show</Text>
      </View>
    </View>
  )
}

export default PlayingPodcastDetails
