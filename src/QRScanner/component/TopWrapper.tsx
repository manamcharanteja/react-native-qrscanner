import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const TopWrapper = (props: any) => {
  const { style, children, showTorch, torchOn, setTorchOff, ...restProps } =
    props;
  return (
    <View style={[styles.header, style]} {...restProps}>
      {children}
      {showTorch ? (
        <View style={styles.endOptions}>
          <TouchableOpacity
            onPress={() => setTorchOff(!torchOn)}
            style={styles.endFeature}
          >
            <Image
              style={{ tintColor: torchOn ? 'yellow' : 'white' }}
              source={require('../../assets/FlashIcon.png')}
            />
          </TouchableOpacity>
        </View>
      ) : null}
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

export default TopWrapper;
