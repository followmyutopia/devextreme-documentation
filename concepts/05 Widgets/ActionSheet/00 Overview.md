The **ActionSheet** widget is a sheet containing a set of buttons located one under the other. These buttons usually represent several choices relating to a single task.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-action_sheet-overview/ios7" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a simple **ActionSheet** to your page. The widget is shown on a button click.  

    <!--HTML-->
    <div id="buttonContainer"></div>
    <div id="actionSheetContainer"></div>

<!---->

    <!--JavaScript-->
    // Shows a message with a button name
    var processClick = function (name) {
        DevExpress.ui.notify(name + " clicked", "success", 3000);
    };

    $(function() {
        $("#buttonContainer").dxButton({
            text: 'Show the ActionSheet',
            onClick: function () {
                // Shows the ActionSheet widget
                $("#actionSheetContainer").dxActionSheet("instance").show();
            }
        });

        $("#actionSheetContainer").dxActionSheet({
            dataSource: [
                { text: "Reply", onClick: function () { processClick("Reply") } },
                { text: "Reply All", onClick: function () { processClick("Reply All") } },
                { text: "Forward", onClick: function () { processClick("Forward") } },
                { text: "Delete", onClick: function () { processClick("Delete") } }
            ]
        });
    });

Note that every data source object has a **text** field that is rendered on the buttons of the **ActionSheet**. Also, there is the **onClick** field that represents a click handler for a certain **ActionSheet** button.

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [ActionSheet - Customize Item Appearance](/Documentation/Guide/Widgets/ActionSheet/Customize_Item_Appearance/)
- [ActionSheet - Specify Display Mode](/Documentation/Guide/Widgets/ActionSheet/Specify_Display_Mode)
- [ActionSheet API Reference](/Documentation/ApiReference/UI_Widgets/dxActionSheet/)

[tags]action sheet, actionSheet, collection container, collection widget, navigation, overview