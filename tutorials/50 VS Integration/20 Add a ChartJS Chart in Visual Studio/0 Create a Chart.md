<article>

To begin, you must first create a DevExtreme application in Visual Studio by using either the [Basic Application](/Documentation/Guide/VS_Integration/Project_Templates/#Basic_Application) or [Multi-Channel Application](/Documentation/Guide/VS_Integration/Project_Templates/#Multi-Channel_Application) project template supplied with the DevExtreme installation. From the Visual Studio main menu, select **File** | **New** | **Project...** to invoke the **New Project** dialog.

![New Project Dialog](Content/images/doc/16_1/DevExtreme/Tutorial_NewProject.png)

Select **DevExtreme** in the **Projects** tree view. In the **Templates** list view, select the **DevExtreme XX.X Basic Application** template, specify the new solution's name and click **OK**.

You will see a project with the specified name within the Solution Explorer. To learn how to build a mobile application utilizing DevExtreme projects, refer to the [Your First Mobile App in Visual Studio](/Documentation/Tutorial/VS_Integration/Create_a_Mobile_App_in_Visual_Studio/) tutorial. Here, you will learn how to add a chart to a view.

Double-click the *home.dxView* file to invoke the View Designer. It contains an area with the View's markup and a View simulator displaying this markup. In the simulator, select all elements in the View and remove them. Drag the "dxChart" item from the Toolbox to the View in the simulator.

![Add Chart](Content/images/doc/16_1/DevExtreme/Tutoria2_AddChart.png)

A div element with the `data-bind` attribute set to `dxChart` is added. `dxChart` is custom [Knockout binding](http://knockoutjs.com/documentation/introduction.html) that is supplied with ChartJS.

    <!--HTML--><div style="height: 300px;" data-bind='dxChart: {dataSource: [{ arg: "milk", val: 2 }, { arg: "soda", val: 3 }], series: { type: "bar"} }'></div>

To configure a widget, pass a configuration object as the constructor's parameter. The properties of this object represent the widget's configuration options; to specify them, set the required values to the configuration object's properties. As an example, the **dataSource** and **series** options are specified by default.

Run this code in a browser to view a chart with sample data.

<div class="simulator-desktop-container" data-view="/Content/Applications/16_1/LearningCenter/ChartLessons/chart.html, /Content/Applications/16_1/LearningCenter/ChartLessons/createChart.js"></div>

</article>