import { StyleSheet } from 'react-native'
import metrics from '../../../../metrics'
import theme from '../../../../theme'

export const styles = StyleSheet.create({
  headerSection: {
    paddingHorizontal: metrics.SCREEN_HORIZONTAL_PADDING,
  },

  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  greetingView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },

  userImageView: {
    width: 48,
    height: 48,
    borderRadius: 100,
  },

  userImage: {
    borderRadius: 100,
  },

  greetingText: {
    fontFamily: 'Urbanist_Regular',
    fontSize: 16,
    lineHeight: 22.4,
    color: theme.grey2,
    marginBottom: 5,
  },

  userName: {
    fontFamily: 'Urbanist_Bold',
    fontSize: 20,
    lineHeight: 19.2,
    color: theme.grey3,
  },

  // CARD STYLES

  card: {
    borderRadius: 32,
    backgroundColor: theme.primary,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  cardContentView: {
    paddingTop: 25,
    width: '65%',
  },

  cardTextContentView: {
    marginBottom: 20,
  },

  cardLargeText: {
    fontFamily: 'Urbanist_Bold',
    fontSize: 24,
    lineHeight: 29.2,
    color: theme.white,
    marginBottom: 13,
  },

  cardSubText: {
    fontFamily: 'Urbanist_Regular',
    size: 12,
    color: theme.white,
  },

  cardButton: {
    backgroundColor: theme.white,
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },

  cardButtonText: {
    fontFamily: 'Urbanist_SemiBold',
    fontSize: 14,
    lineHeight: 22.4,
    color: theme.primary,
  },

  cardImageView: {
    position: 'absolute',
    right: 0,
    zIndex: 1000,
    bottom: 0,
    height: '100%',
    width: '50%',
  },

  cardImage: {
    objectFit: 'contain',
  },
})
