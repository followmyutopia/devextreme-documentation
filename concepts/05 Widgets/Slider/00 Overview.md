The **Slider** is a widget that allows an end user to set a numeric value on a continuous range of possible values.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-slider-overview/ios7"
}

The following code adds a simple **Slider** to your page. The **min** and **max** options limit the range of accepted values. The **value** sets the initial value for the widget.

    <!--HTML-->
    <div id="sliderContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            min: 0, max: 100,
            value: 25
        });
    });

In addition, you can specify the step of **Slider** values using the [step](/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#step) option.

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            min: 0, max: 100,
            value: 25,
            step: 10
        });
    });

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Slider - Customize Widget Appearance](/Documentation/Guide/Widgets/Slider/Customize_Widget_Appearance)
- [Slider - Handle the Value Change Event](/Documentation/Guide/Widgets/Slider/Handle_the_Value_Change_Event)
- [Slider API Reference](/Documentation/ApiReference/UI_Widgets/dxSlider/)
- [RangeSlider - Overview](/Documentation/Guide/Widgets/RangeSlider/Overview/)

[tags]slider, editor, overview, min, max, step