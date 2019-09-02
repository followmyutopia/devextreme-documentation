---
id: GridBaseColumn.editorOptions
type: Object
---
---
##### shortDescription
Configures the default widget used for [editing]({basewidgetpath}/Configuration/editing/) and filtering in the [filter row]({basewidgetpath}/Configuration/filterRow/).

---
The default editor widget depends on the column configuration. The following table illustrates the dependency:

<div class="simple-table">
  <table id="default-editors">
    <thead>
        <tr><th colspan="2">Column Configuration</th><th>Default Editor</th></tr>
    </thead>
    <tbody>
    <tr>
      <td rowspan="4"><a href="{basewidgetpath}/Configuration/columns/#dataType">dataType</a>:</td>
      <td>"date" <br> "datetime"</td>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/">DateBox</a></td>
    </tr>
    <tr>
      <td>"number"</td>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/">NumberBox</a></td>
    </tr>
    <tr>
      <td>"boolean"</td>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxCheckBox/Configuration/">CheckBox</a></td>
    </tr>
    <tr>
      <td>"string" <br> "object"</td>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/">TextBox</a></td>
    </tr>
    <tr>
      <td colspan="2"><a href="{basewidgetpath}/Configuration/columns/lookup/">lookup</a> is defined</td>
      <td><a href="/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/">SelectBox</a></td>
    </tr>
    </tbody>
  </table>
</div>

In the **editorOptions** object, you can specify the default widget's options (except **onValueChanged**, see below). Refer to the widget's API reference for a list of available options.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/Filtering/jQuery/Light/"
}

Other options that allow editor customization include:

- **columns[]**.[editCellTemplate]({basewidgetpath}/Configuration/columns/#editCellTemplate)         
Use it to replace the default editor.

- [onEditorPreparing]({basewidgetpath}/Configuration/#onEditorPreparing)         
Use it to:
    - Change the editor type.
    - Override the default editor's **onValueChanged** handler.
    - [Dynamically change editor options in the editing state](/Documentation/Guide/Widgets/DataGrid/How_To/Dynamically_Change_Editor_Options_in_the_Editing_State/).
    - Implement other customization cases.

#####See Also#####
- **columns[]**.[showEditorAlways]({basewidgetpath}/Configuration/columns/#showEditorAlways)

<style>
    #default-editors tbody {
      text-align: center;
    }
    #default-editors td {
      font-style: normal;
    }
</style>