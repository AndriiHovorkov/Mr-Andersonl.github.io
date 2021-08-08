import React from 'react';
import Gallery from './Gallery'; 
import Photo from './Photo'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator();


function Navigate() {

    console.log("enter Start");

    return <NavigationContainer >
                <Stack.Navigator>
                    <Stack.Screen
                        name="Gallery"
                        component={Gallery}
                        options={{title:'Gallery'}}
                    />
                    <Stack.Screen
                        name="Photo"
                        component={Photo}
                        options={{title:'Photo'}}
                        
                    />
                </Stack.Navigator>
            </NavigationContainer> 
}
export default Navigate
