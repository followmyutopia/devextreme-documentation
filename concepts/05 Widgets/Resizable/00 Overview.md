The **Resizable** widget enables its content to be resizable in the UI.

The following code adds a resizable image to your page. Note that the image occupies 100% of the **Resizable** widget.

    <!--HTML--><div id="resizable">
        <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    </div>

    <!--JavaScript-->$(function() {
        $("#resizable").dxResizable({
            width: 200,
            height: 200,
            minWidth: 30,
            minHeight: 30,
            maxWidth: 500,
            maxHeight: 500 
        });
    });

    <!--CSS-->#image {
        height: 100%;
        width: 100%
    }

[note]We recommend specifying the width- and height-related options of the **Resizable**, because the content usually takes them into account.

To specify which sides of the **Resizable** - top, bottom, left, right or all at once - can be used for resizing content, set the [handles](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#handles) option. Note that this option can accept several values separated with space.

    <!--JavaScript-->$(function() {
        $("#resizable").dxResizable({
            // ...
            handles: "left right"
        });
    });

If the **Resizable** widget contains other widgets, make sure that it is instantiated _before_ the widgets. For example, the following code creates a resizable [Chart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/). Note that the **Resizable** goes _before_ the **Chart** in the JavaScript code, and that makes the **Resizable** instantiated before the **Chart**.

    <!--HTML--><div id="resizable">
        <div id="chart"></div>
    </div>

    <!--JavaScript-->$(function() {
        $("#resizable").dxResizable({
            height: 400,
            width: 700,
            maxHeight: 500,
            maxWidth: 900,
            minHeight: 200,
            minWidth: 400,
            onResizeEnd: function (e) {
                $("#chart").dxChart("render");
            }
        });

        $("#chart").dxChart({
            dataSource: [
                { arg: 'Oranges', val: 10 },
                { arg: 'Apples', val: 15 },
                { arg: 'Bananas', val: 9 }
            ],
            series: { type: "bar" }
        });
    });

    <!--CSS-->#chart {
        height: 100%;
        width: 100%
    }

In the previous code, the handler of the [resizeEnd](/Documentation/ApiReference/UI_Widgets/dxResizable/Events/#resizeEnd) event contains commands that [rerender](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#render) the **Chart**. That is because the **Chart** cannot track changes in the size of its container, and therefore, cannot be resized automatically each time such a change occurs. Apply this technique each time the content of the **Resizable** needs to be resized manually.

In addition to the **resizeEnd** event, the **Resizable** widget fires the [resizeStart](/Documentation/ApiReference/UI_Widgets/dxResizable/Events/#resizeStart) and [resize](/Documentation/ApiReference/UI_Widgets/dxResizable/Events/#resize) events. They also can be handled to resize the content of the **Resizable** widget.

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Resizable API Reference](/Documentation/ApiReference/UI_Widgets/dxResizable/)

[tags]resizable, overview, resize a widget, resize