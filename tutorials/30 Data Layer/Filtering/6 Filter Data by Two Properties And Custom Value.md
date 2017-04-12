<article data-show-web="/Content/Applications/17_1/DataLayer/Filtering/Step7/markup.html" data-show-first="script.js">

You can mix [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) search criteria and search criteria specified as a function. A function specifying a filtering condition should return a Boolean value, which determines whether the item is selected or skipped.

The filtering function considered in this step selects only items whose **City** field value matches any value contained in the **allowedCities** array. This function condition is mixed with a compound condition consisting of two simple filtering expressions.

Create the **allowedCities** array.

Add the "button3" button to *markup.html* and specify the **click** event handler for this button. Insert the **filterData** function call to the body of the **click** event handler. Pass an array containing the following items to the **filterData** function to filter data items by two the required criteria.

- A compound filtering condition specified as an array. Contains the following items.
    - ["Department", "Management"] - selects items whose **Department** field value is "Management"
    - "||" - the logical "or" operator, separating filter conditions
    - ["Title", "contains", "Manager"] - selects items whose **Title** field value contains the "Manager" string
- "&amp;&amp;" - the logical "and" operator, separating filtering conditions
    - A function specifying the required filter condition
</article>