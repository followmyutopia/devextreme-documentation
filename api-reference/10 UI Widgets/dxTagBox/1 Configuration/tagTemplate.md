<!--id-->dxTagBox.Options.tagTemplate<!--/id-->
===========================================================================
<!--default-->'tag'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for tags.
<!--/shortDescription-->

<!--fullDescription-->
This template replaces the default tag template. If you need to recreate the default tag appearance and specific template elements (such as the closing button) in your custom template, do so as follows:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#tagBoxContainer").dxTagBox({
            // ...
            tagTemplate: function(tagData) {
                return $("<div />")
                    .addClass("dx-tag-content")
                    .append(
                        $("<span />").text("TAG CONTENT"),
                        $("<div />").addClass("dx-tag-remove-button")
                    );
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tag-box ...
        tagTemplate="tagTemplate">
        <div *dxTemplate="let tagData of 'tagTemplate'" class="dx-tag-content">
            TAG CONTENT
            <div class="dx-tag-remove-button"></div>
        </div>
    </dx-tag-box>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTagBoxModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTagBoxModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-tag-box ...
            tag-template="tagTemplate">
            <div slot="tagTemplate" slot-scope="{ tagData }" class="dx-tag-content">
                TAG CONTENT
                <div class="dx-tag-remove-button"></div>
            </div>
        </dx-tag-box>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxTagBox from 'devextreme-vue/tag-box';

    export default {
        components: {
            DxTagBox
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import TagBox from 'devextreme-react/tag-box';

    class App extends React.Component {
        render() {
            return (
                <TagBox ...
                    tagRender={(tagData) =>
                        <div class="dx-tag-content">
                            TAG CONTENT
                            <div class="dx-tag-remove-button"></div>
                        </div>
                    }
                />
            );
        }
    }
    export default App;

---

#####See Also#####
- [Customize Item Appearance](/Documentation/Guide/Widgets/TagBox/Customize_Item_Appearance/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The current tag's data.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
#include common-ref-elementparam with { element: "tag" }
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->