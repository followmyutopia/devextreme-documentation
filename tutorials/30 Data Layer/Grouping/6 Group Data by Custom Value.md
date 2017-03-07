<article data-show-web="/Content/Applications/16_2/DataLayer/Grouping/Step7/markup.html" data-show-first="script.js">

You can specify a grouping criterion as a function. The items are grouped by the value returned by this function called for each item.

Add the "button3" button to *markup.html* and specify the **click** event handler for this button. Insert the **groupData** function call in the body of the **click** event handler. Pass an object containing the following fields to the **groupData** function, to group items by the first letter of the **FirstName** field value in descending order.

- field: function (itemData) { return itemData.FirstName.charAt(0); } - function called for each data item
- desc: true - specifies the descending sort order
</article>