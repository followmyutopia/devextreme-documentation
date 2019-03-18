===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->undefined<!--/default-->
<!--inherits-->..\..\..\..\VizTimeInterval\VizTimeInterval.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Specifies the minimum length of the [visual range](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/).
<!--/shortDescription-->

<!--fullDescription-->
If the visual range is set on a numeric axis, assign a number to this option. If the axis displays date-time values, assign one of the accepted string values or an object to this option. The object should contain one or several fields described in this section, for example:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                // ...
                minVisualRangeLength: { weeks: 2 }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxo-argument-axis ... >
            <dxo-min-visual-range-length [weeks]="2"></dxo-min-visual-range-length>
        </dxo-argument-axis>
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

    <!-- tab: DxComponent.vue -->
    <template>
        <dx-chart ... >
            <dx-argument-axis ... >
                <dx-min-visual-range-length :weeks="2" />
            </dx-argument-axis>
        </dx-chart>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxChart, {
        DxArgumentAxis,
        DxMinVisualRangeLength
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxMinVisualRangeLength
        },
        data() {
            return {
                // ...
            }
        },
    }
    </script>

    <!-- tab: App.vue -->
    <template>
        <dx-component />
    </template>
    <script>
    import DxComponent from './components/DxComponent';

    export default {
        components: {
            DxComponent
        }
    }
    </script>

##### React

    <!-- tab: DxComponent.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    import Chart, {
        ArgumentAxis,
        MinVisualRangeLength
    } from 'devextreme-react/chart';

    class DxComponent extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis ... >
                        <MinVisualRangeLength weeks={2} />
                    </ArgumentAxis>
                </Chart>
            );
        }
    }
    export default DxComponent;

    <!-- tab: App.js -->
    import React, { Component } from 'react';
    import './App.css';
    import DxComponent from './DxComponent';

    class App extends Component {
        render() {
            return (
                <div>
                    <DxComponent />
                </div>
            );
        }
    }
    export default App;

---

When you use the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option via the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.

#####See Also#####
- [Visual and Whole Ranges](/Documentation/Guide/Widgets/Chart/Axes/Visual_and_Whole_Ranges/)
- [visualRangeUpdateMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#visualRangeUpdateMode)
- [zoomAndPan](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/)
<!--/fullDescription-->