import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';

const Greeting = () => {
    const [night, updateNight] = useState(<h1>Good Night</h1>)
    const handleUpdate = () => {
        updateNight (<h1>Good Morning, its Daylight now!</h1>)
    }
    return (
        <div>
            { night }
            <Button title= "No more night time, wake up" onPress={ () => {handleUpdate () }} ></Button>
            <br></br>
        </div>
    );
}

export default Greeting; StyleSheet
