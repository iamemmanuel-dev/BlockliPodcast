import { FlatList } from 'react-native'
import Screen from '../../utilities/Screen'
import EpisodesSection from './sections/episodes'
import HeaderSection from './sections/headerSection'
import PodcastSection from './sections/podcast'

const HomeScreen = () => {
  return (
    <Screen>
      <FlatList
        data={[1]}
        ListHeaderComponent={
          <>
            <HeaderSection />
          </>
        }
        renderItem={() => (
          <>
            <PodcastSection />
            <EpisodesSection />
          </>
        )}
      />
    </Screen>
  )
}

export default HomeScreen
