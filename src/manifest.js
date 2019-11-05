// 根据process.env.NODE_ENV动态生成manifest.json
var env = process.env.NODE_ENV
var envMap = {
  production: {
    'mp-wx-appid': 'xxxxx'
  },
  development: {
    'mp-wx-appid': 'xxxxx'
  }
}
var curEnv = envMap[env]
var fs = require('fs')
var path = require('path')
var manifestConfig = JSON.stringify({
  'name': 'typescript-uni-app-with-eslint',
  'appid': '',
  'description': '',
  'versionName': '1.0.0',
  'versionCode': '100',
  'transformPx': false,
  'app-plus': { /* 5+App特有相关 */
    'modules': { /* 模块配置 */

    },
    'distribute': { /* 应用发布信息 */
      'android': { /* android打包配置 */
        'permissions': [
          '<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>',
          '<uses-permission android:name="android.permission.READ_CONTACTS"/>',
          '<uses-permission android:name="android.permission.VIBRATE"/>',
          '<uses-permission android:name="android.permission.READ_LOGS"/>',
          '<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>',
          '<uses-feature android:name="android.hardware.camera.autofocus"/>',
          '<uses-permission android:name="android.permission.WRITE_CONTACTS"/>',
          '<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.CAMERA"/>',
          '<uses-permission android:name="android.permission.RECORD_AUDIO"/>',
          '<uses-permission android:name="android.permission.GET_ACCOUNTS"/>',
          '<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>',
          '<uses-permission android:name="android.permission.READ_PHONE_STATE"/>',
          '<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>',
          '<uses-permission android:name="android.permission.WAKE_LOCK"/>',
          '<uses-permission android:name="android.permission.CALL_PHONE"/>',
          '<uses-permission android:name="android.permission.FLASHLIGHT"/>',
          '<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>',
          '<uses-feature android:name="android.hardware.camera"/>',
          '<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>',
          '<uses-permission android:name="android.permission.WRITE_SETTINGS"/>'
        ]
      },
      'ios': { /* ios打包配置 */

      },
      'sdkConfigs': { /* SDK配置 */

      }
    },
    'usingComponents': true
  },
  'uniStatistics': {
    'enable': false
  },
  'quickapp': { /* 快应用特有相关 */

  },
  'mp-weixin': { /* 小程序特有相关 */
    'usingComponents': true,
    'appid': curEnv['mp-wx-appid'],
    'setting': {
      'urlCheck': true
    }
  },
  'mp-alipay': {
    'usingComponents': true
  },
  'mp-baidu': {
    'usingComponents': true
  },
  'mp-toutiao': {
    'usingComponents': true
  },
  'mp-qq': {
    'usingComponents': true
  }
})

fs.writeFileSync(path.resolve(__dirname, './manifest.json'), manifestConfig)
