import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native'

const SafeArea = props => {
  const composedStyles = StyleSheet.compose(
    {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
      flex: props.flex,
      backgroundColor: props.bgCol,
    },
    props.style
  )

  return (
    <SafeAreaView style={composedStyles} {...props}>
      {props.children}
    </SafeAreaView>
  )
}

export default SafeArea
