1. [Install](http://jspm.io/docs/getting-started.html) jspm in your application folder. 

        npm install jspm

1. Install the DevExtreme package via jspm.

        jspm install npm:devextreme

1. Link the system.js and configuration files to your HTML page.

        <!--HTML-->
        <script src="jspm_packages/system.js"></script>
        <script src="config.js"></script>

1. Create your application's entry script and specify modules in it.

        <!--JavaScript-->
        import "devextreme/ui/button";
        ...

1. Import your application's main entry point on the HTML page.

        <!--HTML-->
        <script>
            System.import('./index.js');
        </script>

See examples of using jspm with [jQuery](https://github.com/DevExpress/devextreme-examples/tree/18_2/jspm-jquery), [AngularJS](https://github.com/DevExpress/devextreme-examples/tree/18_2/jspm-angularjs), and [Knockout](https://github.com/DevExpress/devextreme-examples/tree/18_2/jspm-knockout) on GitHub. The **index.js** and **index.html** files contain the main code. 

[note] Check the libraries' and frameworks' [supported versions](/Documentation/Guide/Common/Introduction_to_DevExtreme/#Integration_with_3rd-Party_Libraries_and_Frameworks).

The following list shows additional modules each library/framework requires: 

- **jQuery**: DevExtreme [jQuery integration](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery) module;
- **AngularJS**: jQuery, DevExtreme [AngularJS](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/angular) and [jQuery](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/jquery) integration modules;
- **Knockout**: DevExtreme [Knockout integration](/Documentation/Guide/Common/Modularity/DevExtreme_Modules_Structure/#integration/knockout) module.
