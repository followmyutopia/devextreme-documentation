The **Button** widget provides five predefined appearances controlled by the [type](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#type) option. The **type** can be *"normal"*, *"default"*, *"back"*, *"danger"* or *"success"*. Choose the proper type depending on the commands that the **Button** performs.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            type: "default", // or "normal" | "back" | "danger" | "success"
            text: "Delete",
            onClick: function (e) {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-button
        text="Delete"
        (onClick)="foo($event)"
        type="default"> <!-- or "normal" | "back" | "danger" | "success" -->
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        foo (e) {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!--HTML-->
    <dx-button
        text="Click me"
        @click="foo"
        type="default" /> <!-- or "normal" | "back" | "danger" | "success" -->

    <!--TypeScript-->
    import DxButton from "devextreme-vue/button";

    export default {
        components: {
            DxButton
        },
        methods: {
            foo: function(e) {
                // ...
            }
        }
    }

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/jQuery/Light/"
}

Apart from plain text, the **Button** can display an icon. DevExtreme provides [built-in icons](/Documentation/Guide/Themes/Icon_Library/) that change their appearance depending on the platform. Certainly, you can [use an external icon library](/Documentation/Guide/Themes/Icon_Library/#Use_External_Icon_Libraries) or even [standalone icons](/Documentation/Guide/Themes/Icon_Library/#Alternative_to_the_Icon_Library). To specify the icon, set the [icon](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#icon) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            type: "danger",
            text: "Delete",
            icon: "remove",
            onClick: function (e) {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-button
        text="Delete"
        (onClick)="foo($event)"
        type="danger"
        icon="remove">
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        foo (e) {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!--HTML-->
    <dx-button
        text="Delete"
        @click="foo"
        type="danger"
        icon="remove" />

    <!--TypeScript-->
    import DxButton from "devextreme-vue/button";

    export default {
        components: {
            DxButton
        },
        methods: {
            foo: function(e) {
                // ...
            }
        }
    }

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Button/Icons/jQuery/Light/"
}

If you need to define the **Button** content completely, implement a template for it using the [template](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#template) option as shown in the following example.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#buttonContainer").dxButton({
            text: "Refresh",
            template: function (e) {
                return $("<i />").text(e.buttonData.text)
                                 .css("color", "green");
            },
            onClick: function (e) {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-button
        text="Refresh"
        (onClick)="foo($event)"
        [template]="'buttonTemplate'">
        <i *dxTemplate="let buttonData of 'buttonTemplate'" style="color:green">
            {{buttonData.text}}
        </i> 
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        foo (e) {
            // ...
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <!--HTML-->
    <dx-button
        text="Refresh"
        @click="foo"
        template="buttonTemplate">
        <i
            slot="buttonTemplate"
            slot-scope="buttonData"
            style="color: green">
            {{ buttonData.text }}
        </i>
    </dx-button>

    <!--TypeScript-->
    import DxButton from "devextreme-vue/button";

    export default {
        components: {
            DxButton
        },
        methods: {
            foo: function(e) {
                // ...
            }
        }
    }

---
    
#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [Button API Reference](/Documentation/ApiReference/UI_Widgets/dxButton/)

[tags]button, appearance, customize, templates, type, icon