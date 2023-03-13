import {Platform, StyleSheet, View} from 'react-native';
import Text from '../../../constants/Text';
import {styles} from './style';

export const HelpData = [
  {
    title: 'What is Pactive?',
    content: (
      <View>
        <Text>Pactive – get socially-active!</Text>
        <Text>
          Pactive is a App designed to help individuals and groups lead more
          active lifestyles.
        </Text>
        <Text>
          Unlike fitness apps, Pactive is not built for physical performance
          it’s designed to bring together social groups regardless of physical
          abilities to become more active in their everyday lives and to enable
          friends and family to help support and inspire each other to lead more
          active lives – through a new and unique combination of activity
          tracking and social media.
        </Text>
        <Text>
          Pactive is powered by people who want to help each other to be more
          active. Connecting people, to inspire and be inspired by each other to
          achieve more. Bringing together people within your network to create
          and share fun activities with a mix of common and personal goals.
        </Text>
        <Text>
          Pacts are created between individuals, friends, work colleagues, and
          in the future businesses or charities to collectively complete new
          activities or challenges. Pacts can involve;
        </Text>
        <View style={styles.list}>
          <Text>completing specific tasks,</Text>
          <Text>visiting specific locations or</Text>
          <Text>achieving certain measurable performance goals.</Text>
        </View>
        <Text>
          Pacts can be as serious or as fun as you like and can be participation
          only or can involve a forfeit or reward, the options are endless, it’s
          your choice – you set the Pact, you invite the PARTICIPANTS and you
          create how participants can record their achievements.
        </Text>
        <Text>
          Using the Pactive app you can explore new places or help your friends
          & family to do more together and have fun doing it! As well as social
          Pacts used to plan days out or challenging friends of colleagues to
          achieve life goals, Pacts can also be used to help relatives and
          friends living with a health condition or with rehabilitation goals to
          become more active.
        </Text>
      </View>
    ),
  },
  {
    title: 'What is a Pact?',
    content: (
      <View>
        <Text>
          Think of a Pact as a challenge. Pacts are as simple or competitive as
          you choose, just a group of people supporting each other to improve
          their wellbeing, with the added fun of a reward or forfeit if you
          choose.
        </Text>
        <Text style={styles.paragraph}>
          The aim and duration of the Pact is set by the Pact Admin, they also
          invite the participants. A Pact activity can be based on one of the
          pre-set options:{' '}
        </Text>
        <View style={styles.list}>
          <Text>Walking</Text>
          <Text>Running</Text>
          <Text>Swimming</Text>
          <Text>Hydration</Text>
          <Text>5 a day</Text>
          <Text>Sleeping</Text>
        </View>
        <Text style={styles.paragraph}>
          Or, you can specify a uniue activity, such as a walk in the park and
          finding five unique trees. You decide, the options are endless and
          personal to you.
        </Text>
        <Text style={styles.paragraph}>
          The ultimate aim is to see the people you care about make small health
          and wellbeing improvements over time and gradually improving their
          overall wellbeing.{' '}
        </Text>
        <Text style={styles.paragraph}>
          The level of competitiveness within a Pact is determined by the Pact
          Admin, if your group is not interested in being competitive it's not
          necessary, however if you are competitive then Pacts can be; and
          anywhere inbetween, the choice is yours, just set the activity and
          targets based on the people in your Pact.
        </Text>
        <Text style={styles.paragraph}>
          Pacts are not simply about moving more, we have Pacts to encourage us
          to keep hydrated and to improve our diet, the idea is to be creative
          and to set the Pact to reflect the wellbeing improvement you are
          aiming for.
        </Text>
      </View>
    ),
  },
  {
    title:
      Platform.OS === 'android'
        ? 'How do I connect my auto tracking data on Android?'
        : 'How do I connect my auto tracking data on iOS?',
    content:
      Platform.OS === 'android' ? (
        <View>
          <Text>
            If you didn't allow Pactive access to your automatically tracked
            data during sign up, please follow these easy steps to ensure that
            Pactive can receive your health data.
          </Text>
          <Text>1. Open your phone's 'Settings'</Text>
          <Text>2. Navigate to the 'Apps' settings section</Text>
          <Text>
            3. Once you are on the Apps setting section, select the Pactive app
          </Text>
          <Text>4. Tap 'Permissions'</Text>
          <Text>
            5. Choose the permissions you want the app to have, such as 'Health
            Data'
          </Text>
          <Text>
            6. You are now able to join all Pacts that require auto data only.{' '}
          </Text>
        </View>
      ) : (
        <View>
          <Text>
            If you didn't allow Pactive access to your automatically tracked
            data during sign up, there are 6 easy steps to follow to ensure that
            Pactive can receive your health data.
          </Text>
          <Text>1. Open your phone's settings.</Text>
          <Text>
            2. Search for 'Health' in the search tab at the top of the page and
            select the Health app.
          </Text>
          <Text>
            3. Once in the 'Health' section select 'Data Access & Devices'.
          </Text>
          <Text>
            4. Once in 'Data Access & Devices' select the 'Pactive' app.
          </Text>
          <Text>
            5. Once you are on this page select 'Turn All Categories On'.
          </Text>
          <Text>
            6. You are now able to join all Pacts that require auto data only.{' '}
          </Text>
        </View>
      ),
  },
  {
    title: 'How many Pacts can I participate in?',
    content: (
      <View>
        <Text>
          There is no limit, as a user you can create or participate in as many
          Pacts as you choose. We regularly participate in multiple Pacts with
          different family member, friends or work colleagues, for us it's more
          fun to participate in multiple Pacts.
        </Text>
      </View>
    ),
  },
  {
    title: 'How many people can join a Pact?',
    content: (
      <View>
        <Text>
          The maximum number of participants in a User Pact is 20, in our
          experience an ideal number is 5 and above as this level creates a
          positive, supportive and motivational group.
        </Text>
      </View>
    ),
  },
  {
    title: 'How do handicaps work?',
    content: (
      <View>
        <Text>
          When developing Pactive it was clear to us that the people involved
          all had different fitness levels, to enable a level playing field and
          to allow a less competitive approach, we allowed each person in a Pact
          to have a unique target. In our trials some people had health
          conditions such as diabetes, others overweight and some fit and
          healthy, a typical family or group of friends, yet we could all
          achieve and exceed our personal targets with the encouragement and
          support of the group of supportive and caring people without the
          expectation that we all had to achieve the unachievable.
        </Text>
      </View>
    ),
  },
  {
    title: 'What are Forfeits and Rewards?',
    content: (
      <View>
        <Text>
          Forfeits and Rewards have been developed to create a bit of fun or a
          real competitive edge, they can be used as a “Carrot or Stick” to
          motivate and incentivise participants. Examples of forfeits can be to
          wash the dishes or to feed the baby through the night, just something
          simple and personal to provide a little extra motivation, like wise if
          you are competitive the forfeit can reflect this, just remember to
          make the forfeit relevant to your Pact and the participants otherwise
          it may demotivate people.
        </Text>
        <Text>
          Rewards are also very personal, and can be used to encourage and
          motivate, the rewards do not need to be expensive, it’s more important
          that they are valuable to the person or people that you are trying to
          motivate.
        </Text>
      </View>
    ),
  },
  {
    title: 'How much does Pactive cost?',
    content: (
      <View>
        <Text>For personal users Pactive is free to download and use.</Text>
      </View>
    ),
  },
  {
    title: 'Can I share updates to Social Media?',
    content: (
      <View>
        <Text>
          Yes, its easy to connect to your existing Social Media account, you
          decide what to upload and how often.
        </Text>
      </View>
    ),
  },
  {
    title: 'Can my business create Pacts?',
    content: (
      <View>
        <Text>
          Pactive is for anyone. We will soon be launching Open Pacts to enable
          businesses to incentivise existing and new customers. Socially
          responsible businesses will be able to use Pactive to help customers
          to maintain healthy lifestyle programmes or wellness objectives.
          Pactive can help promote your brand and recruit new customers too! To
          preregister your business please email{' '}
          <Text style={styles.link}>info@getpactive.co.uk</Text>
        </Text>
      </View>
    ),
  },
  {
    title: 'Can my charity create Pacts?',
    content: (
      <View>
        <Text>
          Pactive is for anyone. We will soon be launching Open Pacts to enable
          charities to creating fundraising opporutnies through Open Pacts.
          Charities will be able to use Pactive to not only raise funds and
          reach more potential supporters, they will also be improving the
          health of the users that are helping them. To preregister your charity
          please email <Text style={styles.link}>info@getpactive.co.uk</Text>
        </Text>
      </View>
    ),
  },
  {
    title: 'My activity tracking isn’t working?',
    content: (
      <View>
        <Text style={{marginTop: 16, marginBottom: 8}}>Apple Health</Text>
        <Text>
          The option to connect with Apple Health is available on Pactive to
          access automatically tracked data. You can ensure that your Apple
          Health is working by visiting your Pactive settings. If you are yet to
          do this, you will need to confirm that you want Pactive and Apple
          Health to connect by tapping on the blue tab at the top of the home
          page.
        </Text>
        <Text style={{marginTop: 16, marginBottom: 8}}>Google Fit</Text>
        <Text>
          The option to connect with Google Fit is available on Pactive to
          access automatically tracked data. You can ensure that your Google Fit
          is working by visiting your Pactive settings. If you are yet to do
          this, you will need to confirm that you want Pactive and Google Fit to
          connect by tapping on the blue tab at the top of the home page.
        </Text>
      </View>
    ),
  },
  {
    title: 'How do I sync my contacts?',
    content: (
      <View>
        <Text>
          Pactive will ask you if you want to sync your contacts when first
          creating or joining a Pact. If you declined this request, then you can
          sync your contacts by going to your settings on the Pactive profile
          page and confirming that Pactive can sync with your phone contacts.
        </Text>
      </View>
    ),
  },
  {
    title: 'How do I add manual non-trackable data?',
    content: (
      <View>
        <Text>
          Non-trackable data can be added by selecting the track button in the
          middle of the bottom navigation tab and adding specific data to
          relevant activity for e.g. 1 glass of water.
        </Text>
      </View>
    ),
  },
  {
    title: 'Supported iOS versions?',
    content: (
      <View>
        <Text>Pactive requires iOS 10 or 11 on an iPhone 5/6/7/8/X/XS</Text>
      </View>
    ),
  },
  {
    title: 'How do I enable background app refresh?',
    content: (
      <View>
        <Text>
          This can be enabled/disabled by visiting the ‘general’ section on
          settings. From here then select the background app refresh tab and
          select on.
        </Text>
      </View>
    ),
  },
  {
    title: 'How do I view my Pacts?',
    content: (
      <View>
        <Text>
          To view the Pacts you are currently partaking in, simply select the
          Pacts icon on the bottom of the home screen.
        </Text>
      </View>
    ),
  },
  {
    title: 'Supported Android versions?',
    content: (
      <View>
        <Text>
          Pactive is currently downloadable on Android mobiles 360x640
          resolution with OS version 7 & 8
        </Text>
      </View>
    ),
  },
  {
    title: 'How does the activity feed work?',
    content: (
      <View>
        <Text>
          We have created the activity feed to help make your life easier! The
          activity feed will provide you with relevant updates on your Pacts and
          how well you are doing with achieving your targets. When you receive
          an activity feed message clicking on this message will direct you
          straight to the relevant area for e.g. if you have received a Pact
          invite clicking on this activity feed notification will take you
          straight to the invite you have received.
        </Text>
      </View>
    ),
  },
  {
    title: 'How can I change my Pact target?',
    content: (
      <View>
        <Text>
          Pact targets can only be changed by the admin of the Pact, if you are
          an admin visit the members section within the specific Pact and it can
          be edited from there. If you aren’t a Pact admin then you can message
          the admin of the Pact through the Pact message feed to organize it
          being changed.
        </Text>
      </View>
    ),
  },
  {
    title: 'How do I leave a Pact?',
    content: (
      <View>
        <Text>
          You have the option to leave a Pact you no longer want to participate
          in at anytime by simply clicking the 3 buttons at the top corner of
          the Pact and pressing leave Pact
        </Text>
      </View>
    ),
  },
];
