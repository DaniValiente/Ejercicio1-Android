import * as React  from 'react';
import { Text, View,FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const DATA = [
  {
    id:'1',
    nombre:'Daniel Valiente Muñoz',
    edad:'26',
    sexo:'Varon'
  },
  {
    id:'2',
    nombre:'Andres Guerra Fontalba',
    edad:'24',
    sexo:'Varon'
    
  },
  {
    id:'3',
    nombre:'Juan Manuel Mateos Ciudad',
    edad:'27',
    sexo:'Hembra'
  },
];



const HomeStack = createNativeStackNavigator();

function listado() {
  return (
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen  name="Home" component={HomeScreen} options={{headerStyle:{backgroundColor:'#46350C'}} }/>
        <HomeStack.Screen name="Details" component={DetailsScreen}  options={{headerStyle:{backgroundColor:'#46350C'}} }/>
      </HomeStack.Navigator>

  );
}
const InfoStack = createNativeStackNavigator();
function Info() {
  return (
    
    <View  style={styles.view}><Text  style={styles.textos} >Esta App te permite conocer en mas profundidad las personas</Text></View>
  )

}

function DetailsScreen({route}) {
  
  return (
 
 <View style={styles.view}>
    
    <Text style={styles.textos}>Nombre:{route.params.item.nombre}</Text>
    <Text style={styles.textos}>Edad:{route.params.item.edad}</Text>
    <Text style={styles.textos}>Sexo:{route.params.item.sexo}</Text>
  </View>
);

}
function HomeScreen({navigation}) {
  
  function pintar ({item})  {
  return(
    <View style={styles.view} >
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('Details',{item:item})} >
      <Text  >{item.nombre}</Text>
      </TouchableOpacity>
      </View>
  
 )
  }
  return (
    
 <View>
    <FlatList
    data={DATA}
    renderItem={pintar}
    kayExtractor={item => item.id}/>
    </View>
);
}


const styles = StyleSheet.create({
  textos:{
    backgroundColor:'#6E510E',
  },
  view:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#EDC669",
    justifyContent: 'center'

  },
  touchable:{
    alignItems: "center",
    backgroundColor: "#EDC669", 
    padding: 20 
  },
header:{
  backgroundColor:'#46350C',
}
});

export default function App() {
  return (
    <NavigationContainer >
         <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'body'
              : 'body';
          } else if (route.name === 'Info') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } 

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
      })}
    >
      <Tab.Screen   name="Home" component={listado}  options={{headerStyle:{backgroundColor:'#625204'}} } />
      <Tab.Screen name="Info" component={Info} options={{headerStyle:{backgroundColor:'#625204'}} } />
      
    </Tab.Navigator>
    </NavigationContainer>
  );
  
}


