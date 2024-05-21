import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },

  titleView_leftView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
  },

  titleText: {
    fontFamily: 'Urbanist_Bold',
    fontSize: 24,
    lineHeight: 29.2,
    color: theme.grey3,
  },

  titleView_rightView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
})
