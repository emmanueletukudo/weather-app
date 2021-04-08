import React from "react";
import {StyleSheet, Text, View} from "react-native";


const Home = () => {

    return(
        <View style={styles.constainer}>
            <Text>
                Hello World
            </Text>

        </View>
    )
}

const styles =  StyleSheet.create({
    constainer: {
        flex: 1,
        alignContent: "center",
    },
    hello:{
        fontSize: 12,
        fontWeight: 700,
    }
})

export default Home;