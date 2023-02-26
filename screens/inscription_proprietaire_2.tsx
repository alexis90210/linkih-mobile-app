import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import CloseIcon from '../components/close';
import {CustomFont, couleurs} from '../components/color';
import {
  MultipleSelectList,
  SelectList,
} from 'react-native-dropdown-select-list';
import categories from '../components/api/categories';
import planning from '../components/api/planning';
import horaire from '../components/api/horaire';

// InscriptionProprietaireScreen2
export default function InscriptionProprietaireScreen2({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  console.log(route.params);

  const [stepper, setStepper] = useState(1);
  const [selectedCategorie, setSelectedCategorie] = useState([]);

  // Horaire debut
  const [selectedHoraireOuvertureLundi, setSelectedHoraireOuvertureLundi] =
    useState('');
  const [selectedHoraireOuvertureMardi, setSelectedHoraireOuvertureMardi] =
    useState('');
  const [
    selectedHoraireOuvertureMercredi,
    setSelectedHoraireOuvertureMercredi,
  ] = useState('');
  const [selectedHoraireOuvertureJeudi, setSelectedHoraireOuvertureJeudi] =
    useState('');
  const [
    selectedHoraireOuvertureVendredi,
    setSelectedHoraireOuvertureVendredi,
  ] = useState('');
  const [selectedHoraireOuvertureSamedi, setSelectedHoraireOuvertureSamedi] =
    useState('');
  const [
    selectedHoraireOuvertureDimanche,
    setSelectedHoraireOuvertureDimanche,
  ] = useState('');

  // Horaire fin
  const [selectedHoraireFermetureLundi, setSelectedHoraireFermetureLundi] =
    useState('');
  const [selectedHoraireFermetureMardi, setSelectedHoraireFermetureMardi] =
    useState('');
  const [
    selectedHoraireFermetureMercredi,
    setSelectedHoraireFermetureMercredi,
  ] = useState('');
  const [selectedHoraireFermetureJeudi, setSelectedHoraireFermetureJeudi] =
    useState('');
  const [
    selectedHoraireFermetureVendredi,
    setSelectedHoraireFermetureVendredi,
  ] = useState('');
  const [selectedHoraireFermetureSamedi, setSelectedHoraireFermetureSamedi] =
    useState('');
  const [
    selectedHoraireFermetureDimanche,
    setSelectedHoraireFermetureDimanche,
  ] = useState('');

  var social = {
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    youtube: '',
  };

  var mesCategories: {
    key?: any;
    value?: any;
  }[] = [];

  categories.map((categorie, key) => {
    categorie.sous_categorie.map((sous, index) => {
      mesCategories.push({
        key: index,
        value: sous,
      });
    });
  });

  var etablissement = route.params?.etablissement;

  const nextPage = () => {
    console.log(stepper);
    
    if (stepper == 4) {
      // formating horaire

      var horaires = [];

      horaires.push({
        jour: 'Lundi',
        ouverture: selectedHoraireOuvertureLundi,
        fermeture: selectedHoraireFermetureLundi,
      });

      horaires.push({
        jour: 'Mardi',
        ouverture: selectedHoraireOuvertureMardi,
        fermeture: selectedHoraireFermetureMardi,
      });

      horaires.push({
        jour: 'Mercredi',
        ouverture: selectedHoraireOuvertureMercredi,
        fermeture: selectedHoraireFermetureMercredi,
      });

      horaires.push({
        jour: 'Jeudi',
        ouverture: selectedHoraireOuvertureJeudi,
        fermeture: selectedHoraireFermetureJeudi,
      });

      horaires.push({
        jour: 'Vendredi',
        ouverture: selectedHoraireOuvertureVendredi,
        fermeture: selectedHoraireFermetureVendredi,
      });

      horaires.push({
        jour: 'Samedi',
        ouverture: selectedHoraireOuvertureSamedi,
        fermeture: selectedHoraireFermetureSamedi,
      });

      horaires.push({
        jour: 'Dimanche',
        ouverture: selectedHoraireOuvertureDimanche,
        fermeture: selectedHoraireFermetureDimanche,
      });


      console.log({
        etablissement: etablissement,
        categorie: selectedCategorie,
        horaires: horaires,
        social: social
      });

      
      // redirect to new route
      navigation.navigate('inscription_proprietaire_3', {
        etablissement: etablissement,
        categorie: selectedCategorie,
        horaires: horaires,
        social: social
      });
    } else {
      setStepper(stepper + 1);
    }
  };

  return (
    <>
      <SafeAreaView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f6f6f6f6',
        }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{
            backgroundColor: '#f6f6f6f6',
          }}>
          <View style={{marginTop: 5}}></View>

          {/* Adresse de l'etablissement */}
          {stepper == 1 && (
            <View style={{paddingVertical: 10}}>
              <Text
                style={{
                  fontFamily: CustomFont.Poppins,
                  fontSize: 15,
                  paddingBottom: 12,
                  color: '#000',
                  paddingLeft: 20,
                }}>
                Adresse de l'etablissement
              </Text>
              <View style={{backgroundColor: '#fff', paddingLeft: 20}}>
                <TextInput
                  style={{
                    color: couleurs.primary,
                    fontFamily: CustomFont.Poppins,
                  }}
                  defaultValue={etablissement.adresse}
                  onChangeText={input => (etablissement.adresse = input)}
                  placeholderTextColor={'rgba(100,100,100,.7)'}
                  placeholder="Entrez l'adresse de l'etablissement"></TextInput>
              </View>
            </View>
          )}

          {/* Categories selectionnees */}
          {stepper == 2 && (
            <View>
              <View
                style={{
                  paddingVertical: 10,
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: CustomFont.Poppins,
                    fontSize: 15,
                    paddingBottom: 12,
                    color: '#000',
                    paddingLeft: 20,
                  }}>
                  Categories
                </Text>
              </View>

              <View style={{marginHorizontal: 10}}>
                <SelectList
                  setSelected={(val: String) => {
                    !selectedCategorie.includes(val as never)
                      ? setSelectedCategorie(
                          selectedCategorie.concat(val as never),
                        )
                      : null;
                  }}
                  data={mesCategories}
                  save="value"
                  onSelect={() => console.log(selectedCategorie)}
                  fontFamily={CustomFont.Poppins}
                  searchPlaceholder={'Liste des categories'}
                  placeholder={'Selectionnez la categorie de votre etab...'}
                  boxStyles={{
                    borderColor: couleurs.primary,
                    borderRadius: 20,
                  }}
                  dropdownTextStyles={{color: couleurs.dark}}
                  dropdownStyles={{borderColor: couleurs.primary}}
                />

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 10,
                    paddingHorizontal: 5,
                    marginVertical: 40,
                  }}>
                  {selectedCategorie.map((row, key) => (
                    <View
                      key={key}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 4,
                        backgroundColor: '#fff',
                        padding: 5,
                        paddingHorizontal: 15,
                        borderRadius: 50,
                        alignItems: 'center',
                        width: 'auto',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 3,
                          backgroundColor: '#fff',
                          padding: 6,
                          borderRadius: 50,
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: CustomFont.Poppins,
                          }}>
                          {row}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          )}

          {/* Heure d'ouverture */}
          {stepper == 3 && (
            <View>
              <View style={{paddingVertical: 10}}>
                <Text
                  style={{
                    fontFamily: CustomFont.Poppins,
                    fontSize: 15,
                    paddingBottom: 12,
                    color: '#000',
                    padding: 20,
                  }}>
                  Heure d'ouverture
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'wrap',
                  gap: 10,
                  paddingHorizontal: 5,
                  marginBottom: 10,
                }}>
                {planning.map((row, key) => (
                  <View
                    key={key}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      backgroundColor: '#fff',
                      paddingTop: 10,
                      paddingHorizontal: 15,
                      alignItems: 'center',
                      width: '100%',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: -10,
                        backgroundColor: '#fff',
                        width: '100%',
                      }}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontFamily: CustomFont.Poppins,
                          }}>
                          {row}
                        </Text>
                        <Text
                          style={{
                            fontFamily: CustomFont.Poppins,
                            fontSize: 13,
                            borderRadius: 30,
                            height: 25,
                            color: couleurs.primary,
                            textAlign: 'center',
                            borderColor: couleurs.primary,
                          }}>
                          {row == 'Lundi'
                            ? selectedHoraireOuvertureLundi &&
                              selectedHoraireFermetureLundi
                              ? 'Ouvert'
                              : ''
                            : ''}
                          {row == 'Mardi'
                            ? selectedHoraireOuvertureMardi &&
                              selectedHoraireFermetureMardi
                              ? 'Ouvert'
                              : ''
                            : ''}
                          {row == 'Mercredi'
                            ? selectedHoraireOuvertureMercredi &&
                              selectedHoraireFermetureMercredi
                              ? 'Ouvert'
                              : ''
                            : ''}
                          {row == 'Jeudi'
                            ? selectedHoraireOuvertureJeudi &&
                              selectedHoraireFermetureJeudi
                              ? 'Ouvert'
                              : ''
                            : ''}
                          {row == 'Vendredi'
                            ? selectedHoraireOuvertureVendredi &&
                              selectedHoraireFermetureVendredi
                              ? 'Ouvert'
                              : ''
                            : ''}
                          {row == 'Samedi'
                            ? selectedHoraireOuvertureSamedi &&
                              selectedHoraireFermetureSamedi
                              ? 'Ouvert'
                              : ''
                            : ''}
                          {row == 'Dimanche'
                            ? selectedHoraireOuvertureDimanche &&
                              selectedHoraireFermetureDimanche
                              ? 'Ouvert'
                              : ''
                            : ''}
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}>
                        <SelectList
                          setSelected={(val: String) => {
                            if (row == 'Lundi') {
                              setSelectedHoraireOuvertureLundi(val as never);
                            }
                            if (row == 'Mardi') {
                              setSelectedHoraireOuvertureMardi(val as never);
                            }
                            if (row == 'Mercredi') {
                              setSelectedHoraireOuvertureMercredi(val as never);
                            }
                            if (row == 'Jeudi') {
                              setSelectedHoraireOuvertureJeudi(val as never);
                            }
                            if (row == 'Vendredi') {
                              setSelectedHoraireOuvertureVendredi(val as never);
                            }
                            if (row == 'Samedi') {
                              setSelectedHoraireOuvertureSamedi(val as never);
                            }
                            if (row == 'Dimanche') {
                              setSelectedHoraireOuvertureDimanche(val as never);
                            }
                          }}
                          data={horaire}
                          save="value"
                          onSelect={() => {
                            if (row == 'Lundi') {
                              console.log(selectedHoraireOuvertureLundi);
                            }
                            if (row == 'Mardi') {
                              console.log(selectedHoraireOuvertureMardi);
                            }
                            if (row == 'Mercredi') {
                              console.log(selectedHoraireOuvertureMercredi);
                            }
                            if (row == 'Jeudi') {
                              console.log(selectedHoraireOuvertureJeudi);
                            }
                            if (row == 'Vendredi') {
                              console.log(selectedHoraireOuvertureVendredi);
                            }
                            if (row == 'Samedi') {
                              console.log(selectedHoraireOuvertureSamedi);
                            }
                            if (row == 'Dimanche') {
                              console.log(selectedHoraireOuvertureDimanche);
                            }
                          }}
                          fontFamily={CustomFont.Poppins}
                          searchPlaceholder={'Horaires'}
                          placeholder={'Heure Ouverture'}
                          boxStyles={{
                            borderWidth: 0,
                          }}
                          dropdownTextStyles={{color: couleurs.dark}}
                          dropdownStyles={{borderColor: couleurs.primary}}
                        />

                        <SelectList
                          setSelected={(val: String) => {
                            if (row == 'Lundi') {
                              setSelectedHoraireFermetureLundi(val as never);
                            }
                            if (row == 'Mardi') {
                              setSelectedHoraireFermetureMardi(val as never);
                            }
                            if (row == 'Mercredi') {
                              setSelectedHoraireFermetureMercredi(val as never);
                            }
                            if (row == 'Jeudi') {
                              setSelectedHoraireFermetureJeudi(val as never);
                            }
                            if (row == 'Vendredi') {
                              setSelectedHoraireFermetureVendredi(val as never);
                            }
                            if (row == 'Samedi') {
                              setSelectedHoraireFermetureSamedi(val as never);
                            }
                            if (row == 'Dimanche') {
                              setSelectedHoraireFermetureDimanche(val as never);
                            }
                          }}
                          data={horaire}
                          save="value"
                          onSelect={() => {
                            if (row == 'Lundi') {
                              console.log(selectedHoraireFermetureLundi);
                            }
                            if (row == 'Mardi') {
                              console.log(selectedHoraireFermetureMardi);
                            }
                            if (row == 'Mercredi') {
                              console.log(selectedHoraireFermetureMercredi);
                            }
                            if (row == 'Jeudi') {
                              console.log(selectedHoraireFermetureJeudi);
                            }
                            if (row == 'Vendredi') {
                              console.log(selectedHoraireFermetureVendredi);
                            }
                            if (row == 'Samedi') {
                              console.log(selectedHoraireFermetureSamedi);
                            }
                            if (row == 'Dimanche') {
                              console.log(selectedHoraireFermetureDimanche);
                            }
                          }}
                          fontFamily={CustomFont.Poppins}
                          searchPlaceholder={'Horaires'}
                          placeholder={'Heure Fermeture'}
                          boxStyles={{
                            borderWidth: 0,
                          }}
                          dropdownTextStyles={{color: couleurs.dark}}
                          dropdownStyles={{borderColor: couleurs.primary}}
                        />
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/*  Lien reseaux sociaux */}
          {stepper == 4 && (
            <View>
              <View style={{paddingVertical: 10}}>
                <Text
                  style={{
                    fontFamily: CustomFont.Poppins,
                    fontSize: 15,
                    paddingBottom: 12,
                    color: '#000',
                    paddingLeft: 20,
                  }}>
                  Lien reseaux sociaux
                </Text>
                <View
                  style={{
                    backgroundColor: '#fff',
                    paddingLeft: 20,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Image source={require('../assets/social/facebook.png')} />

                  <TextInput
                    style={{
                      color: couleurs.primary,
                      fontFamily: CustomFont.Poppins,
                      flex: 1,
                      fontSize: 15,
                    }}
                    defaultValue={social.facebook}
                    onChangeText={input => (social.facebook = input)}
                    placeholderTextColor={'rgba(100,100,100,.7)'}
                    placeholder="Entrez votre username Facebook"></TextInput>
                </View>

                <View
                  style={{
                    backgroundColor: '#fff',
                    paddingLeft: 20,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Image source={require('../assets/social/twitter.png')} />
                  <TextInput
                    style={{
                      color: couleurs.primary,
                      fontFamily: CustomFont.Poppins,
                      flex: 1,
                      fontSize: 15,
                    }}
                    defaultValue={social.twitter}
                    onChangeText={input => (social.twitter = input)}
                    placeholderTextColor={'rgba(100,100,100,.7)'}
                    placeholder="Entrez votre username Twitter"></TextInput>
                </View>

                <View
                  style={{
                    backgroundColor: '#fff',
                    paddingLeft: 20,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Image source={require('../assets/social/linkedin.png')} />
                  <TextInput
                    style={{
                      color: couleurs.primary,
                      fontFamily: CustomFont.Poppins,
                      flex: 1,
                      fontSize: 15,
                    }}
                    defaultValue={social.linkedin}
                    onChangeText={input => (social.linkedin = input)}
                    placeholderTextColor={'rgba(100,100,100,.7)'}
                    placeholder="Entrez votre username LinkedIn"></TextInput>
                </View>

                <View
                  style={{
                    backgroundColor: '#fff',
                    paddingLeft: 20,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Image source={require('../assets/social/instagram.png')} />
                  <TextInput
                    style={{
                      color: couleurs.primary,
                      fontFamily: CustomFont.Poppins,
                      flex: 1,
                      fontSize: 15,
                    }}
                    defaultValue={social.facebook}
                    onChangeText={input => (social.facebook = input)}
                    placeholderTextColor={'rgba(100,100,100,.7)'}
                    placeholder="Entrez votre username instagram"></TextInput>
                </View>

                <View
                  style={{
                    backgroundColor: '#fff',
                    paddingLeft: 20,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Image source={require('../assets/social/youtube.png')} />
                  <TextInput
                    style={{
                      color: couleurs.primary,
                      fontFamily: CustomFont.Poppins,
                      flex: 1,
                      fontSize: 15,
                    }}
                    defaultValue={social.facebook}
                    onChangeText={input => (social.facebook = input)}
                    placeholderTextColor={'rgba(100,100,100,.7)'}
                    placeholder="Entrez votre chaine Youtube"></TextInput>
                </View>
              </View>
            </View>
          )}

          {/* Validation btn */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: couleurs.primary,
                borderRadius: 30,
                marginTop: 40,
                height: 45,
                width: '100%',
              }}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 10,
                  width: '100%',
                }}
                onPress={() => nextPage()}>
                <Text
                  style={{
                    textAlign: 'center',
                    padding: 10,
                    paddingHorizontal: 20,
                    fontSize: 14,
                    color: couleurs.secondary,
                    fontFamily: CustomFont.Poppins,
                  }}>
                  Suivant
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {stepper > 1 && (
            <View style={{padding: 10}}>
              <TouchableOpacity onPress={() => setStepper(stepper - 1)}>
                <Text
                  style={{
                    fontFamily: CustomFont.Poppins,
                    fontSize: 15,
                    padding: 7,
                    marginTop: 10,
                    color: couleurs.primary,
                    borderStyle: 'dashed',
                    borderWidth: 1,
                    borderRadius: 30,
                    textAlign: 'center',
                    borderColor: couleurs.primary,
                  }}>
                  Retour
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={{marginVertical: 20}}></View>
        </ScrollView>

        {/* MODAL BOTTOM SHEET */}
      </SafeAreaView>
    </>
  );
}
