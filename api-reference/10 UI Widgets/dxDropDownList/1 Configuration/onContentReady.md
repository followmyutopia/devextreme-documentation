===========================================================================
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
If data displayed by the widget is specified using a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance, the **contentReady** event fires each time the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method of the DataSource instance is called as well as when widget content is ready. In this case, when you create the widget, the **contentReady** event is raised twice: when the widget's content is ready (at this moment, the widget does not display items) and when the DataSource is loaded (the widget displays the loaded items).
<!--/fullDescription-->
