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
  apple: require('./images/apple.svg'),
  ball: require('./images/ball.svg'),
  cat: require('./images/cat.svg'),
  dog: require('./images/dog.svg'),
  egg: require('./images/egg.svg'),
  fish: require('./images/fish.svg'),
  girl: require('./images/girl.svg'),
  hat: require('./images/hat.svg'),
  'ice-cream': require('./images/ice-cream.svg'),
  jug: require('./images/jug.svg'),
  kite: require('./images/kite.svg'),
  lion: require('./images/lion.svg'),
  mango: require('./images/mango.svg'),
  napkin: require('./images/napkin.svg'),
  orange: require('./images/orange.svg'),
  parrot: require('./images/parrot.svg'),
  queen: require('./images/queen.svg'),
  rabbit: require('./images/rabbit.svg'),
  snake: require('./images/snake.svg'),
  tap: require('./images/tap.svg'),
  umbrella: require('./images/umbrella.svg'),
  van: require('./images/van.svg'),
  worm: require('./images/worm.svg'),
  xylophone: require('./images/xylophone.svg'),
  yak: require('./images/yak.svg'),
  zebra: require('./images/zebra.svg'),
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
