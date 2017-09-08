<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
<!--hidden--><!--/hidden-->
<!--module-->core/component_registrator<!--/module-->
===================================================================

<!--shortDescription-->
Registers a new component in the [DevExpress.ui](/Documentation/ApiReference/Common/Utils/#ui) namespace as a jQuery plugin, AngularJS directive and Knockout binding.
<!--/shortDescription-->

<!--paramName1-->name<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The name for the component to register.
<!--/paramDescription1-->

<!--paramName2-->class<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
A DevExpress.Class inheritor implementing the component's functionality.
<!--/paramDescription2-->

<!--fullDescription-->
Use the following code to register a new component within the **DevExpress.ui** namespace.

    <!--JavaScript-->DevExpress.registerComponent(
        "myComponent",
        DevExpress.Component.inherit({
            //Implement your component here
        });
    });
<!--/fullDescription-->