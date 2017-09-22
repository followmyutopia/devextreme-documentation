If the [uploadMode](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode) is *"instantly"* or *"useButtons"*, you can add parameters to the URL by modifying the [uploadUrl](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadUrl) option. For example, the following code adds an employee ID:

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        var employee = { id: 1, name: "John Heart", position: "CEO"};
        var uploadUrl = "/upload.php";
        $("#fileUploaderContainer").dxFileUploader({
            name: "file",
            uploadMode: "instantly", // or "useButtons"
            uploadUrl: uploadUrl,
            onValueChanged: function (e) {
                e.component.option('uploadUrl', uploadUrl + '?id=' + employee.id);
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-file-uploader
        name="file"
        (onValueChanged)="addParameters($event)"
        uploadMode="instantly">    <!-- or "useButtons" -->
    </dx-file-uploader>

    <!--TypeScript-->
    import { DxFileUploaderModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        let employee = { id: 1, name: "John Heart", position: "CEO"};
        let uploadUrl = "/upload.php";

        addParameters(e) {
            e.component.option("uploadUrl", this.uploadUrl + "?id=" + this.employee.id);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFileUploaderModule
        ],
        // ...
    })

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @model DevExtremeMvcApp.Models.Employee
 
    @(Html.DevExtreme().FileUploader()
        .Name("file")
        .UploadMode(FileUploadMode.Instantly) // or FileUploadMode.UseButtons
        .UploadUrl(Url.Action("UploadFile", "FileUploader", new { id = @Model.EmployeeID }))
    )

---

When the **uploadMode** is *"useForm"*,  define the parameters within hidden inputs. They are sent to the server in an HTML form along with the files.

---
#####jQuery

    <!--HTML-->
    <form id="form" action="/upload.php" method="post" enctype="multipart/form-data">
        <input type="hidden" id="employeeId" name="id">
        <div id="fileUploaderContainer"></div>
        <div id="button"></div>
    </form>

    <!--JavaScript-->
    $(function () {
        var employee = { id: 1, name: "John Heart", position: "CEO"};
        $("#fileUploaderContainer").dxFileUploader({
            name: "file",
            uploadMode: "useForm",
            onValueChanged: function () {
                $("#employeeId").val(employee.id);
            }
        });
        $("#button").dxButton({
            text: "Update profile",
            useSubmitBehavior: true
        });
    });

#####Angular

    <!--HTML-->
    <form action="/upload.php" method="post" enctype="multipart/form-data">
        <dx-file-uploader
            name="file"
            uploadMode="useForm"
            (onValueChanged)="addParameters()">
        </dx-file-uploader>
        <input type="hidden" name="id" [value]="employeeId">
        <dx-button
            text="Update profile"
            [useSubmitBehavior]="true">
        </dx-button>
    </form>

    <!--TypeScript-->
    import { DxFileUploaderModule, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        let employee = { id: 1, name: "John Heart", position: "CEO"};
        let employeeId: any;
        
        addParameters () {
            this.employeeId = this.employee.id;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFileUploaderModule,
            DxButtonModule
        ],
        // ...
    })

#####ASP.NET MVC Controls

    <!--Razor C#-->
    @model DevExtremeMvcApp.Models.Employee
    
    @using (Html.BeginForm("UploadFile", "FileUploader", FormMethod.Post, new { enctype = "multipart/form-data" }))
    {
        @(Html.DevExtreme().FileUploader()
            .Name("file")
            .UploadMode(FileUploadMode.UseForm)
        )
    
        @Html.HiddenFor(model => Model.EmployeeID);
    
        @(Html.DevExtreme().Button()
            .Text("Update Profile")
            .UseSubmitBehavior(true)
        )
    }

---

