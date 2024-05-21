import { FlatList, View } from 'react-native'
import PodcastChannelsList from '../AllPodcast/components/PodcastChannel'
import ScreenTitleView from '../../reusables/ScreenTitleView'
import UISwitchTabs from '../../reusables/UISwitchTabs'
import Podcast from '../../reusables/podcast'
import Screen from '../../utilities/Screen'
import useTabs from '../../hooks/useTabs'
import { PODCAST_LIST } from '../../data'
import { styles } from './styles'

const TABS = ['Subscriptions', 'Queue', 'Downloads']

const LibraryScreen = () => {
  const { activeTab, onTabSwitch } = useTabs(TABS)

  const renderSubscriptions = ({ item }) => <PodcastChannelsList {...item} />

  const renderQueues = () => <Podcast />

  return (
    <Screen>
      <View style={styles.screenContent}>
        <ScreenTitleView title='Library' withMicIcon />

        <UISwitchTabs
          tabs={TABS}
          activeTab={activeTab}
          onTabSwitch={onTabSwitch}
        />
        <View style={styles.content}>
          {activeTab === 'Subscriptions' ? (
            <FlatList
              data={PODCAST_LIST}
              renderItem={renderSubscriptions}
              contentContainerStyle={{ paddingVertical: 30 }}
            />
          ) : (
            <FlatList
              data={PODCAST_LIST}
              renderItem={renderQueues}
              contentContainerStyle={{ paddingVertical: 30 }}
            />
          )}
        </View>
      </View>
    </Screen>
  )
}

export default LibraryScreen
