import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import SmallButton from '../../../components/buttons/smallButton';
import InputField from '../../../components/inputfields/textInput';
import { colors } from '../../../constants/utils/colors';
import Icon from '../../../constants/utils/icons';
import { normalize } from '../../../constants/utils/responsiveFont';
import { styles } from './style';

const SignUp = (props: any) => {
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
                    <Text style={styles.welcomeText}>Create New Account</Text>
                    <View style={{ marginLeft: '2.5%', }}>
                        <Icon type='materialCommunity' name='hand-wave' color={colors.YELLOW} size={normalize(26)} />
                    </View>
                </View>
                <Text style={styles.text}>Please fill the form to continue</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <SmallButton textColor={emailTrue === true ? colors.WHITE : colors.GREY} bgColor={emailTrue === true ? true : false} text={'By Email'} onChange={() => setEmailTrue(true)} />
                <SmallButton textColor={emailTrue === true ? colors.GREY : colors.WHITE} bgColor={emailTrue === true ? false : true} text={' By PhoneNumber'} onChange={() => setEmailTrue(false)} />
            </View>
            <View style={styles.fieldsContainerSignUp}>
                {emailTrue === true ?
                    <>
                        <View>
                            <Text style={styles.text}>Username</Text>
                            <InputField iconType={'fa'} iconName={'envelope'} placeholder={'elvin07'} password={false} />
                        </View>
                        <View>
                            <Text style={styles.text}>Email Address</Text>
                            <InputField iconType={'fa'} iconName={'envelope'} placeholder={'elvin07@gmail.com'} password={false} />
                        </View>
                    </>
                    :
                    <>
                        <View>
                            <Text style={styles.text}>Phone Number</Text>
                            <InputField iconType={'fa'} iconName={'envelope'} placeholder={'+92xxxxxxx'} password={false} />
                        </View>
                        <View>
                            <Text style={styles.text}>Email Address</Text>
                            <InputField iconType={'fa'} iconName={'envelope'} placeholder={'elvin07@gmail.com'} password={false} />
                        </View>
                    </>
                }

                <View>
                    <Text style={styles.text}>Password</Text>
                    <InputField onPasShowChange={() => setShowPassword(!showPassword)} passCheck={showPassword === true ? 'eye' : 'eye-with-line'} iconType={'fontisto'} iconName={'locked'} placeholder={'*****'} password={showPassword} />
                </View>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: '2.5%', }}>
                    <Text style={styles.blueText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.2,  justifyContent: 'center', }}>

                <View style={styles.lastText}>
                    <Text style={styles.greyText}>Already have an Account? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{}}>
                        <Text style={styles.blueText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default SignUp;