<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Data item markup options<!--/d-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
A markup component used to define markup options for a collection widget item.
<!--/shortDescription-->

<!--fullDescription-->
The **dxItem** markup component is intended to introduce custom markup for each item of a [layout widget](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Layout_Widgets/). The template element should be contained in an element representing the required widget.

    <!--HTML-->
    <div id="box">
        <div data-options="dxItem: firstItemOptions ">
            . . .
        </div>
        <div data-options="dxItem: secondItemOptions">
            . . .
        </div>
        <div data-options="dxItem: thirdItemOptions">
            . . .
        </div>
    </div>

<!---->

    <!--JavaScript-->
    $("#box").dxBox({})

<!---->

#####AngularJS Approach#####

    <!--HTML-->
    <div dx-box="{ }">
        <div data-options="dxItem: firstItemOptions ">
            . . .
        </div>
        <div data-options="dxItem: secondItemOptions">
            . . .
        </div>
        <div data-options="dxItem: thirdItemOptions">
            . . .
        </div>
    </div>

#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxBox:{ }">
        <div data-options="dxItem: firstItemOptions ">
            . . .
        </div>
        <div data-options="dxItem: secondItemOptions">
            . . .
        </div>
        <div data-options="dxItem: thirdItemOptions">
            . . .
        </div>
    </div>

Even though the markup component is designed for layout widgets, you can use it with any [collection container widget](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/) to provide an individual markup for each widget item.

    <!--HTML-->
    <div id="myNavBar">
        <div data-options="dxItem: { disabled: true }"> //disabled item
            //a custom markup
        </div>
        <div data-options="dxItem: { badge: 'New'}"> //an item with a badge
            //a custom markup
        </div>
        <div data-options="dxItem: {}"> //an item
            //a custom markup
        </div>
    </div>

<!---->

    <!--JavaScript-->
    $("#myNavBar").dxNavBar({})

<!---->

#####AngularJS Approach#####

    <!--HTML-->
    <div dx-nav-bar="{ }">
        <div data-options="dxItem: { disabled: true }"> //disabled item
            //a custom markup
        </div>
        <div data-options="dxItem: { badge: 'New'}"> //an item with a badge
            //a custom markup
        </div>
        <div data-options="dxItem: {}"> //an item
            //a custom markup
        </div>
    </div>


#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxNavBar:{ }">
        <div data-options="dxItem: { disabled: true }"> //disabled item
            //a custom markup
        </div>
        <div data-options="dxItem: { badge: 'New'}"> //an item with a badge
            //a custom markup
        </div>
        <div data-options="dxItem: {}"> //an item
            //a custom markup
        </div>
    </div>


[note]You cannot use both the **dataSource** option and a set of **dxItem** elements to specify widget items. In this case, dxItem elements are ignored, because the **dataSource** option has a higher priority.

The list of configuration options supported by the dxItem component depends on the widget containing this component. To learn what set of item options is required for a specific widget, refer to the **Default Item Template** reference section of this widget.
<!--/fullDescription-->