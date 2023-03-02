

import React from "react";
import { TouchableOpacity, Text } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import { normalize } from "../../constants/utils/responsiveFont";
import { styles } from "./style";
import { colors } from "../../constants/utils/colors";

const SubmitButton = (props:any) => {
    return (
    <TouchableOpacity>
        <LinearGradient style={{ height: heightPercentageToDP(6), borderRadius: 10, justifyContent: 'center', alignItems: 'center', }} colors={[colors.PRIMARYPURPLE, colors.PRIMARYBLUE,]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text style={{ fontSize: normalize(20), color: colors.WHITE }}>Login</Text>
        </LinearGradient>
    </TouchableOpacity>
    )
}
export default SubmitButton;