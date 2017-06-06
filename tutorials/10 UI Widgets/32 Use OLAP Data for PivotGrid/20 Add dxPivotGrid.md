<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_2/Framework/UseOLAPDataForPivotGrid/Step2/pivotGrid.html" data-show-first="pivotGrid.html">
Once the required libraries are referenced, you can create the **PivotGrid** widget on your page.

Add a div element to the body of the HTML document. It is the container for the **PivotGrid** widget.

Then, add a .js file to your project and reference it in the head of your HTML file just like you did for the libraries in the previous step. To associate the [PivotGrid](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/) widget with the created element, call the `dxPivotGrid` constructor once the document has been loaded and pass the appropriate configuration object to this constructor, as shown in *pivotGrid.js*.

If you run this code now, you will see an empty widget indicating that there is no data in it. In the next step, you will provide data for the **PivotGrid** widget.
</article>