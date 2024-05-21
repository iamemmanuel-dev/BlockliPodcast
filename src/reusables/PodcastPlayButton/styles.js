import { StyleSheet } from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.primary,
    paddingVertical: 3,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    borderRadius: 50,
  },

  buttonText: {
    fontFamily: 'Urbanist_SemiBold',
    fontSize: 14,
    lineHeight: 22.4,
    color: theme.white,
  },
})
