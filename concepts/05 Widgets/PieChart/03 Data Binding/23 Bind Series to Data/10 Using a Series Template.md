To bind series to data using a series template, start with setting common options for all resulting series in the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/) object. Particularly, make sure that you have set the [argumentField](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/#argumentField) and [valueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonSeriesSettings/#valueField). 

After that, use the **seriesTemplate**.[nameField](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/seriesTemplate/#nameField) option to specify which data source field provides [names](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/#name) for series.

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
        $("#pieChartContainer").dxPieChart({
            dataSource: fruitProduction,
            commonSeriesSettings: {
                argumentField: 'fruit',
                valueField: 'produced'
            },
            seriesTemplate: {
                nameField: 'year'
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart [dataSource]="fruitProduction">
        <dxo-common-series-settings
            argumentField="fruit"
            valueField="produced">
        </dxo-common-series-settings>
        <dxo-series-template
            nameField="year">
        </dxo-series-template>
    </dx-pie-chart>

    <!--TypeScript-->
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

---

If you need to change options of a particular series, return an [object with them](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/) from the **seriesTemplate**.[customizeSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/seriesTemplate/#customizeSeries) function. This object will be merged with the **commonSeriesSettings** object. To identify a series, use the argument passed to the function.

---
##### jQuery

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        // ...
    ];

    $(function() {
        $("#pieChartContainer").dxPieChart({
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

    <!--HTML--><dx-pie-chart [dataSource]="fruitProduction">
        <dxo-common-series-settings
            argumentField="fruit"
            valueField="produced">
        </dxo-common-series-settings>
        <dxo-series-template
            nameField="year"
            [customizeSeries]="customizeSeries">
        </dxo-series-template>
    </dx-pie-chart>

    <!--TypeScript-->
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

---

#####See Also#####
- [Update Data in the PieChart](/Documentation/Guide/Widgets/PieChart/Data_Binding/Update_Data/)