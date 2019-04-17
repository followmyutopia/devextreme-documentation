===========================================================================
<!--type-->Array<dxChartAnnotationConfig, Object><!--/type-->
<!--inherits-->..\commonAnnotationSettings\commonAnnotationSettings.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Specifies the annotation collection.
<!--/shortDescription-->

<!--fullDescription-->
Annotations are images and text blocks that provide additional information on the visualized data. The image below demonstrates their appearance:

![DevExtreme Chart: Annotations](/Content/images/doc/19_1/ChartJS/visual_elements/annotations.png)

To configure annotations, assign an array of objects to the **annotations[]** option. Each object should have the [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#type) field set to *"text"* or *"image"*. Depending on the **type**, specify the annotation's [text](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#text) or [image](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/image/) option:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("chartContainer").dxChart({
            annotations: [{
                type: "text",
                text: "Annotation text"
            }, {
                type: "image",
                image: "http://image/url/myimage.png"
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxi-annotation
            type="text"
            text="Annotation text">
        </dxi-annotation>
        <dxi-annotation
            type="image"
            image="http://image/url/myimage.png">
        </dxi-annotation>
    </dx-chart>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxChartModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxChartModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-chart ... >
            <dx-annotation
                type="text"
                text="Annotation text"
            />
            <dx-annotation
                type="image"
                image="http://image/url/myimage.png"
            />
        </dx-chart>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxChart, {
        DxAnnotation
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxAnnotation
        },
        data() {
            // ...
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Chart, {
        Annotation
    } from 'devextreme-react/chart';


    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Annotation
                        type="text"
                        text="Annotation text"
                    />
                    <Annotation
                        type="image"
                        image="http://image/url/myimage.png"
                    />
                </Chart>
            );
        }
    }

    export default App;

---

Annotations can be unattached or anchored to a chart element. The following list shows how to position them. Chart coordinates ([argument](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#argument), [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#value), [axis](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#axis), [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#series)) specify the element that the annotation's arrow points to; pixel coordinates ([x](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#x) and [y](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#y)) specify the position of the annotation's center.

- **Unanchored annotation**

        annotations: [{
            x: 100,
            y: 200
        }]

- **Annotation anchored to a chart coordinate**

        annotations: [{
            argument: new Date(2019, 1, 16),
            value: 15,
            axis: "Value axis 2" // in a chart with multiple value axes
        }]

- **Annotation anchored to a series point**

        annotations: [{
            argument: new Date(2019, 1, 16),
            series: "Series 1"
        }]

- **Annotation displayed on an axis**

        annotations: [{ 
            // An annotation on the argument axis 
            argument: new Date(2019, 1, 16)
        }, { 
            // An annotation on the value axis 
            value: 15,  
            axis: "Value axis 2" // in a chart with multiple value axes
        }]

- **Mixed anchoring (pixel and chart coordinates used simultaneously)**

        annotations: [{
            argument: new Date(2019, 1, 16),
            y: 200
        }]

When a user long-presses an annotation or hovers the mouse pointer over it, the **Chart** displays a [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/annotations/#tooltipEnabled).

Objects in the **annotations[]** array configure individual annotations. To specify options common for all annotations, use the [commonAnnotationSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonAnnotationSettings/) object. Individual settings take precedence over common settings.

#####See Also#####
- [customizeAnnotation](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#customizeAnnotation)
<!--/fullDescription-->