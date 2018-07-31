===================================================================
===================================================================

<!--shortDescription-->
Specifies the device-dependent default configuration options for this component.
<!--/shortDescription-->

<!--paramName1-->rule<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The component's default device options.
<!--/paramDescription1-->
<!--paramName1_field1-->device<!--/paramName1_field1-->
<!--paramType1_field1-->Device|Array<Device>|function()<!--/paramType1_field1-->
<!--paramDescription1_field1-->
[Device parameters](/Documentation/ApiReference/Common/Object_Structures/device/).      
When specifying a function, get information about the current device from the argument. Return **true** if the options should be applied to the device. 
<!--/paramDescription1_field1-->
<!--paramName1_field2-->options<!--/paramName1_field2-->
<!--paramType1_field2-->Object<!--/paramType1_field2-->
<!--paramDescription1_field2-->
Options to be applied.
<!--/paramDescription1_field2-->

<!--fullDescription-->
**defaultOptions** is a static method that the widget class supports. The following code demonstrates how to specify default options for all instances of the **{WidgetName}** widget in an application executed on the desktop.

---
#####jQuery

    <!--JavaScript-->
    DevExpress.ui.dx{WidgetName}.defaultOptions({ 
        device: { deviceType: "desktop" },
        options: {
            // Here go the {WidgetName} options
        }
    });

#####Angular

    <!--TypeScript-->
    import {WidgetName} from 'devextreme/ui/{widget_name}';
    // ...
    export class AppComponent {
        constructor () {
            {WidgetName}.defaultOptions({
                device: { deviceType: "desktop" },
                options: {
                    // Here go the {WidgetName} options
                }
            });
        }
    }

---
<!--/fullDescription-->