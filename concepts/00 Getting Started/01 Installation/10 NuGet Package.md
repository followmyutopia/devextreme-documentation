When using Visual Studio, you can add the DevExtreme libraries to your application using the [DevExtreme Web](https://www.nuget.org/packages/DevExtreme.Web/) NuGet package. To install this package, run the following command in the [Package Manager Console](https://docs.nuget.org/consume/package-manager-console).

    Install-Package DevExtreme.Web

The jQuery and Globalize packages, upon which DevExtreme depends, will be installed as well, but the Knockout and AngularJS packages will not. If you need them, install them individually. Note that Knockout and AngularJS are not supposed to be used together.

    Install-Package knockoutjs

<!-------->

    Install-Package AngularJS

Another way to install or update the **DevExtreme Web** package is to use the **Manage NuGet Packages** dialog in Visual Studio. You can find more information [here](https://docs.nuget.org/consume/Package-Manager-Dialog).

After installing all the necessary packages, link the needed scripts within the `<head>` tag of your index page as shown in the [Local Scripts](/Documentation/Guide/Getting_Started/Installation/Local_Scripts) article.

[note]You cannot load DevExtreme libraries to Visual Studio 15 ASP.NET 5 Web Application using the NuGet package. Use the [Bower package](/Documentation/Guide/Getting_Started/Installation/Bower_Package) instead.

#####See Also#####
- [Installing NuGet](http://docs.nuget.org/docs/start-here/installing-nuget)
- [Bower Package](/Documentation/Guide/Getting_Started/Installation/Bower_Package)
- [npm Package](/Documentation/Guide/Getting_Started/Installation/npm_Package)

[tags]getting started, install, nuget, package