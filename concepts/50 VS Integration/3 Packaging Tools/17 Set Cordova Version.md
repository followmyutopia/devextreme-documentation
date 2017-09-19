As DevExtreme applications are packed using the [PhoneGap Build](https://build.phonegap.com/), they must include the Cordova library. The [DevExtreme project templates](/Documentation/Guide/VS_Integration/Project_Templates/#DevExtreme_App_Project_Template) contain a fake *cordova.js* file located in the application project's root. When packing applications using the **Build Native Package** wizard, this fake file is replaced with a valid Cordova library version. You can pack DevExtreme applications with the Cordova library of another version. For this purpose, do the following.

- Specify the required version of the Cordova library within the *config.xml* file.

        <!--HTML--><widget xmlns="http://www.w3.org/ns/widgets">
            <!--...-->
            <preference name="phonegap-version" value="cli-6.5.0" />
            <!--...-->
        </widget>

- [Build a custom PhoneGap application template](/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Custom_PhoneGap_Application_Template) with the required version of the Cordova library.