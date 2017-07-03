<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
Use this option to specify completely custom markup for column cells. See [template](/Documentation/ApiReference/Common/Object_Structures/template/) for information on what this option accepts.

Below is the list of fields passed as the **cellInfo** object.

- **data**: <font size="-1">Object</font>        
Data of the row to which the cell belongs.
- **component**: <font size="-1">jQuery</font>  
The [widget instance]({basewidgetpath}/Methods/#instance).
- **value**: <font size="-1">Any</font>        
The value of the cell as it is specified in the data source.
- **displayValue**: <font size="-1">Any</font>        
The display value of the cell. Differs from the **value** field only when the column uses [lookup]({basewidgetpath}/Configuration/columns/lookup/) or [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue).
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format]({basewidgetpath}/Configuration/columns/#format) and [customizeText]({basewidgetpath}/Configuration/columns/#customizeText).
- **columnIndex**: <font size="-1">Number</font>        
The index of the column to which the cell belongs.
- **rowIndex**: <font size="-1">Number</font>        
The index of the row to which the cell belongs. Begins with 0 on each page.
- **column**: <font size="-1">Object</font>        
The settings of the column to which the cell belongs.

It is also possible to define a cell template using the following template engines. You can access the aforementioned cell settings inside the template in a similar manner.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)        
- [JsRender](https://github.com/BorisMoore/jsrender)        
- [Mustache](http://mustache.github.io/)
- [Hogan](http://twitter.github.io/hogan.js/)
- [Underscore](http://underscorejs.org/)
- [Handlebars](http://handlebarsjs.com/)
- [doT](http://olado.github.io/doT/index.html)

When you use a template engine, the **cellTemplate** option should be given a jQuery object or a DOM node representing the template's container, or a function that returns either of them.

[note]If you implement two-way data binding in your template, make sure that you have switched off the built-in implementation of this feature by setting the [twoWayBindingEnabled]({basewidgetpath}/Configuration/#twoWayBindingEnabled) option to *false*.

#####See Also#####
- [Customize Cells Appearance](/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/#Customize_the_Appearance)
- [onCellPrepared]({basewidgetpath}/Configuration/#onCellPrepared)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->