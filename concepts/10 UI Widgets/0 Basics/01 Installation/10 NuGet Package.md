When using Visual Studio, you can add the DevExtreme libraries to your application using the [DevExtreme Web](https://www.nuget.org/packages/DevExtreme.Web/) NuGet package. To install this package, run the following command in the [Package Manager Console](https://docs.nuget.org/consume/package-manager-console).

    Install-Package DevExtreme.Web

The jQuery and Globalize packages, upon which DevExtreme depends, will be installed as well, but the Knockout and AngularJS packages will not. If you need them, install them individually. Note that Knockout and AngularJS are not supposed to be used together.

    Install-Package knockoutjs

<!-------->

    Install-Package AngularJS.Sanitize

Another way to install or update the **DevExtreme Web** package is to use the **Manage NuGet Packages** dialog in Visual Studio. You can find more information [here](https://docs.nuget.org/consume/Package-Manager-Dialog). When using the **Manage NuGet Packages** dialog, make sure that you have [nuget.org](http://www.nuget.org) as your online source. Type *DevExtreme Web* (*DevExtreme Mobile*) within the **Search Online** text box. 

After installing all the necessary packages, link the needed scripts within the `<head>` tag of your index page as shown in the [Local Scripts](/Documentation/Guide/UI_Widgets/Basics/Installation/#Local_Scripts) article.

[note]You cannot load DevExtreme libraries to Visual Studio 15 ASP.NET 5 Web Application using NuGet packages. Use Bower packages instead.

#####See Also#####
- [Installing NuGet](http://docs.nuget.org/docs/start-here/installing-nuget) - shows how to install a NuGet client.