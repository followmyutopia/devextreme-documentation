===================================================================
===================================================================

<!--shortDescription-->
Specifies the device-dependent default configuration options for this component.
<!--/shortDescription-->

<!--paramName1-->rule<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
An object specifying default options for the component and the device for which the options must be applied.
<!--/paramDescription1-->
<!--paramName1_field1-->device<!--/paramName1_field1-->
<!--paramType1_field1-->Object|Array<Object>|function()<!--/paramType1_field1-->
<!--paramDescription1_field1-->
An object representing device parameters, or an array of objects representing device parameters, or a function that provides information on the current device as an input parameter and returning a Boolean value.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->options<!--/paramName1_field2-->
<!--paramType1_field2-->Object<!--/paramType1_field2-->
<!--paramDescription1_field2-->
A configuration object with specified options.
<!--/paramDescription1_field2-->

<!--fullDescription-->
The **defaultOptions** method is a static method supported by the widget class. The following code demonstrates how to specify default options for all buttons in the application executed on the iOS platform.

    <!--JavaScript-->
    DevExpress.ui.dxButton.defaultOptions({ 
        device: { platform: "ios" },
        options: {
            text: "Click me"
        }
    });
<!--/fullDescription-->