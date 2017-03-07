<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
static method which defines default options for component on specific target context
<!--/d-->
<!--p1d-->Rule has following structure { device: plain object representing device parameters|array of plain objects representing device parameters|custom function with current device as input parameter returning boolean, options: plain object with option names and values }<!--/p1d-->
<!--p1_field1d-->An object representing device parameters, or an array of objects representing device parameters, or a function that provides information on the current device as an input parameter and returning a Boolean value.<!--/p1_field1d-->
<!--p1_field2d-->An object with option names and values<!--/p1_field2d-->
===================================================================
===================================================================

<!--shortDescription-->
Specifies the device-dependent default configuration options for this component.
<!--/shortDescription-->

<!--paramName1-->rule<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
An object specifying default options for the component and the device for which the options must be applied.
<!--/paramDescription1-->
<!--paramName1_field1-->device<!--/paramName1_field1-->
<!--paramType1_field1-->Object|array|function<!--/paramType1_field1-->
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