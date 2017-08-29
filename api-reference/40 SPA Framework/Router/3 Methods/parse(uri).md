<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Decodes the specified URI to an object using the [registered routing rules](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing).
<!--/shortDescription-->

<!--paramName1-->uri<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The URI to be parsed.
<!--/paramDescription1-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
An object whose fields represent routing parameters. The field values are set to the parameter values extracted from the specified URI.
<!--/returnDescription-->

<!--fullDescription-->
Parsing is performed using the rule registered using the [register](/Documentation/ApiReference/SPA_Framework/Router/Methods/#registerpattern_defaults_constraints) method. If several routing rules are registered, they are evaluated in the order of registration. If the specified URI fits a rule, the rule is used to process the URL. Otherwise, the remaining routing rules are evaluated one by another.
<!--/fullDescription-->