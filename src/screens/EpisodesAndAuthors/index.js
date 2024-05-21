import { useState } from 'react'
import { FlatList, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import Podcast from '../../reusables/podcast'
import UISwitchTabs from '../../reusables/UISwitchTabs'
import SearchInput from '../../reusables/SearchInput'
import Screen from '../../utilities/Screen'
import theme from '../../theme'
import { styles } from './styles'

const TABS = ['Episodes', 'Authors']

const EpisodesAndAuthorsScreen = () => {
  const { origin } = useRoute().params
  const [activeTab, setActiveTab] = useState(origin)
  const onTabSwitch = tab => setActiveTab(tab)

  const renderEpisodes = ({ item, index }) => (
    <Podcast isLastItem={index === 2} />
  )

  return (
    <Screen>
      <View style={styles.content}>
        <SearchInput placeholder='Podcast' placeholderTextColor={theme.grey3} />

        <UISwitchTabs
          tabs={TABS}
          activeTab={activeTab}
          onTabSwitch={onTabSwitch}
        />

        <FlatList
          data={[1, 2, 3]}
          renderItem={renderEpisodes}
          contentContainerStyle={{ paddingVertical: 30 }}
        />
      </View>
    </Screen>
  )
}

export default EpisodesAndAuthorsScreen
