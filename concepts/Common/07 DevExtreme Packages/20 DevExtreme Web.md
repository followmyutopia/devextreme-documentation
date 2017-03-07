DevExtreme Web ships with a rich library of client-side widgets that can be used in any web application or website.

DevExtreme Web is distributed as a ZIP file. Unzip the downloaded archive to a directory where you wish to store the files. Note that this is not a temporary folder - no further installation or unpacking is required. However, if you need to change these files to a different directory, simply move them to the new location.

The DevExtreme Web folder contains the following subfolders.

**Application Template**  
A template for web applications that utilize [DevExtreme widgets](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Web_Development/Overview). Read the [Web Application](/Documentation/Guide/UI_Widgets/Basics/Application_Templates/#Web_Application) topic in the **UI Widgets** | [Application Templates](/Documentation/Guide/UI_Widgets/Basics/Application_Templates/#Application_Templates) article to learn the details on this project template.

**Demos**  

The source code for all [web demos](WebDevelopment/Demos) that are presented on the site. You can find the source code of these demos in the following directory.

*C:\Users\Public\Documents\DevExpress Demos 16.1\DevExtreme*

**Eula**  

Familiarize yourself with the End-User License Agreement that comes with DevExtreme, as well as with the licenses of the **Globalize**, **jQuery** and **Knockout** libraries that are used in DevExtreme applications.

**Exporter**  

Scripts that provide the operation of the deprecated [Exporter](/Documentation/ApiReference/Data_Visualization_Widgets/dxExporter/) widget.

**Lib**  

The libraries that must be included to DevExtreme applications.

- **css**  
[Style sheets for styling](/Documentation/Guide/Themes/Predefined_Themes/) applications for different platforms.  
- **js**  
The JavaScript libraries required for DevExtreme mobile applications.

    [note]Reference only one of the following libraries per application. Their combination may cause unexpected results.

    - *dx.web.js*  
    DevExtreme sources for [Web-optimized DevExtreme UI widgets](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Web_Development/Overview/UI_Widgets_Library) (mini and full versions).
    - *dx.viz.js*  
    DevExtreme sources for [DevExtreme Data Visualization widgets](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Web_Development/Overview/Data_Visualization_Library) (mini and full versions).
    - *dx.viz-web.js*  
    The dx.web and dx.viz libraries that are presented in one file.
    - *jquery-X.X.X.js*  
    The [jQuery](http://jquery.com/) library that is required by the dx.web, dx.viz and dx.viz-web libraries (minified and full versions).
    - *globalize.js*, *cldr.js*, *cldr/event.js*, *cldr/supplemental.js*, *globalize.js*, *globalize/message.js*, *globalize/number.js*, *globalize/currency.js*, *globalize/date.js*  
    JavaScript libraries for internationalization and localization required by the dx.mobile library (minified and full versions).
    - *knockout-X.X.X.js*  
    The JavaScript library that is required if you use the MVVM approach and the [Knockout](http://knockoutjs.com/) library for binding.
    - *angular.js*, *angular-sanitize.js* and *angular-route.js*  
    The JavaScript libraries that are required if you use DevExtreme Web UI widgets in [AngularJS](https://angularjs.org/) applications.
    - *jszip.js*  
    The JavaScript library that is required if you use [export](/Documentation/Guide/UI_Widgets/Data_Grid/Client-Side_Export/) in the [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) widget.
    - **Localization**  
    [Ready-to-use dictionaries](/Documentation/Guide/UI_Widgets/Common/Localization/#Use_Predefined_Dictionaries) for localization of UI widgets into the **ru**, **ja** and **de** locales.

    - **vectormap-data**  
    Predefined data sources for the [VectorMap](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/) widget. For details on how to use it, refer to the [Providing Data](/Documentation/Guide/Data_Visualization/VectorMap/Providing_Data/) article.
    - **vectormap-utils**  
    Libraries for [working with binary sources](/Documentation/Guide/Data_Visualization/VectorMap/Providing_Data/#Data_for_Areas/Using_a_Binary_Source) in the [VectorMap](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/) widget.

- **layouts**  
Predefined desktop [layout templates](/Documentation/Guide/SPA_Framework/Built-in_Layouts/) for web applications built using the [DevExtreme SPA framework](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/SPA_Framework).

**Theme Builder**  

A site for modifying the [predefined themes](/Documentation/Guide/Themes/Predefined_Themes/) that come with the product.
