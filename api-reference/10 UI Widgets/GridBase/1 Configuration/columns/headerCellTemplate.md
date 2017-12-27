===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for the column header.
<!--/shortDescription-->

<!--fullDescription-->
Below is the list of fields passed as the **headerInfo** object.

- **component**: <font size="-1">jQuery</font>  
The widget's instance.
- **columnIndex**: <font size="-1">Number</font>        
The index of the column to which the header belongs. For details on how this index is calculated, refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
- **column**: <font size="-1">Object</font>        
The settings of the column to which the header belongs.

It is also possible to define the template using the following template engines. You can access the aforementioned header settings inside the template in a similar manner.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)        
- [JsRender](https://github.com/BorisMoore/jsrender)        
- [Mustache](http://mustache.github.io/)
- [Hogan](http://twitter.github.io/hogan.js/)
- [Underscore](http://underscorejs.org/)
- [Handlebars](http://handlebarsjs.com/)
- [doT](http://olado.github.io/doT/index.html)

When you use a template engine, the **headerCellTemplate** option should be given a jQuery object or a DOM node representing the template's container, or a function that returns either of them.

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->columnHeader<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The current header's container.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->headerInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The header's properties.
<!--/typeFunctionParamDescription2-->
