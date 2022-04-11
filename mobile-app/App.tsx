import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <Text>Some text</Text>
        <View>
          <Text>Some more text</Text>
          <Image
            source={require('~/assets/images/bao.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          defaultValue="You can type in me"
        />
      </ScrollView>
    </SafeAreaProvider>
  );
}

export default App;