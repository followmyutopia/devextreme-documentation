1. Check that [Webpack](http://webpack.github.io/docs/) is installed globally. If not, execute the following command:

        npm install webpack -g

1. Install the DevExtreme package in your application folder.  

        npm install devextreme

1. Define the Webpack [configuration file](https://webpack.js.org/configuration/).

        <!--JavaScript-->
        var path = require('path');

        module.exports = {
            entry: './index.js',
            output: {
                filename: 'bundle.js'
            }
        };

1. Link the bundle script file to your application. 

        <!--HTML-->
        <script type="text/javascript" src="bundle.js" charset="utf-8"></script>

1. Add [DevExtreme themes](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/).  

        <!--HTML-->
        <link rel="stylesheet" href="node_modules/devextreme/dist/css/dx.common.css">
        <link rel="stylesheet" href="node_modules/devextreme/dist/css/dx.light.css">

1. Create your application's entry script and specify modules in it.

        <!--JavaScript-->
        var dialog = require('devextreme/ui/button');
        ...

1. Create the bundle.

        webpack

See examples of using Webpack with [jQuery](https://github.com/DevExpress/devextreme-examples/tree/19_1/webpack-jquery), [AngularJS](https://github.com/DevExpress/devextreme-examples/tree/19_1/webpack-angularjs), and [Knockout](https://github.com/DevExpress/devextreme-examples/tree/19_1/webpack-knockout) on GitHub. The **webpack.config.js**, **index.js**, and **index.html** files contain the main code. 

[note] Check the libraries' and frameworks' [supported versions](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Integration_with_3rd-Party_Libraries_and_Frameworks).

The following list shows additional modules each library/framework requires: 

- **jQuery**: DevExtreme [jQuery integration](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery) module;
- **AngularJS**: jQuery, DevExtreme [AngularJS](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/angular) and [jQuery](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery) integration modules;
- **Knockout**: DevExtreme [Knockout integration](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/knockout) module.
