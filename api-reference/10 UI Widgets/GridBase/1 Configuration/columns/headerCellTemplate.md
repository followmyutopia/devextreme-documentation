<!--id-->GridBaseColumn.headerCellTemplate<!--/id-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for column headers.
<!--/shortDescription-->

<!--fullDescription-->
The **headerInfo** object has the following fields:

- **component**: <font size="-1">Object</font>  
The widget's instance.
- **columnIndex**: <font size="-1">Number</font>        
The index of the column to which the header belongs. For details on how this index is calculated, refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
- **column**: <font size="-1">Object</font>        
The settings of the column to which the header belongs.

[note] In [fixed columns]({basewidgetpath}/Configuration/columnFixing/), a **headerCellTemplate** is initialized and rendered twice for each column header.

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->columnHeader<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The current header's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->headerInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The header's properties.
<!--/typeFunctionParamDescription2-->
