<article data-show-web="/Content/Applications/17_1/DataLayer/Sorting/Step7/markup.html" data-show-first="script.js">

You can specify a sorting order as a function. The items are sorted by the value returned by this function called for each item.

Add the "button3" button to *markup.html* and specify the **click** event handler for this button. Insert the **sortData** function call to the body of the **click** event handler. Pass an object containing the following fields to the **sortData** function to sort items by the length of the **FirstName** field value in the descending order.
    
- field: function(dataItem) { return dataItem.FirstName.length } - function called for each data item
- desc: true - determines the descending sorting order
</article>