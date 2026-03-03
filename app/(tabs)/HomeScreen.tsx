import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function HomeScreen() {


  const [datos, setDatos] = useState<string>()
  const getTask = async () => {

     const { data, error } = await supabase
    .from('Task') 
    .select('*');        

  if (error) {
    console.error('Error fetching instruments:', error.message);
    return;
  }
  console.log('Task:', data);
  if(data.length>0) {setDatos(data[0].Title)}
  }



  useEffect(   ()=>{

    getTask()


  },[]   )
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>
    
      {datos && 
      <Text style={styles.title}>{datos}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
