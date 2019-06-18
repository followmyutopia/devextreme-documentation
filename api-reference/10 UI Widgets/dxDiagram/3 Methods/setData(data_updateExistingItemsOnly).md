<!--id-->dxDiagram.setData(data, updateExistingItemsOnly)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Sets the diagram data.
<!--/shortDescription-->

<!--paramName1-->data<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
Contains information about a diagram's layout, appearance, and shape positions.
<!--/paramDescription1-->

<!--paramName2-->updateExistingItemsOnly<!--/paramName2-->
<!--paramType2-->Boolean<!--/paramType2-->
<!--paramDescription2-->
**true** to apply diagram data without rewriting diagram items;
**false** to apply diagram data and replace diagram items with the items from the data parameter.
<!--/paramDescription2-->

<!--fullDescription-->
The [getData]({basewidgetpath}/Methods/#getData) method allows you to save information about a diagram's layout, appearance, and the diagram's shape positions. Use the **setData** method to load this data on demand.

---
#####jQuery

    <!--JavaScript-->
    $("#diagram").dxDiagram({
        onDataChanged: function(e) { 
            if(e.component.isReady()) {
                var data = e.component.getData();
                window.localStorage.setItem("foo", data); // store layout data in storage
            }
        },
        // ...
        onContentReady: function(e) { 
            var foo = window.localStorage.getItem("foo"); // load layout data and apply it to the generated shapes
            if(foo)
                e.component.setData(foo, true);
        }
    });

---

<!--/fullDescription-->