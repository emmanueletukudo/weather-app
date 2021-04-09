import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import axios from "axios";
import {data, icons} from "../constants/"
const Home = () => {
    const [weatherData, setWeatherData] = React.useState([
        {
            id: 0,
            city: "New York",
            temp: 283.88,
            icon: icons.rainy,
            description: "overcast clouds",
        },
        {
            id: 1,
            city: "San Francisco",
            temp: 285.52,
            icon: icons.rainy,
            description: "broken clouds",
        },
        {
            id: 2,
            city: "Chicago",
            temp: 283.88,
            icon: icons.rainy,
            description: "overcast clouds",
        },

    ]);

    function renderWeather(item, index){
        return(
            <TouchableOpacity 
            style={{height: 300, width: 200, justifyContent: "center", marginHorizontal: SIZES.base }}
            >
                <Text style={{color: "#333", fontSize: 20, fontWeight:"700"}}>{item.city}</Text>
                <View style={[ styles.weatherDtails1, styles.featuredShadow]}>
                    <View style={}>
                        <Text style={styles.city}>{item.name}</Text>
                        <Text style={styles.temp}>{item.temp}</Text>
                    </View>
                </View>
                <Image 
                source={item.icon} 
                resizeMode="cover"
                style = {{
                    position: "absolute",
                    top: 25,
                    right: 20,
                    width: "90%",
                    height: 200,
                }}
                />
            </TouchableOpacity>
        )
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
    },

    weatherDtails1:{
        flex: 1,
        justifyContent: "center",
        marginTop: 15,
        borderRadius: 10,
        marginRight: 15,
        paddingRight: 12,
        paddingBottom: 12,
    },
    temp: {
        color: "#ffffff", 
        fontSize: 14,
        fontWeight: "700",
    },
    itmeShadow:{
        position: "absolute",
        top: 160,
        left: 30,
        flexDirection: "column",
        marginLeft: 25,
        marginBottom: 8,
    },
    city:{
        color: "#ffffff",
        fontSize: 14,
        marginTop: 15
    },
    weatherDetails: {
        fontSize: 17,
        fontWeight: "400",

    }
})

export default Home;