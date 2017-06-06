In the form mode, a row becomes a form with editable fields in the editing state. A form field corresponds to a row's cell.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList Editing Form Mode](/Content/images/doc/17_2/treelist/editing/form_mode.png)

The **TreeList** uses the DevExtreme [Form](/Documentation/Guide/Widgets/Form/Overview/) widget as the form. You can customize individual form fields using the **columns[]** | [formItem](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#formItem) object whose members are described in the [Simple Item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/) section. Note that this object does not allow changing or configuring the editor (see [Customize Editors](/Documentation/Guide/Widgets/TreeList/Editing/#Customize_Editors)).

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowEditing: true,
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

The form contains only the editable fields, or "simple items" (as they are called in the **Form** widget) by default. The form can also contain group, tabbed, and empty items, which help you arrange simple items in different ways. Configure the items in the **editing** | **form** | **items** array as shown in the following code. The items with the specified **dataField** are simple items. Identical **dataFields** connect a simple item with a column.


    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                allowEditing: true,
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
                { dataField: "Title" },
                { dataField: "Position" },
                { dataField:"Email" },
                { dataField: "Skype" } 
            ]
        });
    });

See the topics in the [Organize Simple Items](/Documentation/Guide/Widgets/Form/Organize_Simple_Items) section for more information on organizing simple items on the form. You can also specify other options of the **Form** widget in the **editing** | **form** object to configure the editing form. Refer to the [Form Guides](/Documentation/Guide/Widgets/Form/) for more inforamtion.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/FormEditing/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>
