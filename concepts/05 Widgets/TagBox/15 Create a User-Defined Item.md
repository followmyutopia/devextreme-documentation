Besides selecting the existing values, a user can add new values to the **TagBox**. To enable this feature, assign *true* to the [acceptCustomValue](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#acceptCustomValue) option. Note that you should implement the [onCustomItemCreating](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onCustomItemCreating) handler to create a new entry to the data source.

    <!--HTML-->
    <div id="tagBoxContainer"></div>

<!---->

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
            var newItem = { id: nextId, firstName: e.text };
            // Adds the entry to the data source
            tagBoxData.store().insert(newItem);
            // Reloads the data source
            tagBoxData.reload();

            return newItem;
        }
    });

#####See Also#####
- [TagBox - Handle the Value Change Event](/Documentation/Guide/Widgets/TagBox/Handle_the_Value_Change_Event/)
- [TagBox - Enable Searching](/Documentation/Guide/Widgets/TagBox/Enable_Searching/)
- [TagBox - Control the Behavior](/Documentation/Guide/Widgets/TagBox/Control_the_Behavior/)
- [TagBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTagBox/)
- [TagBox Demo](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-tag_box-overview)

[tags]tagBox, tag box, editor, user-defined entry, user-defined item, custom entry, custom item, user-defined value, custom value