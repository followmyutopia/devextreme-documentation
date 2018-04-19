Bars in the **Stacked Bar** series are vertical by default. Change them to horizontal by setting the [rotated](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated) option to **true**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            rotated: true
        });
    });

##### Angular

    <!--HTML--><dx-chart ...
        [rotated]="true">
    </dx-chart>

---

#####See Also#####
- [Rotate and Invert the Chart](/Documentation/Guide/Widgets/Chart/Rotate_and_Invert_the_Chart/)
