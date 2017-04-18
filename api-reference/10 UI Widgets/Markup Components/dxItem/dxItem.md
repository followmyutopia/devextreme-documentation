<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
A markup component used to define markup options for a collection widget item.
<!--/shortDescription-->

<!--fullDescription-->
The **dxItem** markup component is intended to introduce custom markup for each item of the [Box](/Documentation/ApiReference/UI_Widgets/dxBox/) and [ResponsiveBox](/Documentation/ApiReference/UI_Widgets/dxResponsiveBox/) widgets. The template element should be contained in an element representing the required widget.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

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

        <!--JavaScript-->
        $("#box").dxBox({})

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

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

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

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

Even though the markup component is designed for layout widgets, you can use it with any collection container widget to provide an individual markup for each widget item.

- **jQuery** 

        <!--HTML-->
        <div id="myNavBar">
            <div data-options="dxItem: { disabled: true }"> // disabled item
                // a custom markup
            </div>
            <div data-options="dxItem: { badge: 'New'}"> // an item with a badge
                // a custom markup
            </div>
            <div data-options="dxItem: {}"> // an item
                // a custom markup
            </div>
        </div>

        <!--JavaScript-->
        $("#myNavBar").dxNavBar({})

- **AngularJS**

        <!--HTML-->
        <div dx-nav-bar="{ }">
            <div data-options="dxItem: { disabled: true }"> // disabled item
                // a custom markup
            </div>
            <div data-options="dxItem: { badge: 'New'}"> // an item with a badge
                // a custom markup
            </div>
            <div data-options="dxItem: {}"> // an item
                // a custom markup
            </div>
        </div>

- **Knockout**

        <!--HTML-->
        <div data-bind="dxNavBar:{ }">
            <div data-options="dxItem: { disabled: true }"> // disabled item
                // a custom markup
            </div>
            <div data-options="dxItem: { badge: 'New'}"> // an item with a badge
                // a custom markup
            </div>
            <div data-options="dxItem: {}"> // an item
                // a custom markup
            </div>
        </div>


[note]You cannot use both the **dataSource** option and a set of **dxItem** elements to specify widget items. In this case, dxItem elements are ignored, because the **dataSource** option has a higher priority.

The list of configuration options supported by the dxItem component depends on the widget containing this component. To learn what set of item options is required for a specific widget, refer to the **Default Item Template** reference section of this widget.
<!--/fullDescription-->