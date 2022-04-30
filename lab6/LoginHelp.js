import React, {useState} from 'react';
import { Button, Text, StyleSheet } from 'react-native';

function LoginHelp() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Text> Issues logging in? Get help here! </Text>
            <Button title="Click for Help" onPress={() => setCount(count+1)}></Button>
            <br></br>
            <Text>Thanks for sending in {count} help inquiries. We have sent {count} emails to your inbox.</Text>
        </div>
    );
};

const styles= StyleSheet.create ({
    text: {
        fontSize: 35,
    }
})

export default LoginHelp; StyleSheet;