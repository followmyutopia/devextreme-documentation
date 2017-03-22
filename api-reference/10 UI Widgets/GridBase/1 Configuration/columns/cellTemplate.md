<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for grid column cells.
<!--/shortDescription-->

<!--fullDescription-->
To represent custom data in column cells, use the **cellTemplate** option. Implement a callback function defining the markup of column cells and assign it to this option. This function will be invoked every time **DataGrid** re-renders itself.

When implementing the **cellTemplate** function, you can access the cell under customization using the function's first parameter. This parameter provides access to [element-related jQuery operations](http://api.jquery.com/?s=element). In addition, you can access the options of the cell using the fields of the function's second parameter. These fields are listed below.

- **data**		
Contains the object of the data source represented by the row to which the current cell belongs.
- **component**  
Contains the **DataGrid** instance.
- **value**		
Contains the value of the current cell as it is specified in the data source.
- **text**		
Contains the value of the current cell in a string format. Use this field to get the value with applied [format](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format).
- **displayValue**		
Contains the value displayed by the current cell. Differs from the **value** field only when the column to which the current cell belongs uses [lookup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/).
- **columnIndex**		
Contains the index of the column to which the current cell belongs. For more information on how this index is calculated, refer to the [Calculating the Column Index](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index) topic.
- **rowIndex**		
Contains the index of the row to which the current cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group cells are counted as rows as well, and thus have row indexes. For further information about row indexes, see the [Grid Rows](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows) topic.
- **column**		
Contains the settings of the column to which the current cell belongs.
- **rowType**		
Represents the type of the row to which the current cell belongs. This field equals *'data'* for ordinary rows or *'group'* for group rows. Use this field to distinguish rows by type.

[note]When utilizing the [Knockout](http://knockoutjs.com/) or [AngularJS](https://angularjs.org/) library in your application, you can specify a cell template using the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. 

#####See Also#####
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

It is also possible to define a cell template in markup by utilizing one of the following template engines. The above-mentioned cell settings can be accessed in a similar manner inside the template.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)		
- [JsRender](https://github.com/BorisMoore/jsrender)		
- [Mustache](http://mustache.github.io/)
- [Hogan](http://twitter.github.io/hogan.js/)
- [Underscore](http://underscorejs.org/)
- [Handlebars](http://handlebarsjs.com/)
- [doT](http://olado.github.io/doT/index.html)

Using a template engine, pass one of the following values to the **cellTemplate** option.

- A jQuery object representing the template's container.		
- A DOM Node representing the template's container.		
- A function that returns a jQuery object or a DOM Node representing the template's container.

[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#twoWayBindingEnabled) option to *false*.

To customize a cell without defining the entire template, handle the [cellPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellPrepared) event.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-templates-column_template" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Function Template Demo</a>
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-templates-column_3rd_party_engine_template" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Underscore Template Demo</a>
<!--/fullDescription-->
<!--typeFunctionParamName1-->cellElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->jQuery<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The cell under customization.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->cellInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The options of the current cell.
<!--/typeFunctionParamDescription2-->
