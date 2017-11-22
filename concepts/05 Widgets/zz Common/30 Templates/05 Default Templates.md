Default templates are based on data source fields. You can control the appearance by adding or removing particular fields from data source objects. For example, the **List** widget has a [default template for items](/Documentation/ApiReference/UI_Widgets/dxList/Default_Item_Template/) that contains the **text**, **visible**, and **disabled** fields. If you assign the following data source to this widget, all the items have text, the second item is disabled, and the third is invisible:

    <!--JavaScript-->
    var fruits = [
        { text: "Apples" },
        { text: "Oranges", disabled: true },
        { text: "Lemons", visible: false }
    ];

Default templates and the fields available in them depend on the widget. For a list of default templates by widget, search for "default template" in the left menu.
