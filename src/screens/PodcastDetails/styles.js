import { StyleSheet } from 'react-native'
import metrics from '../../metrics'
import theme from '../../theme'

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: metrics.SCREEN_HORIZONTAL_PADDING,
  },

  podcastInfoContainer: {
    marginBottom: 20,
  },

  podcastInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  podcastImageView: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 20,
  },

  podcastImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },

  podcastInfoView: {
    flex: 1,
  },

  podcastName: {
    fontFamily: 'Urbanist_Bold',
    fontSize: 18,
    lineHeight: 24,
    color: theme.grey3,
  },

  podcastAuthorName: {
    fontFamily: 'Urbanist_Medium',
    fontSize: 12,
    lineHeight: 26,
    color: theme.grey4,
  },

  podcastTimings: {
    fontFamily: 'Urbanist_Medium',
    fontSize: 14,
    lineHeight: 20,
    color: theme.grey4,
  },

  iconsView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    marginTop: 10,
  },

  podcastName_Bg: {
    fontFamily: 'Urbanist_Bold',
    fontSize: 24,
    lineHeight: 30,
    color: theme.grey3,
  },

  podcastPlayAndActionsView: {
    marginVertical: 20,
  },

  podcastDescription: {
    fontFamily: 'Urbanist_Medium',
    fontSize: 16,
    lineHeight: 20,
    color: theme.grey8,
  },

  whatWeDiscussedSection: {
    marginVertical: 20,
  },

  whatWeDiscussedText: {
    fontFamily: 'Urbanist_Bold',
    fontSize: 16,
    lineHeight: 20,
    color: theme.grey8,
  },
})
