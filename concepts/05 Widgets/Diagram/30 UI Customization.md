


The **Diagram** widget allows you to customize its UI elements with the following options.

- The [toolbar](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/toolbar/toolbar.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/toolbar/') option controls toolbar visibility and specifies a set of available commands.
- The [toolbox](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/toolbox/toolbox.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/toolbox/') option controls element visibility, and specifies the groups and shapes visible in the toolbox.
- The [propertiesPanel](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/propertiesPanel/propertiesPanel.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/propertiesPanel/') option contains settings of the Properties panel.
- The [contextMenu](/api-reference/10%20UI%20Widgets/dxDiagram/1%20Configuration/contextMenu/contextMenu.md '/Documentation/ApiReference/UI_Widgets/dxDiagram/Configuration/contextMenu/') option controls the context menu availability and specifies the visible commands.

![Diagram control data toolbox](Content/images/doc/20_1/diagram/ui-customization.png)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Diagram/UICustomization/"
}


        <!--JavaScript-->
        $(function() {
            $("#diagram").dxDiagram({
               contextMenu: {
                     enabled: true,
                     commands: ["bringToFront","sendToBack", "lock", "unlock"]
               },
               propertiesPanel: {
                     enabled: true,
                     collapsible: false,
                     groups: [
                        { commands: ["units"] },
                        { commands: ["pageSize","pageOrientation","pageColor"] }
                     ]
               },
               toolbar: {
                     visible: true,
                     commands: ["undo","redo","separator","fontName","fontSize","separator","bold","italic","underline","separator",
                        "fontColor","lineColor","fillColor","separator"]
               },
               toolbox: {
                     visible: true,
                     groups: [
                        "general", { category: "flowchart", title: "Flowchart", expanded: true }
                     ]
               }     
            });
        });