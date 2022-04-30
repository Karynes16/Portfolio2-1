import React, { useCallback, useState } from "react"
import { Button, Pressable, StyleSheet, Text, TextInput } from "react-native"

const NO_USER = "Error, no username entered!"
const INCORRECT_PASSWORD = "Error, Incorrect Password"

export default function LoginApp() {
    let [logIn, setLogIn] = useState(false)
    let  [pass, setPass] = useState("")
    let [user, setUser] = useState("")
    let [error, setError] = useState(undefined)
    let goLogin = useCallback(() => {
        if (user === "") {
            //error message
            setError(NO_USER)
        } else {
            if (pass === "Ch@rge!") {
                setLogIn(true)
            } else {
                //error message
                setError(INCORRECT_PASSWORD)
            }
        }
    }
    )
    return !logIn ?
    <>
    <Text style={styles.welcome}> Log In!</Text>
    <TextInput autoFocus={true} value={user} onChangeText={text => setUser(text)} placeholder="Username" style={styles.textinput}></TextInput>
    <TextInput value={pass} onChangeText={text => setPass(text)} secureTextEntry={true} placeholder="Password"style={styles.textinput}></TextInput>
    <Text style={styles.error}>{error !== undefined ? error : ""}</Text>
    <Pressable style={styles.button} onPress={() => goLogin()}>
        {/* message shown */}
        <Text style={styles.text}>Log in here!</Text>
    </Pressable>
    </>
    //message shown
    : <Text>Hey there, {user}! Welcome to the page!</Text>
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        elevation: 4,
        backgroundColor: "blue",   
    },
    error: {
        color: "red",
        paddingVertical: 10,
    },
    welcome: {
        fontSize: 25,
        lineHeight: 21, 
        fontWeight: "bold",
        letterSpacing: 0.50,
        color: "white",
    },
    textinput: {
        fontSize: 25,
        width: 250,
        borderBottomColor: "purple",
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 8,
        margin: 5,
    },
});