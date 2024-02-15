import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View } from 'react-native';
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path} from 'react-native-svg';

const CustomRoundedButton = ({ title, width, height, backgroundColor, color, fontSize, onPress, navigation }) => {
    const [backcolor, setBackColor] = useState('transparency')
    
    return (
            <TouchableOpacity
                style={[styles.button, { width:width, height:height, backgroundColor:backgroundColor, fontFamily:  title == 'Add Member' ?  'TT Firs Neus Trial Medium' : 'Neue-Metana', borderColor: title == 'Add Member' ? "#53FAFB10": "#53FAFB", }]}
                onPress={onPress}
            >
                <View pointerEvents="none">
                    <Text 
                        style={{ 
                            color:color, 
                            fontSize:fontSize, 
                            fontFamily: 'TT Firs Neue Trial Medium'
                            
                        }}
                    >
                        &nbsp;&nbsp;{title}&nbsp;&nbsp;
                    </Text>
                </View>
            </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(13.5),
        borderWidth: vw(0.3),
        flexDirection: 'row'
    }
});

export default CustomRoundedButton;

