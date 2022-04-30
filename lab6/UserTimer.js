import React, {useEffect, useState} from "react";
import { Text, StyleSheet } from 'react-native';


function Timer () {
    const [count, setcount] = useState(0)
    useEffect (() => {
        let interval
        const updateCount = () => {
        setcount(currentVal => currentVal + 1)
    }
 interval = setInterval(() => {
        updateCount()
        }, 60000)
        return () => {
            clearImmediate(interval)
        }
    }, [] )
    return (
        <div>
            <Text style={StyleSheet.text}>
                Your page should refresh after 60 seconds.
                <br></br>
                Your page has currently refreshed {count} times for your convenience. Your welcome!
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