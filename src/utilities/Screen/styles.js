import { StyleSheet } from 'react-native'
import metrics from '../../metrics'
import theme from '../../theme'

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.white,
    paddingHorizontal: metrics.SCREEN_HORIZONTAL_PADDING,
  },
})
