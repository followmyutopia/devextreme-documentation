If none of the available editors suit your requirements, you can define a custom one or even place anything you find useful instead. For this purpose, implement a custom template and pass it to the [template](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template) option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                picture: "https://js.devexpress.com/Content/images/doc/18_2/PhoneJS/person2.png"
            },
            items: [{ 
                dataField: "name",
                template: function (data, itemElement) {
                    itemElement.append("<div id='textAreaContainer'>")
                               .dxTextArea({
                                   value: data.component.option('formData')[data.dataField],
                                   onValueChanged: function(e) {
                                       data.component.updateData(data.dataField, e.value);
                                   }
                               });
                }
            }, {
                dataField: "picture",
                template: function (data, itemElement) {
                    itemElement.append("<img src='" + data.editorOptions.value + "'>");
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item 
            dataField="name"
            [template]="'nameTemplate'"></dxi-item>
        <dxi-item 
            dataField="picture" 
            [template]="'pictureTemplate'">
        </dxi-item>
        <div *dxTemplate="let data of 'nameTemplate'">
            <dx-text-area [(value)]="data.component.option('formData')[data.dataField]"></dx-text-area>
        </div>
        <div *dxTemplate="let data of 'pictureTemplate'">
            <img src="{{data.editorOptions.value}}">
        </div>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            picture: "https://js.devexpress.com/Content/images/doc/18_2/PhoneJS/person2.png"
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

A simple item can be accompanied by a line of text that gives a hint, for example, of the values that this item accepts. To specify this text, use the [helpText](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#helpText) option. If filling an item is required, assign **true** to its [isRequired](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#isRequired) option. In this case, a special mark appears near the item. For more information, see the [Additional Marks](/Documentation/Guide/Widgets/Form/Configure_Item_Labels/Additional_Marks/) topic.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                name: "John Heart",
                phone: "+1(360)684-1334"
            },
            items: [{ 
                dataField: "name",
                isRequired: true
            }, {
                dataField: "phone",
                helpText: "Example: +1(111)111-1111"
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee">
        <dxi-item dataField="name" [isRequired]="true"></dxi-item>
        <dxi-item dataField="phone" helpText="Example: +1(111)111-1111"></dxi-item>
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            name: "John Heart",
            phone: "+1(360)684-1334"
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

You can modify automatically generated items using the [customizeItem](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#customizeItem) function. This function is called for each item before it is rendered. To access the item, use the function's parameter. Its structure mirrors the [Simple Item](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/) structure, therefore, you can modify any option available for a simple item.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            formData: {
                firstName: "John",
                lastName: "Heart",
                email: "jheart@dx-email.com",
                phone: "+1(213) 555-9392"
            },
            customizeItem: function (item) {
                if (item.itemType == "simple") {
                    item.label = {
                        location: "top"
                    };
                    if (item.dataField === "email" || item.dataField === "phone") {
                        item.colSpan = 3;
                    }
                    if (item.dataField === "phone") {
                        item.helpText = "Example: +1 (111) 111-1111";
                    }
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-form
        [(formData)]="employee"
        [customizeItem]="form_customizeItem">
    </dx-form>

    <!--TypeScript-->
    import { DxFormModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        employee = {
            firstName: "John",
            lastName: "Heart",
            email: "jheart@dx-email.com",
            phone: "+1(213) 555-9392"
        }
        form_customizeItem (item) {
            if (item.itemType == "simple") {
                item.label = {
                    location: "top"
                };
                if (item.dataField === "email" || item.dataField === "phone") {
                    item.colSpan = 3;
                }
                if (item.dataField === "phone") {
                    item.helpText = "Example: +1 (111) 111-1111";
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFormModule
        ],
        // ...
    })

---

[note]The **customizeItem** function is called for each item including [group](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/), [tabbed](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/TabbedItem/) and [empty](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/EmptyItem/) items, although such items can be declared only in the [items](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items) array, and there is no need to customize them afterwards. Therefore, we recommend you to check the [itemType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#itemType) option to ensure that the item you are going to customize is indeed a simple item.

#####See Also#####
- [Form - Organize Simple Items in Groups](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/)
- [Form - Organize Simple Items in Tabs](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Tabs/)
- [Form - Organize Simple Items in Columns](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Columns/)
- [Form - Add an Empty Space Between Simple Items](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/Add_an_Empty_Space/)
- [Form - Configure Item Labels](/Documentation/Guide/Widgets/Form/Configure_Item_Labels/Location_and_Alignment/)
- [Form Demos](/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-customize_item)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)
