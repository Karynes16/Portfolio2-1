import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';

const Hello = () => {
    const [night, updateNight] = useState(<h1>Good Night everyone, its dark out!</h1>)
    const handleUpdate = () => {
        updateNight (<h1>Good Morning everyone, its Daylight now!</h1>)
    }
    return (
        <div>
            { night }
            <Button title= "No more night time, wake up" onPress={ () => {handleUpdate () }} ></Button>
            <br></br>
        </div>
    );
}

export default Hello; StyleSheet
