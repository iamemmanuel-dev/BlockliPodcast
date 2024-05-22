import { View, Text, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PodcastPlayAndActionsView from '../podcastPlayAndActions'
import metrics from '../../metrics'
import { styles } from './styles'

const Podcast = props => {
  const navigation = useNavigation()
  const onTapOnPodcast = () => navigation.navigate('PodcastDetailsScreen')

  return (
    <Pressable
      onPress={onTapOnPodcast}
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
    </Pressable>
  )
}

export default Podcast
