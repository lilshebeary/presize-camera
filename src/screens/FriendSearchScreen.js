import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";



const FriendSearchScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topStyle}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Friend')}>
					<Ionicons name="chevron-back-outline" size={45} color="#189BF3" style={styles.backIcon} />
				</TouchableOpacity>
          <Text style={styles.titleStyle}>Friend Search</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("EditUser")}
          >
            <Ionicons
              name="settings-outline"
              size={30}
              color="black"
              style={styles.settingsStyle}
            />
          </TouchableOpacity>
          <View />
          <View />
        </View>
       
          <TextInput
            style={styles.input}
            // onChangeText={onChangeText}
            // value={text}
            placeholder="Find Friends"
          />
           <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.addStyle}
            onPress={() => navigation.navigate("Friend")}
          >
            <Text style={styles.loginTextStyle}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inviteStyle}
            onPress={() => navigation.navigate("Friend")}
          >
            <Text style={styles.loginTextStyle}>Invite</Text>
          </TouchableOpacity>
        </View>
        {/* Navigation */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: 'center',
  },
  container: {
    flexDirection: "column",
    flex: 1,
  },
  topStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // backIcon: {
  // 	marginLeft:10,
  // 	marginTop: 10,
  // 	marginBottom: 0,

  // },
  settingsStyle: {
    marginLeft: 140,
    marginTop: 15,
    marginBottom: 0,
    marginRight: 10,
  },
  titleStyle: {
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 40,
    fontSize: 22,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 320,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
    color: "#eee",
    fontSize: 16,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30
  },
  addStyle: {
    marginTop: 50,
    backgroundColor: "#26CE7D",
    height: 45,
    width: 120,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  addTextStyle: {
    color: "black",
    fontSize: 18,
  },
  inviteStyle: {
    marginTop: 50,
    backgroundColor: "#26CE7D",
    height: 45,
    width: 120,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  inviteTextStyle: {
    color: "black",
    fontSize: 18,
  },
  navigationStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    marginHorizontal: 15,
  },
});

export default FriendSearchScreen;
