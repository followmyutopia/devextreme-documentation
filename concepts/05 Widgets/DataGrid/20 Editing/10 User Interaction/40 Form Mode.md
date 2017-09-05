In the form mode, a row becomes a form with editable fields in the editing state. A form field corresponds to a row's cell.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget DataGrid Editing Form Mode](/Content/images/doc/17_1/DataGrid/editing/form_mode.png)

The **DataGrid** uses the DevExtreme [Form](/Documentation/Guide/Widgets/Form/Overview/) widget as the form. You can customize individual form fields using the **columns[]**.[formItem](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#formItem) object whose members are described in the [Simple Item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/) section. Note that this object does not allow changing or configuring the editor (see [Customize Editors](/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors)).

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true,
                mode: "form"
            },
            columns: [{
                dataField: "Full_Name",
                formItem: {
                    colSpan: 2,
                    label: {
                        location: "top"
                    }
                }
            },
            // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing
            [allowUpdating]="true"
            mode="form">
        </dxo-editing>
        <dxi-column dataField="Full_Name">
            <dxo-form-item [colSpan]="2">
                <dxo-label location="top"></dxo-label>
            </dxo-form-item>
        </dxi-column>
    </dx-data-grid>
    
---

The form contains only the editable fields, or "simple items" (as they are called in the **Form** widget) by default. The form can also contain group, tabbed, and empty items, which help you arrange simple items in different ways. Configure the items in the **editing**.**form**.**items** array as shown in the following code. The items with the specified **dataField** are simple items. Identical **dataFields** connect a simple item with a column.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            editing: {
                allowUpdating: true,
                mode: "form",
                form: {
                    items: [{
                        itemType: "group",
                        caption: "Personal Data",
                        items: [
                            { dataField: "Full_Name" },
                            { dataField: "Prefix" },
                            { dataField: "Position" }
                        ]
                        // or just
                        // items: ["Full_Name", "Prefix", "Position"]
                    }, {
                        itemType: "group",
                        caption: "Contacts",
                        items: ["Email", "Skype"]
                    }]
                }
            },
            columns: [ 
                { dataField: "Full_Name" }, 
                { dataField: "Prefix" },
                { dataField: "Position" },
                { dataField: "Email" },
                { dataField: "Skype" } 
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-editing
            [allowUpdating]="true"
            mode="form">
            <dxo-form>
                <dxi-item itemType="group" caption="Personal Data">
                    <dxi-item dataField="Full_Name"></dxi-item>
                    <dxi-item dataField="Prefix"></dxi-item>
                    <dxi-item dataField="Position"></dxi-item>
                </dxi-item>
                <dxi-item itemType="group" caption="Contacts">
                    <dxi-item dataField="Email"></dxi-item>
                    <dxi-item dataField="Skype"></dxi-item>
                </dxi-item>
            </dxo-form>
        </dxo-editing>
        <dxi-column dataField="Full_Name"></dxi-column>
        <dxi-column dataField="Prefix"></dxi-column>
        <dxi-column dataField="Position"></dxi-column>
        <dxi-column dataField="Email"></dxi-column>
        <dxi-column dataField="Skype"></dxi-column>
    </dx-data-grid>
    
---

See the topics in the [Organize Simple Items](/Documentation/Guide/Widgets/Form/Organize_Simple_Items) section for more information on organizing simple items on the form. You can also specify other **Form** widget options in the **editing**.**form** object to configure the editing form. Refer to the [Form Guides](/Documentation/Guide/Widgets/Form/) for more information.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/FormEditing/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>
