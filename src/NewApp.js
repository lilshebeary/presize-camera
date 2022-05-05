import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Store from "./src/store";
import { Provider } from "react-redux";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import CreateScreen from "./src/screens/CreateScreen";
import CameraScreen from "./src/screens/CameraScreen";
import PhotoScreen from "./src/screens/PhotoScreen";
import EditScreen from "./src/screens/EditScreen";
import GalleryScreen from "./src/screens/GalleryScreen";
import SnapfishScreen from "./src/screens/SnapfishScreen";
import PrintShopScreen from "./src/screens/PrintShopScreen";
import PrintScreen from "./src/screens/PrintScreen";
import FriendScreen from "./src/screens/FriendScreen";
import FolderScreen from "./src/screens/FolderScreen";
import EditUserScreen from "./src/screens/EditUserScreen";
import FriendSearchScreen from "./src/screens/FriendSearchScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

// const Stack = createNativeStackNavigator();
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";

// const trackListFlow = createStackNavigator({
//   TrackList: TrackListScreen,
//   TrackDetail: TrackDetailScreen,
// });

//   trackListFlow.navigationOptions = () => {
//     return {
//       title: 'Tracks',
//       tabBarIcon: <Feather name="list" size={20} color="black" />
//     };
//   };
const AppBottomNavigator = createMaterialBottomTabNavigator();
const AppTopNavigator = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const switchNavigator = createSwitchNavigator({
  // ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
    Create: CreateScreen,
  }),
  cameraFlow: createStackNavigator({
    Camera: CameraScreen,
    Photo: PhotoScreen,
    Edit: EditScreen,
    Gallery: GalleryScreen,
    Folder: FolderScreen,
    Print: PrintScreen,
    PrintShop: PrintShopScreen,
    Friend: FriendScreen,
    Folder: FolderScreen,
    EditUser: EditUserScreen,
    Profile: ProfileScreen,
    FriendSearch: FriendSearchScreen
  }),
  cameraFlow: createMaterialBottomTabNavigator({
    Photo: PhotoScreen,

  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
