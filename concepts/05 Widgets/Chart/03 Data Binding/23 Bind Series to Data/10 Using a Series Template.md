To bind series to data using a series template, start with setting common options for all resulting series in the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) object. Particularly, make sure that you have set the [argumentField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#argumentField) and [valueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#valueField). 

[note]Certain series types need more than one value field or additional data fields to be specified. These series types are listed in the closing part of the [Bind Series to Data Directly](/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/#Directly) topic.

After that, use the **seriesTemplate** | [nameField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/seriesTemplate/#nameField) option to specify which data source field provides [names](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#name) for series.

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        { fruit: "Apples", year: 2015, produced: 82 },
        { fruit: "Apples", year: 2016, produced: 90 },
        { fruit: "Oranges", year: 2014, produced: 72 },
        { fruit: "Oranges", year: 2015, produced: 70 },
        { fruit: "Oranges", year: 2016, produced: 76 }
    ];

    $(function() {
        $("#chartContainer").dxChart({
            dataSource: fruitProduction,
            commonSeriesSettings: {
                argumentField: 'fruit',
                valueField: 'produced', // or other data fields
                type: 'bar'
            },
            seriesTemplate: {
                nameField: 'year'
            }
        });
    });

If you need to change options of a particular series, return an [object with them](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) from the **seriesTemplate** | [customizeSeries](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/seriesTemplate/#customizeSeries) function. This object will be merged with the **commonSeriesSettings** object. To identify a series, use the argument passed to this function.

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples", year: 2014, produced: 84 },
        // ...
    ];

    $(function() {
        $("#chartContainer").dxChart({
            dataSource: fruitProduction,
            commonSeriesSettings: {
                argumentField: 'fruit',
                valueField: 'produced',
                type: 'bar'
            },
            seriesTemplate: {
                nameField: 'year',
                customizeSeries: function(seriesName) {
                    // Changes the type of the series "2016" from the common "bar" to "line"
                    return seriesName == 2016 ? { type: 'line' } : { }
                }
            }
        });
    });

<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SeriesTemplates/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a> 

#####See Also#####
- [Update Data in the Chart](/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/)