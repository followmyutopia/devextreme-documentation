Besides selecting the existing values, a user can add new values to the **SelectBox**. To enable this feature, assign *true* to the [acceptCustomValue](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#acceptCustomValue) option. Note that you should implement the [onCustomItemCreating](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#onCustomItemCreating) handler to create a new entry to the data source.

    <!--HTML-->
    <div id="selectBoxContainer"></div>

    <!--JavaScript-->var selectBoxData = new DevExpress.data.DataSource({
    	store: [
            { id: 1, firstName: "Andrew" },
            { id: 2, firstName: "Nancy" },
            { id: 3, firstName: "Steven" }
        ]
    });

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'firstName',
            acceptCustomValue: true,
            onCustomItemCreating: function(e) {
                // Generates a new 'id'
                var nextId = Math.max.apply(Math, selectBoxData.items().map(function(c) { return c.id; })) + 1;
                // Creates a new entry
                var newItem = { id: nextId, firstName: e.text };
                // Adds the entry to the data source
                selectBoxData.store().insert(newItem);
                // Reloads the data source
                selectBoxData.reload();

                return newItem;
            }
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/SearchAndEditing/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [SelectBox - Enable Searching](/Documentation/Guide/Widgets/SelectBox/Enable_Searching/)
- [SelectBox - Handle the Value Change Event](/Documentation/Guide/Widgets/SelectBox/Handle_the_Value_Change_Event/)
- [SelectBox API Reference](/Documentation/ApiReference/UI_Widgets/dxSelectBox/)
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-select_box-overview)

[tags]selectBox, select box, editor, user-defined entry, user-defined item, custom entry, custom item, user-defined value, custom value