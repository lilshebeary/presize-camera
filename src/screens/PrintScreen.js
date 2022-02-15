import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const PrintScreen = ({ navigation }) => {
	return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text allowFontScaling={false} style={styles.title}>Find Printer</Text>  
            </View>
            <View style={styles.buttonBox}>
                <View style={styles.printIcon}>
                    <AntDesign name="printer" size={85} color="black" />
                </View>
                <View style={styles.findPrint}> 
                    <TouchableOpacity style={styles.scanButton} >
                        <Text allowFontScaling={false} style={styles.textPrintStyle}>Find Printer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.printButton} >
                        <Text allowFontScaling={false} style={styles.textPrintStyle}>Find Printer</Text>
                    </TouchableOpacity>
                </View>

               
            </View>

            <View style={styles.navigationStyle}>
                {/* friends */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <SimpleLineIcons name="people" size={28} color="black" />
            </TouchableOpacity>
            {/* files */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gallery')}>
            <SimpleLineIcons name="picture" size={28} color="black" />
            </TouchableOpacity>
            {/* print */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PrintShop')}>
                <AntDesign name="printer" size={28} color="black" />
            </TouchableOpacity>

            {/* space */}
            
            <View />
            <View />
            {/* flash */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Folder')}>
                <Ionicons name="ios-add-sharp" size={28} color="black" />
            </TouchableOpacity>

            {/* HDR */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Friends')}>
                <Ionicons name="paper-plane-outline" size={28} color="black" />
            </TouchableOpacity>

            {/* camera angle */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
                <Ionicons name="ios-camera-outline" size={30} color="black" />
            </TouchableOpacity>

            </View>	
        </SafeAreaView>

        );
    };
    
    const styles = StyleSheet.create({
        safeArea: {
            flex: 1
        },
        container: {
            flex: 1
        },
        title: {
            alignSelf: 'center',
            fontSize: 18
        },
        buttonBox: {
            flex: 3,
            flexDirection:'row',
        },
        findPrint: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            marginVertical: 10
        },
       
        textPrintStyle: {
            alignSelf: 'center'
        },
        printIcon: {
            marginLeft: 20,
           
        },
        scanButton: {
            backgroundColor: '#189BF3',
            height: 40,
            width: '60%',
            borderRadius: 10,
            justifyContent: 'center',
            marginBottom: 20
        },
        printButton: {
            backgroundColor: '#26CE7D',
            height: 40,
            width: '60%',
            borderRadius: 10,
            justifyContent: 'center' 
        },
        navigationStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
            marginHorizontal: 15
           
        },
    });

    export default PrintScreen;