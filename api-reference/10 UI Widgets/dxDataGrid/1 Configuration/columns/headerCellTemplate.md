<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Custom template for header of column<!--/d-->
===========================================================================
<!--type-->template<!--/type-->
<!--fp1d-->The header under customization.<!--/fp1d-->
<!--fp2d-->The options of the current header.<!--/fp2d-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for the [header](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Configuring_Column_Headers) of a grid column.
<!--/shortDescription-->

<!--fullDescription-->
If you must display custom data in the header of a grid column, use the **headerCellTemplate** option. Implement a callback function customizing the content of the header and assign it to this option. This function will be invoked every time **DataGrid** rerenders itself.

When implementing the **headerCellTemplate** function, you can access the header under customization using the function's first parameter. This parameter provides access to [element-related jQuery operations](http://api.jquery.com/?s=element). In addition, you can access the options of the header using the fields of the function's second parameter. These fields are listed below.

- **columnIndex**		
Contains the index of a column that the current header belongs to. For more information on how this index is calculated, refer to the [Calculating the Column Index](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index) topic.   
- **column**		
Contains the settings of a column that the current header belongs to.

[note]When utilizing the [Knockout](http://knockoutjs.com/) or [AngularJS](https://angularjs.org/) library in your application, you can specify the template using the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. 

#####See Also#####
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/UI_Widgets/Common/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

It is also possible to define a header cell template in markup. For this purpose, use one of the following template engines. The above-mentioned cell settings can be accessed similarly inside of the template.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)		
- [JsRender](https://github.com/BorisMoore/jsrender)		
- [Mustache](http://mustache.github.io/)
- [Hogan](http://twitter.github.io/hogan.js/)
- [Underscore](http://underscorejs.org/)
- [Handlebars](http://handlebarsjs.com/)
- [doT](http://olado.github.io/doT/index.html)

Using a template engine, pass one of the following values to the **headerCellTemplate** option.

- A jQuery object representing the template's container.		
- A DOM Node representing the template's container.		
- A function that returns a jQuery object or a DOM Node representing the template's container.
<!--/fullDescription-->
<!--typeFunctionParamName1-->columnHeader<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->jQuery<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The header under customization.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->headerInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The options of the current header.
<!--/typeFunctionParamDescription2-->
