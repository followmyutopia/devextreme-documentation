===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the loading indicator should be displayed and hidden automatically.
<!--/shortDescription-->

<!--fullDescription-->
The loading indicator's visibility is tied to the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/)'s [load](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method: it appears when the method's execution starts and hides when the execution is complete. The **{WidgetName}** calls the method internally.

[note] The [dataSource]({basewidgetpath}/Configuration/#dataSource) option does not have to be set to a **DataSource** instance because the widget wraps anything passed to this option in the **DataSource**. 

If you want to change the loading indicator's visibility, use the [show]({basewidgetpath}/Configuration/loadingIndicator/#show) option.
<!--/fullDescription-->
