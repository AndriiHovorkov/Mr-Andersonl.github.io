import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView} from 'react-native';
import Navigate from './Components/Gallery/Navigate';




export default function App() {
  return (
    <SafeAreaView>
        <Navigate/>  

        <StatusBar style="auto" />
    </SafeAreaView>
        
  );
}