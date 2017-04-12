<article data-show-web="/Content/Applications/17_1/DataLayer/Sorting/Step5/markup.html" data-show-first="script.js">

To sort data items by a single property in the descending order, the sort expression should be an object containing the **field** and **desc** properties. The **field** property specifies the field by whose value data is ordered. The **desc** property takes on a Boolean value specifying whether data is sorted descendingly or ascendingly. To sort data in the descending order assign *true* to the **desc** property.

Pass the object containing the **field** property set to "LastName" and the **desc** property set to *true* to sort data by the **LastName** field value in the descending order.

Add the **button** element with the **id** attribute set to "button1" to *markup.html*. To apply sorting options described in this step each time you click this element, place the **sortData** function call to the **click** event handler of the added **button** element.
</article>