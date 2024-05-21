import { Pressable, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  BackIcon,
  ChainIcon,
  CircleEllipsisIcon,
  MicIcon,
} from '../../../assets/appIcons'
import SafeArea from '../../utilities/SafeArea'
import metrics from '../../metrics'
import { styles } from './styles'

const ScreenTitleView = props => {
  const navigation = useNavigation()
  const onBackPress = () => navigation.goBack()

  return (
    <SafeArea>
      <View style={styles.titleView}>
        <View style={styles.titleView_leftView}>
          {props.withMicIcon ? (
            <MicIcon />
          ) : (
            <Pressable hitSlop={metrics.makeHitSlop()} onPress={onBackPress}>
              <BackIcon />
            </Pressable>
          )}

          <Text style={styles.titleText}>{props.title}</Text>
        </View>

        <View style={styles.titleView_rightView}>
          {props.withChainIcon && (
            <Pressable>
              <ChainIcon />
            </Pressable>
          )}

          <Pressable>
            <CircleEllipsisIcon />
          </Pressable>
        </View>
      </View>
    </SafeArea>
  )
}

export default ScreenTitleView
