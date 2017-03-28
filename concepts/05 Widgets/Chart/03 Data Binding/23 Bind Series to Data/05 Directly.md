To bind a series to data directly, specify which data source field provides arguments and which provides values. For this purpose, use the [argumentField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#argumentField) and [valueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#valueField) options of the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/) configuration object.

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
        { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
    ];

    $(function() {
        $("#chartContainer").dxChart({
            dataSource: fruitProduction,
            series: {
            	argumentField: 'fruit',
                valueField: 'year2014',
                name: '2014'
            }
        });
    });

Commonly, a chart contains several series, and many of them have the same argument field. In this case, you can assign the name of this field to the **argumentField** option of the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/) object.

    <!--JavaScript-->var fruitProduction = [
        { fruit: "Apples",  year2014: 84, year2015: 82, year2016: 90 },
        { fruit: "Oranges", year2014: 72, year2015: 70, year2016: 76 }
    ];

    $(function() {
        $("#chartContainer").dxChart({
            dataSource: fruitProduction,
            commonSeriesSettings: {
                argumentField: 'fruit'
            },
            series: [
                { valueField: 'year2014', name: '2014' },
                { valueField: 'year2015', name: '2015' },
                { valueField: 'year2016', name: '2016' }
            ]
        });
    });

The following series types need more than one value field or additional data fields.

- **[Bubble Series](/Documentation/Guide/Widgets/Chart/Series_Types/#Bubble)**      
Need one **argumentField**, one **valueField**, and one [sizeField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/#sizeField).

- **Financial Series: [Stock](/Documentation/Guide/Widgets/Chart/Series_Types/#Stock) and [Candle Stick](/Documentation/Guide/Widgets/Chart/Series_Types/#Candle_Stick)**       
Need one **argumentField** and four value fields: [openValueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/#openValueField), [closeValueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/#closeValueField), [highValueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/#highValueField) and [lowValueField](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/#lowValueField).

- **Range Series: [Range Area](/Documentation/Guide/Widgets/Chart/Series_Types/#Range_Area) and [Range Bar](/Documentation/Guide/Widgets/Chart/Series_Types/#Range_Bar)**      
Need one **argumentField** and two value fields: [rangeValue1Field](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/#rangeValue1Field) and [rangeValue2Field](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/#rangeValue2Field).

<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Bubble/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>Bubble Series Demo</a>
<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Stock/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>Financial Series Demo</a> 
<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/RangeBar/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>Range Series Demo</a> 

#####See Also#####
- [Update Data in the Chart](/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/)
