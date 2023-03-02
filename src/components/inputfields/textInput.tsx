import React from "react";
import { TouchableOpacity, Text, View, TextInput } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";

import { normalize } from "../../constants/utils/responsiveFont";
import { colors } from "../../constants/utils/colors";
import Icon from "../../constants/utils/icons";


const InputField = (props: any) => {
    return (
        <View style={{ backgroundColor: colors.LIGHTGREY, borderRadius: normalize(10), flexDirection: 'row', width: '98%', alignSelf: 'center', marginVertical: '2.5%', height: heightPercentageToDP(6) }}>
            <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', }}>
                <Icon type={props.iconType} name={props.iconName} color={colors.PRIMARYPURPLE} size={normalize(20)} />

            </View>
            <TextInput secureTextEntry={props.password === true ? true : false} placeholder={props.placeholder} placeholderTextColor={colors.GREY} style={{ flex: 0.8, color: colors.GREY }} />
            {props.passCheck ?
                <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity onPress={()=>props.onPasShowChange()}>
                        <Icon type='entypo' name={props.passCheck} color={colors.PRIMARYPURPLE} size={normalize(20)} />
                    </TouchableOpacity>

                </View>
                :
                null
            }

        </View>

    )
}
export default InputField;
