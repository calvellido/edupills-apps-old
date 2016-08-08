# Edupills
### Educational pills by INTEF.


![Edupills logo](/resources/android/splash/drawable-land-ldpi-screen.png)


This is an Ionic 2 project based on the blank starter template.

Since Angular 2 has reached RC status there should be no more breaking API changes. Ionic 2 on the other hand, as of today (july 2016) is still in beta, so special care is needed. 

If something is not working as expected or you find what you think what could be a bug, before writing a workaround or develop a new feature, it would be a good idea to check if the  development team is already working on it (or at least discussing it). 

Following, you can find a bunch of documents and links to always have in mind while developing EduPills through Ionic 2:

[Ionic Framework 2.0 Roadmap](https://docs.google.com/document/d/1Qlc5X2eJyOB0izkFlH7KJ5BmMi0MeXUZRHJHt3hS6Wo)

Not written in stone, but as they say, “general prioritization”.

[Ionic Framework meeting notes](https://docs.google.com/document/d/1LrPDUkfXpqPIsghaSCxHyN1GIZ0TK2bwFxOZx2GKWtI)

These are the public meeting notes and comments of the Ionic development team. No fixed time range between meetings, but it is usually every week or two.

[Ionic GitHub repo v2 issues](https://github.com/driftyco/ionic/labels/v2)

Ionic Github repository. Besides check the current v2 issues, if the need arises it would be interesting to file a new one if we find something that could be added/fixed.


## Crosswalk

After some research, Crosswalk (https://crosswalk-project.org/) integration with Ionic 2 is straightforward, similar to Ionic previous versions.

Benefits

* WebView doesn't change depending on Android version
* Capabilities: such as WebRTC, WebAudio, Web Components
* Performance improvements (compared to older system webviews)

Drawbacks

* Increased memory footprint (An overhead of ~30MB (as reported by the RSS column of ps))
* Increased APK size (about 17MB)
* Increased size on disk when installed (about 50MB)


The benefits are interesting... But due to these drawbacks they are only worthy on Android versions ≤ 4.4 IMHO, since for higher Android, and targeted iOS versions those benefits are supposedly included already into the system browser/webviews (*pending actual testing and comparison*).

As it is possible to publish a multi-APK application on the Play Store that uses Crosswalk for pre-L devices, and the (updatable) system webview for L+, this will be the way of publishing:

To build Crosswalk-enabled APKs, add the @cordova-plugin-crosswalk-webview@ plugin and run:

`$ cordova build --release`

To build system-webview APK, you have to remove the plugin, clean directories and run:

`$ cordova build --release -- --minSdkVersion=21`

That will build an APK only valid for users running Lollipop (5.0-5.1.1) versions or higher.
