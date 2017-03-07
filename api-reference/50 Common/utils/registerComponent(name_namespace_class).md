<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Registers component class in namespace, as jQuery plugin and as KnockoutJS binding and Angular directive
<!--/d-->
<!--p1d-->A component name to register<!--/p1d-->
<!--p2d-->A object where component class will be registered.<!--/p2d-->
<!--p3d-->A DevExpress.Class inheritor which implements the functionality of the component<!--/p3d-->
===================================================================
<!--hidden--><!--/hidden-->
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_core_component_registrator">core/component_registrator</a><!--/module-->
===================================================================

<!--shortDescription-->
Registers a new component in the specified namespace as a jQuery plugin, AngularJS directive and Knockout binding.
<!--/shortDescription-->

<!--paramName1-->name<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The name for the component to register.
<!--/paramDescription1-->

<!--paramName2-->namespace<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
The object that represents the namespace within which the registered component will be accessible.
<!--/paramDescription2-->

<!--paramName3-->class<!--/paramName3-->
<!--paramType3-->Class<!--/paramType3-->
<!--paramDescription3-->
A DevExpress.Class inheritor implementing the component's functionality.
<!--/paramDescription3-->

<!--fullDescription-->
Call the [registerComponent(name, class)](/Documentation/ApiReference/Common/Utils/#registerComponentname_class) method overload to register the specified component within the [DevExpress.ui](/Documentation/ApiReference/Common/Utils/#ui) namespace.
<!--/fullDescription-->