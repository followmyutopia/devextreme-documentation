<article data-show="Content/Applications/16_1/UIWidgets/dxMultiView/markup.html,
        Content/Applications/16_1/UIWidgets/dxMultiView/script.js,
        Content/Applications/16_1/UIWidgets/dxMultiView/styles.css">

The [MultiView](/Documentation/ApiReference/UI_Widgets/dxMultiView/) widget contains several views and allows an end-user to switch between them. These views are placed horizontally next to one another and navigated by panning to the left or right. 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationmultiviewmultiviewmultiview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify a data source](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source)  
- [Handle item events](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events)  
- [Customize item appearance](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance)  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Switch between views**

By default, an end-user can switch between views by swiping. Assign *false* to the [swipeEnabled](/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#swipeEnabled) option to disable this feature.

    <!--JavaScript-->
    var multiViewOptions = {
        dataSource: multiViewData,
        swipeEnabled: false
    }

You can also switch between views programmatically, using the [selectedIndex](/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#selectedIndex) option. 

#####See Also#####
- [Get and Set Options - jQuery](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Get_and_Set_Options)
- [Change Options - AngularJS](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Change_Options)
- [Change Options - Knockout](/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Change_Options)

**Display views in a loop**

The **MultiView** widget can display views in a loop. If the widget loop mode is enabled, it scrolls back to the first item if an end-user navigates forward from the last item, or goes to the last item if an end-user navigates backward from the first item. The loop mode is disabled by default. To enable it, assign true to the [loop](/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#loop) configuration option.

    <!--JavaScript-->
    var dxMultiViewOptions = {
        dataSource: multiViewData,
        loop: true
    }

**Animate switching between views**

By default, the widget animates switching between views. You can disable animation by setting the [animationEnabled](/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#animationEnabled) option to *false*.

    <!--JavaScript-->
    var dxMultiViewOptions = {
        dataSource: multiViewData,
        animationEnabled: false
    }
</article>