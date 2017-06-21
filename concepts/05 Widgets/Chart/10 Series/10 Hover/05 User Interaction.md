When a user pauses on a series, the series changes its style to the one specified by the following objects.

- **series** | [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/hoverStyle/)        
The hover style for an individual series.

- **commonSeriesSettings** | **%seriesType%** | **hoverStyle**                
The hover style for all series of a specific type ([line](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#line), [bar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/#bar), etc.).

- **commonSeriesSettings** | [hoverStyle](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/hoverStyle/)         
The hover style for all series in the **Chart**.

Note that individual settings override type-specific settings which, in turn, override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                hoverStyle: {
                    // high priority
                }
            },
            commonSeriesSettings: {
                bar: {
                    hoverStyle: {
                        // middle priority
                    }
                },
                hoverStyle: {
                    // low priority
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series ... >
            <dxo-hover-style>
                <!-- high priority -->
            </dxo-hover-style>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-hover-style>
                <!-- low priority -->
            </dxo-hover-style>
            <dxo-bar>
                <dxo-hover-style>
                    <!-- middle priority -->
                </dxo-hover-style>
            </dxo-bar>
        </dxo-common-series-settings>
    </dx-chart>

---

To choose which series elements should be highlighted when a user pauses on a series, specify the **hoverMode** option. Just like **hoverStyle**, this option can be specified for all series in the **Chart**, for all series of a specific type, or for an individual series. Note also that depending on the series type, the **hoverMode** option accepts different values. For information about them, visit the [Series Types](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/) section of the API reference, choose the employed series type, and refer to its **hoverMode** option description.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            commonSeriesSettings: {
                bar: {
                    hoverMode: 'allSeriesPoints' // or 'onlyPoint' | 'allArgumentPoints' | 'none'
                },
                line: {
                    hoverMode: 'includePoints' // or 'nearestPoint' | 'excludePoints' | 'none'
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-common-series-settings ... >
            <dxo-bar
                hoverMode="allSeriesPoints"> <!-- or 'onlyPoint' | 'allArgumentPoints' | 'none' -->
            </dxo-bar>
            <dxo-line
                hoverMode="includePoints"> <!-- or 'nearestPoint' | 'excludePoints' | 'none' -->
            </dxo-line>
        </dxo-common-series-settings>
    </dx-chart>

---

<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

#####See Also#####
- [Point Hover](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Hover_Handling/#Point_Hover)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)
