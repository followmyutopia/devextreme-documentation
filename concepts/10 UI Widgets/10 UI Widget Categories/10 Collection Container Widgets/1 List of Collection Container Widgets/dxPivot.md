<article data-show="Content/Applications/16_1/UIWidgets/dxPivot/markup.html,
        Content/Applications/16_1/UIWidgets/dxPivot/script.js">

A widget that is similar to a traditional tab control, but optimized for the phone with simplified end-user interaction.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationpivotpivotpivot/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
    
The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source)  
- [Handle item events](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events)  
- [Customize item appearance](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)  

The [Pivot](/Documentation/ApiReference/UI_Widgets/dxPivot/) widget includes items placed horizontally next to one another and navigated by flicking or panning to the left or right, or by choosing the desired pivot header. While you always see the content of one item, the pivot header of the next item is visible so users can clearly see that more items are available. This widget is often used to present lists of data [filtered by different criteria](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering).

    <!--JavaScript-->
    contacts = [
        { name: "Barbara J. Coggins", phone: "512-964-2757", email: "BarbaraJCoggins@rhyta.com", category: "Family" },
        { name: "Carol M. Das", phone: "360-684-1334", email: "CarolMDas@jourrapide.com", category: "Friends" },
        { name: "Janet R. Skinner", phone: "520-573-7903", email: "JanetRSkinner@jourrapide.com", category: "Work" },
        . . .
    ];
    var pivotOptions = {
        dataSource: [
            {
                title: "All",
                listItems: new DevExpress.data.DataSource({
                    store: contacts, sort: "name"
                })
            },
            {
                title: "Family",
                listItems: new DevExpress.data.DataSource({
                    store: contacts, sort: "name", filter: ["category", "=", "Family"]
                })
            },
            {
                title: "Friends",
                listItems: new DevExpress.data.DataSource({
                    store: contacts, sort: "name", filter: ["category", "=", "Friends"]
                })
            },
            {
                title: "Work",
                listItems: new DevExpress.data.DataSource({
                    store: contacts, sort: "name", filter: ["category", "=", "Work"]
                })
            }
        ]
    }
 
</article>