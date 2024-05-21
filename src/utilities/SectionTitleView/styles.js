import { StyleSheet } from 'react-native'
import metrics from '../../metrics'
import theme from '../../theme'

export const styles = StyleSheet.create({
  sectionTitleView: {
    marginBottom: metrics.SECTION_TITLE_BOTTOM_MARGIN,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  sectionTitle: {
    fontFamily: 'Urbanist_Bold',
    fontSize: 20,
    lineHeight: 19.2,
    color: theme.grey3,
  },

  sectionLinkText: {
    fontFamily: 'Urbanist_Bold',
    fontSize: 16,
    lineHeight: 22.4,
    color: theme.primary,
  },
})
