<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--hidden--><!--/hidden-->
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_drop_down_menu">ui/drop_down_menu</a><!--/module-->
<!--export-->default<!--/export-->
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

You can create the widget using one of the following approaches.

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

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<!--/fullDescription-->