
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNQrscannerSpec.h"

@interface Qrscanner : NSObject <NativeQrscannerSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Qrscanner : NSObject <RCTBridgeModule>
#endif

@end
