# react-native-vision-camera

This is QR code scanner package

## Installation

```sh
yarn add react-native-vision-scanner
```

### Install supporting packages

```sh
yarn add react-native-vision-camera
yarn add react-native-sound
```

## Usage

```js
import { QRScanner } from 'react-native-vision-scanner';

// ...

<QRScanner
  showMarker
  cameraProps={{
    isActive: true,
    enableZoomGesture: true,
  }}
  onScan={onScan}
/>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
