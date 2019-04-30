1. Install [RequireJS](http://requirejs.org/) and DevExtreme in your application folder.

        npm install requirejs devextreme

1. Use the [RequireJS conversion tool](http://requirejs.org/docs/commonjs.html#autoconversion) to convert the DevExtreme modules from CommonJS to AMD and save them in the **devextreme_amd** directory:

        npx r_js -convert node_modules/devextreme devextreme_amd

1. Add [DevExtreme themes](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) to your application. 

        <!--HTML-->
        <link rel="stylesheet" href="node_modules/devextreme/dist/css/dx.common.css">
        <link rel="stylesheet" href="node_modules/devextreme/dist/css/dx.light.css">


1. Link RequireJS and define its [configuration object](http://requirejs.org/docs/api.html#config). 

        <!--HTML-->
        <script src="node_modules/requirejs/require.js"></script>
        <script>
            require.config({ 
                // ... 
                paths: {
                    // ...
                    "devextreme": "devextreme_amd"
                }
            });
        </script>

See examples of using RequireJS with [jQuery](https://github.com/DevExpress/devextreme-examples/tree/19_1/requirejs-jquery), [AngularJS](https://github.com/DevExpress/devextreme-examples/tree/19_1/requirejs-angularjs), and [Knockout](https://github.com/DevExpress/devextreme-examples/tree/19_1/requirejs-knockout) on GitHub. The **index.html** file contains the main code. 

[note] Check the libraries' and frameworks' [supported versions](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Integration_with_3rd-Party_Libraries_and_Frameworks).

The following list shows additional modules each library/framework requires: 

- **jQuery**: DevExtreme [jQuery integration](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery) module;
- **AngularJS**: jQuery, DevExtreme [AngularJS](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/angular) and [jQuery](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery) integration modules;
- **Knockout**: DevExtreme [Knockout integration](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/knockout) module.

[note] We recommend using [Webpack](/Documentation/Guide/Common/Modularity/#Link_Modules/Use_Webpack) or [jspm](/Documentation/Guide/Common/Modularity/#Link_Modules/Use_jspm) for better performance.
