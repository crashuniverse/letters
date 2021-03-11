import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';

const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const vocabulary = {
  a: 'apple',
  b: 'ball',
  c: 'cat',
  d: 'dog',
  e: 'egg',
  f: 'fish',
  g: 'girl',
  h: 'hat',
  i: 'ice-cream',
  j: 'jug',
  k: 'kite',
  l: 'lion',
  m: 'mango',
  n: 'napkin',
  o: 'orange',
  p: 'parrot',
  q: 'queen',
  r: 'rabbit',
  s: 'snake',
  t: 'tap',
  u: 'umbrella',
  v: 'van',
  w: 'worm',
  x: 'xylophone',
  y: 'yak',
  z: 'zebra',
};

const images = {
  apple: require('./images/apple.png'),
  ball: require('./images/ball.png'),
  cat: require('./images/cat.png'),
  dog: require('./images/dog.png'),
  egg: require('./images/egg.png'),
  fish: require('./images/fish.png'),
  girl: require('./images/girl.png'),
  hat: require('./images/hat.png'),
  'ice-cream': require('./images/ice-cream.png'),
  jug: require('./images/jug.png'),
  kite: require('./images/kite.png'),
  lion: require('./images/lion.png'),
  mango: require('./images/mango.png'),
  napkin: require('./images/napkin.png'),
  orange: require('./images/orange.png'),
  parrot: require('./images/parrot.png'),
  queen: require('./images/queen.png'),
  rabbit: require('./images/rabbit.png'),
  snake: require('./images/snake.png'),
  tap: require('./images/tap.png'),
  umbrella: require('./images/umbrella.png'),
  van: require('./images/van.png'),
  worm: require('./images/worm.png'),
  xylophone: require('./images/xylophone.png'),
  yak: require('./images/yak.png'),
  zebra: require('./images/zebra.png'),
};

export default function App() {
  const [alphabetIndex, setAlphabetIndex] = useState(0);
  const alphabet = alphabets[alphabetIndex];
  const word = vocabulary[alphabets[alphabetIndex]];
  const image = images[word];

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 72}}>{alphabet}</Text>
      <Image
        style={{ width: 50, height: 50 }}
        source={image}
      />
      <Text>{word}</Text>
      <View style={{display: 'flex'}}>
        <Button
          onPress={() => setAlphabetIndex(alphabetIndex - 1)}
          title="Previous"
          disabled = {alphabetIndex === 0}
        />
        <Text>&nbsp;</Text>
        <Button
          onPress={() => setAlphabetIndex(alphabetIndex + 1)}
          title="Next"
          disabled = {alphabetIndex === 25}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
