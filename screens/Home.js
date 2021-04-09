import React from "react";
import {StyleSheet, Text, View} from "react-native";
import axios from "axios";
import {data} from "../constants/"

const 

const Home = () => {
    const [weatherData, setWeatherData] = React.useState(null);

    
    getData = () => {

    }
    return(
        <View style={styles.constainer}>
            <Text style={styles.hello}>
                Hello World
            </Text>

        </View>
    )
}

const styles =  StyleSheet.create({
    constainer: {
        flex: 1,

    },
    hello:{
        flex: 1,
        alignItems: "center",
        fontSize: 12,
        fontWeight: "700",
        color: "#000"
    }
})

export default Home;