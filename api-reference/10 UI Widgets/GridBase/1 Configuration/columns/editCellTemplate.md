<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for column cells in the editing state.
<!--/shortDescription-->

<!--fullDescription-->
By default, a user edits a string value contained within a cell. Using the **editCellTemplate** option, you can specify completely custom markup for the cell so that it contains, for example, a combo box or another widget instead of the string value. See [template](/Documentation/ApiReference/Common/Object_Structures/template/) for information on what the **editCellTemplate** option accepts.

Below is the list of fields passed as the **cellInfo** object.

- **data**: <font size="-1">Object</font>        
The data of the row to which the cell belongs.
- **component**: <font size="-1">jQuery</font>  
The widget's instance.
- **value**: <font size="-1">Any</font>        
The value of the cell as it is specified in the data source.
- **displayValue**: <font size="-1">Any</font>        
The display value of the cell. Differs from the **value** field only when the column uses [lookup]({basewidgetpath}/Configuration/columns/lookup/) or [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue).
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format]({basewidgetpath}/Configuration/columns/#format) and [customizeText]({basewidgetpath}/Configuration/columns/#customizeText).
- **columnIndex**: <font size="-1">Number</font>        
The index of the column to which the cell belongs. For more information on how this index is calculated, refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
- **rowIndex**: <font size="-1">Number</font>        
The index of the row to which the cell belongs. Begins with 0 on each page. Group rows are included. For details on row indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
- **column**: <font size="-1">Object</font>        
The settings of the column to which the cell belongs.
- **rowType**: <font size="-1">String</font>        
The type of the row to which the cell belongs. Equals *"data"* for ordinary rows or *"group"* for group rows.
- **setValue(newValue)**: <font size="-1">Method</font>        
Saves the edited value. After this method is called, the editing process ends.

    [note] A call of this method tells the widget that the value has been changed. Because of this, in *batch* [edit mode]({basewidgetpath}/Configuration/editing/#mode), an edited cell can be highlighted even if its value was not actually changed, for example, if a user switched this cell into the editing state and then immediately switched it back without changing the value. To prevent this behavior, check that the value has actually been changed before calling the **setValue(newValue)** method.

It is also possible to define the template using the following template engines. You can access the aforementioned cell settings inside the template in a similar manner.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)        
- [JsRender](https://github.com/BorisMoore/jsrender)        
- [Mustache](http://mustache.github.io/)
- [Hogan](http://twitter.github.io/hogan.js/)
- [Underscore](http://underscorejs.org/)
- [Handlebars](http://handlebarsjs.com/)
- [doT](http://olado.github.io/doT/index.html)

When you use a template engine, the **editCellTemplate** option should be given a jQuery object or a DOM node representing the template's container, or a function that returns either of them.

[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled]({basewidgetpath}/Configuration/#twoWayBindingEnabled) option to **false**.

#####See Also#####
- [Customize Editors](/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors)
<!--/fullDescription-->
<!--typeFunctionParamName1-->cellElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The cell that you are customizing.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->cellInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The settings of the cell.
<!--/typeFunctionParamDescription2-->
