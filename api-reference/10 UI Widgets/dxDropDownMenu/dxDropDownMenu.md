<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Drop-down menu widget.<!--/d-->
===========================================================================
<!--hidden--><!--/hidden-->
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_drop_down_menu">ui/drop_down_menu</a><!--/module-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A drop-down menu widget.
<!--/shortDescription-->

<!--fullDescription-->
The **DropDownMenu** widget is a UI element (a button or a toolbar item) that displays a drop-down menu when clicked.

You can create a widget using one of the following approaches.

- **jQuery**  
 Use the `dxDropDownMenu` jQuery plug-in.

        <!--HTML-->
        <div id="dropDownMenu"></div>

    <!---->

        <!--JavaScript-->
        $("#dropDownMenu").dxDropDownMenu({
            dataSource: dropDownMenuData,
            buttonText: 'Show menu',
            buttonIcon: 'menu'
        });

- **Knockout**  
 Add a div element and apply the `dxDropDownMenu` binding to this element.

        <!--HTML-->
        <div data-bind="dxDropDownMenu: {
            dataSource: dropDownMenuData,
            buttonText: 'Show menu',
            buttonIcon: 'menu'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-drop-down-menu` directive to this element.

        <!--HTML-->
        <div dx-drop-down-menu="{
            dataSource: dropDownMenuData,
            buttonText: 'Show menu',
            buttonIcon: 'menu'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

Since the **DropDownMenu** widget is used to display multiple items, it supports common the Collection Container widget functionality. You can find detailed information on the principles of working with the widget in the [dxDropDownMenu section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#UI_Widgets_UI_Widget_Categories_Collection_Container_Widgets_List_of_Collection_Container_Widgets_dxDropDownMenu) of the [Collection Container Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/) article.
<!--/fullDescription-->