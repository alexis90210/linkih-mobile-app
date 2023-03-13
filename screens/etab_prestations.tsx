import React, {useRef, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
  Slider,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import ArrowLeftIcon from '../components/ArrowLeft';
import {CustomFont, couleurs} from '../components/color';
import ApiService from '../components/api/service';
import axios from 'axios';
import storage from '../components/api/localstorage';
import { Image } from 'react-native-svg';

export default function MesPrestations({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {

   // LOADER
 const [isLoading, setLoading] = useState(false)

  // GET USER CONNECTED
  const [userConnected, SetUserConnected] = useState<any>({})

  storage.load({
    key: 'userconnected', // Note: Do not use underscore("_") in key!
    id: 'userconnected', // Note: Do not use underscore("_") in id!
  }).then( data => {

    SetUserConnected(data.etablissement[0])
  })
  .catch(error => console.log(error)
  );

 //   GET GALLERIE
 const [PrestationsVendeur, setPrestationsVendeur] = useState([]);
 const [isLoadedPrestationsVendeur, setLoadedPrestationsVendeur] = useState(false);

 const loadPrestationsVendeur = () => {
   axios({
     method: 'POST',
     url: '', //ApiService.,
     data:JSON.stringify({
       vendeur_id: userConnected.id,
        // date: date
     }),
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
   })
     .then((response: {data: any}) => {

       var api = response.data;
       
       if (api.code == 'success') {
        setLoading(false)
         setLoadedPrestationsVendeur(true)
         setPrestationsVendeur(api.message);
       }
       if (api.code == 'error') {
         Alert.alert('', 'Erreur survenue');
       }
     })
     .catch((error: any) => {
       console.log(error);
       Alert.alert('', 'Erreur Network');
     });
 };

//  if ( !isLoadedPrestationsVendeur ) loadPrestationsVendeur()



  return (
    <View>
      <SafeAreaView
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            gap: 30,
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: couleurs.primary,
          }}>
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeftIcon color={couleurs.white} />
          </Pressable>
          <Text
            style={{
              color: couleurs.white,
              fontSize: 16,
              fontFamily: CustomFont.Poppins,
            }}>
            Mes Prestations
          </Text>
        </View>

        {/* main */}
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{
            backgroundColor: '#f6f6f6f6',
          }}>
          <View style={{marginHorizontal: 12, marginVertical: 10}}>

            {isLoading && <View style={{width:'100%', height:200, marginTop:100, display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <ActivityIndicator size={'large'}></ActivityIndicator>
                </View>}

          </View>

          {/* Welcome text */}
        </ScrollView>

        <View style={{padding:10}}>
        <TouchableOpacity
                style={{
                  paddingHorizontal: 15,
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  backgroundColor: couleurs.primary,
                  borderRadius: 30,
                  width: '100%',
                }}
                onPress={() => navigation.navigate('conf_default_categorie')  }>
                <Text
                    style={{
                      textAlign: 'center',
                      padding: 10,
                      paddingHorizontal: 20,
                      fontSize: 15,
                      fontWeight: '500',
                      color: couleurs.secondary,
                      fontFamily: CustomFont.Poppins,
                    }}>
                    Configurer maintenant
                  </Text>
              </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
