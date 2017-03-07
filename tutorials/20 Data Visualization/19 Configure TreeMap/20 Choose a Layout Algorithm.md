<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_1/DataVisualization/Lessons/ConfigureTreeMap/Step4/treemap.html" data-show-first="treemap.js">

Layout algorithms determine the position and size of tiles and groups. Therefore, the chosen algorithm plays the definitive role in the resulting look of the widget. **TreeMap** provides the following algorithms out-of-the-box: "Squarified", "Strip" and "Slice and Dice". See the [layoutAlgorithm](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#layoutAlgorithm) option description for further information about these algorithms. Use the same option to specify the needed algorithm or implement a custom one. Also, you can change the direction in which the items will be laid out. For this purpose, use the [layoutDirection](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#layoutDirection) option.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        layoutAlgorithm: 'squarified', // 'strip' or 'sliceanddice'
        layoutDirection: 'leftTopRightBottom', // 'leftBottomRightTop', 'rightTopLeftBottom' or 'rightBottomLeftTop'
    };

This tutorial uses the default algorithm - *"'squarified'* - and direction - *'leftTopRightBottom'*. However, you can try to change them in the code playground below. Otherwise, move to the next step where you will learn different ways to colorize tiles.
</article>