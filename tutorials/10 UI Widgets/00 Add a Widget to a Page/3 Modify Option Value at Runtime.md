<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_2/Framework/ConfigureWidget/Step4/markup.html">
This step describes how to change the value of a widget option at runtime.   

Add the [CheckBox](/Documentation/ApiReference/UI_Widgets/dxCheckBox/) widget that will switch the button state. To implement the state change, follow the next steps.

 Implement the appropriate function and pass it to the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxCheckBox/Configuration/#onValueChanged) option of the **CheckBox** widget. This function updates the [disabled](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#disabled) option value of the [Button](/Documentation/ApiReference/UI_Widgets/dxButton/) widget according to the current check box value obtained from the **value** property of the **actionOptions** argument.
 
 To change a widget option value at runtime, get the widget instance and call the **options()** method of this instance. To get the **Button** instance, call the **Button** method for the button element with the "instance" argument and assign the returned value to the **button** variable. Then, call the [option()](/Documentation/ApiReference/UI_Widgets/dxButton/Methods/#optionoptionName_optionValue) method with the following arguments.

 - "disabled" - the name of the option to update
 - "actionOptions.value" - the new option value

</article>