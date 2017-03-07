To use an AngularJS approach, add the *angular.js* and *angular-sanitize.js* script libraries to the **Scripts** folder of your project. You can find these libraries in the DevExtreme zip archive or in the folder where you have installed DevExtreme, which is **C:\Program Files (x86)\DevExpress 16.2\DevExtreme\Sources** by default

Reference the AngularJS libraries in the Index view.

    <!--HTML--><head runat="server">
        <meta name="viewport" content="width=device-width" />
        <title>Index</title>
        <link rel="stylesheet" type="text/css" href="/Content/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="/Content/dx.light.css" />
        <script src="/Scripts/jquery-3.1.0.min.js"></script>
        <script src="/Scripts/angular.js"></script>
        <script src="/Scripts/angular-sanitize.js"></script>  
        <script src="/Scripts/dx.web.js"></script>
    </head>

Add the **ng-app** directive to the **html** element of the document to specify the root element of the AngularJS application. Pass the application name as a directive parameter. Create the *script_Angular.js* file, which will contain scripts that you will create, and add the corresponding reference to the view's markup.

    <!--HTML--><html ng-app="myApp">
        <head runat="server">
            <meta name="viewport" content="width=device-width" />
            <title>Index</title>
            <link rel="stylesheet" type="text/css" href="/Content/dx.common.css" />
            <link rel="stylesheet" type="text/css" href="/Content/dx.light.css" />
            <script src="/Scripts/jquery-3.1.0.min.js"></script>
            <script src="/Scripts/angular.js"></script>
            <script src="/Scripts/angular-sanitize.js"></script>
            <script src="/Scripts/dx.web.js"></script>
            <script src="/MyJS/script_Angular.js"></script>
        </head>
        <body>
        </body>
    </html>

Specify the module to load when bootstrapping the application and include the DevExtreme "dx" module in the list of dependencies for the application.

    <!--JavaScript-->var myApp = angular.module('myApp', ['dx']);

**Add a Button Widget**

To add a button widget, add a **div** element with the `dx-button` AngularJS directive. The directive parameter specifies the widget configuration object. In the code below, the configuration object only contains the **text** option, which specifies the button text.

    <!--HTML--><body>
      <div dx-button="{
              text: 'Generate random value'
          }"></div>
    </body>

<div class="simulator-desktop-container" data-view="/Content/Applications/16_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step2/markup.html, /Content/Applications/16_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step2/script.js, /Content/Applications/16_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step2/styles.css"></div>

**Handle Click Event**

To handle a button click, assign a handling function to the [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) option of the widget.

The event handling function should be declared within a controller associated with the current view. Call the **controller()** function of the **myApp** variable to create a controller. The first argument passed to this function specifies the controller name. The second argument specifies the controller constructor function.

    <!--JavaScript-->var myApp = angular.module('myApp', ['dx']);
    myApp.controller("defaultCtrl", function ($scope) {});

Add the **ng-controller** directive to the **body** element of the view to associate the controller with the view.

    <!--HTML--><body ng-controller="defaultCtrl">
        <div dx-button="{
                text: 'Generate random value'
            }"></div>
    </body>

Now, the HTML elements within the **body** element can be associated with the fields of the **$scope** object that is provided by the controller constructor parameter. So, assign the click handling function to the **clickHandler** field of the **$scope** object and associate the [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) option of the widget with this field. In the code below, the handling function generates a string consisting of ten random digits and assigns it to the **randomValue** field of the $scope object. To display the generated string on the screen, a &lt;p&gt; element is added and bound to the **randomValue** scope field.

    <!--HTML--><body ng-controller="defaultCtrl">
        <div dx-button="{
                text: 'Generate random value',
                onClick: clickHandler
            }"></div>
        <p>
          Random value: <b>{{randomValue}}</b>
        </p>
    </body>

<!---->

    <!--JavaScript-->var myApp = angular.module('myApp', ['dx']);
    myApp.controller("defaultCtrl", function ($scope) {
        $scope.randomValue = "0000000000";
        $scope.clickHandler = function () {
            var result = "";
            for (var i = 0; i < 10; i++)
                result += Math.round(Math.random() * 9);
            $scope.randomValue = result;
        }
    });

<div class="simulator-desktop-container" data-view="/Content/Applications/16_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step3/markup.html, /Content/Applications/16_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step3/script.js, /Content/Applications/16_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step3/styles.css"></div>    

**Modify Option Value at Runtime**

To change the enabled state of the button, add the [CheckBox](/Documentation/ApiReference/UI_Widgets/dxCheckBox/) widget. When changing the check box value, the button will be enabled/disabled at runtime.

To update the option value at runtime, provide two-way binding between the option and the corresponding field of the **$scope** object. For this purpose, add the **bindingOptions** field to the widget configuration object. This field contains options requiring two-way binding. Note that in this case, you should pass the name of the corresponding **$scope** object field instead of the field itself to the required option. Specify the **disabled** option value as it is demonstrated below and add the **buttonDisabled** field to the **$scope** object in the controller constructor function. 
            
    <!--HTML--><body ng-controller="defaultCtrl">
        <div dx-button="{
          text: 'Generate random value',
          onClick: clickHandler,
          bindingOptions: { 
              disabled: 'buttonDisabled'
          }
        }"></div>
        <p>Random value: <b>{{randomValue}}</b></p>
        <p>Disable button <span dx-check-box="{ bindingOptions: { value: 'buttonDisabled' } }"></span></p>
    </body>
              
<!---->
              
    <!--JavaScript-->myApp.controller("defaultCtrl", function ($scope) {
        //...
        $scope.buttonDisabled = false;
    });       
              
Add the [CheckBox](/Documentation/ApiReference/UI_Widgets/dxCheckBox/) widget to control the value of the **buttonDisabled** field. Provide two-way binding between the check box [value](/Documentation/ApiReference/UI_Widgets/dxCheckBox/Configuration/#value) option and the **buttonDisabled** scope field. Now, if you check or uncheck the check box, it updates the **buttonDisabled** field value, which updates the value of the button's **disabled** option appropriately.

    <!--HTML--><body ng-controller="defaultCtrl">
        <div dx-button="{
            text: 'Generate random value',
            onClick: clickHandler,
            bindingOptions: { 
                disabled: 'buttonDisabled'
            }
        }"></div>
        <p>Random value: <b>{{randomValue}}</b></p>
        <p>Disable button <span dx-check-box="{ bindingOptions: { value: 'buttonDisabled' } }"></span></p>
    </body>

<div class="simulator-desktop-container" data-view="/Content/Applications/16_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step4/markup.html, /Content/Applications/16_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step4/script.js, /Content/Applications/16_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step4/styles.css"></div> 