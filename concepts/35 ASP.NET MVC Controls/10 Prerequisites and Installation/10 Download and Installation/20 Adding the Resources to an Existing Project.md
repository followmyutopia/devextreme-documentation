You can manually add control resources to an existing project using the following instructions: 

#### ASP.NET MVC 3, 4, 5 ####

Use [this tool](/Documentation/Guide/ASP.NET_MVC_Controls/Visual_Studio_Integration/Add_or_Upgrade_the_Required_Resources_in_Your_Project/) for Visual Studio.

#### ASP.NET Core MVC ####

1. Add a [new NuGet package source](https://docs.microsoft.com/en-us/nuget/tools/package-manager-ui#package-sources) from the DevExtreme installation folder.

    ![DevExtreme ASP.NET MVC Controls - Add a New NuGet Package Resource](/Content/images/doc/17_2/Common/MvcWrappers/nuget_add-package-source.png) 

2. [Install](https://docs.microsoft.com/en-us/nuget/tools/package-manager-ui#finding-and-installing-a-package) the **DevExtreme.AspNet.Data** and **DevExtreme.AspNet.Core** packages for your solution.

    ![DevExtreme ASP.NET MVC Controls - Install the NuGet Packages](/Content/images/doc/17_2/Common/MvcWrappers/nuget_devextreme-packages.png)

3. Reference the **jquery**, **devextreme**, and **devextreme-aspnet-data** bower packages in the bower.json file's `"dependencies"` section:

        "dependencies": {
            ...
            "jquery": "~3.1",
            "devextreme": "~17.2",
            "devextreme-aspnet-data": "~1"
        }

    [note]If the bower.json file is absent, run the console in the project directory and execute the [`bower init`](https://bower.io/docs/api/#init) command.

4. Link the following styles and scripts in the `<head>` section of the _Layout.cshtml file located in the Views/Shared folder (for conventional Razor views) or Pages folder (for Razor Pages):

        <head>
            ...
            <link href="~/lib/devextreme/css/dx.common.css" rel="stylesheet" /> 
            <link href="~/lib/devextreme/css/dx.light.css" rel="stylesheet" /> 
            <script src="~/lib/jquery/dist/jquery.js"></script>
            <script src="~/lib/devextreme/js/dx.all.js"></script>     
            <script src="~/lib/devextreme-aspnet-data/js/dx.aspnet.data.js"></script> 
            <script src="~/lib/devextreme/js/dx.aspnet.mvc.js"></script>
        </head>

5. In the same file, remove the links after the closing `<head>` tag that are duplicated in the `<head>` section (usually jQuery links in the `<environment>` containers):

        <environment names="Development">
            <script src="~/lib/jquery/dist/jquery.js"></script>
                ...
        <environment names="Staging,Production">
            <script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-2.2.0.min.js"
                ...

6. Import the `DevExtreme.AspNet.Mvc` namespace in the _ViewImports.cshtml file located in the same folder:

        @using DevExtreme.AspNet.Mvc

7. In the Startup.cs file, amend the `ConfigureServices` method as follows to ensure proper JSON serialization:

        public void ConfigureServices(IServiceCollection services) {
            services
                .AddMvc()
                // ... other settings of the MVC service ...
                .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
        }
