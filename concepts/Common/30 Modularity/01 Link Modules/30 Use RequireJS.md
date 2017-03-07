﻿First, install [RequireJS](http://requirejs.org/) to your application folder.

    npm install requirejs

Then, install the DevExtreme package.  

    npm install devextreme

DevExtreme modules are defined using the CommonJS format. RequireJS does not support this format. Thus, convert DevExtreme modules to the AMD format before using them with RequireJS. Use the [RequireJS conversion tool](http://requirejs.org/docs/commonjs.html#autoconversion) to convert modules. Follow these steps to convert the modules.

- Add the devextreme package to the 'node_modules/devextreme' directory

        npm i devextreme

- Add global 'r_js' command

        npm i r.js -g

- Convert the devextreme package and save it to the 'devextreme_amd' directory

        r_js -convert node_modules/devextreme devextreme_amd


To link up the modules to your application using [RequireJS](http://requirejs.org/), begin by adding [themes](/Documentation/Guide/Themes/Predefined_Themes/) to your application. 

    <!--HTML-->
    <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.light.css" />


Then, link **RequireJS** and define the [configuration object](http://requirejs.org/docs/api.html#config). 

    <!--HTML-->
    <script src="node_modules/requirejs/require.js"></script>

[note]Check the supported versions of 3rd-party libraries. For details, see the [3rd-Party Libraries and Frameworks Integration](/Documentation/Guide/Common/3rd-Party_Libraries_and_Frameworks_Integration/) topic.

The example below demonstrates how to create an application with a single button using the modules from a local directory. 


####jQuery Approach####

You can download [the example](https://github.com/DevExpress/devextreme-examples/tree/master/requirejs-jquery) from GitHub. To use it, follow the instructions on GitHub.

    <!--HTML-->
    <!DOCTYPE html>
    <html>

    <head>
      <title>DevExtreme with RequireJS and jQuery example</title>

      <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.common.css" />
      <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.light.css" />
      <!-- Include RequireJS -->
      <script src="node_modules/requirejs/require.js"></script>
    </head>

    <body>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
        <div id="myButton"></div>
      </div>

      <script>
        require.config({
          paths: {
            "jquery": "node_modules/jquery/dist/jquery",
            // The path where the devExtreme modules are located.
            "devextreme": "node_modules/devextreme"
          }
        });

        // Loads the required scripts.
        require(["jquery", "devextreme/ui/dialog", "devextreme/ui/button"], function($, dialog) {

          $("#myButton").dxButton({
            text: "Say 'Hello world'",
            onClick: function() {
              dialog.alert('Hello world!', '', false);
            }
          });
        });
      </script>
    </body>

    </html>


####AngularJS Approach####

[note] To use AngularJS and DevExtreme widget modules with RequireJS, load the DevExtreme [integration](/Documentation/Guide/Common/Modularity/#DevExtreme_Modules_Structure/integration/angular) and angular-sanitize modules.

You can download [the example](https://github.com/DevExpress/devextreme-examples/tree/master/requirejs-angular) from GitHub. To use it, follow the instructions on GitHub.

    <!--HTML-->
    <!DOCTYPE html>
    <html>

    <head>
      <title>DevExtreme with RequireJS and AngularJS examples</title>

      <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.common.css" />
      <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.light.css" />
      <!-- Include RequireJS -->
      <script src="node_modules/requirejs/require.js"></script>
    </head>

    <body>
      <div ng-controller="myController">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
          <div dx-button="buttonOptions"></div>
        </div>
      </div>
      <script>
        require.config({
          paths: {
            "jquery": "node_modules/jquery/dist/jquery",
            "angular": "node_modules/angular/angular",
            "angular-sanitize": "node_modules/angular-sanitize/angular-sanitize",
            // The path where the devExtreme modules are located.
            "devextreme": "node_modules/devextreme"
          },
          shim: {
            // For integration with RequireJS, load
            // not only angular, but also the angular-sanitize module.
            "angular": {
              deps: ["jquery"],
              exports: 'angular'
            },
            "angular-sanitize": {
              deps: ["angular"]
            },
            "devextreme/integration/angular": {
              deps: ['angular', 'angular-sanitize']
            }
          }
        });

        // Loads the required scripts. Note that for correct integration with AngularJS,
        // you should load the DevExtreme integration module.
        require(["angular", "devextreme/ui/dialog", "devextreme/integration/angular", "devextreme/ui/button"], function(angular, dialog) {

          var myApp = angular.module('myApp', ['dx']);
          myApp.controller("myController", function($scope) {
            $scope.buttonOptions = {
              text: "Say 'Hello world'",
              onClick: function() {
                dialog.alert('Hello world!', '', false);
              }
            };
          });

          angular.bootstrap(document, ['myApp']);
        });
      </script>
    </body>

    </html>


####Knockout Approach####

[note]To use KnockoutJS and DevExtreme widget modules with RequireJS, load the DevExtreme [integration module](/Documentation/Guide/Common/Modularity/#DevExtreme_Modules_Structure/integration/knockout).

You can download [the example](https://github.com/DevExpress/devextreme-examples/tree/master/requirejs-knockout) from GitHub. To use it, follow the instructions on GitHub.

    <!--HTML-->
    <!DOCTYPE html>
    <html>

    <head>
      <title>DevExtreme with RequireJS and Knockout examples</title>

      <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.common.css" />
      <link rel="stylesheet" type="text/css" href="node_modules/devextreme/dist/css/dx.light.css" />
      <!-- Include RequireJS -->
      <script src="node_modules/requirejs/require.js"></script>
    </head>

    <body>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
        <div data-bind="dxButton: buttonOptions"></div>
      </div>
      <script>
        require.config({
          paths: {
            "jquery": "node_modules/jquery/dist/jquery",
            "knockout": "node_modules/knockout/build/output/knockout-latest",
            // The path where the DevExtreme modules are located.
            "devextreme": "node_modules/devextreme"
          }
        });

        // Loads the required scripts. Note that for correct integration with KnockoutJS,
        // you should load the devExtreme integration module.
        require(["knockout", "devextreme/ui/dialog", "devextreme/integration/knockout", "devextreme/ui/button"], function(ko, dialog) {
          viewModel = {
            buttonOptions: {
              text: "Say 'Hello world'",
              onClick: function() {
                dialog.alert('Hello world!', '', false);
              }
            }
          };
          ko.applyBindings(viewModel);
        });
      </script>
    </body>

    </html>

[note]We recommend you use other approaches (for example, [webpack](/Documentation/Guide/Common/Modularity/#Link_Modules/Use_Webpack) or [jspm](/Documentation/Guide/Common/Modularity/#Link_Modules/Use_jspm)) for better productivity.