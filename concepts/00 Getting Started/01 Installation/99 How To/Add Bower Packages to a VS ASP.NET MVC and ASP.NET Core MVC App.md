Since edition 2015, Visual Studio supports Bower out of the box. Follow the steps below to add the DevExtreme libraries to an MVC application using Bower.

1. Open the *bower.json* file located in the root folder of your application project.

2. Find the `dependencies` section in this file, put a comma after the last entry and copy-paste the following line:

        "devextreme": "~17.1" // restores DevExtreme

    Wait a few seconds for the libraries to load. DevExtreme scripts are be located in the **wwwroot/lib/devextreme** folder.

3. Link the needed libraries within your index page's `<head>` tag.

        <!--HTML-->
        <script type="text/javascript" src="lib/jquery/dist/jquery.min.js"></script>
        ...
        <script type="text/javascript" src="lib/devextreme/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="lib/devextreme/js/dx.mobile.js"></script> -->
        <!-- <script type="text/javascript" src="lib/devextreme/js/dx.web.js"></script> -->
        <!-- <script type="text/javascript" src="lib/devextreme/js/dx.viz.js"></script> -->
        <!-- <script type="text/javascript" src="lib/devextreme/js/dx.viz-web.js"></script> -->
        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="bower-components/devextreme/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="bower-components/devextreme/css/dx.light.css" />

[note]The Knockout and AngularJS libraries are not included in the DevExtreme Bower package or its dependencies.

#####See Also#####
- [Bower Package](/Documentation/Guide/Getting_Started/Installation/Bower_Package)
- [NuGet Package](/Documentation/Guide/Getting_Started/Installation/NuGet_Package)
- [npm Package](/Documentation/Guide/Getting_Started/Installation/npm_Package)

[tags]install, bower, package, aspnet, visual studio 2015, vs 2015
