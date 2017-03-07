<article data-show-web="/Content/Applications/16_1/DataLayer/Filtering/Step5/markup.html" data-show-first="script.js">

To filter data items by a single property, the filter expression should be an array containing the required [getter](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters), comparison operator and value to which the getter value is compared. If you use the default comparison operator (**"="**), the second filtering expression element can be omitted.

Pass the array containing the "Department" getter and the "IT" value to the **filterData** function to display only items whose **Department** field value is "IT".

Add the **button** element (with the **id** attribute set to "button1") to *markup.html*. To apply the filtering options described in this step each time you click this element, place the **filterData** function call in the **click** event handler of the **button** element.
</article>