import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Home extends Component{
    render(){
        return(
            <View>
                <Text style={styles.title}>
                    Enter your name :
                </Text>
                <TextInput
                 placeholder="Jon Snow"
                 style={styles.nameInput}
                 onChange={(text)=>{
                    this.setState({
                        name: text
                    })
                 }}
                 />
                <TouchableOpacity
                    onPress={()=>{
                        //navigate to next screen
                        Actions.chat({
                            name: this.state.name
                        })
                    }}
                >
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20
    },
    nameInput: {
        padding: 5,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20
    }
})

export default Home