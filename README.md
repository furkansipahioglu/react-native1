# react-native bootcamp
## Login screen
### imports for navigator

### npm install @react-navigation/native @react-navigation/native-stack
### npm install react-native-screens react-native-safe-area-context

Note: You might get warnings related to peer dependencies after installation. They are usually caused by incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.

From React Native 0.60 and higher, linking is automatic. So you don't need to run react-native link.

If you're on a Mac and developing for iOS, you need to install the pods (via Cocoapods) to complete the linking.

npx pod-install ios

react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.java file which is located in android/app/src/main/java/<your package name>/MainActivity.java.

Add the highlighted code to the body of MainActivity class:

public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}

and make sure to add the following import statement at the top of this file below your package statement:

### import android.os.Bundle;

This change is required to avoid crashes related to View state being not persisted consistently across Activity restarts.

### npx react-native run-android
