DevExtreme has the following dependencies.

- [jQuery](http://jquery.com/) version 2.1 - 2.2 and 3.x

Optionally, you can use DevExtreme with the following MVVM frameworks.

- [Knockout](http://knockoutjs.com/) versions 2.2.3 - 2.3.0 and 3.1.0 - 3.4.0
- [AngularJS](http://angularjs.org/) version [1.2 - 1.5](/Documentation/Guide/Common/3rd-Party_Libraries_and_Frameworks_Integration/#Data_Binding_and_SPA_Frameworks)

[note]DevExtreme provides a CTP version of the [Angular 2 integration module](https://github.com/DevExpress/devextreme-angular2). This version is available for your evaluation, yet it has certain issues that are in the process of being addressed. Keep track of them or post a newly-found one on [this GitHub page](https://github.com/DevExpress/devextreme-angular2/issues).

Some functionality relies on additional libraries.

- [Globalize](https://github.com/jquery/globalize/releases) version 1.x     
Allows you to localize your app and use custom date, number and currency [formatting](/Documentation/ApiReference/Common/Object_Structures/format/). For details on when and how to use the Globalize library, see [topics about localization](/Documentation/Guide/Widgets/Common/UI_Widgets/Localization_-_Use_Globalize/).

- JSZip         
Needed to support the [client-side export feature](/Documentation/Guide/Widgets/DataGrid/Client-Side_Export/) in the [dxDataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) and [dxPivotGrid](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/) widgets.

- [Webpack](http://webpack.github.io/docs/what-is-webpack.html/) version 1.13 (available [via npm](/Documentation/Guide/Getting_Started/Installation/npm_Package) only)        
Allows you to create your own [DevExtreme modules](/Documentation/Guide/Common/Modularity/) that include only what you need.

#####See Also#####
- [Local Scripts](/Documentation/Guide/Getting_Started/Installation/Local_Scripts)
- [CDN Services](/Documentation/Guide/Getting_Started/Installation/CDN_Services)
- [NuGet Package](/Documentation/Guide/Getting_Started/Installation/NuGet_Package)
- [Bower Package](/Documentation/Guide/Getting_Started/Installation/Bower_Package)
- [npm Package](/Documentation/Guide/Getting_Started/Installation/npm_Package)

[tags]getting started, dependencies, jquery, knockout, angularjs, globalize, jszip, webpack