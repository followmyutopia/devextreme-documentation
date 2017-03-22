<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for the cell of a grid column when it is in an editing state.
<!--/shortDescription-->

<!--fullDescription-->
By default, when a user edits a cell, he or she changes the string value represented by it. However, there may be scenarios in which a cell has a custom appearance in its editing state. For example, you may want the cell to display a combo box with a set of values to choose from. In such cases, specify the **editCellTemplate** option for a column. Implement a callback function customizing the content of the column cell in its editing state and assign it to this option. This function will be invoked every time a cell within the column switches to an editing state.

When implementing the **editCellTemplate** function, you can access the cell being edited using the function's first parameter. This parameter provides access to [element-related jQuery operations](http://api.jquery.com/?s=element). In addition, you can access cell options using the fields of the function's second parameter. These fields are listed below.

- **data**		
Contains the object of a data source represented by the row to which the currently edited cell belongs.
- **component**  
Contains the **DataGrid** instance.
- **value**		
Contains the value of the currently edited cell as it is specified in a data source.
- **text**		
Contains the value of the currently edited cell in a string format. Use this field to get a value with applied [format](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format).
- **displayValue**		
Contains the value displayed by the currently edited cell. It differs from the **value** field only when the column to which the current cell belongs uses [lookup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup/).
- **columnIndex**		
Contains the index of the column to which the currently edited cell belongs. For more information on how this index is calculated, refer to the [Calculating the Column Index](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Calculating_the_Column_Index) topic.
- **rowIndex**		
Contains the index of the row to which the currently edited cell belongs. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group cells are also counted as rows, and thus have row indexes. For further information about row indexes, see the [Grid Rows](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows) topic.
- **column**		
Contains the settings of the column to which the currently edited cell belongs.
- **rowType**		
Represents the type of the row to which the currently edited cell belongs. This field equals *'data'* for ordinary rows or *'group'* for group rows. Use this field to distinguish rows by type.
- **setValue(newValue)**		
A method that changes the cell value when edited. After this method is called, the cell editing process concludes. Note that calling this method means that the value of a cell is changed. In the *batch* [edit mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode), this circumstance may lead the edited cell to be highlighted even when its value was not actually changed, i.e., when a user switched a cell into the editing state and then immediately switched it back to the normal state without changing the value. To prevent this behavior, call the **setValue(newValue)** method only if the new value does not equal the old value, which can be accessed using the **value** field of the object passed to the **editCellTemplate** function as the second parameter.

[note]When utilizing the [Knockout](http://knockoutjs.com/) or [AngularJS](https://angularjs.org/) library in your application, you can specify the template using the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. 

#####See Also#####
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

Also, you can use a template engine to define a template for grid cells. **DataGrid** supports the following template engines. The above mentioned options can be accessed in a similar manner inside the template.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)		
- [JsRender](https://github.com/BorisMoore/jsrender)		
- [Mustache](http://mustache.github.io/)
- [Hogan](http://twitter.github.io/hogan.js/)
- [Underscore](http://underscorejs.org/)
- [Handlebars](http://handlebarsjs.com/)
- [doT](http://olado.github.io/doT/index.html)

Using a template engine, pass one of the following values to the **editCellTemplate** option.

- A jQuery object representing the template's container.		
- A DOM Node representing the template's container.		
- A function that returns a jQuery object or a DOM Node representing the template's container.

[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#twoWayBindingEnabled) option to *false*.
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
