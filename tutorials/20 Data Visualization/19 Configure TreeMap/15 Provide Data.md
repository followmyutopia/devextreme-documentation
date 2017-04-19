<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_1/DataVisualization/Lessons/ConfigureTreeMap/Step3/treemap.html" data-show-first="treemap.js">

**TreeMap** accepts either a hierarchical or a plain data source. For the widget, the only difference is the settings you need to specify in each case. This tutorial shows how to configure a **TreeMap** bound to a plain data source. For example, consider the *vehiclesPerCapita* array declared in the *treemap.js* file below. It contains twenty data objects and four group objects. Each data object implicitly belongs to one of the group objects. Pass this array to the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource) option.

After that, you need to specify a set of data binding options that differ depending on whether the data source is plain or hierarchical. A plain data source requires the following options.

* [idField](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#idField) - the data source field that provides IDs for items.
* [parentField](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#parentField) - the data source field that provides parent IDs for items.
* [valueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#valueField) - the data source field that provides values for items; *'value'* by default.

The **idField** and **parentField** options are needed to recreate a hierarchy from a plain data source. The **valueField** option defines the area of each rectangle in the widget. You can also set the [labelField](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#labelField) option in case you need item labels to differ from item IDs.

#####See Also#####
- [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#dataSource) - details on binding the widget to a hierarchical data source.
- [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) - a set of components for working with data that surpasses JavaScript arrays in flexibility.

Note that if you place **TreeMap** on a page that uses a path modifier, you need to set the [pathModified](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#pathModified) option to *true*. As an example of such modifiers, the [base](http://www.w3schools.com/tags/tag_base.asp) HTML tag can be considered. Also, we recommend you enable this option if you place the widget inside the [`<iframe>`](http://www.w3schools.com/tags/tag_iframe.asp) tag. This statement is correct for all DevExtreme Data Visualization widgets. As our site uses the `<iframe>` tag to present the resulting widget, the **pathModified** option is specified in this tutorial.

In the following step, you will take a look at different layout algorithms supported by **TreeMap**.
</article>