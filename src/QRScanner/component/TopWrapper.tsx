import { StyleSheet, View } from 'react-native';

const TopWrapper = (props: any) => {
  const { style, children, ...restProps } = props;
  return (
    <View style={[styles.header, style]} {...restProps}>
      {children}
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
});

export default TopWrapper;
