Each series point can be accompanied with a label. These labels display data related to the point. It can be the point's argument, value or both. You can customize the label text, if it is required.

![PieChartSeriesPointLabels](/Content/images/doc/16_1/ChartJS/PieChartSeriesPointLabels.png)

By default, point labels are not displayed. To make them visible, set the **visible** option of the [label](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/) object to *true*.

    <!--JavaScript-->var pieChartOptions = {
        // ...
        series: {
            // ...
            label: {
                visible: true
            }
        }
    };

To change the default label settings, specify the required options within the **label** configuration object. Several of these options are categorized and listed below.

* **Arrangement**    
Use the [position](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#position) option to alter the point label location. In addition, you can change the distance between the labels and the chart using the [radialOffset](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#radialOffset) option and rotate the labels with the [rotationAngle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#rotationAngle) option.

* **Text Customization and Formatting**    
By default, labels show the point values without formatting. Set the [argumentFormat](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#argumentFormat) option to format the argument, and the [format](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#format) option to format the value. In case text customization is required, assign a function returning the text to be shown to the [customizeText](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#customizeText) option. Learn more in the [Data Formatting](/Documentation/Guide/Data_Visualization/Common/Data_Formatting/) topic.

* **Font Settings**    
To customize the appearance of the label text, define the font options within the [font](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/font/) configuration object.

* **Appearance**    
Paint the labels in a required color using the [backgroundColor](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#backgroundColor) option. To change the style of the label border, define the border settings within the [border](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/border/) configuration object. In addition, you can display labels with connectors. For this purpose, set the options within the [connector](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/connector/) object.
