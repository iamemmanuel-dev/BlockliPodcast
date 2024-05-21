import { View, Text, Image } from 'react-native'
import PodcastPlayAndActionsView from '../podcastPlayAndActions'
import metrics from '../../metrics'
import { styles } from './styles'

const Podcast = props => {
  return (
    <View
      style={[
        styles.podcast,
        { marginBottom: props.isLastItem ? 0 : metrics.BASE_GAP },
      ]}
    >
      <View style={styles.podcastImageView}>
        <Image
          source={require('../../../assets/images/img3.png')}
          style={styles.podcastImage}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.podcastTitle}>
          927: Deep Dive | How to Quit Your Job the Right Way
        </Text>

        <Text style={styles.podcastExtraInfo}>Apple Talk | 52:27 mins</Text>

        <PodcastPlayAndActionsView />
      </View>
    </View>
  )
}

export default Podcast
