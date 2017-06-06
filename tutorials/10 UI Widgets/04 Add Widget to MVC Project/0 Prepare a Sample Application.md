Open Visual Studio and create a new MVC application project using an empty ASP.NET MVC Web Application template.

To use DevExtreme widgets in MVC applications, add scripts and themes supplied with the DevExtreme Web kit. For this purpose, use the DevExtreme Web NuGet package.

1. Right-click your project in the **Solution Explorer** window and choose **Manage NuGet Packages...** in the context menu.

    ![NuGetVS](/Content/images/doc/17_2/ChartJS/AddWidgetToMVCProject_ManageNuGetPackage.png)

2. Choose **Online** in the right column of the appeared window.

    ![NuGetVS](/Content/images/doc/17_2/ChartJS/NuGetPackagesOnline.png)

    Make sure that you have [nuget.org](http://www.nuget.org) as your online source. Then, type *DevExtreme Web* within the **Search Online** text box.

3. When the search is complete, click the **Install** button of the found item.

    ![NuGetVS](/Content/images/doc/17_2/ChartJS/NuGetChartJSFound.png)

<!---->

After the successful install of the **DevExtreme Web** NuGet package, you will find the following <b>scripts</b> added to your project.

![DevExtreme Scripts](/Content/images/doc/17_2/ChartJS/AddWidgetToMVCProject_DevExtremeScripts.png)

- **jQuery** version 2.1 - 2.2 and 3.x
- **Globalize** and its dependencies (globalize and cldr libraries)
- **dx.web** (DevExtreme sources for [Web-optimized DevExtreme UI widgets](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Web_Development/Overview/UI_Widgets_Library))
- **dx.viz** (DevExtreme sources for [DevExtreme Data Visualization widgets](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Web_Development/Overview/Data_Visualization_Library))
- **dx.viz-web** (**dx.web** and **dx.viz** libraries that are presented in one file)
- **DevExtreme Modules** (scripts defining different parts of DevExtreme widgets)
- **DevExtreme Localization** (files with predefined localization)

In addition, the **Content** folder will be populated by the following files.

![DevExtreme Content](/Content/images/doc/17_2/ChartJS/AddWidgetToMVCProject_DevExtremeContent.png)

As you can see in the image above, all the [predefined DevExtreme themes](/Documentation/Guide/Themes/Predefined_Themes/#Predefined_Themes) are added. You can leave only those that you will really use. The **layouts** folder includes Web-specific layouts that can be used in an application built using the DevExtreme [SPA framework](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/SPA_Framework). As you are going to build an MVC application, remove this folder from the project.


Add a Home controller and an Index view to your project. Within the view, add links to the **jQuery** and **dx.web** (**dx.viz**, **dx.viz-web**) scripts. Note that in addition to these script libraries, each DevExtreme widget requires two stylesheet files. The *dx.common.css* stylesheet provides the core styles. This stylesheet is required regardless of the target platform and theme. The second stylesheet is a theme-file that provides the distinctive look of the widget.

    <!--HTML--><html>
        <head runat="server">
            <meta name="viewport" content="width=device-width" />
            <title>Index</title>
            <link rel="stylesheet" type="text/css" href="/Content/dx.common.css" />
            <link rel="stylesheet" type="text/css" href="/Content/dx.light.css" />
            <script src="/Scripts/jquery-3.1.0.min.js"></script>
            <script src="/Scripts/dx.web.js"></script>
        </head>
        <body>
            <div>

            </div>
        </body>
    </html>

[note]Add references to script libraries exactly in the same order as presented in the code above.

For more information on linking libraries, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

Run the project to check that it works. An empty page with the "Index" title will load.