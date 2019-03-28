The **TagBox** widget is an editor that allows an end user to select multiple items from a drop-down list.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editors-tag_box-overview"
}
<a href="https://www.youtube.com/watch?v=PEz46QIZhxQ&index=35&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

The following code adds the **TagBox** to your page. The simplest configuration of the widget requires only a [dataSource](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#dataSource) to be specified. In addition, you can specify the [placeholder](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#placeholder) to be displayed when the **TagBox** is empty.

---
#####jQuery

    <!--HTML-->
    <div id="tagBoxContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            placeholder: "Select products..."
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="products"
        placeholder="Select products...">
    </dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

---

If your data is an array of objects, specify: 

- [valueExpr](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#valueExpr)     
    The data field whose value will be written into the [value](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#value) option.  
- [displayExpr](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#displayExpr)     
    The data field whose value will be displayed in the drop-down list and in the input field of the widget.

<!---->

---
#####jQuery

    <!--JavaScript-->
    var tagBoxData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // ...
    ];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: tagBoxData,
            valueExpr: 'id',
            displayExpr: 'country'
        });
    });

#####Angular

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="country">
    <dx-tag-box>

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData = [
            { id: 1, country: "Afghanistan" },
            { id: 2, country: "Albania" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

---

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [TagBox - Control the Behavior](/Documentation/Guide/Widgets/TagBox/Control_the_Behavior/)
- [TagBox - Handle the Value Change Event](/Documentation/Guide/Widgets/TagBox/Handle_the_Value_Change_Event/)
- [TagBox - Customize Item Appearance](/Documentation/Guide/Widgets/TagBox/Customize_Item_Appearance/)
- [TagBox - Configure Search Parameters](/Documentation/Guide/Widgets/TagBox/Configure_Search_Parameters/)
- [TagBox - Create a User-Defined Item](/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/)
- [TagBox - Keyboard Support](/Documentation/Guide/Widgets/TagBox/Keyboard_Support/)
- [TagBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTagBox/)

[tags]tagBox, tag box, editor, overview, data source, value, display expression