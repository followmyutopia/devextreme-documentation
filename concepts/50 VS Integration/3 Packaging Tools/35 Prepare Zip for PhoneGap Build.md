The [DevExtreme project templates](/Documentation/Guide/VS_Integration/Project_Templates/#DevExtreme_App_Project_Template) can be built for any platform using the [build.phonegap.com](https://build.phonegap.com/). For this purpose, generate a zip package of your application using the **Build Package** wizard.

Before running the **Build Package** wizard, [set the required version of the Cordova library](/Documentation/Guide/VS_Integration/Packaging_Tools/#Set_Cordova_Version) if needed and [include required PhoneGap plugin(s)](/Documentation/Guide/VS_Integration/Packaging_Tools/#Set_Required_Plugins) into the application project. 

To prepare a zip package for the PhoneGap Build, right-click the application project and choose **Build Native Packages...** The **Build Package** wizard will be invoked.

![ZIP Build](Content/images/doc/16_2/DevExtreme/ZIPWizard.png)

Choose **Zip** and a PhoneGap package will be generated automatically.