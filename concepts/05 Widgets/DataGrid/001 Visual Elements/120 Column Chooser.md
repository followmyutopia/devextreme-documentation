In **DataGrid**, a user may be capable of altering the set of presented columns at runtime. This capability is provided by a grid element called "column chooser". A column chooser is a panel that contains column headers. It can be invoked by a click on <img src="/Content/images/doc/17_2/DataGrid/icons/columnChooser.png" alt="DevExtreme DataGrid ColumnChooser" style="vertical-align:middle"/>.

The column chooser has two modes defining how the user chooses columns. In the *"dragAndDrop"* mode, the user moves column headers to/from the column chooser by drag-and-drop. When in this mode, the column chooser contains the headers of [hidden](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible) columns only.

In the *"select"* mode, the user selects check boxes in the column chooser to show specific columns. This mode is preferable if you display **DataGrid** on a touch-enabled device.

By default, the column chooser is in the *"dragAndDrop"* mode. To change this, use the [mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/#mode) option of the **columnChooser** object.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
        columnChooser: {
            mode: 'select' // 'dragAndDrop'
        }
    });

To note the difference between these modes in action, see the example at the end of this subtopic.

The [columnChooser](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/) object also configures the appearance of the column chooser. The following features can be changed using the properties of this object.

* **Availability**		
By default, a user cannot invoke the column chooser, because its [enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/#enabled) property is set to *false*. To enable it, set this property to *true*.

* **Size**		
You can change the size of the column chooser panel using the [height](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/#width) properties.

* **Texts**		
If you are not satisfied with the text displayed in the title of the column chooser, change it using the [title](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/#title) property. In addition, you can change the text displayed by the column chooser panel when it's empty. For this purpose, use the [emptyPanelText](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/#emptyPanelText) property.