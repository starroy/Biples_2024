import React, { useState, useEffect, createRef } from "react";
import {
    ImageBackground, 
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity, 
    InteractionManager,
    findNodeHandle,
    BackHandler,
    TextInput
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, Circle, ClipPath, G, Defs, Rect } from 'react-native-svg';
// import { TouchableOpacity } from 'react-native';r

const Calling = ({ navigation }) => {
    const [time, setTime] = useState('00:04');
    const [showBlur, setShowBlur] = useState(false);
    const [viewRef, setViewRef] = useState(null);
    const [blurType, setBlurType] = useState('light');
    const [selected, setSelected] = useState('Chat');
    const [isFocused, setIsFocused] = useState(false);
    useEffect(() => {

        const backAction = () => {
        //   setShowBlur(false);
    
          setTimeout(() => {
            navigation.goBack();
          }, 300); // Delay the back action by one second
    
          return true; // Prevent default behavior (i.e. exit the app)
        };
    
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
        return () => backHandler.remove();
    }, []);
    return(
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <ImageBackground source = {require('../../../../assets/images/callBackground.png')}
                    style = {{width: vw(100), height: '100%'}}
                >
                    <View style = {styles.header}>
                        <View style = {styles.backIcon}>
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" fill="#181818"/>
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </View>
                        <Text style = {styles.headerText}>
                            Calling {time}
                        </Text>
                        <View style = {{width: vw(8.9)}}/>
                    </View>
                    <View style = {styles.body}>
                        <Image source = {require('../../../../assets/images/calling.png')}
                            style = {{width: vw(33.3), height: vw(33.3), borderRadius: vw(20)}}
                        />
                        <View style = {styles.name}>
                            <Text style = {styles.Title}>
                                Kitshuna Fowyu
                            </Text>
                            <Svg width={vw(4.44)} height={vw(4.44)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M12.6639 2.38805C12.8279 2.78469 13.1427 3.09996 13.5391 3.26456L14.929 3.84029C15.3256 4.00459 15.6408 4.31974 15.8051 4.71641C15.9694 5.11307 15.9694 5.55876 15.8051 5.95543L15.2298 7.34437C15.0654 7.74121 15.0652 8.18735 15.2303 8.584L15.8046 9.97253C15.886 10.169 15.928 10.3796 15.928 10.5923C15.928 10.8049 15.8862 11.0155 15.8048 11.212C15.7234 11.4085 15.6041 11.587 15.4537 11.7374C15.3033 11.8878 15.1247 12.007 14.9282 12.0883L13.5393 12.6637C13.1427 12.8277 12.8274 13.1425 12.6628 13.5389L12.0871 14.9288C11.9228 15.3255 11.6077 15.6406 11.211 15.8049C10.8144 15.9692 10.3687 15.9692 9.97207 15.8049L8.58318 15.2296C8.18651 15.0657 7.741 15.066 7.34459 15.2305L5.9547 15.8054C5.55827 15.9694 5.11298 15.9692 4.71666 15.805C4.32033 15.6409 4.00537 15.3261 3.84095 14.9299L3.26507 13.5395C3.10108 13.1429 2.78629 12.8276 2.38992 12.663L1.00003 12.0873C0.60355 11.923 0.288506 11.6081 0.124147 11.2116C-0.0402122 10.8152 -0.0404354 10.3697 0.123527 9.97313L0.698824 8.58419C0.862718 8.18751 0.862384 7.74198 0.697894 7.34555L0.123422 5.95461C0.0419734 5.75815 3.40993e-05 5.54756 2.0785e-08 5.33488C-3.40577e-05 5.1222 0.0418377 4.9116 0.123223 4.71511C0.204609 4.51862 0.323913 4.3401 0.474318 4.18974C0.624724 4.03937 0.803282 3.92012 0.99979 3.8388L2.38868 3.26348C2.78496 3.09962 3.10003 2.78522 3.26474 2.38929L3.84045 0.999348C4.00475 0.602682 4.31989 0.287533 4.71654 0.123228C5.11319 -0.0410761 5.55886 -0.0410761 5.95551 0.123228L7.34441 0.698547C7.74107 0.862447 8.18658 0.862112 8.583 0.697616L9.97347 0.12412C10.3701 -0.0400916 10.8156 -0.040058 11.2122 0.124214C11.6088 0.288486 11.9239 0.603545 12.0882 1.00011L12.6641 2.39046L12.6639 2.38805Z" fill="#53FAFB"/>
                                <Path d="M5.57446 7.96406L7.16729 9.55688L8.95922 7.76495L10.7512 5.97302" stroke="black" stroke-width="2.23585" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </View>
                        <Text stye = {styles.text}>@KitshunaFowyu</Text>
                    </View>
                    <View style = {styles.footer}>
                        <View style = {styles.icon}>
                            <Svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M15.95 16.65V11.55M13.4 14.1H18.5M10 11.55H6.6C5.0158 11.55 4.2237 11.55 3.59888 11.8088C2.76578 12.1539 2.10389 12.8158 1.75881 13.6489C1.5 14.2737 1.5 15.0658 1.5 16.65M12.975 1.59712C14.221 2.1015 15.1 3.32309 15.1 4.74998C15.1 6.17686 14.221 7.39845 12.975 7.90283M11.275 4.74998C11.275 6.62774 9.75277 8.14998 7.875 8.14998C5.99723 8.14998 4.475 6.62774 4.475 4.74998C4.475 2.87221 5.99723 1.34998 7.875 1.34998C9.75277 1.34998 11.275 2.87221 11.275 4.74998Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: vw(101),
        height: '100%',
        backgroundColor: 'black'
    },
    header: {
        width: vw(90),
        height: vw(25),
        paddingTop: vw(16.1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: vw(5)
    },
    backIcon: {
        width: vw(9.8),
        height: vw(9.8),
        borderRadius: vw(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    headerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
    }
});

export default Calling;