import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import foto from './src/assets/photo.jpg';
import Card from './components/Card'



const App = () => {

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1
  },
  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  },
  card_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#FFFFFF'

  },
  card: {
    width: '100%',
    borderRadius: 5, 
    borderWidth: 2,
    borderColor: '#939393',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  card_content: {
    marginTop: 1,
    color: '#939393'
  }

})

export default App;
