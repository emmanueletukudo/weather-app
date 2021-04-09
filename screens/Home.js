import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {data} from "../constants/"


const Home = () => {
    const [weatherData, setWeatherData] = React.useState(data.getByCity("New York"));
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