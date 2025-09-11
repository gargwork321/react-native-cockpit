package com.cockpit
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import android.os.Build
import android.os.Environment
import android.os.StatFs
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableNativeMap
import com.facebook.react.module.annotations.ReactModule
import java.util.TimeZone

@ReactModule(name = CockpitModule.NAME)
class CockpitModule(reactContext: ReactApplicationContext) :
  NativeCockpitSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun getDeviceInfo(promise: Promise) {
    val map = WritableNativeMap()
    val context = reactApplicationContext
    val isTablet = context.resources.configuration.smallestScreenWidthDp >= 600
    val isEmulator = (Build.FINGERPRINT.startsWith("generic")
            || Build.FINGERPRINT.startsWith("unknown")
            || Build.MODEL.contains("google_sdk")
            || Build.MODEL.contains("Emulator")
            || Build.MODEL.contains("Android SDK built for x86")
            || Build.MANUFACTURER.contains("Genymotion")
            || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
            || "google_sdk" == Build.PRODUCT)

    // Battery
    val iFilter = IntentFilter(Intent.ACTION_BATTERY_CHANGED)
    val batteryStatus = context.registerReceiver(null, iFilter)
    val level = batteryStatus?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
    val scale = batteryStatus?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1
    val batteryLevel = level.toFloat() / scale.toFloat()
    val status = batteryStatus?.getIntExtra(BatteryManager.EXTRA_STATUS, -1) ?: -1
    val isCharging = status == BatteryManager.BATTERY_STATUS_CHARGING || status == BatteryManager.BATTERY_STATUS_FULL

    // Storage
    val stat = StatFs(Environment.getDataDirectory().path)
    val totalDiskCapacity = stat.totalBytes
    val freeDiskStorage = stat.freeBytes

    map.putString("platform", "android")
    map.putString("osVersion", Build.VERSION.RELEASE)
  val packageInfo = context.packageManager.getPackageInfo(context.packageName, 0)
  map.putString("appVersion", packageInfo.versionName)
  val buildNumber = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
    packageInfo.longVersionCode.toString()
  } else {
    @Suppress("DEPRECATION")
    packageInfo.versionCode.toString()
  }
  map.putString("buildNumber", buildNumber)
    map.putString("deviceName", Build.MODEL)
    map.putString("systemName", "Android")
    map.putString("systemVersion", Build.VERSION.RELEASE)
    map.putString("brand", Build.BRAND)
    map.putString("model", Build.MODEL)
    map.putString("deviceId", Build.BOARD)
    map.putString("locale", context.resources.configuration.locales.get(0).toString())
    map.putString("timezone", TimeZone.getDefault().id)
    map.putBoolean("isEmulator", isEmulator)
    map.putBoolean("isTablet", isTablet)
    map.putDouble("batteryLevel", batteryLevel.toDouble())
    map.putBoolean("isCharging", isCharging)
    map.putDouble("totalDiskCapacity", totalDiskCapacity.toDouble())
    map.putDouble("freeDiskStorage", freeDiskStorage.toDouble())


    promise.resolve(map)
  }

  override fun multiply(a: Double, b: Double, promise: Promise) {
    promise.resolve(a * b)
  }

  companion object {
    const val NAME = "Cockpit"
  }
}
