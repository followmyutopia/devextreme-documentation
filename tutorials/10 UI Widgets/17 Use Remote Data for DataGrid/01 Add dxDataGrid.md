<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/16_2/Framework/UseRemoteDataforDataGrid/Step1/grid.html" data-show-first="grid.html">
First, reference files required by the **DataGrid** on your HTML page. Note that jQuery and DevExtreme libraries are essential. 

In addition to these scripts, **DataGrid** requires at least two stylesheet files. These mandatory files are the "dx.common.css", which provides the core styles and a theme-file that provides the distinctive look for **DataGrid**. Refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section, to learn where you can get the libraries and stylesheets.

Once the required libraries are referenced, you can create the **DataGrid** widget on your page. 

Add a div element to the body of the HTML document. It is the container for the **DataGrid** widget.

Then, add a .js file to your project and reference it in the head of your HTML file just like you did for the libraries in the previous step. To associate the [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) widget with the created element, call the **DataGrid** constructor once the document has been loaded and pass the appropriate configuration object to this constructor, as shown in *grid.js*.

If you run the code now, you will see an empty widget indicating that there is no data in it. In the next step, you will provide data for the **DataGrid** widget.

#####See Also#####
- [Installation - Local Scripts](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/)
- [Installation - CDN Services](/Documentation/Guide/Getting_Started/Installation/CDN_Services/)
- [Installation - NuGet Package](/Documentation/Guide/Getting_Started/Installation/NuGet_Package/)
- [Installation - Bower Package](/Documentation/Guide/Getting_Started/Installation/Bower_Package/)
- [Installation - npm Package](/Documentation/Guide/Getting_Started/Installation/npm_Package/)
</article>