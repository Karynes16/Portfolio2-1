import React, {useEffect, useState} from "react";
import { Text, StyleSheet } from 'react-native';


function Timer () {
    const [counter, setCounter] = useState(0)
    useEffect (() => {
        let interval
        const updateCounter = () => {
        setCounter(currentValue => currentValue + 1)
    }
 interval = setInterval(() => {
        updateCounter()
        }, 60000)
        return () => {
            clearImmediate(interval)
        }
    }, [] )
    return (
        <div>
            <Text style={StyleSheet.text}>
                This page should refresh after 60 seconds.
                <br></br>
                This page has currently refreshed {counter} times for your convenience.
            </Text>
        </div>
    )
    }

    const styles = StyleSheet.create ({
        text: {
            fontSize: 15,
            fontWeight: "bold",
            letterSpacing: 0.50,
            color: "black",
            alignSelf: "center",
        },
    })

    export default Timer; StyleSheet;