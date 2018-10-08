The **SelectBox** widget is an editor that allows an end user to select an item from a drop-down list.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editors-select_box-overview"
}

The following code adds the **SelectBox** to your page. The simplest configuration of the widget requires only a [dataSource](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#dataSource) to be specified. In addition, you can specify the [placeholder](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#placeholder) to be displayed when the **SelectBox** is empty.

---
#####jQuery

    <!--HTML-->
    <div id="selectBoxContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            placeholder: "Select a product..."
        });
    });

#####Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="products"
        placeholder="Select a product...">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
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
             DxSelectBoxModule
         ],
         // ...
     })

---

If your data is an array of objects, specify: 

- [valueExpr](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#valueExpr)     
    The data field whose value will be written into the [value](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#value) option.
- [displayExpr](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#displayExpr)     
    The data field whose value will be displayed in the drop-down list and in the input field of the widget.

<!---->

---
#####jQuery

    <!--JavaScript-->
    var selectBoxData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // ...
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country'
        });
    });

#####Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData"
        valueExpr="id"
        displayExpr="country">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectBoxData = [
            { id: 1, country: "Afghanistan" },
            { id: 2, country: "Albania" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

---

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [SelectBox - Customize Item Appearance](/Documentation/Guide/Widgets/SelectBox/Customize_Item_Appearance/)
- [SelectBox - Configure Search Parameters](/Documentation/Guide/Widgets/SelectBox/Configure_Search_Parameters/)
- [SelectBox - Create a User-Defined Item](/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/)
- [SelectBox - Handle the Value Change Event](/Documentation/Guide/Widgets/SelectBox/Handle_the_Value_Change_Event/)
- [SelectBox - Keyboard Support](/Documentation/Guide/Widgets/SelectBox/Keyboard_Support/)
- [SelectBox API Reference](/Documentation/ApiReference/UI_Widgets/dxSelectBox/)

[tags]selectBox, select box, editor, collection widget, overview, data source, value, display expression