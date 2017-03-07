<article data-show="Content/Applications/16_1/UIWidgets/dxResizable/markup.html,
        Content/Applications/16_1/UIWidgets/dxResizable/script.js,
        Content/Applications/16_1/UIWidgets/dxResizable/styles.css">

The [Resizable](/Documentation/ApiReference/UI_Widgets/dxResizable/) widget is a container element whose size can be changed by an end user.

The boundary sizes are specified using the [minHeight](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#minHeight), [minWidth](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#minWidth), [maxHeight](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#maxHeight) and [maxWidth](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#maxWidth) options.

    <!--JavaScript-->
    var resizableOptions = {
        minWidth: 200,
        maxWidth: 500,
        minHeight: 100,
        maxHeight: 500
    }

The current width and height can be accessed using the [height](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#width) options.

The [handles](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#handles) option enables you to specify which borders of the widget element are used as handles. This option accepts the "all", "top", "bottom", "left", "right" values. You can use several values separated by space.

    <!--JavaScript-->
    var resizableOptions = {
        handles: "left right bottom"
    }

If right and bottom borders are used as handles, a triangular handle is displayed at their junction.
</article>