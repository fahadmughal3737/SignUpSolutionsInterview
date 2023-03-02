import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import SmallButton from '../../../components/buttons/smallButton';
import InputField from '../../../components/inputfields/textInput';
import { colors } from '../../../constants/utils/colors';
import Icon from '../../../constants/utils/icons';
import { normalize } from '../../../constants/utils/responsiveFont';
import { styles } from './style';
const Login = (props: any) => {
    const [emailTrue, setEmailTrue] = useState(true)
    const [showPassword, setShowPassword] = useState(true)
    return (
        <View style={styles.container}>
            <View style={styles.upperBar}>
                <TouchableOpacity style={styles.backIconContainer}>
                    <Icon type='material' name='keyboard-arrow-left' color={colors.BLACK} size={normalize(26)} />
                </TouchableOpacity>
            </View>
            <View style={styles.upperTextContainer}>
                <View style={styles.welcomeHeading}>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                    <View style={{ marginLeft: '2.5%', }}>
                        <Icon type='materialCommunity' name='hand-wave' color={colors.YELLOW} size={normalize(26)} />
                    </View>
                </View>
                <Text style={styles.text}>We are happy to see you again. To use your account, you should log in first</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <SmallButton textColor={emailTrue === true ? colors.WHITE : colors.GREY} bgColor={emailTrue === true ? true : false} text={'Email'} onChange={() => setEmailTrue(true)} />
                <SmallButton textColor={emailTrue === true ? colors.GREY : colors.WHITE} bgColor={emailTrue === true ? false : true} text={'Phone Number'} onChange={() => setEmailTrue(false)} />
            </View>
            <View style={styles.fieldsContainer}>
                {emailTrue === true ?
                    <View>
                        <Text style={styles.text}>Email/Username</Text>
                        <InputField iconType={'fa'} iconName={'envelope'} placeholder={'elvin07@gmail.com'} password={false} />
                    </View>
                    :
                    <View>
                        <Text style={styles.text}>Phone Number</Text>
                        <InputField iconType={'fa'} iconName={'envelope'} placeholder={'elvin07@gmail.com'} password={false} />
                    </View>
                }

                <View>
                    <Text style={styles.text}>Password</Text>
                    <InputField onPasShowChange={() => setShowPassword(!showPassword)} passCheck={showPassword === true ? 'eye' : 'eye-with-line'} iconType={'fontisto'} iconName={'locked'} placeholder={'*****'} password={showPassword} />
                </View>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: '2.5%', }}>
                    <Text style={styles.blueText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.2, justifyContent: 'center', }}>

                <View style={styles.lastText}>
                    <Text style={styles.greyText}>Don't have an Account? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')} style={{}}>
                        <Text style={styles.blueText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Login;