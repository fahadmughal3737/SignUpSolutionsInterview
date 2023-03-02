import { StyleSheet } from 'react-native'
import { colors } from '../../../constants/utils/colors'
import { normalize } from '../../../constants/utils/responsiveFont'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: '2.5%',
    },
    text: { fontSize: normalize(18), marginTop: '2.5%', color: colors.GREY },
    blueText: { fontSize: normalize(22), fontWeight: 'bold', color: colors.PRIMARYBLUE },
    upperBar: { flex: 0.1, justifyContent: 'center', },
    backIconContainer: { height: heightPercentageToDP(5), width: widthPercentageToDP(10), backgroundColor: colors.LIGHTGREY, justifyContent: 'center', alignItems: 'center', borderRadius: normalize(30) },
    upperTextContainer: { flex: 0.13, },
    welcomeHeading:{ flexDirection: 'row', alignItems: 'center', },
    welcomeText:{ color: colors.PRIMARYBLUE, fontSize: normalize(26), fontWeight:'500' },
    buttonsContainer:{ flex: 0.07, paddingHorizontal: '1%', backgroundColor: colors.LIGHTGREY, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderRadius: normalize(15) },
    fieldsContainer:{ flex: 0.4, justifyContent:'center', marginVertical: '2.5%', },
    fieldsContainerSignUp:{ flex: 0.5, justifyContent:'center', marginVertical: '2.5%', },

    lastText:{flexDirection:'row', alignItems:'center', alignSelf:'center',},
    greyText:{color:colors.GREY, fontSize:normalize(20)},
})