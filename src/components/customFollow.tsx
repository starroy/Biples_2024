import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View, Image, ImageBackground, backgroundColor } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';

const CustomFollow = ({ avatar, avatarName, avatarContent, followState, onPress, handlePress}) => {
    
    return (
            <TouchableOpacity
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress = {handlePress}
            >
                <View style = {{ flexDirection: 'row', justyfiContent: 'center', alignItems: 'center'}}>
                    <Image 
                        source = {avatar}
                        style = {styles.avatar}
                    />
                    <View style = {styles.avatarInfo}>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(3.9), color: 'white'}}>
                            {avatarName}
                        </Text>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Regular', fontSize: vw(2.2), color: '#565656'}}>
                            {avatarContent}
                        </Text>
                    </View>
                </View>
                {
                    followState ? 
                    <TouchableOpacity style = {{ width: vw(20.8), aspectRatio: 75/30, borderRadius: vw(5), backgroundColor: '#53FAFB', justifyContent: 'center', alignItems: 'center', borderWidth: vw(1), borderColor: '#53FAFB' }}>
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(2.8), color: 'black'}}
                            onPress = {onPress}
                        >
                            Follow
                        </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity 
                        style = {{ width: vw(20.8), aspectRatio: 75/30, borderRadius: vw(5), backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', borderWidth: vw(0.3), borderColor: '#595959' }}
                        onPress = {onPress}
                    >
                        <Text style={{fontFamily: 'TT Firs Neue Trial Medium', fontSize: vw(2.8), color: '#595959'}}>
                            Following
                        </Text>
                    </TouchableOpacity>
                }
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
        paddingRight: vw(0),
        marginBottom: vw(2.8),
        marginLeft: vw(5)
    },
    avatar: {
        width: vw(12.5),
        height: vw(12.5),
        marginRight: vw(2.8)
    }
});

export default CustomFollow;

