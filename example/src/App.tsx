import { StyleSheet, View } from 'react-native';
import { QRScanner } from 'react-native-qrscanner';

export default function App() {
  return (
    <View style={styles.container}>
      <QRScanner showMarker cameraProps={{ isActive: true }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
