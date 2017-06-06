<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_2/Framework/ConfigureWidget/Step3/markup.html">
To handle a button click, pass the handling function to the [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) option of the widget.

Implement the required handling function and pass it to the **onClick** option of the widget, as shown in the *script.js* file below. 

The handling function generates a string consisting of ten random digits. To display the generated string on the screen, create a &lt;p&gt; element with the **id** attribute set to "randomValue". Within the handling function, set the text contents of this element, using the [text(text)](http://api.jquery.com/text/#text2) function.

See the markup file below.

</article>