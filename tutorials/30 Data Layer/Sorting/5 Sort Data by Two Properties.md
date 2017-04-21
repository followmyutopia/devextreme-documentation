<article data-show-web="/Content/Applications/17_1/DataLayer/Sorting/Step6/markup.html" data-show-first="script.js">


This step describes how to specify several sorting criteria, which are sequentially applied to the loaded data. In this case, the sorting options object is an array of [sorting expressions](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Sorting).

Add the "button2" button to *markup.html* and specify the **click** event handler for this button. Insert the **sortData** function call to the body of the **click** event handler. Pass an array containing the following items to the **sortData** function to sort data items by two criteria.

- "Department" - sorts data items by the **Department** field value
- { field: "Title", desc: true } - sorts data items by the **Title** field value in the descending order
</article>