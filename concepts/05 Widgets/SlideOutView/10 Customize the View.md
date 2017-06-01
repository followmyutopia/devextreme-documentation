Similar to the [slide-out menu](/Documentation/Guide/Widgets/SlideOutView/Customize_the_Menu/), the view also demands a template to be specified. For example, in the following code, the view contains the [Toolbar](/Documentation/Guide/Widgets/Toolbar/Overview/) and the [Chart](/Documentation/Guide/Widgets/Chart/Overview/) widgets. They are both placed into a [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) whose name is assigned to the [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxSlideOutView/Configuration/#contentTemplate) option of the **SlideOutView**. All the other code configures the **Toolbar** and the **Chart** and does not affect the **SlideOutView** directly.

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
            dataSource: [{
                widget: 'dxButton',
                options: {
                    icon: 'menu',
                    onClick: function (e) {
                        slideOutView.showMenu();
                    }
                },
                location: 'before'
            }, {
                text: "Title",
                location: 'center'
            }]
        }).dxToolbar("instance");
    
        var chart = $("#chart").dxChart({
            dataSource: [],
            commonSeriesSettings: { type: 'bar', argumentField: "text" },
            series: [
                { valueField: "china", name: "China" },
                { valueField: "usa", name: "USA" },
                { valueField: "turkey", name: "Turkey" }
            ],
            legend: {
                orientation: "horizontal",
                verticalAlignment: "bottom",
                horizontalAlignment: "center"
            },
            valueAxis: {
                label: {
                    format: { type: "largeNumber", precision: 1 }
                }
            }
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


The **contentTemplate** option can also accept a function combining the HTML markup. In this case, you do not need to specify any markup for the view in the HTML file.

    <!--HTML--><div id="slideOutView">
        <div data-options="dxTemplate: { name: 'treeView' }">
            <div id="treeView"></div>
        </div>
    </div>

    <!--JavaScript-->$(function() {
    	var slideOutView = $("#slideOutView").dxSlideOutView({
            menuTemplate: 'treeView',
            contentTemplate: function (view) {
                view.append(
                    $("<div />").attr("id", "toolbar"),
                    $("<div />").attr("id", "chart")
                )
            }
        }).dxSlideOutView("instance");

        // The rest is omitted for brevity
    });

In addition, you can use a 3rd-party template engine to customize the view. For more information, see the [Use an Alternative Template Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine) article.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [SlideOutView - Customize the Menu](/Documentation/Guide/Widgets/SlideOutView/Customize_the_Menu/)
- [SlideOutView - Open and Close the Menu Using the API](/Documentation/Guide/Widgets/SlideOutView/Open_and_Close_the_Menu_Using_the_API/)
- [SlideOutView API Reference](/Documentation/ApiReference/UI_Widgets/dxSlideOutView/)

[tags]slideOutView, slide-out menu, navigation, view appearance, customize, templates