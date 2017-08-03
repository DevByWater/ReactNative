import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'

import Images from '../data/Images'


class MainComponent extends Component {
    state = {
        index: 0
    }
    
    nextImage(event){
        const { index, imageWidth } = this.state,
                X = event.nativeEvent.locationX,
                delta = (X < imageWidth/2) ? -1 : +1
        
        let newIndex = (index + delta) % Images.length

        if(newIndex < 0){
            newIndex = Images.length - Math.abs(newIndex)
        }

        this.setState({
            index: newIndex
        })
    }

    onImageLayout(event){
        this.setState({
            imageWidth: event.nativeEvent.layout.width
        })
    }


    render(){
        const img = Images[this.state.index]

        return (
            <TouchableHighlight onPress={this.nextImage.bind(this)}>
                 <Image 
                    onLayout={this.onImageLayout.bind(this)}
                    style={styles.image}
                    source={{uri: img.uri}}>
                    <Text style={styles.imageLabel} >{img.label}</Text>
                 </Image>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 2,
        width: 320,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    imageLabel: {
        textAlign: 'center',
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        color: 'white',
        width: 320
    }
})


export default MainComponent