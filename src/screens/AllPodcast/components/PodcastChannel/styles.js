import { StyleSheet } from 'react-native'
import theme from '../../../../theme'

export const styles = StyleSheet.create({
  podcastChannel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  podcastChannelInfoView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
  },

  podcastChannelImageView: {
    width: 100,
    height: 100,
  },

  podcastChannelImage: {
    width: '100%',
    height: '100%',
  },

  podcastChannelName: {
    fontFamily: 'Urbanist_Bold',
    fontSize: 18,
    lineHeight: 19.2,
    color: theme.grey3,
    mb: 10,
  },

  channelPodcastsCount: {
    fontFamily: 'Urbanist_Medium',
    fontSize: 12,
    color: theme.grey4,
  },
})
