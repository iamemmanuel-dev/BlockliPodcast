import { FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Podcast from '../../../../reusables/podcast'
import SectionTitleView from '../../../../utilities/SectionTitleView'
import Section from '../../../../utilities/Section'
import { styles } from './styles'

const EpisodesSection = () => {
  const navigation = useNavigation()
  const renderEpisodes = ({ item, index }) => (
    <Podcast isLastItem={index === 2} />
  )

  const onTapOnSeeAll = () => {}

  return (
    <Section>
      <View style={styles.section}>
        <SectionTitleView
          title='Episodes'
          linkText='See All'
          onTapOnLinkText={onTapOnSeeAll}
        />

        <FlatList data={[1, 2, 3]} renderItem={renderEpisodes} />
      </View>
    </Section>
  )
}

export default EpisodesSection
