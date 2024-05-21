import { StyleSheet } from 'react-native'
import metrics from '../../../../metrics'

export const styles = StyleSheet.create({
  titleView: {
    paddingHorizontal: metrics.SCREEN_HORIZONTAL_PADDING,
  },

  author: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },

  authorImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
})
