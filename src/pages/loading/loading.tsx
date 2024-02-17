import React, { useState, useEffect, useRef } from 'react'
import {
    ImageBackground, 
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    PanResponder,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path } from 'react-native-svg';
import CustomButton from "../../components/customButton";


const Loading = ({ navigation }) => {
    // let navigate = useNavigate();
    const [loadingNumber, setLoadingNumber] = useState(0);
    const loadingNumberArray = [0, 1, 2];
    const descriptions = ["Let's get started",
                        "Onboarding journey",
                        "First step to success"]
    const handleNavigate = () => {
        console.log('pressed');
        navigation.navigate("Register");
    }
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                // console.log('onMoveShouldSetPanResponder', evt, gestureState);
                return Math.abs(gestureState.dx) > 5;
            },
            onPanResponderRelease: (evt, gestureState) => {
                let num = 0;
                // console.log('onPanResponderRelease', evt, gestureState);
                // console.log('length: ', descriptions.length);
                if (gestureState.dx > 0) {
                    // console.log('dx>0', loadingNumber);
                    setLoadingNumber((prevLoadingNumber) => {
                        if (prevLoadingNumber <= 0) {
                            num = 0;
                            return 0;
                        }
                        else { 
                            num = num - 1;
                            return (prevLoadingNumber-1);
                        }
                    });
                } else {
                    setLoadingNumber((prevLoadingNumber) => {
                        num = num + 1;
                        if(num === 3) {
                            num = num;
                        }
                        // console.log('previousNum:', prevLoadingNumber);
                        if(prevLoadingNumber >= 2) {
                            return prevLoadingNumber;
                        }
                        else return (prevLoadingNumber+1);
                    });
                }
            },
        })
    ).current;

    return (
        <View  {...panResponder.panHandlers}>
            
            <StatusBar 
                translucent backgroundColor="transparent"
            />
            <ScrollView  style={styles.container}>
                <ImageBackground 
                    style={styles.imageBackground} 
                    source={require('../../../assets/images/loading_background.png')}
                >
                    <View style={styles.markStyle}>
                        <View style={styles.mark}>
                            <Svg width={vw(35.6)} height={vw(7.8)} viewBox="0 0 129 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M51.6253 15.0466C52.9885 14.4645 53.6344 12.9473 53.6344 11.494C53.6569 8.27565 50.0818 7.29175 47.2878 7.29175H37.9971V22.4634H46.8898C49.8828 22.4634 53.7734 21.6598 53.8147 18.2386C53.8372 16.5187 52.8308 15.5798 51.6253 15.0428M47.3592 19.8497H42.1092V16.0943H47.3141C48.6323 16.0943 49.7514 16.5412 49.7514 17.9269C49.7514 19.0235 48.9477 19.8497 47.3592 19.8497ZM47.3141 13.9725H42.1092V10.2622H47.0475C48.4332 10.2622 49.7514 10.6415 49.7514 12.0949C49.7514 13.4581 48.6773 13.9725 47.3141 13.9725Z" fill="white"/>
                                <Path d="M57.957 9.41344H59.6957V5.72192H55.561V7.01752C55.561 8.33941 56.6351 9.41344 57.957 9.41344Z" fill="white"/>
                                <Path d="M55.561 22.4634H59.6919V9.4436L55.561 11.2912V22.4634Z" fill="white"/>
                                <Path d="M73.2787 9.57104C70.4622 9.57104 67.7583 10.9342 66.4627 12.4101V9.7513H62.3506V27.1799H66.4627V19.0458C67.7583 20.5217 70.7964 21.9299 73.2787 21.9299C77.6349 21.9299 81.0974 19.673 81.0974 15.8312C81.0974 12.4589 77.6349 9.5748 73.2787 9.5748M72.092 19.6692C68.6746 19.6692 66.4627 17.3221 66.4627 15.6698C66.4627 14.0174 68.7647 11.783 72.0282 11.783C74.8221 11.783 76.9665 13.3039 76.9665 15.8725C76.9665 18.1295 75.1113 19.6692 72.0958 19.6692" fill="white"/>
                                <Path d="M86.9517 5.69946H82.8396V22.4634H86.9517V5.69946Z" fill="white"/>
                                <Path d="M97.6323 9.88306C93.0057 9.88306 89.0513 12.4067 89.0513 16.3423C89.0513 20.2779 92.893 22.7564 97.5196 22.7564C100.914 22.7564 103.776 21.4834 104.895 19.493L101.677 18.956C100.648 20.0714 99.0856 20.6534 97.4746 20.6534C95.15 20.6534 93.5427 19.2226 93.4751 17.5027C94.9059 17.5027 104.467 17.4576 105.718 17.4576C105.808 17.1234 105.853 16.7441 105.853 16.3836C105.83 11.9598 101.876 9.88306 97.6285 9.88306M93.4112 15.8954C93.3887 14.0402 94.8646 12.1175 97.4783 12.1175C99.8479 12.1175 101.5 13.661 101.5 15.8729L93.4112 15.8954Z" fill="white"/>
                                <Path d="M110.525 13.8824C110.525 12.4741 112.447 12.1624 114.971 12.1624C117.093 12.1624 118.97 12.3877 118.97 13.995H122.992C122.992 10.5101 118.948 9.59375 114.971 9.59375C109.965 9.59375 106.3 11.0245 106.3 13.6608C106.3 19.538 119.192 15.6512 119.192 18.6892C119.192 19.6957 117.382 20.2102 114.836 20.2102C112.868 20.2102 110.724 20.075 110.724 18.5127H106.458C106.458 20.0299 107.464 22.7338 114.948 22.7338C118.97 22.7338 123.083 21.3931 123.083 18.6892C123.083 13.1689 110.525 16.6989 110.525 13.8861" fill="white"/>
                                <Path d="M126.537 20.0898C125.625 20.0898 124.994 20.4917 124.994 21.0775C124.994 21.6633 125.628 22.0614 126.537 22.0614C127.446 22.0614 128.073 21.6821 128.073 21.0775C128.073 20.4729 127.442 20.0898 126.537 20.0898ZM126.541 21.8023C125.782 21.8023 125.253 21.5056 125.253 21.0775C125.253 20.6494 125.779 20.3565 126.541 20.3565C127.303 20.3565 127.829 20.6569 127.829 21.0775C127.829 21.4981 127.292 21.8023 126.541 21.8023Z" fill="white"/>
                                <Path d="M126.86 21.1528C127.07 21.149 127.273 21.0739 127.273 20.8899C127.273 20.6871 127.01 20.6233 126.736 20.6233H125.835V21.5208H126.184V21.1528H126.41L126.871 21.5208H127.281L126.796 21.149H126.864L126.86 21.1528ZM126.184 21.0401V20.8073H126.732C126.826 20.8073 126.924 20.8411 126.928 20.9162C126.932 20.9876 126.838 21.0401 126.729 21.0401H126.184Z" fill="white"/>
                                <Path d="M24.2717 9.44474L13.261 9.45225L11.8677 14.2478H22.8109L19.9718 23.963L11.1805 24.0005C9.50938 24.008 8.2964 22.4045 8.76206 20.7972L14.7819 0H6.00938L0.263672 19.6856C-0.94931 23.8466 2.17515 28.0075 6.5126 28L27.3999 27.9662L30.438 17.6915C31.6548 13.5719 28.5678 9.44098 24.2717 9.44474Z" fill="#53FAFB"/>
                                <Path d="M14.8344 18.9945H13.8843L14.5302 16.8352H16.6895L16.3891 17.8379C16.1826 18.5251 15.5517 18.9945 14.8344 18.9945Z" fill="white"/>
                                <Path d="M18.4471 18.9945H17.4106L18.0566 16.8352H20.2159L19.8892 17.9205C19.6977 18.5589 19.1118 18.9945 18.4434 18.9945" fill="white"/>
                            </Svg>
                        </View>
                        {
                            loadingNumber !== 2 ? (
                                <View className = 'skip_button'
                                    style={{flexDirection: 'row', justfiyContent: 'center', alignItems: 'center', marginRight: vw(6.7), height: vw(9.3)}}
                                >
                                    <Text 
                                        style={styles.skipStyle}
                                        onPress = {handleNavigate}
                                    >
                                        Skip
                                    </Text>
                                    <TouchableOpacity onPress={() => {
                                        setLoadingNumber(loadingNumber+1)
                                    }}>
                                        <Svg style={styles.arrow} 
                                            width={vw(5.3)} height={vw(5.3)} viewBox='0 0 19 19' fill="none" xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <Path d="M0.791748 9.5L14.2501 9.5" stroke="#F2F2F2" stroke-width="1.1875" stroke-linecap="round" stroke-linejoin="round"/>
                                            <Path d="M9.5 4.75L14.25 9.5L9.5 14.25" stroke="#F2F2F2" stroke-width="1.1875" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                </View>
                        ) : null
                            
                    }
                    </View>

                    <View className='white_skew'
                        style={{width: vw(90), marginTop: vw(5.3), alignItems: 'flex-end', justifyContent: 'center', marginRight: vw(7.8)}}
                    >
                        <Svg width={vw(11.1)} height={vw(8.6)} viewBox='0 0 40 31' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M13.5475 31H0L9.21015 0H40L35.7162 14.3948C32.7711 24.2609 23.7751 31 13.5475 31Z" fill="white"/>
                        </Svg>
                    </View>

                    <View style={{height: vw(60.2)}}/>

                    <View className='blue_skew'
                        style={{width: vw(95), marginLeft: vw(7.8), alignItems: 'flex-start', justifyContent: 'flex-end'}}
                    >
                        <Svg width={vw(29.7)} height={vw(23.5)} viewBox='0 0 106 83' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M35.9009 83H0L24.4069 0H106L94.648 38.5408C86.8434 64.9565 63.0041 83 35.9009 83Z" fill="#53FAFB"/>
                        </Svg>
                    </View>
                </ImageBackground>
            </ScrollView>
            <View className='loading_action'
                style={{width: '100%', position: 'absolute', bottom: vw(20), flexDirection: 'col', justifyContent: 'center', alignItems: 'center'}}
            >
                <View  className='big_text'
                    style = {{marginTop: vw(18.3)}}
                >
                    <Text style={{color: 'white', fontSize: vw(5.83), textAlign: 'center', fontFamily: 'Neue-Metana'}}>
                        {descriptions[loadingNumber]}
                    </Text>
                </View>
                <View className='small_text'
                    style = {{marginTop: vw(9.2)}}
                >
                    <Text style={{ color: 'white', fontSize: vw(3),textAlign: 'center',  fontFamily: 'TT Firs Neue Trial Regular'}}>
                        Our goal is to ensure that you have everything you need to feel {"\n"} comfortable, confidident, and ready to make and impact.
                    </Text>
                </View>
                <View style={styles.loading}>
                    {loadingNumberArray.map((number) => (
                        <View
                            key={number}
                            style={
                                number === loadingNumber ? styles.onloading : styles.offloading
                            }
                        />
                    ))}
                </View>
                <View className='register_login_button'
                    style={{width: vw(88), aspectRatio:297/46, flexDirection: 'row', backgroundColor: '#2B2B2B', borderRadius: vw(4.2), borderWidth: vw(0.3), borderColor: '#808080', opacity: 0.85}}
                >
                    <CustomButton
                        navigation={navigation}
                        title="Register"
                        width={vw(44)}
                        height={'100'}
                        backgroundColor="#53FAFB"
                        color="black"
                        fontSize={vw(3.9)}
                        navigateName = 'Email'
                    />
                    <CustomButton
                        navigation={navigation}
                        title="Sign In"
                        width={vw(44)}
                        height={'100'}
                        backgroundColor="#00000000"  
                        color='white'
                        fontSize={vw(3.9)}
                        navigateName = "BackLogin"
                    />
                </View>
                <View style = {{height: 20}}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        aspectRatio: 360/780,
        // height: vh(100),
        backgroundColor: '#050505',
        backgroundImage: 'Radial-gradient(to bottom, #151515, #000000)',
        fontFamily: 'TT Firs Neue Trial Bold',
        color: 'white'
    },
    text: {
        marginTop: vh(5),
        fontFamily: 'TT Firs Neue Trial Bold',
        fontSize: vw(3.8),
        fontWeight: 'bold'
    },
    markStyle: {
        marginTop: vw(16.4),
        marginLeft: vw(8),
        width: vw(90),
        height: vw(9.3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'end'
    },
    mark: {
        width: vw(35.6),
        height: vw(7.8)
    },
    imageBackground: {
        width: vw(101),
        aspectRatio: '360/590',
    },
    skipStyle: {
        color: 'white',
        fontSize: vw(3.3),
        fontFamily: 'TT Firs Neue Trial Regular'
    },
    arrow: {
        marginLeft: vw(2)
    },
    loading: {
        width: '100',
        height: vw(10),
        flexDirection: 'row',
        justfiyContent: 'center',
        alignItems: 'center',
        marginBottom: vw(4.2)
    },
    onloading: {
        margin: vw(0.8),
        width: vw(3.4),
        aspectRatio: 1/1,
        borderWidth: 1, 
        borderColor: 'white', 
        borderStyle: 'solid',
        borderRadius: vw(1.7),
        backgroundColor: '#00000000'
    },
    offloading: {
        margin: vw(1.7),
        width: vw(1.1),
        aspectRatio: 1/1,
        borderWidth: 1, 
        borderColor: 'white', 
        borderStyle: 'solid',
        borderRadius: vw(0.6),
        backgroundColor: 'white'
    }
});

export default Loading;