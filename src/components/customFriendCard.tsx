import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View, Image, ImageBackground, backgroundColor } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';

const CustomFriendCard = ({ avatar, userName, displayName, onlineState, msgNum, onPress, handlePress}) => {
    
    return (
            <TouchableOpacity
                style={[styles.button, {backgroundColor: '#131313'}]}
                onPress = {handlePress}
            >
                <View style = {{ flexDirection: 'row', justyfiContent: 'center', alignItems: 'center'}}>
                    <ImageBackground 
                        source = {avatar}
                        style = {styles.avatar}
                    >
                        {(msgNum != 0) && <Text style = {styles.unreadMsg}> {msgNum} </Text>}
                    </ImageBackground>
                    <View style = {styles.avatarInfo}>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.9), color: 'white'}}>
                            {userName}
                        </Text>
                        <View style = {{flexDirection:'row', alignItems: 'center'}}>
                            {onlineState && <View style = {{width: vw(1.7), height: vw(1.7), backgroundColor: '#53FAFB', borderRadius: vw(2), marginRight: vw(1)}}/>}
                            <Text style={{fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(2.2), color: '#565656'}}>
                                {displayName}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.info}>
                    <View style = {[styles.online, {backgroundColor: onlineState ? '#53FAFB': 'black'}]}>
                        <Svg width={vw(2.8)} height={vw(3.6)} viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M5 0.4375L0.693885 6.7626C0.434659 7.14337 0.305046 7.33376 0.312831 7.49201C0.319611 7.62984 0.386187 7.75764 0.494813 7.84137C0.619537 7.9375 0.848322 7.9375 1.30589 7.9375H5V12.625L9.30611 6.2999C9.56534 5.91913 9.69495 5.72874 9.68717 5.57049C9.68039 5.43266 9.61381 5.30486 9.50519 5.22113C9.38046 5.125 9.15168 5.125 8.69411 5.125H5V0.4375Z" fill={onlineState ? 'black' : "#606060"}/>
                        </Svg>
                    </View>
                    <View style = {styles.online}>
                        <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M11.625 6C11.625 9.1066 9.1066 11.625 6 11.625C5.25179 11.625 4.53769 11.4789 3.88468 11.2137C3.7597 11.163 3.69721 11.1376 3.6467 11.1263C3.59729 11.1152 3.56072 11.1111 3.51008 11.1111C3.45832 11.1111 3.40193 11.1205 3.28916 11.1393L1.06548 11.5099C0.832614 11.5487 0.716183 11.5681 0.63199 11.532C0.558302 11.5004 0.499581 11.4417 0.467975 11.368C0.431864 11.2838 0.451269 11.1674 0.490079 10.9345L0.860693 8.71084C0.879488 8.59807 0.888886 8.54169 0.888879 8.48992C0.888873 8.43928 0.884822 8.40271 0.873747 8.3533C0.862425 8.30279 0.837046 8.2403 0.786289 8.11532C0.521085 7.46231 0.375 6.74821 0.375 6C0.375 2.8934 2.8934 0.375 6 0.375C9.1066 0.375 11.625 2.8934 11.625 6Z" fill="#606060"/>
                        </Svg>
                    </View>
                </View>
            </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: vw(5),
        flexDirection: 'row',
        width: vw(90),
        aspectRatio: 320/64,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: vw(2.8),
        paddingLeft: vw(0),
        paddingRight: vw(5),
        marginBottom: vw(2.8),
        // marginLeft: vw(5),
        backgroundColor: '#131313'
    },
    avatar: {
        marginLeft: vw(5),
        width: vw(12.5),
        height: vw(12.5),
        marginRight: vw(2.8)
    },
    unreadMsg: {
        position: 'absolute',
        top: vw(1),
        backgroundColor: '#53FAFB',
        borderRadius: vw(2),
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(1.7),
        color: 'black',
    },
    info: {
        width: vw(18.9),
        height: vw(8.3),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    online: {
        width: vw(8.3),
        height: vw(8.3),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#202020',
        borderRadius: vw(5),
    }
});

export default CustomFriendCard;

