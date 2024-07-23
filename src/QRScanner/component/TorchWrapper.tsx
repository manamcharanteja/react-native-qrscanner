import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const TorchWrapper = (props: any) => {
  const TORCH_ICON = require('../../assets/FlashIcon.png');
  const { torchOn, setTorchOff, style, ...restProps } = props;
  return (
    <View style={[styles.header, style]} {...restProps}>
      <View style={styles.endOptions}>
        <TouchableOpacity
          onPress={() => setTorchOff(!torchOn)}
          style={styles.endFeature}
        >
          <Image
            style={{ tintColor: torchOn ? 'yellow' : 'white' }}
            source={TORCH_ICON}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  endOptions: {
    alignSelf: 'flex-end',
  },
  endFeature: {
    margin: 25,
  },
});

export default TorchWrapper;
