The **TreeList** generates column headers based on the names of [data fields](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataField) by default. For example, if a data field is *"fullName"*, the column header text is "Full Name". 

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget TreeList ColumnHeaders](/Content/images/doc/17_2/treelist/visual_elements/column_headers.png)

Specify the **columns** | [caption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption) option to change the column header text.

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [
                { dataField: "companyName", caption: "Company" },
                // ...
            ]
        });
     });

If you need a more specific customization, define a custom template in the **columns** | [headerCellTemplate](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#headerCellTemplate) option. This option accepts a function or template container. 

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Title",
                caption: "Position",
                headerCellTemplate: function (header, info) {
                    $('<div>')
                        .html(info.column.caption)
                        .css('font-size', '16px')
                        .appendTo(header);
                }
            }, {
                dataField: "Address",
                headerCellTemplate: $('<i style="color: black">Mailing Address</i>')
            }]
        });
     });

To hide column headers, assign *false* to the [showColumnHeaders](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#showColumnHeaders) option.

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            showColumnHeaders: false
        });
     });

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/)
