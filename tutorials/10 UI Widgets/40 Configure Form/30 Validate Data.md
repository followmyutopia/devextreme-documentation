<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_1/Framework/FormTutorial/Step6/form.html" data-show-first="form.html">
For a more stable and foolproof app, you can validate user-entered data against a set of custom or predefined rules. There are several types of validation rules, each of which demands dedicated options to be set. To view all available rule types, see the [Validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) part of the [Validator](/Documentation/ApiReference/UI_Widgets/dxValidator/) reference section.

In the dxFrom widget, you can validate data of simple items only. For this purpose, assign an array of objects to the item's [validationRules](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#validationRules) option. Each object in this array configures one rule.

In this tutorial, a *"required"* validation rule is assigned to several items. In order to make the code more concise, it is done not inside the configuration objects of these items, but using the [customizeItem](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#customizeItem) callback function.

Launch the app now and try to erase one of the required values (they are marked by asterisks). When the editor loses focus, the widget will validate the value against the defined rule. If the rule is broken, an error message will appear.

In the last step, you will display an image in the **Form** widget.
</article>