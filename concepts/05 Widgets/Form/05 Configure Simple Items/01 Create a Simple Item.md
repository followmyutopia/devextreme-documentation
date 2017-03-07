By default, the **Form** generates a simple item for each field of the [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) object. In case you need to create items for specific fields only, add the names of these fields to the [items](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items) array. 

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                position: "CEO",
                officeNo: 901
            },
            items: ["firstName", "lastName", "position"]
        });
    });

A simple form item is a label-editor pair. The label is the field name that undergoes a slight conversion, for example, the field name *"firstName"* becomes the *"First Name"* label. For more information on configuring labels, visit the [Configure Item Labels](/Documentation/Guide/Widgets/Form/Configure_Item_Labels/Location_and_Alignment/) section.

The editor that will be used in a particular simple item depends on the type of data that its field contains. However, you can force an item to use an editor of your choice. For this purpose, specify the item's [editorType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType) option. To configure the editor, use the [editorOptions](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorOptions) object. Note that you also need to specify the [dataField](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#dataField) option to bind the item to a **formData** field.

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                hireDate: new Date(2012, 04, 13),
                notes: "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003."
            },
            items: [ "name", {
                dataField: "hireDate",
                editorType: "dxCalendar",
                editorOptions: {
                    value: new Date()
                }
            }, {
                dataField: "notes",
                editorType: "dxTextArea",
                editorOptions: {
                    placeholder: "Add notes..."
                }
            }]
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/CustomizeItem/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>