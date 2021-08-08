import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import { allStyle } from '../../Styles/Styles';

export default function  Photo ({navigation}) {
    const {params} = useRoute()
    
    function back(){
        navigation.goBack();
    }
    
    return (
        <SafeAreaView style={allStyle.container}>
            <Button  title='Back'  onPress={back}/>
            <Image
                source={{uri:`${params.url}`}}
                style={allStyle.photo}
                />  
            <Text style={allStyle.namePhoto} >{params.name}</Text>
        </SafeAreaView>
    );
}