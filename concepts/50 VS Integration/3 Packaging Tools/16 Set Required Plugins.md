If you access device features in your application, specify the PhoneGap plugins that implement the corresponding device API.

###Standard Plugins###

Right-click your project in the Visual Studio Solution Explorer and choose **Properties** in the invoked window. All the [standard PhoneGap plugins](https://build.phonegap.com/plugins) are listed by default within the **PhoneGap** tab.

![Standard Plugins](Content/images/doc/17_1/DevExtreme/StandardPlugins.png)

Check the necessary plugins. These plugins will be added to the project's *config.xml* file.

[note]If versions are not specified for standard plugins within the project's *config.xml* file, the latest plugin versions that are used in the DevExtreme default PhoneGap application template will be used when building a native package.

###3rd Party Plugins###

To use a [custom 3rd party PhoneGap plugin](https://build.phonegap.com/plugins) in your application, do the following.

- Register the required plugin in the application's *config.xml* file (this file is located in the root of your application project).

        <!--HTML--><widget xmlns="http://www.w3.org/ns/widgets">
            <!--...-->
            <plugin name="cordova-plugin-barcodescanner"/>
        </widget>

    The registered plugin will appear in the Plugins list in the checked state automatically.

![3rd Party Plugins](Content/images/doc/17_1/DevExtreme/3rdPartyPlugins.png)

- [Build a custom PhoneGap application template](/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Custom_PhoneGap_Application_Template) with the required plugin inside.

[note]If you do not specify versions for the added 3rd-party plugins within the project's *config.xml* file, the latest plugin versions that are contained on the [PhoneGap](https://build.phonegap.com/plugins) site will be used when building a custom PhoneGap application template.

###Custom Plugins###

To use a custom PhoneGap plugin that is not registered in the PhoneGap repository, do the following.

- Build a custom PhoneGap application template with the required plugin using the [cordova command-line interface (CLI)](https://cordova.apache.org/docs/en/latest/guide/cli/). As a result, you may have three custom application templates - each for a certain platform.

- Put the custom PhoneGap application template(s) to an appropriate directory within your DevExtreme application project.

- Set the **Template file path** property of your DevExtreme application project on the path of the added application template(s) (you can see this property within the [Android package](/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Package_for_Android), [iOS package](/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Package_for_iOS) and [Windows Phone package](/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Package_for_Win8Phone) tabs).

