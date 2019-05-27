All operations with widget options are carried out using the **option()** method. You can use it to do the following.

####Get All Options####
<div style="height:5px"></div>
    <!--JavaScript-->var menuInstance = $("#menuContainer").dxMenu("instance");
    var menuOptions = menuInstance.option();

    // ---------- or ----------
    var menuOptions = $("#menuContainer").dxMenu("option");

####Get the Value of a Single Option####
<div style="height:5px"></div>
    <!--JavaScript-->var menuInstance = $("#menuContainer").dxMenu("instance");
    var menuDataSource = menuInstance.option("dataSource");
    var submenuMode = menuInstance.option("showSubmenuMode.name");

    // ---------- or ----------
    var menuDataSource = $("#menuContainer").dxMenu("option", "dataSource");
    var submenuMode = $("#menuContainer").dxMenu("option", "showSubmenuMode.name");

####Set a Single Option####
<div style="height:5px"></div>
    <!--JavaScript-->var menuInstance = $("#menuContainer").dxMenu("instance");
    menuInstance.option("dataSource", []);
    menuInstance.option("showSubmenuMode.name", 'onClick');

    // ---------- or ----------
    $("#menuContainer").dxMenu("option", "dataSource", []);
    $("#menuContainer").dxMenu("option", "showSubmenuMode.name", 'onClick');

[note]If you perform a chain of option changes, wrap it up into the **beginUpdate()** and **endUpdate()** function calls. It prevents the widget from unnecessary refreshing and event raising. Better yet, use an object instead if you need to change several options at once.

####Set Several Options####
<div style="height:5px"></div>
    <!--JavaScript-->var menuInstance = $("#menuContainer").dxMenu("instance");
    menuInstance.option({
        dataSource: [],
        showSubmenuMode: {
            name: 'onClick'
        }
    });

    // ---------- or ----------
    $("#menuContainer").dxMenu({
        dataSource: [],
        showSubmenuMode: {
            name: 'onClick'
        }
    });

[note]

When you pass an object to the **option(options)** method or to the jQuery plugin at runtime as shown in the previous code, options specified in this object will be merged with the options that were [specified at design time](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget). 

This works properly unless the options were specified as arrays. In this case, you should reassign the entire array of objects that contain new option values alongside old values.

[/note]

#####See Also#####
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[Menu](/Documentation/ApiReference/UI_Widgets/dxMenu/).[Configuration](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/)
- [Create and Configure a Widget - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget)

[tags]basics, jquery, change options, get, set, runtime
