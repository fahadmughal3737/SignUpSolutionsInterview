import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { normalize } from "../../constants/utils/responsiveFont";
export const styles = StyleSheet.create({
    smallButton: { width: widthPercentageToDP(46), justifyContent: 'center', alignItems: 'center', borderRadius: normalize(20), height: heightPercentageToDP(5.5), },
    text:{
        fontSize:normalize(16)
        
    }
})