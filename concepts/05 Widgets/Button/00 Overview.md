The **Button** widget is a simple button that performs specified commands when a user clicks it.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actions_and_lists-button-predefined_types"
}

The following code adds a simple **Button** to your page.

---
##### jQuery

    <!--HTML--><div id="buttonContainer"></div>

    <!--JavaScript-->$(function () {
        $("#buttonContainer").dxButton({
            text: "OK",
            onClick: function (e) { 
                DevExpress.ui.notify("The OK button was clicked");
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-button
        text="OK"
        (onClick)="okClicked($event)">
    </dx-button>

    <!--TypeScript-->
    import { DxButtonModule } from "devextreme-angular";
    import notify from "devextreme/ui/notify";
    // ...
    export class AppComponent {
        okClicked (e) {
            notify("The OK button was clicked")
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

    <template>
        <dx-button
            text="Click me"
            @click="okClicked" />
    </template>
    <script>
    import DxButton from "devextreme-vue/button";
    import notify from "devextreme/ui/notify";

    export default {
        components: {
            DxButton
        },
        methods: {
            okClicked: function(e) {
                notify("The OK button was clicked");
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import { Button } from 'devextreme-react/button';
    import notify from 'devextreme/ui/notify';

    class App extends React.Component {
        render() {
            return (
                <Button
                    text={'OK'}
                    onClick={this.okClicked}
                />
            );
        }

        okClicked(e) {
            notify('The OK button was clicked');
        }
    }

    export default App;


---

In the previous code, the [click](/Documentation/ApiReference/UI_Widgets/dxButton/Events/#click) event is handled using the [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) option. Alternatively, you can attach one or several handlers to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxButton/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var clickHandler1 = function (e) {
        // First handler of the "click" event
    };

    var clickHandler2 = function (e) {
        // Second handler of the "click" event
    };

    $("#buttonContainer").dxButton("instance")
        .on("click", clickHandler1)
        .on("click", clickHandler2);

The appearance of the **Button** is predefined by its [type](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#type). Find more on this and other properties that impact the widget appearance in the [Customize the Appearance](/Documentation/Guide/Widgets/Button/Customize_the_Appearance/) article.

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Button - Customize the Appearance](/Documentation/Guide/Widgets/Button/Customize_the_Appearance/)
- [Button - Validate and Submit an HTML form](/Documentation/Guide/Widgets/Button/Validate_and_Submit_an_HTML_Form/)
- [Button API Reference](/Documentation/ApiReference/UI_Widgets/dxButton/)

[tags]button, overview, click