import { FlatList, Image, Pressable, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Section from '../../../../utilities/Section'
import SectionTitleView from '../../../../utilities/SectionTitleView'
import { PODCAST_IMAGES } from '../../../../data'
import globalStyles from '../../../../globals/styles'
import { styles } from './styles'

const PodcastSection = () => {
  const navigation = useNavigation()
  const onTapOnSeeAll = () => navigation.navigate('AllPodcastsScreen')

  const renderPodcasts = ({ item }) => (
    <Pressable key={item.id} style={styles.podcast}>
      <Image source={item.image} style={styles.podcastImg} />
    </Pressable>
  )

  return (
    <Section>
      <View style={styles.sectionTitleView}>
        <SectionTitleView
          title='Podcasts'
          linkText='See All'
          onTapOnLinkText={onTapOnSeeAll}
        />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={PODCAST_IMAGES}
        renderItem={renderPodcasts}
        contentContainerStyle={
          globalStyles.flatListHoriztontalContentContainerStyle
        }
      />
    </Section>
  )
}

export default PodcastSection
