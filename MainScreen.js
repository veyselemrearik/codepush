import React from 'react';
import {View,Text,Button } from 'react-native';

const MainScreen = props => {

    return (
        <View style={{ flex: 1, alignItems: "center" }} >
            <View>
                <Text>veysel emre dddarik</Text>
            </View>
            <Text>Anasayfa</Text>
            <Button title="diger sayfa" onPress={() => { }} />
        </View>
        
    )



}


export default MainScreen