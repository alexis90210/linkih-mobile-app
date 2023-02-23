import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  PixelRatio,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';
import { couleurs } from '../components/color';

// InscriptionProprietaire3
export default function InscriptionProprietaire3({navigation}: {navigation: any}) {
  return (
    <>
      <SafeAreaView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
        }}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding:10
            }}>
            <Image
          source={require('../assets/images/banner.jpeg')}
          style={{
            height: 200,
            width: '100%',
            borderRadius:10
          }}/>
            <Text
              style={{
                textAlign: 'center',
                color: '#00000090',
                opacity: 0.85,
                fontWeight: '600',
                fontSize: 14,
                marginVertical: 13,
                width:'80%'
              }}>
              Veuillez completer votre photo de couverture            </Text>
            <View
              style={{
                marginVertical: 70,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#7B4C7A' ,borderRadius: 30,
              }}>
              <Pressable
              android_ripple={{color: '7B4C7A'}}
                style={{
                  paddingHorizontal: 10,
                }}
                onPress={() => navigation.navigate('inscription_proprietaire_4')}>
                <Text
                  style={{
                    textAlign: 'center',

                    fontWeight: '500',
                    color: couleurs.secondary,
                    padding: 10,
                    paddingHorizontal: 20,
                    fontSize: 14,
                    width: 150,
                  }}>
                  Choisir
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
