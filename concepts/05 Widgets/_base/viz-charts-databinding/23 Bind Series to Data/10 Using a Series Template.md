To bind series to data using a series template, start with setting common options for all resulting series in the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/commonSeriesSettings/) object. Particularly, make sure that you have set the [argumentField](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/commonSeriesSettings/#argumentField) and [valueField](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/commonSeriesSettings/#valueField). 

#if Chart

[note]Certain series types need more than one value field or additional data fields to be specified. These series types are listed in the closing part of the [Bind Series to Data Directly](/Documentation/Guide/Widgets/{WidgetName}/Data_Binding/Bind_Series_to_Data/#Directly) topic.

#endif

After that, use the **seriesTemplate**.[nameField](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/seriesTemplate/#nameField) option to specify which data source field provides [names](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/series/#name) for series.

---
##### jQuery

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        { fruit: "Apples", year: 2015, produced: 82 },
        { fruit: "Apples", year: 2016, produced: 90 },
        { fruit: "Oranges", year: 2014, produced: 72 },
        { fruit: "Oranges", year: 2015, produced: 70 },
        { fruit: "Oranges", year: 2016, produced: 76 }
    ];

    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: fruitProduction,
            commonSeriesSettings: {
                argumentField: 'fruit',
                valueField: 'produced' // or other data fields
            },
            seriesTemplate: {
                nameField: 'year'
            }
        });
    });

##### Angular

    <!--HTML--><dx-{widget-name} [dataSource]="fruitProduction">
        <dxo-common-series-settings
            argumentField="fruit"
            valueField="produced">
        </dxo-common-series-settings>
        <dxo-series-template nameField="year"></dxo-series-template>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        fruitProduction = [
            { fruit: "Apples", year: 2014, produced: 84 },
            { fruit: "Apples", year: 2015, produced: 82 },
            { fruit: "Apples", year: 2016, produced: 90 },
            { fruit: "Oranges", year: 2014, produced: 72 },
            { fruit: "Oranges", year: 2015, produced: 70 },
            { fruit: "Oranges", year: 2016, produced: 76 }
        ];
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---

If you need to change options of a particular series, return an [object with them](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/series/) from the **seriesTemplate**.[customizeSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/seriesTemplate/#customizeSeries) function. This object will be merged with the **commonSeriesSettings** object. To identify a series, use the argument passed to the function.

---
##### jQuery

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        // ...
    ];

    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: fruitProduction,
            commonSeriesSettings: {
                argumentField: 'fruit',
                valueField: 'produced'
            },
            seriesTemplate: {
                nameField: 'year',
                customizeSeries: function(seriesName) {
                    // Colors the series "2016" in blue
                    return seriesName == 2016 ? { color: 'blue' } : { }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-{widget-name} [dataSource]="fruitProduction">
        <dxo-common-series-settings
            argumentField="fruit"
            valueField="produced">
        </dxo-common-series-settings>
        <dxo-series-template
            nameField="year"
            [customizeSeries]="customizeSeries">
        </dxo-series-template>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        fruitProduction = [
            { fruit: "Apples", year: 2014, produced: 84 },
            // ...
        ];
        customizeSeries(seriesName: string) {
            // Colors the series "2016" in blue
            return seriesName == 2016 ? { color: 'blue' } : { }
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---

#if Chart

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/SeriesTemplates/jQuery/Light/"
} 

#endif

#####See Also#####
- [Update Data in the {WidgetName}](/Documentation/Guide/Widgets/{WidgetName}/Data_Binding/Update_Data/)