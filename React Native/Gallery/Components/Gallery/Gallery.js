import React from 'react';
import {  FlatList, Text, View, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import usePhoto from '../../Hooks/usePhoto';
import { allStyle } from '../../Styles/Styles';



export default function Gallery({navigation}) {

    const {data} = usePhoto();

    function onLink(url, name){
        navigation.navigate('Photo', {url: url, name: name})
    }

    return (
        <SafeAreaView>
                <Text  style={allStyle.title}>Gallery</Text>
                <ScrollView>
                    <FlatList
                        data={data }
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                        <View style={allStyle.container}>
                            
                            <TouchableOpacity style={{width: '100%'}} onPress={()=> onLink(item.urls.full, item.user.name)}>
                                <View style={allStyle.container}>
                                    <Image
                                        source={{uri:`${item.urls.full}`}}
                                        style={allStyle.img}
                                        /> 
                                    <Text style={allStyle.name}>{item.user.name}</Text> 
                                </View>
                            </TouchableOpacity>
                            
                        </View>
                    )} 
                    />
                </ScrollView>
            
            
        </SafeAreaView> 

    );
};

/* const styles = StyleSheet.create({
    container: {
        display:'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%'
    },
    title: {
        backgroundColor: 'blue',
        width: '100%',
        fontSize: 50,
        color: '#fff',
        padding: '10px',
        marginBottom: '10px'
    },
    name: {
        backgroundColor: 'blue',
        width: '80%',
        fontSize: 50,
        color: '#fff',
        padding: '5px',
        marginBottom: '10px'
    },
    img:{
        width:'80%',
        height:'300px'
    }
}); */
/* Link style={{width: '100%'}} to='/Photo' params={{id: item.id}} */ 