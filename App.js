import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import { navigationRef } from "./src/RootNavigation";

const Stack = createNativeStackNavigator();
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";

function App() {
  const persistor = persistStore(Store);
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="Gallery"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Create" component={CreateScreen} />
            <Stack.Screen name="Camera" component={CameraScreen} />
            <Stack.Screen name="Photo" component={PhotoScreen} />
            <Stack.Screen name="Edit" component={EditScreen} />
            <Stack.Screen name="Gallery" component={GalleryScreen} />
            <Stack.Screen name="Snapfish" component={SnapfishScreen} />
            <Stack.Screen name="PrintShop" component={PrintShopScreen} />
            <Stack.Screen name="Print" component={PrintScreen} />
            <Stack.Screen name="Friend" component={FriendScreen} />
            <Stack.Screen name="Folder" component={FolderScreen} />
            <Stack.Screen name="EditUser" component={EditUserScreen} />
            <Stack.Screen name="FriendSearch" component={FriendSearchScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
