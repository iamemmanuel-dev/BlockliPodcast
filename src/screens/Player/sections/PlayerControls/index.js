import { Pressable, View } from 'react-native'
import Slider from '@react-native-community/slider'
import { Ionicons } from '@expo/vector-icons'
import {
  BackwardRefreshIcon,
  FowardIcon,
  FowardRefreshIcon,
  RewindIcon,
} from '../../../../../assets/appIcons'
import metrics from '../../../../metrics'
import theme from '../../../../theme'
import { styles } from './styles'

const PlayerControls = () => {
  return (
    <View>
      <View style={styles.sliderView}>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={theme.primary}
          maximumTrackTintColor={theme.grey9}
          thumbTintColor={theme.primary}
        />
      </View>

      <View style={styles.playerControlsView}>
        <View style={styles.playerControlsContainer}>
          <Pressable hitSlop={metrics.makeHitSlop(5)}>
            <RewindIcon />
          </Pressable>

          <Pressable hitSlop={metrics.makeHitSlop(5)}>
            <BackwardRefreshIcon />
          </Pressable>
        </View>

        <Pressable style={styles.playButton}>
          <Ionicons name='play' size={28} color={theme.white} />
        </Pressable>

        <View style={styles.playerControlsContainer}>
          <Pressable hitSlop={metrics.makeHitSlop(5)}>
            <FowardRefreshIcon />
          </Pressable>

          <Pressable hitSlop={metrics.makeHitSlop(5)}>
            <FowardIcon />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default PlayerControls
