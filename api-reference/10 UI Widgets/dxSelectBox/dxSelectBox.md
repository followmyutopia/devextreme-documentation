<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->SelectBox widget<!--/d-->
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
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_select_box">ui/select_box</a><!--/module-->
<!--inherits-->..\dxDropDownList\dxDropDownList.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **SelectBox** widget is an editor that allows an end user to select an item from a drop-down list.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxSelectBox` jQuery plug-in.

        <!--HTML-->
        <div id="selectBox"></div>

    <!---->

        <!--JavaScript-->
        var selectBoxData = [
            { "name": "Alabama", "capital": "Montgomery" },
            { "name": "Alaska", "capital": "Juneau" },
            { "name": "Arizona", "capital": "Phoenix" }
            . . .
        ]
        $("#selectBox").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'capital',
            displayExpr: 'name'
        });

- **Knockout**  
 Add a div element and apply the `dxSelectBox` binding to this element.

        <!--HTML-->
        <div data-bind="dxSelectBox: {
            dataSource: selectBoxData,
            valueExpr: 'capital',
            displayExpr: 'name'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-select-box` directive to this element.

        <!--HTML-->
        <div dx-select-box="{
            dataSource: selectBoxData,
            valueExpr: 'capital',
            displayExpr: 'name'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

The **SelectBox** widget supports common Collection Container and Editor widget functionality. You can find detailed information on the principles of working with the widget in the [dxSelectBox section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxSelectBox) of the [Editor Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/) article. For the information on using the Collection Container functionality, refer to the [Collection Container Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/) guide.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsselectboxselectboxmainfeatures/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->