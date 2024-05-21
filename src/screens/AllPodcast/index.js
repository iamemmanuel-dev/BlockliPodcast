import { FlatList, View } from 'react-native'
import ScreenTitleView from '../../reusables/ScreenTitleView'
import Screen from '../../utilities/Screen'
import PodcastChannelsList from './components/PodcastChannel'
import { PODCAST_LIST } from '../../data'
import { styles } from './styles'

const AllPodcastsScreen = () => {
  const renderPodcasts = ({ item }) => <PodcastChannelsList {...item} />

  return (
    <Screen>
      <View style={styles.screenContentView}>
        <ScreenTitleView title='Podcasts' withChainIcon />
        <View style={styles.podcastListContainer}>
          <FlatList data={PODCAST_LIST} renderItem={renderPodcasts} />
        </View>
      </View>
    </Screen>
  )
}

export default AllPodcastsScreen
