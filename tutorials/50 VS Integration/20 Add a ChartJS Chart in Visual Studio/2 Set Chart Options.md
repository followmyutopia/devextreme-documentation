<article>

To configure a **Chart** widget, specify the required options in its configuration object. 

To customize the text shown by tooltips so that they display the percentage of a point's value, specify the **customizeText** option within the **tooltip** configuration object within the widget's configuration object.
  
    <!--HTML--><div style="height: 300px;" data-bind="dxChart:{
        //...
        tooltip:{
            'enabled':true,
            'format': {
                'percentPrecision': 2
            },
            'customizeText': function (value) {
                return value.percentText;
            }
        },
        //...
    }"></div>

To display labels connected to their points, define the **label** object within the **commonSeriesSettings** object within the widget's configuration object. Specify the **connector** option within the **label** object.

    <!--HTML--><div style="height: 300px;" data-bind="dxChart:{
        //...
        commonSeriesSettings: { 
            //...
            'label': {
                'visible': true,
                'connector': {
                    'visible': true
                }
            }
        //...
    }"></div>      
  

<div class="simulator-desktop-container" data-view="/Content/Applications/16_1/LearningCenter/ChartLessons/chart.html, /Content/Applications/16_1/LearningCenter/ChartLessons/DevExtremeFullCode.js"></div>
</article>