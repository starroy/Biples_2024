import React, {useState} from 'react';
import {
    ImageBackground, 
    View, 
    Text, 
    StatusBar, 
    StyleSheet, 
    Image,
    SafeAreaView,
    ScrollView,
    PanResponder,
    TouchableOpacity, 
    FlatList,
    TextInput
} from 'react-native'
import { vh, vw } from 'react-native-css-vh-vw';
import Svg, { Path, G, Circle } from 'react-native-svg';
import CustomFriendCard from '../../../components/customFriendCard'
import { ListItem } from 'react-native-elements';

const GroupAccount = ({navigation}) => {
    
    const [selected, setSelected] = useState('Chat');
    const [friendData, setFriendData] = useState({
        avatar: require('../../../../assets/images/avatar2.png'),
        userName: 'Fernado TOYs',
        displayName: '66.2K Members',
        online: true,
        btnName: [
            {
                name: 'Joined',
                draw: <Svg width={vw(2.8)} height={vw(1.7)} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M1 1L5 5L9 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>,                
                // navigationName: 'Account',
            }, {
                name: 'message',
                avatar: <Svg width={vw(3)} height={vw(3.9)} viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M7.16667 11.2C7.16667 12.1941 6.42047 13 5.5 13C4.57953 13 3.83333 12.1941 3.83333 11.2M2.93193 4.53087C2.43938 5.08795 2.16667 5.79082 2.16667 6.52C2.16667 7.88908 1.8523 8.89035 1.46004 9.60681C1.01297 10.4234 0.789431 10.8317 0.798258 10.9292C0.808357 11.0408 0.826953 11.076 0.910744 11.1422C0.983984 11.2 1.35195 11.2 2.08788 11.2H9.87778M5.5 3.4C5.33727 3.4 5.17577 3.41114 5.01666 3.43296C4.80471 3.46203 4.69873 3.47657 4.59236 3.44534C4.51578 3.42286 4.40031 3.35037 4.34433 3.28962C4.26657 3.20524 4.24957 3.16074 4.21556 3.07172C4.14825 2.89552 4.11111 2.70245 4.11111 2.5C4.11111 1.67157 4.73294 1 5.5 1C6.26706 1 6.88889 1.67157 6.88889 2.5C6.88889 2.90537 6.74 3.27318 6.49806 3.54313C6.17796 3.4491 5.84168 3.4 5.5 3.4ZM5.5 3.4C6.38406 3.4 7.2319 3.72871 7.85702 4.31383C8.48214 4.89894 8.83333 5.69252 8.83333 6.52C8.83333 6.72086 8.83841 6.91381 8.848 7.0991M10.5 11.8L0.5 2.2" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>,
                draw: <Svg width={vw(2.5)} height={vw(1.7)} viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M0.500004 1L4.5 5L8.5 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>, 
                // navigationName: 'Account',
            }
        ],
        text: 'The terms and conditions contained in this Agreement shall constitute the entire all previous agreements and understandings, whether oral or written.',
        
    });
    const [sortBtn, setSortBtn] = useState([
        {
            mame: 'Media',
            selected: true,
        },
        {
            mame: 'Documents',
            selected: false,
        },
        {
            mame: 'Voices',
            selected: false,
        },
        {
            mame: 'Links',
            selected: false,
        },
    ])
    const data = [
        { id : '1', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '2', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '3', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '4', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '5', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '6', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '7', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '8', avatarUrl: require('../../../../assets/images/card4.png'), },
        { id : '9', avatarUrl: require('../../../../assets/images/card4.png'), },
    ];
    const [nftAvatars, setNftAvatars] = useState(data);
    const friendArray = [
        { left: 6.11, avatarUrl: require('../../../../assets/images/card10.png') },
        { left: 12.22, avatarUrl: require('../../../../assets/images/card5.png') },
        { left: 18.33, avatarUrl: require('../../../../assets/images/avatar(1).png') },
    ];
    const [friendsAvatars, setFriendsAvatars] = useState(friendArray);
    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor = 'transparent'/>
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Image source = {require('../../../../assets/images/groupaccountBack.png')}
                        style = {styles.backImage}
                    />
                    <View style = {styles.headerBar}>
                        <TouchableOpacity
                            style = {[styles.prevButton, {backgroundColor: 'transparent'}]}
                            onPress = { () => 
                                navigation.navigate('FriendSearchLoading')
                            }
                        >
                            <Svg width={vw(2)} height={vw(3.3)} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M6 1L1 6L6 11" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                        <Text style = {styles.headerTitle}>
                            Account
                        </Text>
                        <TouchableOpacity
                            style = {[styles.prevButton, {backgroundColor: 'transparent', alignItems: 'flex-end'}]}
                            // onPress = { () => 
                            //     navigation.navigate('QRProfile')
                            // }
                        >
                            <Svg width={vw(1.1)} height={vw(4.44)} viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M2.125 7.25008C1.64174 7.25008 1.24999 7.64183 1.24999 8.12508C1.24999 8.60833 1.64174 9.00009 2.125 9.00009C2.60825 9.00009 3 8.60833 3 8.12508C3 7.64183 2.60825 7.25008 2.125 7.25008Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M2.125 13.3751C1.64174 13.3751 1.24999 13.7669 1.24999 14.2501C1.24999 14.7334 1.64174 15.1251 2.12499 15.1251C2.60825 15.1251 3 14.7334 3 14.2501C3 13.7669 2.60825 13.3751 2.125 13.3751Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                                <Path d="M2.125 1.12504C1.64174 1.12504 1.24999 1.51679 1.24999 2.00005C1.24999 2.4833 1.64174 2.87505 2.125 2.87505C2.60825 2.87505 3 2.4833 3 2.00005C3 1.51679 2.60825 1.12504 2.125 1.12504Z" stroke="white" stroke-width="1.38" stroke-linecap="round" stroke-linejoin="round"/>
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style = {styles.body}>
                    <View style = {styles.friendInfo}>
                        <View style = {styles.friend}>
                            {/* <View style = {{borderRadius: vw(11.3), overflow:'hidden'}}> */}
                            <Image
                                source = {friendData.avatar}
                                style = {styles.friendAvatar}
                            />
                            {/* </View> */}
                            <View style = {styles.info}>
                                <View style = {{flexDirection: 'row', alignItems:'center'}}>
                                    <Text style = {[styles.headerTitle,{fontSize: vw(5)}]}>
                                        {friendData.userName}&nbsp;
                                    </Text>
                                </View>
                                <Text style = {[styles.text, {color: 'white'}]}>
                                    {friendData.displayName}
                                </Text>
                                <View style = {styles.btnsStyle}>
                                    {
                                        friendData.btnName.map((item, index) => 
                                        <TouchableOpacity 
                                            key = {index}
                                            style = {[styles.btnStyle, {backgroundColor: index == 0? '#53FAFB' : '#FFFFFF10'}]}
                                            onPress = {() => navigation.navigate(item.navigationName)}
                                        >
                                            {item.avatar}
                                            <Text style = {[styles.text, {color: index == 0? 'black' : 'white'}]}>
                                            &nbsp;&nbsp;{item.name}&nbsp;&nbsp;
                                            </Text>
                                            {item.draw}
                                        </TouchableOpacity>
                                    )
                                    }
                                </View>
                            </View>
                        </View>
                        <View style = {styles.middle}>
                            <Text style = {[styles.text, {color: 'white', fontFamily: 'TT Firs Neue Trial Light', fontSize: vw(3.3)}]}>
                                {friendData.text}
                                <Text style = {[styles.text, {color: 'white', fontSize: vw(3.3)}]}>&nbsp;Read More </Text>
                            </Text>
                        </View>
                        <View style = {styles.friendFooter}>
                            <View style = {styles.myFriendsArray}>
                                <View style = {styles.avatarArray}>
                                    {
                                        friendArray.map((item, index) => 
                                            <Image
                                                key ={index} 
                                                source = {item.avatarUrl}
                                                style = {{width: vw(8.33), height: vw(8.33), borderRadius: vw(6.5), position: 'absolute', left: vw(item.left)}}
                                            />
                                        )
                                    }
                                </View>
                                <View>
                                    <Text style = {[styles.headerTitle, {fontSize: vw(3.33), width: vw(23.3), flexWrap: 'wrap'}]}>
                                        +239
                                    </Text>
                                    <Text style = {[styles.text, {fontSize: vw(2.22), width: vw(23.3), flexWrap: 'wrap'}]}>
                                        Mutal Friends Joined
                                    </Text>
                                </View>
                                <View style = {{flexDirection: 'row', width: vw(33.3), justifyContent: 'space-between'}}>
                                    
                                    <TouchableOpacity 
                                        style = {[styles.btn,{backgroundColor: '#53FAFB10'}]}
                                        // onPress={() => 
                                        //     })
                                        // }
                                    >
                                        <Text style = {[styles.headerTitle, {fontSize: vw(3.3)}]}>
                                            View All
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style = {[styles.prevButton, {width: vw(9.7), height: vw(9.7)}]}
                                        // onPress = { () => 
                                        //     navigation.navigate('FriendSearchLoading')
                                        // }
                                    >
                                        <Svg width={vw(5)} height={vw(5)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Path d="M15.375 15.375L12.8959 12.8958M14.6667 8.64583C14.6667 11.971 11.971 14.6667 8.64583 14.6667C5.32062 14.6667 2.625 11.971 2.625 8.64583C2.625 5.32062 5.32062 2.625 8.64583 2.625C11.971 2.625 14.6667 5.32062 14.6667 8.64583Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </Svg>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    </View>
                    </View>
                    <View style = {styles.avatarData}>
                        <View style = {styles.sortbtn}>
                            {
                                sortBtn.map((item, index) => 
                                    <TouchableOpacity 
                                        key = {index} 
                                        style = {[styles.btn,{backgroundColor: item.selected ? '#53FAFB': 'black'}]}
                                        onPress={() => {
                                            navigation.navigate('Documents');
                                            setSortBtn(prevBtn => {
                                                const newBtn = [...prevBtn];
                                                for (i = 0; i< sortBtn.length; i++){
                                                    newBtn[i].selected = false;
                                                }
                                                newBtn[index].selected = !(newBtn[index].selected);
                                        // console.log(newBtn);
                                                return newBtn;
                                            });}
                                        }
                                    >
                                        <Text style = {[styles.headerTitle, {fontSize: vw(3.3), color: item.selected? 'black': '#606060'}]}>
                                            {item.mame}
                                        </Text>
                                     </TouchableOpacity>
                                )
                            }
                        </View>
                        <View style = {styles.nftAvatar}>
                            {
                                nftAvatars.map((items, index) =>
                                        <TouchableOpacity style = {styles.item}
                                            key = {index}
                                            onPress = {() => navigation.navigate('MediaView')}
                                        >
                                            <Image source = {items.avatarUrl}
                                                style = {styles.item}
                                            />
                                        </TouchableOpacity>
                                    
                                )
                            }
                        </View>
                    </View>
                </ScrollView>
                <View style = {styles.footer}>
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {() => 
                            setSelected('Home')
                        }
                    >
                        <Svg width={vw(5)} height={vw(5)} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M6.50008 16.5V10.3333C6.50008 9.86662 6.50008 9.63327 6.59091 9.45501C6.67081 9.29821 6.79829 9.17072 6.95509 9.09083C7.13335 9 7.36671 9 7.83342 9H10.1668C10.6335 9 10.8668 9 11.0451 9.09083C11.2019 9.17072 11.3294 9.29821 11.4093 9.45501C11.5001 9.63327 11.5001 9.86662 11.5001 10.3333V16.5M0.666748 6.91667L8.20008 1.26667C8.48697 1.0515 8.63041 0.943924 8.78794 0.902454C8.927 0.865849 9.07317 0.865849 9.21222 0.902454C9.36976 0.943924 9.5132 1.05151 9.80008 1.26667L17.3334 6.91667M2.33342 5.66667V13.8333C2.33342 14.7668 2.33342 15.2335 2.51507 15.59C2.67486 15.9036 2.92983 16.1586 3.24343 16.3183C3.59995 16.5 4.06666 16.5 5.00008 16.5H13.0001C13.9335 16.5 14.4002 16.5 14.7567 16.3183C15.0703 16.1586 15.3253 15.9036 15.4851 15.59C15.6668 15.2335 15.6668 14.7668 15.6668 13.8333V5.66667L10.6001 1.86667C10.0263 1.43634 9.73944 1.22118 9.42436 1.13824C9.14625 1.06503 8.85392 1.06503 8.57581 1.13824C8.26073 1.22118 7.97385 1.43634 7.40008 1.86667L2.33342 5.66667Z" stroke={selected == 'Home'? '#53FAFB' : "#9D9D9D"} stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Home' ? '#53FAFB' : "#9D9D9D"}]}>
                            Home
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {() => 
                            setSelected('Community')
                        }
                    >
                        <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M15 13.1974C16.2132 13.8069 17.2534 14.785 18.0127 16.008C18.163 16.2502 18.2382 16.3713 18.2642 16.539C18.317 16.8798 18.084 17.2988 17.7666 17.4336C17.6104 17.5 17.4347 17.5 17.0833 17.5M13.3333 9.6102C14.5681 8.99657 15.4167 7.72238 15.4167 6.25C15.4167 4.77762 14.5681 3.50343 13.3333 2.8898M11.6667 6.25C11.6667 8.32107 9.98772 10 7.91665 10C5.84559 10 4.16665 8.32107 4.16665 6.25C4.16665 4.17893 5.84559 2.5 7.91665 2.5C9.98772 2.5 11.6667 4.17893 11.6667 6.25ZM2.13268 15.782C3.46127 13.7871 5.5578 12.5 7.91665 12.5C10.2755 12.5 12.372 13.7871 13.7006 15.782C13.9917 16.219 14.1372 16.4375 14.1205 16.7166C14.1074 16.9339 13.9649 17.2 13.7913 17.3313C13.5683 17.5 13.2615 17.5 12.648 17.5H3.18528C2.5718 17.5 2.26505 17.5 2.04202 17.3313C1.86836 17.2 1.72589 16.9339 1.71285 16.7166C1.69609 16.4375 1.84162 16.219 2.13268 15.782Z" stroke={selected == 'Community'? '#53FAFB' : "#9D9D9D"} stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Community' ? '#53FAFB' : "#9D9D9D"}]}>
                            Community
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.footerIcon}
                        onPress = {() => 
                            setSelected('Chat')
                        }
                    >
                        <Svg width={vw(5.6)} height={vw(5.6)} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <G clip-path="url(#clip0_175_4353)">
                                <Path d="M5.07866 9.35717C5.02686 9.02336 4.99999 8.68138 4.99999 8.33317C4.99999 4.65127 8.00439 1.6665 11.7105 1.6665C15.4166 1.6665 18.421 4.65127 18.421 8.33317C18.421 9.1649 18.2677 9.96105 17.9877 10.6953C17.9295 10.8477 17.9004 10.924 17.8872 10.9835C17.8741 11.0425 17.8691 11.084 17.8676 11.1444C17.8662 11.2053 17.8745 11.2725 17.891 11.4068L18.2265 14.1319C18.2628 14.4269 18.281 14.5745 18.2319 14.6817C18.1889 14.7756 18.1125 14.8503 18.0176 14.8911C17.9093 14.9377 17.7622 14.9161 17.4681 14.873L14.8137 14.4839C14.6751 14.4636 14.6058 14.4535 14.5427 14.4538C14.4803 14.4542 14.4371 14.4588 14.376 14.4716C14.3142 14.4846 14.2353 14.5142 14.0775 14.5733C13.3414 14.849 12.5437 14.9998 11.7105 14.9998C11.362 14.9998 11.0197 14.9734 10.6856 14.9226M6.35967 18.3332C8.83042 18.3332 10.8334 16.2811 10.8334 13.7498C10.8334 11.2185 8.83042 9.1665 6.35967 9.1665C3.88892 9.1665 1.88599 11.2185 1.88599 13.7498C1.88599 14.2587 1.96692 14.7481 2.11631 15.2054C2.17946 15.3988 2.21104 15.4954 2.2214 15.5615C2.23222 15.6304 2.23412 15.6691 2.23009 15.7388C2.22623 15.8055 2.20953 15.8809 2.17614 16.0318L1.66669 18.3332L4.16236 17.9923C4.29857 17.9737 4.36668 17.9644 4.42616 17.9648C4.48879 17.9653 4.52203 17.9687 4.58344 17.9809C4.64177 17.9925 4.72849 18.0231 4.90191 18.0843C5.35885 18.2456 5.84928 18.3332 6.35967 18.3332Z" stroke={selected == 'Chat' ? '#53FAFB' : "#9D9D9D"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </G>
                            <Circle cx="17" cy="3" r="3" fill="#53FAFB"/>
                        </Svg>
                        <Text style = {[styles.footerText, {fontSize: vw(2.8), color: selected == 'Chat' ? '#53FAFB' : "#9D9D9D"}]}>
                            Chat
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        flexDirection: 'column',
    },
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: vw(28.9),
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    backImage: {
        width: '100%',
        height: vw(70),
        position: 'absolute',
        top: 0,
    },
    headerBar: {
        width: vw(90),
        height: vh(4.36),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: vw(4.2)
    },
    prevButton: {
        width: vw(11),
        height: vw(11),
        borderRadius: vw(6),
        backgroundColor: '#131313',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(4.44),
        color: 'white'
    },
    body: {
        width: vw(100),
        // position: 'absolute',
        marginTop: vw(28.1),
        marginBottom: vw(6),
        paddingLeft: vw(5)
    },
    title: {
        fontFamily: 'TT Firs Neue Trial Medium',
        fontSize: vw(5.6),
        color: 'white',
    },
    foundResult: {
        width: vw(80),
        // marginLeft: vw(5),
        height: vh(24.2),
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: vw(20)
    },
    text: {
        fontFamily: 'TT Firs Neue Trial ExtraLight',
        fontSize: vw(3.3),
        color: '#656565',
        width: vw(85)
    },
    friendInfo: {
        width: vw(90),
        height: vw(68.72),
        paddingTop: vw(5.33),
        paddingBottom: vw(7.22),
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    friend: {
        flexDirection: 'row',
        height: vw(22.2),
        marginBottom: vw(6.7)
    },
    friendAvatar: {
        width: vw(22.2),
        height: vw(22.2),
        borderRadius: vw(3),
        marginRight: vw(5)
    },
    onlineState: {
        backgroundColor: '#53FAFB',
        width: vw(4.56),
        height: vw(4.56),
        borderRadius: vw(3),
        borderWidth: vw(0.3),
        borderColor: 'black',
        right: vw(5),
        top: vw(16)
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    btnsStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // width: vw(18.6),
        // marginLeft: vw(4),
    },
    btnStyle: {
        height: vw(8.33),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: vw(2),
        paddingLeft: vw(4),
        paddingRight: vw(4),
        flexDirection: 'row',
        borderRadius: vw(10),
        justifyContent:'center',
    },
    text: {
        fontFamily : 'TT Firs Neue Trial Medium',
        fontSize: vw(2.8),
        color: '#4C4C4C'
    },
    middle: {
        flexDirection: 'column',
        height: vw(13.6),
        width: vw(90),
        justifyContent: 'space-betwen',

    },
    joinDate: {
        flexDirection: 'row',
        marginTop: vw(1),
        width: vw(60),
        justifyContent: 'space-between',
    },
    friendFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    personalInfo: {
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: vw(7),
        paddingLeft: vw(7),
        borderRightWidth: 2, 
        borderRightColor: '#4C4C4C'
    },
    avatarData: {
        marginTop: vw(0),
        width: vw(90)
    },
    sortbtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        width: vw(20.83),
        height: vw(9.4),
        borderRadius: vw(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    nftAvatar: {
        width: vw(90),
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: vw(6),
        marginLeft: vw(1.5),
        marginBottom: vw(10)
    },
    item: {
        marginRight: vw(2),
        marginBottom: vw(2),
        width: vw(27.8),
        height: vw(27.8),
        borderRadius: vw(5)
    },
    myFriendsArray: {
        flexDirection: 'row',
        width: vw(65.55),
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    avatarArray: {
        position: 'absolute',
        bottom: vw(9),
        right: vw(95)
    },
    footer: {
        position: 'absolute',
        bottom: vw(5.56),
        width: vw(92.2),
        left: vw(3.9),
        aspectRatio: 332/73,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#22222290',
        borderRadius: vw(5)
    },
    footerIcon: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: vw(12.5)
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: vw(13.5),
        backgroundColor: '#E9E9E921',
        flexDirection: 'row'
    },
    footerText: {
        fontFamily: 'TT Firs Neue Trial Regular',
        fontSize: vw(3.3),
        color: 'white'
    }
});

export default GroupAccount;