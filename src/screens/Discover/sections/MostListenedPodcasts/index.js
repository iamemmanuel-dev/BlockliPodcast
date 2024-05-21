import { FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SectionTitleView from '../../../../utilities/SectionTitleView'
import Section from '../../../../utilities/Section'
import Podcast from '../../../../reusables/podcast'
import { PODCAST_LIST } from '../../../../data'
import { styles } from './styles'

const MostListenedPodcastsSection = () => {
  const navigation = useNavigation()
  const renderMostListenedPodcasts = ({ item }) => <Podcast {...item} />

  const onTapOnSeeAll = () => {}

  return (
    <Section>
      <View style={styles.contentView}>
        <SectionTitleView
          title='Most Listened Podcasts'
          linkText='See All'
          onTapOnLinkText={onTapOnSeeAll}
        />

        <FlatList data={PODCAST_LIST} renderItem={renderMostListenedPodcasts} />
      </View>
    </Section>
  )
}

export default MostListenedPodcastsSection
