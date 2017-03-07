<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Radio group widget.<!--/d-->
<!--widgettree-->
dataSource: [
        { text: "red", value: "#FF0000" },
        { text: "green", value: "#00AA00" },
        { text: "blue", value: "#0000FF" }
    ]
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_radio_group">ui/radio_group</a><!--/module-->
<!--inherits-->..\Editor\Editor.md,..\DataExpressionMixin\DataExpressionMixin.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **RadioGroup** is a widget that contains a set of radio buttons and allows an end user to make a single selection from the set.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxRadioGroup` jQuery plug-in.

        <!--HTML-->
        <div id="radioGroup"></div>

    <!---->

        <!--JavaScript-->
        $("#radioGroup").dxRadioGroup({
            dataSource: radioGroupData,
            layout: 'vertical'
        });

- **Knockout**  
 Add a div element and apply the `dxRadioGroup` binding to this element.

        <!--HTML-->
        <div data-bind="dxRadioGroup: {
            dataSource: radioGroupData,
            layout: 'vertical'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-radio-group` directive to this element.

        <!--HTML-->
        <div dx-radio-group="{
            dataSource: radioGroupData,
            layout: 'vertical'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

Since the **RadioGroup** widget is used to display multiple items, it supports common Collection Container widget functionality. You can find the detailed information on principles of working with the widget in the [dxRadioGroup section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#UI_Widgets_UI_Widget_Categories_Collection_Container_Widgets_List_of_Collection_Container_Widgets_dxRadioGroup) of the [Collection Container Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposeradiogroupradiogroupradiogroup/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=VSr5aoDjtEk&index=6&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

<!--/fullDescription-->