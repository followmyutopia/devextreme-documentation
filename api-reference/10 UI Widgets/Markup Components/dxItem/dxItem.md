<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies markup for a widget item.
<!--/shortDescription-->

<!--fullDescription-->
The **dxItem** component defines custom markup for items in layout and collection widgets. **dxItem** has different options depending on the widget where it is used. See the **Default Item Template** section in a specific widget's API Reference for a full list of them.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div id="navBarContainer">
            <div data-options="dxItem: { disabled: true }"> 
                <!-- custom markup -->
            </div>
            <div data-options="dxItem: { badge: 'New'}"> 
                <!-- custom markup -->
            </div>
            <div data-options="dxItem: { }"> 
                <!-- custom markup -->
            </div>
        </div>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div dx-nav-bar="{ }">
            <div data-options="dxItem: { disabled: true }"> 
                <!-- custom markup -->
            </div>
            <div data-options="dxItem: { badge: 'New'}"> 
                <!-- custom markup -->
            </div>
            <div data-options="dxItem: { }"> 
                <!-- custom markup -->
            </div>
        </div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxNavBar: { }">
            <div data-options="dxItem: { disabled: true }"> 
                <!-- custom markup -->
            </div>
            <div data-options="dxItem: { badge: 'New'}"> 
                <!-- custom markup -->
            </div>
            <div data-options="dxItem: { }"> 
                <!-- custom markup -->
            </div>
        </div>

---

[note]**dxItem** elements are ignored when the **dataSource** option is defined.
<!--/fullDescription-->