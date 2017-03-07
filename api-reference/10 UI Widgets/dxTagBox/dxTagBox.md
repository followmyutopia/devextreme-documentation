<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->TagBox widget<!--/d-->
<!--widgettree-->
dataSource: [
    "HD Video Player",
    "SuperHD Video Player",
    "SuperPlasma 50",
    "SuperLED 50",
    "SuperLED 42",
    "SuperLCD 55",
    "SuperLCD 42",
    "SuperPlasma 65",
    "SuperLCD 70",
    "Projector Plus",
    "Projector PlusHT",
    "ExcelRemote IR",
    "ExcelRemote BT",
    "ExcelRemote IP"
]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_tag_box">ui/tag_box</a><!--/module-->
<!--inherits-->..\dxSelectBox\dxSelectBox.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TagBox** widget is an editor that allows an end user to select multiple items from a drop-down list.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxTagBox` jQuery plug-in.

        <!--HTML-->
        <div id="tagBox"></div>

    <!---->

        <!--JavaScript-->
        var tagBoxData = [
            { "name": "Alabama", "capital": "Montgomery" },
            { "name": "Alaska", "capital": "Juneau" },
            { "name": "Arizona", "capital": "Phoenix" }
            . . .
        ]
        $("#tagBox").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'capital',
            displayExpr: 'name'
        });

- **Knockout**  
 Add a div element and apply the `dxTagBox` binding to this element.

        <!--HTML-->
        <div data-bind="dxTagBox: {
            dataSource: tagBoxData,
            valueExpr: 'capital',
            displayExpr: 'name'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-tag-box` directive to this element.

        <!--HTML-->
        <div dx-tag-box="{
            dataSource: tagBoxData,
            valueExpr: 'capital',
            displayExpr: 'name'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

The **TagBox** widget supports common Collection Container and Editor widget functionality. You can find detailed information on the principles of working with the widget in the [dxTagBox section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxTagBox) of the [Editor Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/) article. For information on using the Collection Container functionality, refer to the [Collection Container Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/) guide.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorstagboxtagboxmainfeatures/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=PEz46QIZhxQ&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=39" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>
<!--/fullDescription-->