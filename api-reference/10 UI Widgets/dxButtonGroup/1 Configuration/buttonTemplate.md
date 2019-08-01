<!--id-->dxButtonGroup.Options.buttonTemplate<!--/id-->
===========================================================================
<!--default-->'content'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a template for all the buttons in the group.
<!--/shortDescription-->

<!--fullDescription-->
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#buttonGroupContainer").dxButtonGroup({
            // ...
            buttonTemplate: function(itemData, $buttonContent) {
                $buttonContent.append(
                    // Custom jQuery elements go here
                )
                // ===== or =====
                return /* your markup goes here */
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button-group ... 
        itemTemplate="myTemplate">
        <div *dxTemplate="let buttonData of 'myTemplate'">
            <!-- your markup goes here -->
        </div>
    </dx-button-group>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxButtonGroupModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxButtonGroupModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-button-group ...
            item-template="myTemplate">
            <template #myTemplate="{ data }">
                <!-- your markup goes here -->
            </template>
      </dx-button-group>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxButtonGroup } from 'devextreme-vue';

    export default {
        components: {
            DxButtonGroup
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { ButtonGroup } from 'devextreme-react';

    class App extends React.Component {
        render() {
            return (
                <ButtonGroup ...
                    buttonRender={(data) =>
                        {/* your markup goes here */}
                    }
                />
            );
        }
    }

    export default App;

---
<!--/fullDescription-->
<!--typeFunctionParamName1-->buttonData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An object from the [items](/Documentation/ApiReference/UI_Widgets/dxButtonGroup/Configuration/#items) array, extended with the **icon** and **text** fields.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->buttonContent<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The button content's container.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->