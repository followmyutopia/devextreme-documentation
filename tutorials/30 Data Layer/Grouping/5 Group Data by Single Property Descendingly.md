<article data-show-web="/Content/Applications/17_1/DataLayer/Grouping/Step6/markup.html" data-show-first="script.js">


To group data items by a single property and sort groups in descending order, the [group expression](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping) should be an object containing the **field** and **desc** properties. The **field** property specifies the field value by which data is grouped. The **desc** property takes on a Boolean value specifying whether groups are sorted in descending or ascending order. To group data in descending order, assign *true* to the **desc** property.

Pass an object containing a **field** property set to "Department" and **desc** property set to *true* to group data by the **Department** field value in descending order.

Add the **button** element (with the **id** attribute set to "button2") to *markup.html*. To apply grouping options described in this step each time you click this element, place the **groupData** function call in the **click** event handler of the **button** element.
</article>