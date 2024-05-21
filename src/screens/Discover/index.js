import { FlatList, Pressable, View } from 'react-native'
import ScreenTitleView from '../../reusables/ScreenTitleView'
import SearchInput from '../../reusables/SearchInput'
import Screen from '../../utilities/Screen'
import MostListenedPodcastsSection from './sections/MostListenedPodcasts'
import PopularAndTrendingAuthorsSection from './sections/PopularAndTrendingAuthors'
import { styles } from './styles'

const DiscoverScreen = ({ navigation }) => {
  const onTapOnSearchInput = () => {}

  return (
    <Screen>
      <FlatList
        data={[1]}
        ListHeaderComponent={
          <View style={styles.headerView}>
            <ScreenTitleView title='Discover' withMicIcon />
            <Pressable onPress={onTapOnSearchInput}>
              <SearchInput editable={false} pointerEvents='none' />
            </Pressable>
          </View>
        }
        renderItem={() => (
          <>
            <PopularAndTrendingAuthorsSection />
            <MostListenedPodcastsSection />
          </>
        )}
      />
    </Screen>
  )
}

export default DiscoverScreen
