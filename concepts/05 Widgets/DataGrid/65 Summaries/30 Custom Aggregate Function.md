You can implement a custom logic for summary calculation within the [calculateCustomSummary](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/#calculateCustomSummary) function. It is called for each summary item whose [summaryType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType) is *"custom"*. The function's parameter includes the **summaryProcess** field that has the following values depending on when the function is called:

- *"start"*     
The first call for a summary item. At this stage, initialize the summary item's resulting value.
- *"calculate"*     
A call for each data item relating to the summary item. At this stage, modify the summary item's resulting value.
- *"finalize"*      
The last call for the summary item. At this stage finalize calculations, for example, format the summary item's resulting value.

---
#####jQuery


    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [{
                    column: "numericValue",
                    summaryType: "custom",
                    name: "Mean"
                }, {
                    column: "numericValue",
                    summaryType: "custom",
                    name: "Root Mean Square"
                }],
                calculateCustomSummary: function (e) {
                    if (e.name == "Mean") {
                        if (e.summaryProcess == 'start') {
                            e.totalValue = 0; 
                            count1 = 0;
                        } else if (e.summaryProcess == 'calculate') {
                            e.totalValue += e.value;
                            count1++;
                        } else if (e.summaryProcess == 'finalize') {
                            e.totalValue = e.totalValue / count1;
                        }
                    }
                    if (e.name == "Root Mean Square") {
                        if (e.summaryProcess == 'start') {
                            e.totalValue = 0; 
                            count2 = 0;
                        } else if (e.summaryProcess == 'calculate') {
                            e.totalValue += Math.pow(e.value, 2);
                            count2++;
                        } else if (e.summaryProcess == 'finalize') {
                            e.totalValue = Math.sqrt(e.totalValue / count2);
                        }
                    }
                }
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary [calculateCustomSummary]="calculateMeans">
            <dxi-total-item
                column="numericValue"
                summaryType="custom"
                name="Mean">
            </dxi-total-item>
            <dxi-total-item
                column="numericValue"
                summaryType="custom"
                name="Root Mean Square">
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    export class AppComponent {
        calculateMeans (e) {
            if (e.name == "Mean") {
                if (e.summaryProcess == 'start') {
                    e.totalValue = 0; 
                    count1 = 0;
                } else if (e.summaryProcess == 'calculate') {
                    e.totalValue += e.value;
                    count1++;
                } else if (e.summaryProcess == 'finalize') {
                    e.totalValue = e.totalValue / count1;
                }
            }
            if (e.name == "Root Mean Square") {
                if (e.summaryProcess == 'start') {
                    e.totalValue = 0; 
                    count2 = 0;
                } else if (e.summaryProcess == 'calculate') {
                    e.totalValue += Math.pow(e.value, 2);
                    count2++;
                } else if (e.summaryProcess == 'finalize') {
                    e.totalValue = Math.sqrt(e.totalValue / count2);
                }
            }
        };
    }

---

The **value** field of the function's parameter provides access to data, and this data depends on whether you have set the summary item's [column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column) field or not. If you have, the data is the value of this column's cell; otherwise, it is the whole data source object.

---
#####jQuery


    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [{
                    summaryType: "custom",
                    name: "SelectedRowsSummary"
                }],
                calculateCustomSummary: function (e) {
                    if (e.name === "SelectedRowsSummary") {
                        if (e.summaryProcess === "start") {
                            e.totalValue = 0;
                        } else if (e.summaryProcess === "calculate") {
                            if (e.component.isRowSelected(e.value.ID)) {
                                e.totalValue = e.totalValue + e.value.SaleAmount;
                            }
                        }
                    }
                }
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary [calculateCustomSummary]="calculateCustomSummary">
            <dxi-total-item
                summaryType="custom"
                name="SelectedRowsSummary">
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    export class AppComponent {
        calculateCustomSummary (e) {
            if (e.name === "SelectedRowsSummary") {
                if (e.summaryProcess === "start") {
                    e.totalValue = 0;
                } else if (e.summaryProcess === "calculate") {
                    if (e.component.isRowSelected(e.value.ID)) {
                        e.totalValue = e.totalValue + e.value.SaleAmount;
                    }
                }
            }
        };
    }

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomSummaries/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Format Text and Value](/Documentation/Guide/Widgets/DataGrid/Summary/Format_Text_and_Value/)

[tags]dataGrid, data grid, custom summary, calculateCustomSummary
