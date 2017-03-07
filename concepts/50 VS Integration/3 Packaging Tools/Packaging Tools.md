The last step in producing a mobile application is packaging. The applications created using the [DevExtreme project templates](/Documentation/Guide/VS_Integration/Project_Templates/#DevExtreme_App_Project_Template) can be easily packaged to be deployed to any device.

DevExtreme comes with the **Build Native Package** wizard. This wizard helps produce a native package for one of the following platforms.

- **iOS**, **Android** and **WindowsPhone**  
	A native package for these platforms is a PhoneGap container with your DevExtreme application packed as a resource. When building a package, the Package Builder replaces the fake *cordova.js* file located in the application project's root with a valid platform specific Cordova library version 3.7.

- **Any Platform**  
	You can generate a **zip** file that is ready for the [PhoneGap Build server](https://build.phonegap.com/).

Below you will learn how to build a package from a [Basic Application](/Documentation/Guide/VS_Integration/Project_Templates/#Basic_Application), [AngularJS NavBar Application](/Documentation/Guide/VS_Integration/Project_Templates/#AngularJS_NavBar_Application) or [AngularJS SlideOut Application](/Documentation/Guide/VS_Integration/Project_Templates/#AngularJS_SlideOut_Application) project template or the [Mobile](/Documentation/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application/Mobile_Project) project of the [Multi-Channel Application](/Documentation/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application) template. To learn how to get a package from the [WinPhone](/Documentation/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application/WinPhone_Project) project template, read the [Packaging your Windows Store app using Visual Studio 2012](http://msdn.microsoft.com/en-us/library/windows/apps/hh454036) article. To learn how to get a package from the [Win](/Documentation/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application/Win_Project) project template, read the [Create a Sample Windows 8 App](http://msdn.microsoft.com/en-us/library/jj979593(v=winembedded.81).aspx#BKMK_Step3) article. 
