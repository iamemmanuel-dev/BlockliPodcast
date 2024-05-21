import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Urbanist_Regular: require('./assets/fonts/Urbanist-Regular.ttf'),
    Urbanist_Medium: require('./assets/fonts/Urbanist-Medium.ttf'),
    Urbanist_SemiBold: require('./assets/fonts/Urbanist-SemiBold.ttf'),
    Urbanist_Bold: require('./assets/fonts/Urbanist-Bold.ttf'),
  })

  useEffect(() => {
    const loadFonts = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync()
      }
    }

    loadFonts()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar translucent />
    </>
  )
}
