import { View, Text, Image, Pressable } from 'react-native'
import Section from '../../../../utilities/Section'
import { BellIcon } from '../../../../../assets/appIcons'
import metrics from '../../../../metrics'
import { styles } from './styles'

const HeaderSection = () => {
  return (
    <Section style={styles.headerSection}>
      <View style={styles.headerView}>
        <View style={styles.greetingView}>
          <View style={styles.userImageView}>
            <Image
              source={require('../../../../../assets/images/user.webp')}
              style={styles.userImage}
            />
          </View>

          <View>
            <Text style={styles.greetingText}>Good Morning 👋</Text>
            <Text style={styles.userName}>Andrew Ainsley</Text>
          </View>
        </View>

        <Pressable hitSlop={metrics.makeHitSlop()}>
          <BellIcon />
        </Pressable>
      </View>

      <View style={styles.card}>
        <View style={styles.cardContentView}>
          <View style={styles.cardTextContentView}>
            <Text style={styles.cardLargeText}>Enjoy All Benefits!</Text>

            <Text style={styles.cardSubText}>
              Enjoy listening podcast with better audio quality, without
              restrictions, and without ads
            </Text>
          </View>

          <Pressable style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Get Premium</Text>
          </Pressable>
        </View>

        <View style={styles.cardImageView}>
          <Image
            source={require('../../../../../assets/images/cardImg.webp')}
            style={styles.cardImage}
          />
        </View>
      </View>
    </Section>
  )
}

export default HeaderSection
