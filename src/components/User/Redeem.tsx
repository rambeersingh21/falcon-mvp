
import React ,{FC}from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../../components/Themed';

const RedeemTab:FC<any>=()=>{

    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontSize:50}}>Manage Redeem</Text>
        </View>
    );
};

const styles= StyleSheet.create({
    container: {
        overflow: "scroll",
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
})

export default RedeemTab;