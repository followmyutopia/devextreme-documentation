<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_1/Framework/FormTutorial/Step7/form.html" data-show-first="form.html">
By default, the **Form** widget presumes that all fields of its data object contain text and, therefore, renders them as label-editor pairs. However, in this tutorial, the *"Picture"* data field contains a link to an image. To make it appear as an actual image, specify a template for this particular item and assign it to the item's [template](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/GroupItem/#template) option.

Here, the template is a function returning a jQuery-object.

In **MVVM approach**, the template uses [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) - a markup component from the DevExtreme library. The name of the template is assigned to the item's **template** option.

This tutorial has set forth the basics of the **Form** widget. For a more detailed look at this widget, refer to the [Form](/Documentation/ApiReference/UI_Widgets/dxForm/) reference section.
</article>