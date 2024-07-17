import { StyleSheet, View } from 'react-native';

const FooterWrapper = ({ style, children, ...props }: any) => (
  <View style={[styles.footer, style]} {...props}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    letterSpacing: 1.92,
  },
});

export default FooterWrapper;
