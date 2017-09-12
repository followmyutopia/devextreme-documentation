If you need to add spin buttons to the **NumberBox**, set the [showSpinButtons](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#showSpinButtons) to **true**.

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            showSpinButtons: true
        });
    });

To specify the step by which the value is changed, use the [step](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#step) option.

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            showSpinButtons: true,
            step: 10
        });
    });

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
- [NumberBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-number_box-overview)
- [NumberBox API Reference](/Documentation/ApiReference/UI_Widgets/dxNumberBox/)

[tags]number box, numberBox, editor, spin buttons, showSpinButtons, step