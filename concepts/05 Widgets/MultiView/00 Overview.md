The **MultiView** is a widget that contains several views. An end user navigates through the views by swiping them in the horizontal direction. The widget is often used along with the [Tabs](/Documentation/ApiReference/UI_Widgets/dxTabs/) widget.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigation-multi_view-overview"
}

In the most simple case, the **MultiView** widget requires only the [dataSource](/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#dataSource) option to be configured. Note that in such a case, data source items should have a structure similar to the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxMultiView/Default_Item_Template/). The following code adds the **MultiView** to your page.

---
##### jQuery

    <!--HTML-->
    <div id="multiViewContainer">

    <!--JavaScript-->
    var multiViewItems = [
        { text: "Personal Data" },
        { text: "Contacts" },
        { text: "Address" }
    ];

    $(function() {
        $("#multiViewContainer").dxMultiView({
            dataSource: multiViewItems
        });
    });

##### Angular

    <!--HTML-->
    <dx-multi-view>
        <dxi-item text="Personal Data"></dxi-item>
        <dxi-item text="Contacts"></dxi-item>
        <dxi-item text="Address"></dxi-item>
    </dx-multi-view>

    <!--TypeScript-->
    import { DxMultiViewModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxMultiViewModule
        ],
        // ...
    })

---

More often, structure of the data source item differs from the default. For correct rendering of views, specify a [custom template](/Documentation/Guide/Widgets/MultiView/Customize_Item_Appearance). 

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [MultiView - Customize Item Appearance](/Documentation/Guide/Widgets/MultiView/Customize_Item_Appearance)
- [MultiView - Switch Between Views](/Documentation/Guide/Widgets/MultiView/Switch_Between_Views)
- [MultiView - Loop the Views](/Documentation/Guide/Widgets/MultiView/Loop_the_Views)
- [MultiView API Reference](/Documentation/ApiReference/UI_Widgets/dxMultiView/)

[tags]multi view, multiView, collection container, collection widget, navigation, overview