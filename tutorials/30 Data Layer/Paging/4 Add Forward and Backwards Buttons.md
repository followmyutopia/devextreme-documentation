<article data-show-web="/Content/Applications/17_2/DataLayer/Paging/Step5/markup.html" data-show-first="script.js">

Add two **button** elements with the **id** attribute set to "backward" and "forward" to *markup.html*. These buttons will be used to load the previous and next pages, respectively. Place the **goToPage(index)** function call in the **click** event handler for each **button** element.

The value of the **index** argument passed to the **goToPage(index)** method should be **pageIndex() - 1** for the "backward" button and **pageIndex() + 1** for the "forward" button. The [pageIndex()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#pageIndex) method returns the current page index within the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance.
</article>