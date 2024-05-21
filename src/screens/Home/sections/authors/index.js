import { View, FlatList, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Section from '../../../../utilities/Section'
import SectionTitleView from '../../../../utilities/SectionTitleView'
import { AUTHOR_IMAGES } from '../../../../data'
import globalStyles from '../../../../globals/styles'
import { styles } from './styles'

const AuthorsSection = () => {
  const navigation = useNavigation()
  const onTapOnSeeAll = () => {}

  const renderAuthors = ({ item }) => (
    <Pressable key={item.id} style={styles.author}>
      <Image source={item.image} style={styles.authorImage} />
    </Pressable>
  )

  return (
    <Section>
      <View style={styles.section}>
        <SectionTitleView
          title='Authors'
          linkText='See All'
          onTapOnLinkText={onTapOnSeeAll}
        />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={AUTHOR_IMAGES}
        renderItem={renderAuthors}
        contentContainerStyle={
          globalStyles.flatListHoriztontalContentContainerStyle
        }
      />
    </Section>
  )
}

export default AuthorsSection
