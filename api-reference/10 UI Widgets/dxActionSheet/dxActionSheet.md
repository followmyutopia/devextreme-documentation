<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->ActionSheet widget.<!--/d-->
<!--widgettree-->
dataSource: [
        { text: "Call" },
        { text: "Send message" },
        { text: "Edit" },
        { text: "Delete" }
    ],
    title: "Choose action",
    visible: true
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_action_sheet">ui/action_sheet</a><!--/module-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ActionSheet** widget is a sheet containing a set of buttons located one under the other. These buttons usually represent several choices relating to a single task.
<!--/shortDescription-->

<!--fullDescription-->
You can create a widget using one of the following approaches.

- **jQuery**  
 Use the `dxActionSheet` jQuery plug-in.

        <!--HTML-->
        <div id="actionSheet"></div>

    <!---->

        <!--JavaScript-->
        $("#actionSheet").dxActionSheet({
            dataSource: actionSheetData,
            visible: true
        });

- **Knockout**  
 Add a div element and apply the `dxActionSheet` binding to this element.

        <!--HTML-->
        <div data-bind="dxActionSheet: {
            dataSource: actionSheetData,
            visible: true
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-action-sheet` directive to this element.

        <!--HTML-->
        <div dx-action-sheet="{
            dataSource: actionSheetData,
            visible: true
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

Since the **ActionSheet** widget is used to display multiple items, it supports common Collection Container widget functionality. You can find the detailed information on principles of working with the widget in the [dxActionSheet section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#List_of_Collection_Container_Widgets/dxActionSheet) of the [Collection Container Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsactionsheetactionsheetactionsheet/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->