import React from "react";
import { TouchableOpacity, Text } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import { normalize } from "../../constants/utils/responsiveFont";
import { styles } from "./style";
import { colors } from "../../constants/utils/colors";
const SmallButton = (props: any) => {
    return (
        <LinearGradient colors={props.bgColor===true ? [colors.PRIMARYPURPLE, colors.PRIMARYBLUE,] :['transparent', 'transparent']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.smallButton, { backgroundColor: props.bgColor, }]}>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', height: '100%' }} onPress={() => props.onChange()}>
                <Text style={[styles.text, { color: props.textColor }]}>{props.text}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}
export default SmallButton;