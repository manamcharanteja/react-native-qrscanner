// write hook for playing sound

import { useEffect } from 'react';
import { Vibration } from 'react-native';
import Sound from 'react-native-sound';
import soundFile from '../assets/qr-scan.mp3';

var sound = new Sound(soundFile, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
});

export default function useSound() {
  useEffect(() => {
    return () => {
      sound.release();
    };
  }, []);

  const playSound = () => {
    sound.play();
  };

  const playSoundWithVibration = (milliseconds: number = 400) => {
    playSound();
    Vibration.vibrate(milliseconds);
  };

  return { playSound, playSoundWithVibration };
}
