To process a new form item value, you need to handle the [fieldDataChanged](/Documentation/ApiReference/UI_Widgets/dxForm/Events/#fieldDataChanged) event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onFieldDataChanged](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onFieldDataChanged) option when you configure the widget.

    <!--JavaScript-->
    $(function() {
        $("#formContainer").dxForm({
            onFieldDataChanged: function (e) {
                var updatedField = e.dataField;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to the **fieldDataChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxForm/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var fieldDataChangedHandler1 = function (e) {
        var updatedField = e.dataField;
        var newValue = e.value;
        // First handler of the "fieldDataChanged" event
    };

    var fieldDataChangedHandler2 = function (e) {
        var updatedField = e.dataField;
        var newValue = e.value;
        // Second handler of the "fieldDataChanged" event
    };

    $("#formContainer").dxForm("instance")
        .on('fieldDataChanged', fieldDataChangedHandler1)
        .on('fieldDataChanged', fieldDataChangedHandler2);

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)
- [Form - Update Form Data Using the API](/Documentation/Guide/Widgets/Form/Update_Form_Data_Using_the_API/)
- [Form - Generate a Data Object from Form Items](/Documentation/Guide/Widgets/Form/Generate_a_Data_Object_from_Form_Items/)
- [Form - Validate and Submit the Form](/Documentation/Guide/Widgets/Form/Validate_and_Submit_the_Form/)
- [Form Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-overview)
- [Form API Reference](/Documentation/ApiReference/UI_Widgets/dxForm/)

[tags]form, value change, get value, field data changed, fieldDataChanged