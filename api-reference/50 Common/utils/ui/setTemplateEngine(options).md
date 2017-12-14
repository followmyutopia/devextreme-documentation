===================================================================
<!--module-->ui/set_template_engine<!--/module-->
<!--export-->default<!--/export-->
===================================================================

<!--shortDescription-->
Sets a custom template engine defined via custom compile and render functions.
<!--/shortDescription-->

<!--paramName1-->templateEngineOptions<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
An object providing functions for parsing and rendering templates.
<!--/paramDescription1-->
<!--paramName1_field1-->compile<!--/paramName1_field1-->
<!--paramType1_field1-->function()<!--/paramType1_field1-->
<!--paramDescription1_field1-->
A function that parses the passed HTML or DOM element and returns a template.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->render<!--/paramName1_field2-->
<!--paramType1_field2-->function()<!--/paramType1_field2-->
<!--paramDescription1_field2-->
A function that inserts data into the template returned by the "compile" function and returns the HTML element to be rendered. The template, data and item index are passed as the function's parameters. Note that the item index is defined only for collection widgets, for example, [List](/Documentation/Guide/Widgets/List/Overview/), [SelectBox](/Documentation/Guide/Widgets/SelectBox/Overview/), [Scheduler](/Documentation/Guide/Widgets/Scheduler/Overview/).
<!--/paramDescription1_field2-->

<!--fullDescription-->
If you need to define a custom template for widget items, you can use a custom template engine, which is different from Knockout and AngularJS engines. To use this engine, call the [DevExpress.ui.setTemplateEngine(name)](/Documentation/ApiReference/Common/Utils/ui/#setTemplateEnginename) method passing the name of one of the supported template engines. If your template engine is not supported, call the **DevExpress.ui.setTemplateEngine(options)** method passing an object with the **compile** and **render** fields that are set to functions preparing a template and inserting data, respectively.
<!--/fullDescription-->