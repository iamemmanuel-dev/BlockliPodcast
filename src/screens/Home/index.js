import { FlatList } from 'react-native'
import Screen from '../../utilities/Screen'
import HeaderSection from './sections/headerSection'

const HomeScreen = () => {
  return (
    <Screen>
      <FlatList
        data={[1]}
        ListHeaderComponent={
          <>
            <HeaderSection />
          </>
        }
        renderItem={() => <></>}
      />
    </Screen>
  )
}

export default HomeScreen
