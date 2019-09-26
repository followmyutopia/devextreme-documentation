Use the following code to get a widget instance:

    <!--JavaScript-->
    var chartInstance = $("#chartContainer").dxChart("instance");

If the widget is not yet instantiated, this code throws an [E0009](/Documentation/ApiReference/Common/utils/Errors_and_Warnings/#E0009) exception that you can handle with a [try...catch](https://www.w3schools.com/js/js_errors.asp) block:

    <!--JavaScript-->
    try {
        var chartInstance = $("#chartContainer").dxChart("instance");
    }
    catch (err) {
        alert("Exception handled: " + err.message);
    }

Instead of the exception, you can get a truthy or falsy value that can be used in conditional statements. To do this, call the widget class's static **getInstance(element)** method. This method returns **undefined** if the widget is not instantiated for the element:

    <!--JavaScript-->
    var element = document.getElementById("chartContainer");
    var chartInstance = DevExpress.viz.dxChart.getInstance(element);
    if (chartInstance) {
        // Your code goes here
    }

#####See Also#####
- [Get and Set Options](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_and_Set_Options/)
- [Call Methods](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/)
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/)
- [3rd-Party Frameworks Integration API](/Documentation/Guide/Widgets/Common/Advanced/3rd-Party_Frameworks_Integration_API/)
