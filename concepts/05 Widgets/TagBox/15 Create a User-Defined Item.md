A user can select existing values and add new values to the **TagBox**. To enable this feature, assign **true** to the [acceptCustomValue](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#acceptCustomValue) option. Note that you should implement the [onCustomItemCreating](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onCustomItemCreating) handler to create a new data source entry.

---
#####jQuery

    <!--HTML-->
    <div id="tagBoxContainer"></div>

    <!--JavaScript-->
    var tagBoxData = new DevExpress.data.DataSource({
    	store: [
            { id: 1, firstName: "Andrew" },
            { id: 2, firstName: "Nancy" },
            { id: 3, firstName: "Steven" }
        ]
    });

    $("#tagBoxContainer").dxTagBox({
        dataSource: tagBoxData,
        valueExpr: 'id',
        displayExpr: 'firstName',
        acceptCustomValue: true,
        onCustomItemCreating: function(e){
            // Generates a new 'id'
            var nextId = Math.max.apply(Math, tagBoxData.items().map(function(c) { return c.id; })) + 1;
            // Creates a new entry
            e.customItem = { id: nextId, firstName: e.text };
            // Adds the entry to the data source
            tagBoxData.store().insert(e.customItem);
            // Reloads the data source
            tagBoxData.reload();
        }
    });


#####Angular

    <!--TypeScript-->
    import DataSource from "devextreme/data/data_source";
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        tagBoxData: DataSource = new DataSource({
            store: [
                { id: 1, firstName: "Andrew" },
                { id: 2, firstName: "Nancy" },
                { id: 3, firstName: "Steven" }
            ]
        });
        onCustomItemCreating (e) {
            // Generates a new 'id'
            let nextId = Math.max.apply(Math, this.tagBoxData.items().map(function(c) { return c.id; })) + 1;
            // Creates a new entry
            e.customItem = { id: nextId, firstName: e.text };
            // Adds the entry to the data source
            this.tagBoxData.store().insert(e.customItem);
            // Reloads the data source
            this.tagBoxData.reload();
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-tag-box
        [dataSource]="tagBoxData"
        valueExpr="id"
        displayExpr="firstName"
        [acceptCustomValue]="true"
        (onCustomItemCreating)="onCustomItemCreating($event)">
    </dx-tag-box>

---

#####See Also#####
- [TagBox - Handle the Value Change Event](/Documentation/Guide/Widgets/TagBox/Handle_the_Value_Change_Event/)
- [TagBox - Configure Search Parameters](/Documentation/Guide/Widgets/TagBox/Configure_Search_Parameters/)
- [TagBox - Control the Behavior](/Documentation/Guide/Widgets/TagBox/Control_the_Behavior/)
- [TagBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTagBox/)
- [TagBox Demos](/Demos/WidgetsGallery/#demo/editors-tag_box-overview)

[tags]tagBox, tag box, editor, user-defined entry, user-defined item, custom entry, custom item, user-defined value, custom value
