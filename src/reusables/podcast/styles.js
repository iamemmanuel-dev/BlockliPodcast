import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  podcast: {
    flexDirection: 'row',
    columnGap: 15,
  },

  podcastImageView: {
    flex: 0.45,
    borderRadius: 20,
    height: 116,
  },

  podcastImage: {
    radius: 20,
  },

  podcastTitle: {
    fontFamily: 'Urbanist_Bold',
    size: 18,
    lineHeight: 19.2,
    color: theme.grey3,
    marginBottom: 10,
  },

  podcastExtraInfo: {
    fontFamily: 'Urbanist_Medium',
    fontSize: 12,
    color: theme.grey4,
    marginBottom: 10,
  },
})
