#import "Cockpit.h"
#import <UIKit/UIKit.h>

@implementation Cockpit
RCT_EXPORT_MODULE()

- (void)getDeviceInfo:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject {
    UIDevice *device = [UIDevice currentDevice];
    BOOL isTablet = [device userInterfaceIdiom] == UIUserInterfaceIdiomPad;
    #if TARGET_OS_SIMULATOR
    BOOL isEmulator = YES;
    #else
    BOOL isEmulator = NO;
    #endif

    // Battery
    [device setBatteryMonitoringEnabled:YES];
    float batteryLevel = [device batteryLevel];
    BOOL isCharging = [device batteryState] == UIDeviceBatteryStateCharging || [device batteryState] == UIDeviceBatteryStateFull;

    // Storage
    NSDictionary *storage = [[NSFileManager defaultManager] attributesOfFileSystemForPath:NSHomeDirectory() error:nil];
    NSNumber *totalDiskCapacity = [storage objectForKey:NSFileSystemSize];
    NSNumber *freeDiskStorage = [storage objectForKey:NSFileSystemFreeSize];

    NSDictionary *info = @{
        @"platform": @"ios",
        @"osVersion": [device systemVersion],
        @"appVersion": [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"],
        @"buildNumber": [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleVersion"],
        @"deviceName": [device name],
        @"systemName": [device systemName],
        @"systemVersion": [device systemVersion],
        @"brand": @"Apple",
        @"model": [device model],
        @"deviceId": [[device identifierForVendor] UUIDString],
        @"locale": [[NSLocale currentLocale] localeIdentifier],
        @"timezone": [[NSTimeZone localTimeZone] name],
        @"isEmulator": @(isEmulator),
        @"isTablet": @(isTablet),
        @"batteryLevel": @(batteryLevel),
        @"isCharging": @(isCharging),
        @"totalDiskCapacity": totalDiskCapacity,
        @"freeDiskStorage": freeDiskStorage,
    };
    resolve(info);
}

- (NSNumber *)multiply:(double)a b:(double)b {
    NSNumber *result = @(a * b);

    return result;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeCockpitSpecJSI>(params);
}

@end
