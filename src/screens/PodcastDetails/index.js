import { View, Text, Image } from 'react-native'
import React from 'react'
import Screen from '../../utilities/Screen'
import SafeArea from '../../utilities/SafeArea'
import ScreenTitleView from '../../reusables/ScreenTitleView'
import { GlobeIcon, ShareIcon } from '../../../assets/appIcons'
import PodcastPlayAndActionsView from '../../reusables/podcastPlayAndActions'
import { styles } from './styles'

const PodcastDetailsScreen = () => {
  return (
    <Screen>
      <SafeArea flex={1}>
        <View style={styles.screen}>
          <ScreenTitleView title='Episode 200' />

          <View style={styles.podcastInfoContainer}>
            <View style={styles.podcastInfoSection}>
              <View style={styles.podcastImageView}>
                <Image
                  source={require('../../../assets/images/img3.png')}
                  style={styles.podcastImage}
                />
              </View>

              <View style={styles.podcastInfoView}>
                <Text style={styles.podcastName}>
                  The Jordan Harbinger Show
                </Text>
                <Text style={styles.podcastAuthorName}>Jordan Harbinger</Text>

                <View style={styles.iconsView}>
                  <GlobeIcon />
                  <ShareIcon />
                </View>
              </View>
            </View>

            <Text style={styles.podcastTimings}>
              2 hours ago {'   |   '} 55:33 mins
            </Text>
          </View>

          <Text style={styles.podcastName_Bg}>
            685: Steve Rambam | The Real Life of a Private Investigator
          </Text>

          <View style={styles.podcastPlayAndActionsView}>
            <PodcastPlayAndActionsView />
          </View>

          <Text style={styles.podcastDescription}>
            Steve Rambam (@stevenrambam) is the founder and CEO of Pallorium,
            Inc., a licensed Investigative Agency with offices and affiliates
            worldwide.
          </Text>

          <View style={styles.whatWeDiscussedSection}>
            <Text style={styles.whatWeDiscussedText}>
              What We Discuss with Steve Rambam:
            </Text>
          </View>
        </View>
      </SafeArea>
    </Screen>
  )
}

export default PodcastDetailsScreen
