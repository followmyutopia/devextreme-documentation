The **Button** widget is a simple button that performs specified commands when a user clicks it.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-button-predefined_types" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a simple **Button** to your page.

    <!--HTML--><div id="buttonContainer"></div>

<!---->

    <!--JavaScript-->$(function () {
        $("#buttonContainer").dxButton({
            text: "OK",
            onClick: function (e) { 
                DevExpress.ui.notify("The OK button was clicked");
            }
        });
    });

In the previous code, the [click](/Documentation/ApiReference/UI_Widgets/dxButton/Events/#click) event is handled using the [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) option. Alternatively, you can attach one or several handlers to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxButton/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var clickHandler1 = function (e) {
        // First handler of the "click" event
    };

    var clickHandler2 = function (e) {
        // Second handler of the "click" event
    };

    $("#buttonContainer").dxButton("instance")
        .on('click', clickHandler1)
        .on('click', clickHandler2);

The appearance of the **Button** is predefined by its [type](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#type). Find more on this and other properties that impact the widget appearance in the [Customize the Appearance](/Documentation/Guide/Widgets/Button/Customize_the_Appearance/) article.

#####See Also#####
- [Widget Basics - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/)
- [Widget Basics - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/)
- [Widget Basics - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Button - Customize the Appearance](/Documentation/Guide/Widgets/Button/Customize_the_Appearance/)
- [Button - Validate and Submit an HTML form](/Documentation/Guide/Widgets/Button/Validate_and_Submit_an_HTML_Form/)
- [Button API Reference](/Documentation/ApiReference/UI_Widgets/dxButton/)

[tags]button, overview, click