import { StyleSheet } from 'react-native'
import theme from '../../../../theme'

export const styles = StyleSheet.create({
  playerControlsView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  playerControlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 30,
  },

  playButton: {
    width: 60,
    height: 60,
    backgroundColor: theme.primary,
    borderRadius: 100,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
