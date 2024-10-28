/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import CenterText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <View>
          <CenterText
            text={
              'Liner is best AI Liner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AILiner is best AI'
            }
          />
        </View>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
