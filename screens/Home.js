import React from "react";
import {StyleSheet, Text, Image, View, TouchableOpacity, FlatList} from "react-native";
import axios from "axios";
import {data, icons} from "../constants/"
const Home = () => {
    const [weatherData, setWeatherData] = React.useState([
        {
            id: 0,
            city: "New York",
            temp: 283.88,
            main: "Clouds",
            icon: icons.rainy,
            description: "overcast clouds",
        },
        {
            id: 1,
            city: "San Francisco",
            temp: 285.52,
            main: "Rain",
            icon: icons.rainy,
            description: "broken clouds",
        },
        {
            id: 2,
            city: "Chicago",
            temp: 283.88,
            main: "Rain",
            icon: icons.rainy,
            description: "overcast clouds",
        },

    ]);

    function renderWeather(item, index){
        return(
            <TouchableOpacity 
            style={styles.weatherContainer}
            >
                <Text style={styles.city}>{item.city}</Text>
                <View style={[ styles.weatherDtails1, styles.itmeShadow]}>
                    <View style={styles.weatherDetailsWrapper}>
                        <Text style={styles.main}>{item.main}</Text>
                        <Text style={styles.temp}>{item.temp}</Text>
                    </View>
                </View>
                <Image 
                source={item.icon} 
                resizeMode="cover"
                style = {styles.icon}
                />
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.constainer}>
           <FlatList
           horizontal
           showsHorizontalScrollIndicator={false} 
           data={weatherData}
           keyExtractor = {item => item.id.toString()}
           renderItem={(item, index) => renderWeather(item, index)}
           />
        </View>
    )
}

const styles =  StyleSheet.create({
    constainer: {
        flex: 1,
    },
    weatherContainer: {
        height: "100%", 
        width: 350, 
        justifyContent: "center", 
        marginHorizontal: 14,
        backgroundColor: "#000",
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
    main:{
        color: "#ffffff",
        fontSize: 14,
        marginTop: 15
    },

    city:{
        color: "#333", 
        fontSize: 20, 
        fontWeight:"700"
    },
    weatherDetails: {
        fontSize: 17,
        fontWeight: "400",
    },
    weatherDetailsWrapper: {
        flexDirection: "column"
    },
    icon: {
        position: "absolute",
        top: 25,
        right: 20,
        width: "90%",
        height: 200,
    }
})

export default Home;