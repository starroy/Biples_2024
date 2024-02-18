import React from 'react';
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
    FlatList
} from 'react-native'
import LoadingStart from './src/pages/loading/loadingStart';
import Loading from './src/pages/loading/loading';
import LoadingEnd from './src/pages/loading/loadingEnd';
import Register from './src/pages/register/register';
import RegisterEmail from './src/pages/register/email';
import RouterComponent from './src/layout/router';
import RegisterVerify from "./src/pages/register/verify";
import RegisterVerifyConfirm from "./src/pages/register/verifyConfirm";
import CreateAccountInfo from "./src/pages/register/createAccountInfo";
import SelectAvatar from "./src/pages/register/selectAvatar";
import CreateEndLoading from './src/pages/register/createEndLoading';
import BackLogin from './src/pages/login/backLogin';
import WalletLogin from './src/pages/login/walletLogin';
import ForgetAccount from './src/pages/login/forgetAccount';
import ResetPassword from './src/pages/login/resetPassword';
import ResetLoading from './src/pages/login/resetLoading';
import Login from './src/pages/login/login';
import Settings from './src/pages/settings/settings';
import Preferences from './src/pages/settings/preferences';
import PrivatePolicy from './src/pages/settings/privatePolicy';
import Main from "./src/pages/landing/main";
import Topics from "./src/pages/landing/topic";
import Notifications from "./src/pages/landing/notifications";
import MainSearch from "./src/pages/landing/search/mainSearch";
import SearchResultNone from "./src/pages/landing/search/searchResultNone";
import SpeechInput from "./src/pages/landing/search/speechInput";
import SortSearch from "./src/pages/landing/search/sortSearch";
import MemberSearch from "./src/pages/landing/search/memberSearch";
import Explorer from './src/pages/landing/manage/explorer';
import ManageFriend from "./src/pages/landing/manage/manageFriend";
import QRProfile from "./src/pages/landing/manage/QRProfile";
import Scan from "./src/pages/landing/manage/scan";
import FriendProfile from "./src/pages/landing/profile/friendProfile";
import FriendSearch from "./src/pages/landing/profile/friendSearch";
import FriendSearchLoading from "./src/pages/landing/profile/friendSearchLoading";
import Account from "./src/pages/landing/profile/account";
import GroupAccount from "./src/pages/landing/profile/groupAccount";
import Documents from "./src/pages/landing/profile/documents";
import MediaView from "./src/pages/landing/profile/mediaView";
import Members from "./src/pages/landing/profile/members";
import StackRouter from './src/router/router';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateAccountLoading from './src/pages/register/createAccountLoading';
// import Font from './font';
import Basic from './drag'
import Item from './animation'
// const Stack = createNativeStackNavigator();


function App() {

  return (
      // <NavigationContainer style = {styles.container}>
      //     <StackRouter/>
      // </NavigationContainer>
    
    <View style={styles.container}>
      <Documents/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  }
});

export default App;