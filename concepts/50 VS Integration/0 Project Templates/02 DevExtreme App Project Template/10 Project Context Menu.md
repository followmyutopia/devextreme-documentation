Here is the context menu that is invoked by right-clicking a DevExtreme project.

![DevExtreme Project Context Menu](Content/images/doc/16_2/DevExtreme/ProjectTemplate_ContextMenu.png)

- **Properties**  
DevExtreme projects have general application properties. You can set them up within the **Properties** window. For details, refer to the [Specify General Project Properties](/Documentation/Guide/VS_Integration/Packaging_Tools/#Specify_General_Project_Properties) topic.

- **Manage NuGet Packages...**  
DevExtreme projects can be extended by external libraries that are distributed as NuGet packages. For this purpose, use the standard **Manage NuGet Packages...* dialog.

- **Build Application Template...**  
DevExtreme applications are packed using the [PhoneGap Build](https://build.phonegap.com/). For this purpose, DevExtreme applications have a default PhoneGap application template. If you are required to use a [custom Cordova version](/Documentation/Guide/VS_Integration/Packaging_Tools/#Set_Cordova_Version) or a custom set of [PhoneGap plugins](/Documentation/Guide/VS_Integration/Packaging_Tools/#Set_Required_Plugins), you should build a custom PhoneGap application template to be used to pack your DevExtreme application. For this purpose, use the **Build Application Template...** wizard. For details, refer to the [Build Custom PhoneGap Application Template](/Documentation/Guide/VS_Integration/Packaging_Tools/#Build_Custom_PhoneGap_Application_Template) topic.

- **Run Theme Builder...**  
DevExtreme comes with a set of [predefined themes](/Documentation/Guide/Themes/Predefined_Themes/). Each theme is represented by CSS classes that are responsible for giving consistency to an application. You can customize these themes and make them specific to your application(s). For this purpose, use the [Theme Builder](/Documentation/Guide/Themes/Theme_Builder/).

- **Build Native Packages...**  
Applications built using the DevExtreme Project Templates can be easily packaged to be deployed to any device. For this purpose, use the **Build Native Packages...** wizard. For details on packaging, refer to the [Packaging Tools](/Documentation/Guide/VS_Integration/Packaging_Tools/) article.
