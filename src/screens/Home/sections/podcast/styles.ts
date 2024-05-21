import { StyleSheet } from 'react-native'
import metrics from '../../../../metrics'

export const styles = StyleSheet.create({
  sectionTitleView: {
    paddingHorizontal: metrics.SCREEN_HORIZONTAL_PADDING,
  },

  podcast: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },

  podcastImg: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
})
