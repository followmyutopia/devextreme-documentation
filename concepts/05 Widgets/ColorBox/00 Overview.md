The **ColorBox** is a widget that allows an end user to enter a color or pick it out from the drop-down editor.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editors-color_box-overview"
}

The following code adds a simple **ColorBox** to your page.

---
##### jQuery

    <!--HTML-->
    <div id="colorBoxContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#colorBoxContainer").dxColorBox({
            value: "#FF0000"
        });
    });

##### Angular

    <!--HTML-->
    <dx-color-box
        [(value)]="color">
    </dx-color-box>

    <!--TypeScript-->
    import { DxColorBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        color: string = "#FF0000"
    }
    @NgModule({
        imports: [
            // ...
            DxColorBoxModule
        ],
        // ...
    })

---

The **ColorBox** accepts colors in hexadecimal (_"#FF0000"_), RGB (_"rgb(255, 0, 0)"_) and RGBA (_"rgba(255, 0, 0, 1)"_) formats, as well as [color names](http://www.w3schools.com/cssref/css_colors.asp). When an end user selects a color from the drop-down editor, the textual representation of the selected color is hexadecimal.

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [ColorBox - Handle the Value Change Event](/Documentation/Guide/Widgets/ColorBox/Handle_the_Value_Change_Event)
- [ColorBox - Support Alpha Channel](/Documentation/Guide/Widgets/ColorBox/Support_Alpha_Channel)
- [ColorBox - Keyboard Support](/Documentation/Guide/Widgets/ColorBox/Keyboard_Support)
- [ColorBox API Reference](/Documentation/ApiReference/UI_Widgets/dxColorBox/)

[tags]color box, colorBox, editor, overview