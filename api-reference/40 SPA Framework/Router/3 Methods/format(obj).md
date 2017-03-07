<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Format uri
<!--/d-->
<!--p1d-->Values<!--/p1d-->
<!--rd-->Formatted uri<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Formats an object to a URI.
<!--/shortDescription-->

<!--paramName1-->obj<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
An object whose fields represent routing parameters.
<!--/paramDescription1-->

<!--returnType-->string<!--/returnType-->
<!--returnDescription-->
A URI generated from the specified object using the <a href="/Documentation/16_1/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing">registered routing rules</a>.
<!--/returnDescription-->

<!--fullDescription-->
Formatting is performed using the rule registered using the [register](/Documentation/ApiReference/SPA_Framework/Router/Methods/#registerpattern_defaults_constraints) method. If several routing rules are registered, they are evaluated in the order of registration. If the specified object fits a rule, the rule is used to generate a URI. Otherwise, the remaining routing rules are evaluated by one another.
<!--/fullDescription-->