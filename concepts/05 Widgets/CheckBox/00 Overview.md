The **CheckBox** is a small box, which when selected by the end user, shows that a particular feature has been enabled or a specific option has been chosen.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-check_box-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds the **CheckBox** to your page.

---
##### jQuery

    <!--HTML-->
    <div id="checkBoxContainer"></div>
 
    <!--JavaScript-->
    $(function() {
        $("#checkBoxContainer").dxCheckBox({
            text: "Check me",
            value: undefined
        });
    });

##### Angular

    <!--HTML-->
    <dx-check-box
        text="Check me"
        [(value)]="checkBoxValue">
    </dx-check-box>

    <!--TypeScript-->
    import { DxCheckBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        checkBoxValue: boolean;
    }
    @NgModule({
        imports: [
            // ...
            DxCheckBoxModule
        ],
        // ...
    })

---

The **CheckBox** widget can have the following states: checked (the **value** option is _true_), unchecked (**value** is _false_), undetermined (**value** is _undefined_).

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [CheckBox - Handle the Value Change Event](/Documentation/Guide/Widgets/CheckBox/Handle_the_Value_Change_Event)
- [CheckBox - Keyboard Support](/Documentation/Guide/Widgets/CheckBox/Keyboard_Support)
- [CheckBox API Reference](/Documentation/ApiReference/UI_Widgets/dxCheckBox/)

[tags]check box, checkBox, editor, overview