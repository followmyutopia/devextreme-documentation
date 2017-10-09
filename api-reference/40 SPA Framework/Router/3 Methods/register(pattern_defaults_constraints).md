<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Adds a routing rule to the list of registered rules.
<!--/shortDescription-->

<!--paramName1-->pattern<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
Specifies the parameters a URL must contain in order to be processed by the rule. 
<!--/paramDescription1-->

<!--paramName2-->defaults<!--/paramName2-->
<!--paramType2-->object|undefined<!--/paramType2-->
<!--paramDescription2-->
An object whose field names correspond to the pattern parameters. These fields are set to the parameters' default values.
<!--/paramDescription2-->

<!--paramName3-->constraints<!--/paramName3-->
<!--paramType3-->object|undefined<!--/paramType3-->
<!--paramDescription3-->
An object whose field names correspond to the pattern parameters. These fields are set to the parameters' constraint expressions.
<!--/paramDescription3-->

<!--fullDescription-->
Use this method to register a routing rule in an application. Call this method after instantiating the [HtmlApplication](/Documentation/ApiReference/SPA_Framework/HtmlApplication/) object.

For details of possible variants of rule patterns, defaults and constraints, refer to the [Declare a Routing](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing) topic.
<!--/fullDescription-->