The following code shows the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#onValueChanged) event handler's implementation that limits the number of tags a user can select in the **TagBox**:

    <!--JavaScript-->
    $(function(){
        var simpleProducts = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50",
            // ...
        ],
        maxItems = 2;

        $("#productsSimple").dxTagBox({
            dataSource: simpleProducts,
            onValueChanged: function(e) {
                if (e.value.length > maxItems) {
                    var newValue = e.value.slice(0, maxItems); 
                    e.component.option("value", newValue);
                    tooltip.show();
                }
            }
        });

        var tooltip = $("#tooltipContainer").dxTooltip({
            target: "#productsSimple",
            position:"bottom", 
            hideEvent: {
                name: "mouseout",
                delay: 2000
            }  
        }).dxTooltip("instance");
    });

    <!--HTML-->
    <div id="productsSimple"></div>
    <div id="tooltipContainer">Limit reached</div>

