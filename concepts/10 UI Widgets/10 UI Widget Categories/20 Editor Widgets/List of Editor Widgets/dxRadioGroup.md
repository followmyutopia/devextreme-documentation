<article data-show="Content/Applications/16_1/UIWidgets/dxRadioGroup/markup.html,
        Content/Applications/16_1/UIWidgets/dxRadioGroup/script.js,
        Content/Applications/16_1/UIWidgets/dxRadioGroup/styles.css">

The [RadioGroup](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/) widget contains a set of radio buttons and enables an end-user to select one of them. 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeradiogroupradiogroupradiogroup/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value)  
- [Handle the value change event](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event)  

As the widget displays a collection of items, it supports common Collection Container widget functionality and enables you to carry out the following tasks.

- [Specify the data source](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source)  
- [Handle item events](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events)  
- [Customize item appearance](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)  

In addition to common editor and collection container functionality, the widget enables you to perform the following adjustments.

**Specify an item text**

The widget creates a radio button for each item of the data source specified using the [dataSource](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#dataSource) option. An item object should contain the [text](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Default_Item_Template/#text) property that specifies the text displayed by the corresponding radio button.

    <!--JavaScript-->
    var colors = [
        { text: "red", value: "#FF0000" },
        { text: "green", value: "#00FF00" },
        { text: "blue", value: "#0000FF" }
    ]
    var radioGroupOptions = {
        dataSource: colors
    }

**Access the selected item**

You can access the selected value using the [value](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#value) option. The [valueExpr](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#valueExpr) option specifies the item object property whose value is accessed using the **value** option. You can pass "this" to the **valueExpr** option to access the entire item object.

    var radioGroupOptions = {
        dataSource: colors,
        valueExpr: 'value'
    }

**Specify the widget layout**

The [layout](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#layout) option enables you to specify whether the widget arranges radio buttons vertically or horizontally.

    var radioGroupOptions = {
        dataSource: colors,
        layout: 'horizontal'
    }

**Keyboard support**

An end-user can use the following keys to interact with the widget.

- Up/down arrow (page up/down)  
 Move focus to the previous/next item.

- Home/End  
 Move focus to the first/last element.

- Enter (Space)  
 Select the focused element.
</article>