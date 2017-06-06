To use the Knockout approach, add the *knockout-3.4.0.js* script library to the **Scripts** folder of your project. You can find this library in the DevExtreme zip archive or in the folder where you have installed DevExtreme, which is **C:\Program Files (x86)\DevExpress 17.1\DevExtreme\Sources** by default.

Reference the Knockout library in the Index view.

    <!--HTML--><head runat="server">
        <meta name="viewport" content="width=device-width" />
        <title>Index</title>
        <link rel="stylesheet" type="text/css" href="/Content/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="/Content/dx.light.css" />
        <script src="/Scripts/jquery-3.1.0.min.js"></script>
        <script src="/Scripts/knockout-3.4.0.js"></script>
        <script src="/Scripts/dx.web.js"></script>
    </head>

You will need to write JavaScript code for the view. Thus, first add a JavaScript file to your project and link it within the view.

    <!--HTML--><head runat="server">
        <meta name="viewport" content="width=device-width" />
        <title>Index</title>
        <link rel="stylesheet" type="text/css" href="/Content/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="/Content/dx.light.css" />
        <script src="/Scripts/jquery-3.1.0.min.js"></script>
        <script src="/Scripts/knockout-3.4.0.js"></script>
        <script src="/Scripts/dx.web.js"></script>
        <script src="/MyJS/script_Knockout.js"></script>
    </head>

**Add a Button Widget**

To create a button widget, add a **div** element with **Button** Knockout binding to the body of the HTML document, as shown in the code below.

    <!--HTML--><html>
        <!--...-->
        <body>
          <div data-bind="dxButton: { text: 'Generate random value' }"></div>
        </body>
    </html>

As you can see in this code, a configuration object must be passed to specify configuration options for the widget. Here, the configuration object contains only the **text** option, which specifies the button text.

Since the browser doesn't know what the **data-bind** attribute means, you need to activate Knockout to make it take effect. To activate Knockout, call the **ko.applyBindings()** method once the page has been loaded.

    <!--JavaScript-->window.onload = function () {
        ko.applyBindings();
    };
    
The Knockout approach is based on the MVVM (Model-View-ViewModel) pattern. According to this pattern, your HTML Index view will be a View in terms of MVVM. This View will be linked to the ViewModel by declarative bindings. To create a ViewModel, just declare a JavaScript object within the JavaScript file you added previously. To indicate that this ViewModel object must be used with the declarative bindings that Knockout activates, pass the declared viewModel object to the **applyBindings** method as a parameter.

    <!--JavaScript-->var viewModel = { };
    window.onload = function () {
        ko.applyBindings(viewModel);
    };

<div class="simulator-desktop-container" data-view="/Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step2/markup.html, /Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step2/script.js, /Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step2/styles.css"></div>

**Handle Click Event**

To handle a button click, assign a handling function to the [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) option of the widget.

Add a **clickHandler** field to the ViewModel object and bind the button's **onClick** configuration option to this field. Assign the required handling function to the **clickHandler** ViewModel field. In the code below, the handling function generates a string consisting of ten random digits and assigns it to the **randomValue** ViewModel field. To display the generated string on the screen, a &lt;p&gt; element is added and bound to the **randomValue** ViewModel field.

    <!--HTML--><body>
        <div data-bind="dxButton: {
                text: 'Generate random value',
                onClick: clickHandler
            }"></div>
        <p>Random value: <b data-bind="text: randomValue"></b></p>
    </body>

<!---->

    <!--JavaScript-->var viewModel = {
        randomValue: ko.observable("0000000000"),
        clickHandler: function () {
            var result = "";
            for (var i = 0; i < 10; i++)
                result += Math.round(Math.random() * 9);
            this.randomValue(result);
        }
    };
    window.onload = function () {
        ko.applyBindings(viewModel);
    };

<div class="simulator-desktop-container" data-view="/Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step3/markup.html, /Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step3/script.js, /Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step3/styles.css"></div>
    
**Modify Option Value at Runtime**

To change the enabled state of the button, add the [CheckBox](/Documentation/ApiReference/UI_Widgets/dxCheckBox/) widget. When changing the check box value, the button will be enabled/disabled at runtime.

Add the **CheckBox** widget in the same manner as you added the **Button** widget. To change the button's enabled state when the check box value is changed, add an observable field to the ViewModel object. Bind the check box's [value](/Documentation/ApiReference/UI_Widgets/dxCheckBox/Configuration/#value) configuration option to this field. In addition, bind the button's [disabled](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#disabled) configuration option to this field. In this instance, when the check box's value is changed at runtime, the button's enabled state will be changed in response.
    
<!---->

    <!--HTML--><body>
        <div data-bind="dxButton: {
            text: 'Generate random value',
            onClick: clickHandler,
            disabled: buttonDisabled
        }"></div>
        <p>Random value: <b data-bind="text: randomValue"></b></p>
        <p>Disable button <span data-bind="dxCheckBox: { value: buttonDisabled }"></span></p>
    </body>

<!---->

    <!--JavaScript-->var viewModel = {
        randomValue: ko.observable("0000000000"),
        clickHandler: function () {
            var result = "";
            for (var i = 0; i < 10; i++)
                result += Math.round(Math.random() * 9);
            this.randomValue(result);
        },
        buttonDisabled: ko.observable(false)
    };
    window.onload = function () {
        ko.applyBindings(viewModel);
    }
                  
<div class="simulator-desktop-container" data-view="/Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step4/markup.html, /Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step4/script.js, /Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step4/styles.css"></div> 