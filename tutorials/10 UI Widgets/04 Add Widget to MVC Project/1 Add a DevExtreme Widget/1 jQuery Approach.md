**Add a Button Widget**

To create a button widget, add a **div** element with the **id** attribute set to "buttonContainer" to the body of your view, as shown in the code below.

    <!--HTML--><html>
        <!--...-->
        <body>
            <div id="buttonContainer"></div>
        </body>
    </html>

To associate the **Button** widget with the created element, the **Button** constructor must be called once the document has been loaded. So, add a JavaScript file to your project to provide code behind the view. Link this file within the view.


    <!--HTML--><html>
        <head runat="server">
            <meta name="viewport" content="width=device-width" />
            <title>Index</title>
            <link rel="stylesheet" type="text/css" href="/Content/dx.common.css" />
            <link rel="stylesheet" type="text/css" href="/Content/dx.light.css" />
            <script src="/Scripts/jquery-3.1.0.min.js"></script>
            <script src="/Scripts/dx.web.js"></script>
            <script src="/MyJS/script_jQuery.js"></script>
        </head>
        <body>
            <div id="buttonContainer"></div>
        </body>
    </html>

Here is the code demonstrating how to call the **Button** constructor.

    <!--JavaScript-->$(function () {
        $("#buttonContainer").dxButton({
            text: "Generate random value"
        });
    });

As you can see in this code, a configuration object must be passed to specify configuration options for the widget. Here, the configuration object contains only the **text** option, which specifies the button text.

<div class="simulator-desktop-container" data-view="/Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step2/markup.html, /Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step2/script.js, /Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step2/styles.css"></div>

**Handle Click Event**

To handle a button click, assign a handling function to the [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) option of the widget.

In the code below, the handling function generates a string consisting of ten random digits and displays it within the &lt;p&gt; element specially added to the HTML document.

    <!--HTML--><body>
        <div id="buttonContainer"></div>
        <p id="randomValue">0000000000</p>
    </body>

<!---->

    <!--JavaScript-->$(function () {
        $("#buttonContainer").dxButton({
            text: "Generate random value",
            onClick: function () {
                var result = "";
                for (var i = 0; i < 10; i++)
                    result += Math.round(Math.random() * 9);
                $("#randomValue").text(result);
            }
        });
    });

<div class="simulator-desktop-container" data-view="/Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step3/markup.html, /Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step3/script.js, /Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step3/styles.css"></div>
    
**Modify Option Value at Runtime**

To change enabled state of the button, add the [CheckBox](/Documentation/ApiReference/UI_Widgets/dxCheckBox/) widget. When changing the check box value, the button will be enabled/disabled at runtime.

Add the **CheckBox** widget in the same manner as you added the **Button** widget. To handle check box value changes, implement the appropriate function and assign it to the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxCheckBox/Configuration/#onValueChanged) option of the **CheckBox** widget. In this function, access the button widget by calling the **Button** function of the button element and by passing "instance" as a parameter. To change a configuration option of the accessed button, call the [option](/Documentation/ApiReference/UI_Widgets/dxCheckBox/Methods/#option) method passing the following arguments.

- **"disabled"**  
    Pass the name of the option to update.
- **actionOptions.value**  
    Pass the new option value. To get the current checkbox value, use the **value** field of the object passed as a parameter to the **onValueChanged** handling function.
    
<!---->
                  
    <!--HTML--><body>
        <div id="buttonContainer"></div>
        <p id="randomValue">0000000000</p>
        <p>Disable button <span id="checkBoxContainer"></span></p>
    </body>

<!---->                  

    <!--JavaScript-->$(function () {
        $("#buttonContainer").dxButton({
            text: "Generate random value",
            onClick: function () {
                var result = "";
                for (var i = 0; i < 10; i++)
                    result += Math.round(Math.random() * 9);
                $("#randomValue").text(result);
            }
        });
        $("#checkBoxContainer").dxCheckBox({
            value: false,
            onValueChanged: function (actionOptions) {
                var button = $("#buttonContainer").dxButton("instance");
                button.option("disabled", actionOptions.value);
            }
        });
    });
        
<div class="simulator-desktop-container" data-view="/Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step4/markup.html, /Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step4/script.js, /Content/Applications/17_2/Framework/AddWidgetToMVCProject/jQueryApproach/Step4/styles.css"></div>