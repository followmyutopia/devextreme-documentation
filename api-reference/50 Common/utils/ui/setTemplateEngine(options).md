<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Sets current template engine by template engine object
<!--/d-->
<!--p1d-->options of template engine<!--/p1d-->
<!--p1_field1d-->Specifies function that compile template.<!--/p1_field1d-->
<!--p1_field2d-->Specifies function that render template to html.<!--/p1_field2d-->
===================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_set_template_engine">ui/set_template_engine</a><!--/module-->
===================================================================

<!--shortDescription-->
Sets a custom template engine defined via custom compile and render functions.
<!--/shortDescription-->

<!--paramName1-->templateEngineOptions<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
An object providing functions for parsing and rendering templates.
<!--/paramDescription1-->
<!--paramName1_field1-->compile<!--/paramName1_field1-->
<!--paramType1_field1-->function(html, $element)<!--/paramType1_field1-->
<!--paramDescription1_field1-->
A function that parses the passed HTML or DOM element and returns a template.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->render<!--/paramName1_field2-->
<!--paramType1_field2-->function(template, data)<!--/paramType1_field2-->
<!--paramDescription1_field2-->
A function that inserts data into the template returned by the "compile" function and returns the HTML element to be rendered. The data and template are passed as the function's parameters.
<!--/paramDescription1_field2-->

<!--fullDescription-->
If you need to define a custom template for widget items, you can use a custom template engine, which is different from Knockout and AngularJS engines. To use this engine, call the [DevExpress.ui.setTemplateEngine(name)](/Documentation/ApiReference/Common/Utils/ui/#setTemplateEnginename) method passing the name of one of the supported template engines. If your template engine is not supported, call the **DevExpress.ui.setTemplateEngine(options)** method passing an object with the **compile** and **render** fields that are set to functions preparing a template and inserting data, respectively.
<!--/fullDescription-->