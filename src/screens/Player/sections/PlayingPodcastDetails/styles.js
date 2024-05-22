import { StyleSheet } from 'react-native'
import theme from '../../../../theme'

export const styles = StyleSheet.create({
  podcastDetailsView: {
    flex: 1,
  },

  podcastImageView: {
    height: '60%',
    marginBottom: 20,
  },

  podcastImage: {
    height: '100%',
    width: '100%',
    borderRadius: 40,
  },

  podcastTextView: {
    borderBottom: 1,
    borderColor: theme.grey7,
    paddingBottom: 20,
  },

  podcastTitle: {
    fontFamily: 'Urbanist_Bold',
    fontSize: 24,
    lineHeight: 32,
    color: theme.grey3,
    marginBottom: 10,
    textAlign: 'center',
  },

  podcastChannelName: {
    fontFamily: 'Urbanist_Bold',
    fontSize: 16,
    lineHeight: 22.4,
    color: theme.grey8,
    textAlign: 'center',
  },
})
