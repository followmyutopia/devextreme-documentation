The **Switch** is a widget that can be in two states: "On" (when [value](/Documentation/ApiReference/UI_Widgets/dxSwitch/Configuration/#value) is **true**) and "Off" (when [value](/Documentation/ApiReference/UI_Widgets/dxSwitch/Configuration/#value) is **false**).

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-switch-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds the **Switch** to your page.

    <!--HTML-->
    <div id="switchContainer"></div>
     
 
    <!--JavaScript-->
    $(function() {
        $("#switchContainer").dxSwitch({
            value: true
        });
    });

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Switch - Handle the Value Change Event](/Documentation/Guide/Widgets/Switch/Handle_the_Value_Change_Event)
- [Switch - Keyboard Support](/Documentation/Guide/Widgets/Switch/Keyboard_Support)
- [Switch API Reference](/Documentation/ApiReference/UI_Widgets/dxSwitch/)

[tags]switch, editor, overview