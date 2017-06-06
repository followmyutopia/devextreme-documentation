Download the DevExtreme installer (**.exe** file) [here](https://go.devexpress.com/DevExpressDownload_DevExtremeCompleteTrial.aspx) and run it. The setup wizard will guide you through the installation steps.

### Project Templates ###

After the installation is completed, you can create a new project that includes all the resources required by ASP.NET MVC Controls.

![DevExtreme ASP.NET MVC Controls - Project Templates](/Content/images/doc/17_2/Common/MvcWrappers/new_project.png)

### Add the Resources to an Existing Project ###

If you already have a project, add controls resources manually using the instructions below. 

#### ASP.NET MVC 3, 4, 5 ####

Use [this tool](/Documentation/Guide/ASP.NET_MVC_Controls/Visual_Studio_Integration/Add_or_Upgrade_the_Required_Resources_in_Your_Project/) for Visual Studio.

#### ASP.NET Core MVC ####

1. Add a [new NuGet package source](https://docs.microsoft.com/en-us/nuget/tools/package-manager-ui#package-sources), which is located in the folder where you have installed DevExtreme.

    ![DevExtreme ASP.NET MVC Controls - Add a New NuGet Package Resource](/Content/images/doc/17_2/Common/MvcWrappers/nuget_add-package-source.png) 

2. [Install](https://docs.microsoft.com/en-us/nuget/tools/package-manager-ui#finding-and-installing-a-package) the **DevExtreme.AspNet.Data** and **DevExtreme.AspNet.Core** packages for your solution. 

    ![DevExtreme ASP.NET MVC Controls - Install the NuGet Packages](/Content/images/doc/17_2/Common/MvcWrappers/nuget_devextreme-packages.png)

3. Add the following strings to the `"dependencies"` section of the *bower.json* file.

        "jquery": "~3.1",
        "devextreme": "~17.1",
        "devextreme-aspnet-data": "~1"

    [note]If the *bower.json* file is absent, run the console in the project directory and execute the [`bower init`](https://bower.io/docs/api/#init) command in it.

4. Copy and paste the following strings to the `<head>` tag of the *Views/Shared/_Layout.cshtml* file.

        <link href="~/lib/devextreme/css/dx.common.css" rel="stylesheet" /> 
        <link href="~/lib/devextreme/css/dx.light.css" rel="stylesheet" /> 
        <script src="~/lib/jquery/dist/jquery.js"></script>
        <script src="~/lib/devextreme/js/dx.all.js"></script>     
        <script src="~/lib/devextreme-aspnet-data/js/dx.aspnet.data.js"></script> 
        <script src="~/lib/devextreme/js/dx.aspnet.mvc.js"></script>

5. Add the following string to the *Views/_ViewImports.cshtml* file.

        @using DevExtreme.AspNet.Mvc
