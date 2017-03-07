<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Loads a temlp
<!--/d-->
<!--p1d-->A string containing the URI of the HTML page or a jQuery object presenting a template markup<!--/p1d-->
<!--rd-->A Promise of jQuery Deferred object which is resolved when the loading is finished and rejected if load fails<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Adds a specified HTML template to a collection of view or layout templates.
<!--/shortDescription-->

<!--paramName1-->source<!--/paramName1-->
<!--paramType1-->string|jQuery object<!--/paramType1-->
<!--paramDescription1-->
A string containing the URI of the HTML page or a jQuery object presenting a template markup.
<!--/paramDescription1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery Deferred object that is resolved when the template is loaded or rejected when loading fails.
<!--/returnDescription-->

<!--fullDescription-->
Use this method to provide an HTML template for a view or layout dynamically. When a template for this view/layout is required, the loaded template will be found in the collection of view/layout templates.

The markup that is passed as the method's parameter should be defined using the [dxView](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/)/[dxLayout](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxLayout/) markup components in the same manner as a view/layout that is defined statically.

    <!--HTML-->
    <div data-options="dxView : { name: 'MyView', title: 'My view'  } ">
        <div data-options="dxContent : { targetPlaceholder: 'content' } ">       
            ...
        </div>
    </div>

<!---->    

    <!--HTML-->
    <div data-options="dxLayout: { name:'default', platform:'ios' }">

    </div>

#####See Also#####
- For details on how to define views and layouts, refer to the [Views and Layouts](/Documentation/Guide/SPA_Framework/Views_and_Layouts) article.
- See a step-by-step example in the [Create a View Dynamically](/Documentation/Tutorial/SPA_Framework/Create_a_View_Dynamically#Create_a_View_Dynamically) tutorial.



[note]If more than one view/layout template is found, an exception will be raised. So, check to see that there are no templates for a view/layout when you add a template dynamically. Use the [getViewTemplate](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#getViewTemplateviewName) and [getViewTemplateInfo](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#getViewTemplateInfoviewName) methods to find a view template in a template collection.

<!--/fullDescription-->