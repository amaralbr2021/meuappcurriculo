import React from 'react'
import {View, Text} from 'react-native'
import style from './style'


const Card = () => {
    return (
    <View style= {style.page}>
    <View style={style.container_cabecalho}>
    <Image source={foto} style={style.foto}/>
    <Text style={style.nome}> Bruno Amaral </Text>
    <View style={style.card_container}>
    <View style={style.card}>
    <View style={style.card_header}>
    <View style={style.card_content}>
    <Text> Experiência profissional </Text>
    <Text> Android </Text>
    <Text> Java </Text>
    <Text> React Native </Text>  

    </View>
    </View>
    </View>
    </View>

    }
})

export default Card