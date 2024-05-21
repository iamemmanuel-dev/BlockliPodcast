import { FlatList } from 'react-native'
import Screen from '../../utilities/Screen'
import AuthorsSection from './sections/authors'
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
            <AuthorsSection />
          </>
        )}
      />
    </Screen>
  )
}

export default HomeScreen
