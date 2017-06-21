<article data-show-web="/Content/Applications/117_2DataLayer/Filtering/Step6/markup.html" data-show-first="script.js">

This step describes how to filter data by several criteria. In this case, the [filtering expression](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) contains an array of more simple expressions separated by a [group filtering operator](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering/Group_Filter_Operations).

Add the "button2" button to *markup.html* and specify the **click** event handler for this button. Insert the **filterData** function call into the body of the **click** event handler. Pass an array containing the following items to the **filterData** function to filter data items by two criteria.

- ["Title", "Engineer"] - selects items whose **Title** field value is "Engineer"
- "||" - the "or" logical operator separating filtering conditions
- ["Title", "Shipping Assistant"] - selects items whose **Title** field value is "Shipping Assistant"
</article>