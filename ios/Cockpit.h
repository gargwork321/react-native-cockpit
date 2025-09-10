#import <CockpitSpec/CockpitSpec.h>

@interface Cockpit : NSObject <NativeCockpitSpec>
- (void)getDeviceInfo:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject;
- (NSNumber *)multiply:(double)a b:(double)b;
@end
