import { View } from 'react-native'
import PlayerHeaderTitleView from './sections/PlayerHeaderTitleView'
import PlayingPodcastDetails from './sections/PlayingPodcastDetails'
import PlayerControls from './sections/PlayerControls'
import Screen from '../../utilities/Screen'
import SafeArea from '../../utilities/SafeArea'
import { styles } from './styles'

const PlayerScreen = () => {
  return (
    <Screen>
      <SafeArea flex={1}>
        <View style={styles.screen}>
          <PlayerHeaderTitleView />
          <PlayingPodcastDetails />
          <PlayerControls />
        </View>
      </SafeArea>
    </Screen>
  )
}

export default PlayerScreen
