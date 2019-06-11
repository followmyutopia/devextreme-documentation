<!--id-->dxTreeMapNode.drillDown()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Drills down into the node.
<!--/shortDescription-->

<!--fullDescription-->
When the data source has several hierarchical levels, you may need to enable the user to navigate between them. The movement from the higher to the lower hierarchical level is called *"drilling down"*. The movement backwards is called *"drilling up"*. Although not provided out-of-the-box, this capability is easy to implement using the **drillDown()** and [drillUp()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Methods/#drillUp) methods.

Usually, drilling down is performed when the user clicks a group of tiles in the widget. For example, the following code shows the [onClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onClick) event handler where the **drillDown()** method is called of the clicked node.

    <!--JavaScript-->var treeMapOptions = {
        // ...
        onClick: function (e) {
            e.node.drillDown();
        }    
    };
    
To implement drilling up, bind another widget to **TreeMap**, e.g., [Button](/Documentation/ApiReference/UI_Widgets/dxButton/). When the user clicks the button, the treemap navigates one level up using its **drillUp()** method. Alternatively, a click on the button may navigate the user straight to the root node using the [resetDrillDown()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Methods/#resetDrillDown) method of the treemap. Note that the following code configures the **onClick** handler of the button, not of the treemap.

    <!--JavaScript-->var buttonOptions = {
        // ...
        onClick: function (e) {
            treeMapInstance.drillUp();
            // treeMapInstance.resetDrillDown();
        }    
    };
    
When the user drills up or down, the [drill](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Events/#drill) event fires. To handle it, implement the [onDrill](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/#onDrill) event handler.

<a href="https://www.youtube.com/watch?v=pCfBYtOcXxw&index=6&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>
<!--/fullDescription-->