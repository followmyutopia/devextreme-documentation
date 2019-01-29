Buttons are configured by objects that can contain custom fields and fields from the [default item template](/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Default_Item_Template/). For instance, the `fontStyles` array in the following code has four data objects with one default item template field ([`icon`](/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Default_Item_Template/#icon)) and one custom field (`style`) each.

[note] Default item templates allow you to control item appearance via data objects. Refer to the [Default Templates](/Documentation/Guide/Widgets/Common/Templates/#Default_Templates) article for more information.

Assign the array to the [items](/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#items) option and use the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#keyExpr) to specify `style` as the key field. We log the field's values into the console at a later step.

---
##### jQuery

    <!-- tab: index.js -->
    const fontStyles = [{
        icon: "bold",
        style: "bold"
    }, {
        icon: "italic",
        style: "italic"
    }, {
        icon: "underline",
        style: "underline"
    }, {
        icon: "strike",
        style: "strike"
    }];

    $(function() {
        $("#myButtonGroup").dxButtonGroup({
            items: fontStyles,
            keyExpr: "style",
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button-group
        [items]="fontStyles"
        keyExpr="style">
    </dx-button-group>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        fontStyles: Array<{ icon: string, style: string }> = [{
            icon: "bold",
            style: "bold"
        }, {
            icon: "italic",
            style: "italic"
        }, {
            icon: "underline",
            style: "underline"
        }, {
            icon: "strike",
            style: "strike"
        }];
    }

##### Vue

    <!-- tab: DxComponent.vue -->
    <template> 
        <dx-button-group
            :items="fontStyles"
            key-expr="style"
        />
    </template>

    <script>
    // ...
    const fontStyles = [{
        icon: "bold",
        style: "bold"
    }, {
        icon: "italic",
        style: "italic"
    }, {
        icon: "underline",
        style: "underline"
    }, {
        icon: "strike",
        style: "strike"
    }];

    export default {
        // ...
        data() {
            return {
                fontStyles
            }
        },
    }
    </script>

##### React

    <!-- tab: DxComponent.js -->
    // ...
    const fontStyles = [{
        icon: "bold",
        style: "bold"
    }, {
        icon: "italic",
        style: "italic"
    }, {
        icon: "underline",
        style: "underline"
    }, {
        icon: "strike",
        style: "strike"
    }];

    class DxComponent extends React.Component {
        render() {
            return (
                <ButtonGroup
                    items={fontStyles}
                    keyExpr="style"
                />
            );
        }
    }

    export default DxComponent;

##### ASP.NET MVC Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().ButtonGroup()
        .KeyExpr("style")
        .Items(items => {
            items.Add().Icon("bold").Option("style", "bold");
            items.Add().Icon("italic").Option("style", "italic");
            items.Add().Icon("underline").Option("style", "underline");
            items.Add().Icon("strike").Option("style", "strike");
        })
    )

---

If you run the code, you should see a **ButtonGroup** that contains four buttons but nothing happens when you click any of them.