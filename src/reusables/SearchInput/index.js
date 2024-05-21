import { TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import theme from '../../theme'
import globalStyles from '../../globals/styles'
import { styles } from './styles'

const SearchInput = props => {
  return (
    <View
      style={[
        styles.inputView,
        {
          backgroundColor: props.isActive ? theme.primary_light : theme.grey6,
          borderWidth: props.isActive ? 1 : 0,
          borderColor: props.isActive ? theme.primary : 'transparent',
        },
      ]}
    >
      <Feather
        name='search'
        size={20}
        color={props.isActive ? theme.primary : theme.grey5}
      />
      <TextInput
        placeholder='Search'
        placeholderTextColor={theme.grey5}
        style={[globalStyles.textInputStyles]}
        cursorColor={theme.grey3}
        {...props}
      />
    </View>
  )
}

export default SearchInput
