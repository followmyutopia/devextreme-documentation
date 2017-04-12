<article data-show-web="/Content/Applications/17_1/DataLayer/Paging/Step6/markup.html" data-show-first="script.js">

To prevent errors, add the code that disables the "forward" button when the current page is the last page within the DataSource instance. Use the [isLastPage()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#isLastPage) method to determine whether or not the current page is the last one. The "backward" button should be disabled if the current page index is equal to 0.
</article>