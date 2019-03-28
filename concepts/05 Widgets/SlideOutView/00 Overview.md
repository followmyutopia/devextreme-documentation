The **SlideOutView** widget is a classic slide-out menu paired with a view. This widget is very similar to the [SlideOut](/Documentation/Guide/Widgets/SlideOut/Overview/) with only one difference - the **SlideOut** always contains the [List](/Documentation/Guide/Widgets/List/Overview/) in the slide-out menu, while the **SlideOutView** can hold any collection there.

The following code adds the **SlideOutView** widget to your page. The view contains a [Toolbar](/Documentation/Guide/Widgets/Toolbar/Overview/) and a [Chart](/Documentation/Guide/Widgets/Chart/Overview/); the slide-out menu contains a [TreeView](/Documentation/Guide/Widgets/TreeView/Overview/). This example is expanded further in the [Customize the View](/Documentation/Guide/Widgets/SlideOutView/Customize_the_View/) and [Customize the Menu](/Documentation/Guide/Widgets/SlideOutView/Customize_the_Menu/) articles.

    <!--HTML--><div id="slideOutView">
        <div data-options="dxTemplate: { name: 'content' }">
            <div id="toolbar"></div>
            <div id="chart"></div>
        </div>
        <div data-options="dxTemplate: { name: 'treeView' }">
            <div id="treeView"></div>
        </div>
    </div>
    
    <!--JavaScript-->$(function() {
    	var slideOutView = $("#slideOutView").dxSlideOutView({
            menuTemplate: 'treeView',
            contentTemplate: 'content'
        }).dxSlideOutView("instance");
    	
    	var toolbar = $("#toolbar").dxToolbar({
            // Toolbar is configured in the "Customize the View" article
        }).dxToolbar("instance");
    
        var chart = $("#chart").dxChart({
            // Chart is configured in the "Customize the View" article
        }).dxChart("instance");
        
        $("#treeView").dxTreeView({
            // TreeView is configured in the "Customize the Menu" article
        });
    });


    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [SlideOutView - Customize the Menu](/Documentation/Guide/Widgets/SlideOutView/Customize_the_Menu/)
- [SlideOutView - Customize the View](/Documentation/Guide/Widgets/SlideOutView/Customize_the_View/)
- [SlideOutView - Open and Close the Menu Using the API](/Documentation/Guide/Widgets/SlideOutView/Open_and_Close_the_Menu_Using_the_API/)
- [SlideOutView API Reference](/Documentation/ApiReference/UI_Widgets/dxSlideOutView/)

[tags]slideOutView, slide-out menu, navigation, overview