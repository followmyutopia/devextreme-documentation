Download the DevExtreme installer (**.exe** file) [here](https://go.devexpress.com/DevExpressDownload_DevExtremeCompleteTrial.aspx) and run it. The setup wizard will guide you through the installation steps.

### Project Templates ###

After the installation is completed, you can create a new project that includes all the resources required by ASP.NET MVC Controls.

![DevExtreme HTML5 ASPNET MVCControls](/Content/images/doc/17_1/Common/MvcWrappers/new_project.png)

### Add the Resources to an Existing Project ###

If you already have a project, add controls resources manually using the instructions below. 

#### ASP.NET MVC 3, 4, 5 ####

Use [this tool](/Documentation/Guide/ASP.NET_MVC_Controls/Visual_Studio_Integration/Add_or_Upgrade_the_Required_Resources_in_Your_Project/) for Visual Studio.

#### ASP.NET Core MVC ####

1. Create a *NuGet.config* file in the root directory of your project. Copy and paste the following strings to this file. Note that if you changed the default installation path, the `value` attribute must be given this path.

        <?xml version="1.0" encoding="utf-8"?>  
        <configuration>
            <packageSources>
                <add key="devextreme-controls-netcore"
                     value="C:\Program Files (x86)\DevExpress 17.1\DevExtreme\System\Bin\AspNetCore" />
            </packageSources>  
        </configuration>

2. Add the following strings to the `"dependencies"` section of the *project.json* file.

        "DevExtreme.AspNet.Data": "1.*",
        "DevExtreme.AspNet.Core": "17.1-*"

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
