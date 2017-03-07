﻿DevExtreme Complete includes everything that the DevExtreme Mobile and DevExtreme Web packages include. In addition, DevExtreme Complete provides MS Visual Studio tools that help you work with JavaScript products within the environment you got used to.

DevExtreme Complete is installed using the DevExtreme Installer. This tool places the DevExtreme folder in the required location and integrates [design-time components](/Documentation/Guide/#vsintegration) into the Visual Studio IDE.

[note]By default, the **DevExtreme** folder is added by the following path: <i>c:\Program Files (x86)\DevExpress XX.X\</i>.

The **DevExtreme** folder contains the following resources.

**Sources**      

- **EULA**  
    An End-User License Agreement that comes with the licenses of the **Globalize**, **jQuery** and **Knockout** libraries that are used in DevExtreme applications.

- **Exporter**  
    Scripts that provide the operation of the deprecated [Exporter](/Documentation/ApiReference/Data_Visualization_Widgets/dxExporter/) widget.
        
- **Lib**  
    The libraries that must be included to DevExtreme applications.  
    - **css**  
        - [Style sheets for styling](/Documentation/Guide/Themes/Predefined_Themes/) applications for different platforms.  
        - **icons** folder with font icons form the DevExtreme [Icon Library](/Documentation/Guide/Themes/Icon_Library/).
    - **js**  
    The JavaScript libraries required for DevExtreme mobile applications.

        [note]Reference only one of the following libraries per application. Their combination may cause unexpected results.

        - *dx.mobile.js*  
        DevExtreme sources for [mobile development](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development) (mini and full versions).
        - *dx.web.js*  
        DevExtreme sources for [Web-optimized DevExtreme UI widgets](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Web_Development/Overview/UI_Widgets_Library) (mini and full versions).
        - *dx.viz.js*  
        DevExtreme sources for [DevExtreme Data Visualization widgets](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Web_Development/Overview/Data_Visualization_Library) (mini and full versions).
        - *dx.viz-web.js*  
        The dx.web and dx.viz libraries that are presented in one file.
        - *dx.all.js*  
        The dx.mobile, dx.web and dx.viz libraries that are presented in one file.
        - *jquery-X.X.X.js*  
        The [jQuery](http://jquery.com/) library required by the WebAppJS and ChartJS libraries (mini and full versions).
        - *globalize.js*, *cldr.js*, *cldr/event.js*, *cldr/supplemental.js*, *globalize.js*, *globalize/message.js*, *globalize/number.js*, *globalize/currency.js*, *globalize/date.js*  
        JavaScript libraries for internationalization and localization required by the dx.mobile library (minified and full versions).
        - *knockout-X.X.X.js*  
        The JavaScript library required if you use the MVVM approach and the [Knockout](http://knockoutjs.com/) library for binding.
        - *angular.js*, *angular-sanitize.js and *angular-route.js*  
        The JavaScript libraries that are required if you use DevExtreme Web UI widgets in [AngularJS](https://angularjs.org/) applications.
        - *jszip.min.js*  
        The JavaScript library that is required if you use [export](/Documentation/Guide/UI_Widgets/Data_Grid/Client-Side_Export/) in the [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) widget.
        - **Localization**  
        [Ready-to-use dictionaries](/Documentation/Guide/UI_Widgets/Common/Localization/#Use_Predefined_Dictionaries) for the localization of UI widgets to the **ru**, **ja** and **de** locales.

        - **vectormap-data**  
        Predefined data sources for the [VectorMap](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/) widget. For details on how to use it, refer to the [Providing Data](/Documentation/Guide/Data_Visualization/VectorMap/Providing_Data/) article.
        - **vectormap-utils**  
        Libraries for [working with binary sources](/Documentation/Guide/Data_Visualization/VectorMap/Providing_Data/#Data_for_Areas/Using_a_Binary_Source) in the [VectorMap](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/) widget.

    - **layouts**  
    Predefined [view layout templates](/Documentation/Guide/SPA_Framework/Built-in_Layouts/) for applications built using the [DevExtreme SPA framework](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/SPA_Framework).

    - **ts**  
        All the DevExtreme TypeScript definitions as well as TypeScript definitions for the **jQuery**, **Knockout** and **Globalize** libraries.

**Support**  
    Familiarize yourself with the End-User License Agreement for DevExtreme.

**System**  
    Files for DevExtreme integration into Visual Studio.

**Tools**  

- **ProjectConverter**  
    A tool used to [upgrade DevExtreme applications](/Documentation/Guide/Common/Migrate_to_the_New_Version/) that were built using an older version of DevExtreme.
- **Theme Builder**  
    A site for modifying the [predefined themes](/Documentation/Guide/Themes/Predefined_Themes/) that come with the product.

In addition, the DevExtreme Installer installs demo applications that illustrate the functionality provided by DevExtreme products. You can find them in the <i>C:\Users\Public\Documents\DevExpress Demos 16.1\DevExtreme\</i> folder.