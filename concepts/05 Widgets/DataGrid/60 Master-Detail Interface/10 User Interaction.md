The master-detail interface supplies a standard data row with an expandable section that contains detail data. In master-detail terms, the data row is called *"master row"* and the expandable section - *"detail section"*.

![DevExtreme HTML5/JavaScript DataGrid Widget Master Detail Interface](/Content/images/doc/17_2/DataGrid/MasterDetail.png)

The master-detail interface becomes available after you specify the detail sections' contents using the **masterDetail**.[template](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#template) option. You can expand and collapse detail sections [programmatically](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/#API) or enable a user to do it by setting the **masterDetail**.[enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#enabled) option to **true**. Set the **masterDetail**.[autoExpandAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#autoExpandAll) option to **true** to expand these sections by default.

---

#####jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            masterDetail: {
                enabled: true,
                autoExpandAll: true,
                template: function (container, info) {
                    var currentEmployeeData = info.data;
                    container.append(
                        $('<div class="employeeInfo">
                            <img class="employeePhoto" src="' + currentEmployeeData.Picture + '" />
                            <p class="employeeNotes">' + currentEmployeeData.Notes + '</p>
                        </div>'));
                } 
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ...
        [masterDetail]="{ enabled: true, template: 'detail', autoExpandAll: true }">
        <div *dxTemplate="let employee of 'detail'">
            <div class="employeeInfo">
                <img class="employeePhoto" [src]="employee.data.Picture" />
                <p class="employeeNotes">{{employee.data.Notes}}</p>
            </div>
        </div>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

Once loaded, a detail section's content remains cached until a user switches to another page in the **DataGrid** or reloads the web page.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/MasterDetailView/Angular/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>
