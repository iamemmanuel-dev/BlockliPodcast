import metrics from '../../metrics'
import theme from '../../theme'

const globalStyles = {
  flatListHoriztontalContentContainerStyle: {
    paddingLeft: metrics.SCREEN_HORIZONTAL_PADDING,
    gap: 10,
  },

  textInputStyles: {
    flex: 1,
    alignSelf: 'stretch',
    fontFamily: 'Urbanist_SemiBold',
    fontSize: 14,
    color: theme.grey3,
  },
}

export default globalStyles
