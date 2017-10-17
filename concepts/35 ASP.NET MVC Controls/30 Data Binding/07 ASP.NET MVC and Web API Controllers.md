Access to MVC controllers in an MVC 3, 4, 5 and .NET Core MVC app is configured alike - using the `Mvc()` method the `DataSource()`'s lambda parameter exposes. The following example shows the [DataGrid](/Documentation/Guide/Widgets/DataGrid/Overview/) widget accessing a `GridDataController` whose actions (`GetOrders`, `InsertOrder`, `UpdateOrder`, and `DeleteOrder`) implement [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations:

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .DataSource(ds => ds
            .Mvc()
            .Controller("GridData")
            .Key("OrderID")
            .LoadAction("GetOrders")
            .InsertAction("InsertOrder")
            .UpdateAction("UpdateOrder")
            .DeleteAction("DeleteOrder")
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .DataSource(Function(ds)
            Return ds.Mvc() _
                     .Controller("GridData") _
                     .Key("OrderID") _
                     .LoadAction("GetOrders") _
                     .InsertAction("InsertOrder") _
                     .UpdateAction("UpdateOrder") _
                     .DeleteAction("DeleteOrder")
        End Function)
    )

The code below details the `GridDataController`. CRUD operations are performed on the [Northwind](https://northwinddatabase.codeplex.com/) database's "Orders" collection. Note the use of [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data), a library that facilitates writing a controller for DevExtreme ASP.NET MVC Controls.

---

##### MVC 3, 4, 5 Controller

    <!--C#-->
    using System;
    using System.Linq;
    using System.Net;
    using System.Web.Mvc;
    using DevExtreme.AspNet.Data;
    using DevExtreme.AspNet.Mvc;
    using Newtonsoft.Json;
    using ProjectName.Models;
    
    namespace ProjectName.Controllers {

        public class GridDataController : Controller {
            NorthwindContext _nwind = new NorthwindContext();
            const string ValidationErrorMessage = "The record cannot be saved due to a validation error";

            // Fetching items from the "Orders" collection
            public ActionResult GetOrders(DataSourceLoadOptions loadOptions) {
                var result = DataSourceLoader.Load(_nwind.Orders, loadOptions);
                var resultJson = JsonConvert.SerializeObject(result);
                return Content(resultJson, "application/json");
            }

            // Inserting a new item into the "Orders" collection
            public ActionResult InsertOrder(string values) {
                var newOrder = new Order();                             // Creating a new item
                JsonConvert.PopulateObject(values, newOrder);           // Populating the item with the values
                if (!TryValidateModel(newOrder))                        // Validating the item
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest, ValidationErrorMessage);
                _nwind.Orders.Add(newOrder);                            // Adding the item to the database
                _nwind.SaveChanges();
                return new HttpStatusCodeResult(HttpStatusCode.OK);
            }

            // Updating an item in the "Orders" collection
            public ActionResult UpdateOrder(int key, string values) {
                var order = _nwind.Orders.First(o => o.OrderID == key); // Finding the item to be updated by key
                JsonConvert.PopulateObject(values, order);              // Populating the found item with the changed values
                if (!TryValidateModel(order))                           // Validating the updated item
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest, ValidationErrorMessage);
                _nwind.SaveChanges();
                return new HttpStatusCodeResult(HttpStatusCode.Created);
            }

            // Removing an item from the "Orders" collection
            public void DeleteOrder(int key) {
                var order = _nwind.Orders.First(o => o.OrderID == key); // Finding the item to be removed by key
                _nwind.Orders.Remove(order);                            // Removing the found item
                _nwind.SaveChanges();
            }
        }
    }

    <!--VB-->
    Imports System.Linq
    Imports System.Net
    Imports DevExtreme.AspNet.Data
    Imports DevExtreme.AspNet.Mvc
    Imports Newtonsoft.Json
    Imports ProjectName.Models

    Namespace Controllers
        Public Class OrdersController
            Inherits Controller

            Dim _nwind As New NorthwindContext()
            Const ValidationErrorMessage As String = "The record cannot be saved due to a validation error"

            ' Fetching items from the "Orders" collection
            Public Function GetOrders(ByVal loadOptions As DataSourceLoadOptions) As ActionResult
                Dim result = DataSourceLoader.Load(_nwind.Orders, loadOptions);
                Dim resultJson = JsonConvert.SerializeObject(result);
                Return Content(resultJson, "application/json")
            End Function

            ' Inserting a new item into the "Orders" collection
            Public Function InsertOrder(ByVal values As String) As ActionResult
                Dim newOrder As New Order()                     ' Creating the a item
                JsonConvert.PopulateObject(values, newOrder)    ' Populating the item with values
                If TryValidateModel(newOrder) = False Then      ' Validating the item
                    Return New HttpStatusCodeResult(HttpStatusCode.BadRequest, ValidationErrorMessage)
                End If
                _nwind.Orders.Add(newOrder)                     ' Adding the item to the database
                _nwind.SaveChanges()
                Return New HttpStatusCodeResult(HttpStatusCode.Created)
            End Function

            ' Updating an item in the "Orders" collection
            Public Function UpdateOrder(ByVal key As Integer, ByVal values As String) As ActionResult
                Dim order = _nwind.Orders.First(Function(o)     ' Finding the item to be updated by key
                                                   Return o.OrderID = key
                                               End Function)
                JsonConvert.PopulateObject(values, order)       ' Populating the found item with the changed values
                If TryValidateModel(order) = False Then         ' Validating the updated item
                    Return New HttpStatusCodeResult(HttpStatusCode.BadRequest, ValidationErrorMessage)
                End If
                _nwind.SaveChanges()
                Return New HttpStatusCodeResult(HttpStatusCode.OK)
            End Function

            ' Removing an item from the "Orders" collection
            Public Sub DeleteOrder(ByVal key As Integer)
                Dim order = _nwind.Orders.First(Function(o)     ' Finding the item to be removed by key
                                                   Return o.OrderID = key
                                               End Function)
                _nwind.Orders.Remove(order)                     ' Removing the found item
                _nwind.SaveChanges()
            End Sub
        End Class
    End Namespace

##### .NET Core MVC Controller

    <!--C#-->
    using System;
    using System.Linq;
    using Microsoft.AspNetCore.Mvc;
    using DevExtreme.AspNet.Data;
    using DevExtreme.AspNet.Mvc;
    using Newtonsoft.Json;
    using ProjectName.Models;

    namespace ProjectName.Controllers {

        public class GridDataController : Controller {
            NorthwindContext _nwind;
            
            public OrdersController(NorthwindContext nwind) {
                _nwind = nwind;
            }

            const string ValidationErrorMessage = "The record cannot be saved due to a validation error";

            // Fetching items from the "Orders" collection
            public object GetOrders(DataSourceLoadOptions loadOptions) {
                return DataSourceLoader.Load(_nwind.Orders, loadOptions);
            }

            // Inserting a new item into the "Orders" collection
            public IActionResult InsertOrder(string values) {
                var newOrder = new Order();                             // Creating the new item
                JsonConvert.PopulateObject(values, newOrder);           // Populating the item with values
                if (!TryValidateModel(newOrder))                        // Validating the item
                    return BadRequest(ValidationErrorMessage);
                _nwind.Orders.Add(newOrder);                            // Adding the item to the database
                _nwind.SaveChanges();
                return Ok();
            }

            // Updating an item in the "Orders" collection
            public IActionResult UpdateOrder(int key, string values) {
                var order = _nwind.Orders.First(o => o.OrderID == key); // Finding the item to be updated by key
                JsonConvert.PopulateObject(values, order);              // Populating the found item with the changed values
                if (!TryValidateModel(order))                           // Validating the updated item
                    return BadRequest(ValidationErrorMessage);
                _nwind.SaveChanges();
                return Ok();
            }

            // Removing an item from the "Orders" collection
            public void DeleteOrder(int key) {
                var order = _nwind.Orders.First(o => o.OrderID == key); // Finding the item to be removed by key
                _nwind.Orders.Remove(order);                            // Removing the found item
                _nwind.SaveChanges();
            }
        }
    }

---

If you use a Web API controller in your app, configure access to it using the `WebApi()` method of the `DataSource()`'s lambda parameter. The `WebApi()` exposes the same methods as `Mvc()` for specifying the controller and action names, but with one addition: You can pass **true** to the `UpdateAction`, `InsertAction`, and `DeleteAction` methods if the actions are called `Get`, `Put`, `Post`, and `Delete`. The `WebApi()` method is not intended for .NET Core MVC apps.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .DataSource(ds => ds
            .WebApi()
            .Controller("GridDataWebApi")
            .Key("OrderID")
            .UpdateAction(true)
            .InsertAction(true)
            .DeleteAction(true)
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .DataSource(Function(ds)
            Return ds.WebApi() _
                     .Controller("GridDataWebApi") _
                     .Key("OrderID") _
                     .UpdateAction(true) _
                     .InsertAction(true) _
                     .DeleteAction(true)
        End Function)
    )

The controller looks like this:

---

##### Web API Controller

    <!--C#-->
    using System;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Web.Http;
    using DevExtreme.AspNet.Data;
    using DevExtreme.AspNet.Mvc;
    using System.Net.Http.Formatting;
    using Newtonsoft.Json;
    using ProjectName.Models;

    namespace ProjectName.Controllers {

        public class GridDataWebApiController : ApiController {
            NorthwindContext _nwind = new NorthwindContext();
            const string ValidationErrorMessage = "The record cannot be saved due to a validation error";

            [HttpGet] // Fetching items from the "Orders" collection
            public HttpResponseMessage Get(DataSourceLoadOptions loadOptions) {
                return Request.CreateResponse(DataSourceLoader.Load(_nwind.Orders, loadOptions));
            }
            
            [HttpPost] // Inserting a new item into the "Orders" collection
            public HttpResponseMessage Post(FormDataCollection form) {
                var values = form.Get("values");                        // Getting JSON-formatted values for the new item
                var newOrder = new Order();                             // Creating the new item
                JsonConvert.PopulateObject(values, newOrder);           // Populating the item with values
                Validate(newOrder);                                     // Validating the item
                if(!ModelState.IsValid)
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ValidationErrorMessage);
                _nwind.Orders.Add(newOrder);                            // Adding the item to the database
                _nwind.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.Created);
            }

            [HttpPut] // Updating an item in the "Orders" collection
            public HttpResponseMessage Put(FormDataCollection form) {
                var key = Convert.ToInt32(form.Get("key"));             // Getting the key of the item to be updated
                var values = form.Get("values");                        // and changed values for this item
                var order = _nwind.Orders.First(o => o.OrderID == key);  // Finding the item to be updated by key
                JsonConvert.PopulateObject(values, order);              // Populating the found item with the changed values
                Validate(order);                                        // Validating the updated item
                if(!ModelState.IsValid)
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ValidationErrorMessage);
                _nwind.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK);
            }

            [HttpDelete] // Removing an item from the "Orders" collection
            public void Delete(FormDataCollection form) {
                var key = Convert.ToInt32(form.Get("key"));             // Getting the key of the item to be removed
                var order = _nwind.Orders.First(o => o.OrderID == key);  // Finding the item to be removed by key
                _nwind.Orders.Remove(order);                            // Removing the found item
                _nwind.SaveChanges();
            }
        }
    }

    <!--VB-->
    Imports System.Linq
    Imports System.Net
    Imports System.Net.Http
    Imports System.Web.Http
    Imports DevExtreme.AspNet.Data
    Imports DevExtreme.AspNet.Mvc
    Imports System.Net.Http.Formatting
    Imports Newtonsoft.Json
    Imports ProjectName.Models

    Namespace Controllers
        Public Class GridDataWebApiController
            Inherits ApiController

            Dim _nwind As New NorthwindContext()
            Const ValidationErrorMessage As String = "The record cannot be saved due to a validation error"

            <HttpGet> ' Fetching items from the "Orders" collection
            Public Function [Get](ByVal loadOptions As DataSourceLoadOptions) As HttpResponseMessage
                Return Request.CreateResponse(DataSourceLoader.Load(_nwind.Orders, loadOptions))
            End Function

            <HttpPost> ' Inserting a new item into the "Orders" collection
            Public Function [Post](ByVal form As FormDataCollection) As HttpResponseMessage
                Dim values = form.Get("values")                 ' Getting JSON-formatted values for the new item
                Dim newOrder As New Order()                     ' Creating the new item
                JsonConvert.PopulateObject(values, newOrder)    ' Populating the item with values
                Validate(newOrder)                              ' Validating the item
                If ModelState.IsValid = False Then
                    Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ValidationErrorMessage)
                End If
                _nwind.Orders.Add(newOrder)                     ' Adding the item to the database
                _nwind.SaveChanges()
                Return Request.CreateResponse(HttpStatusCode.Created)
            End Function

            <HttpPut> ' Updating an item in the "Orders" collection
            Public Function [Put](ByVal form As FormDataCollection) As HttpResponseMessage
                Dim key = Convert.ToInt32(form.Get("key"))      ' Getting the key of the item to be updated
                Dim values = form.Get("values")                 ' and changed values for this item
                Dim order = _nwind.Orders.First(Function(o)     ' Finding the item to be updated by key
                                                   Return o.OrderID = key
                                               End Function)
                JsonConvert.PopulateObject(values, order)       ' Populating the found item with the changed values
                Validate(order)                                 ' Validating the updated item
                If ModelState.IsValid = False Then
                    Return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ValidationErrorMessage)
                End If
                _nwind.SaveChanges()
                Return Request.CreateResponse(HttpStatusCode.OK)
            End Function

            <HttpDelete> ' Removing an item from the "Orders" collection
            Public Sub [Delete](ByVal form As FormDataCollection)
                Dim key = Convert.ToInt32(form.Get("key"))      ' Getting the key of the item to be removed
                Dim order = _nwind.Orders.First(Function(o)     ' Finding the item to be removed by key
                                                   Return o.OrderID = key
                                               End Function)
                _nwind.Orders.Remove(order)                     ' Removing the found item
                _nwind.SaveChanges()
            End Sub
        End Class
    End Namespace

---

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/WebAPIService/Mvc/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

Previous examples show use-cases in which a control is on the same site as the data it accesses, and routing helps find the right controller and actions. If the data is on a different site, you can use the URL to access it via the `RemoteController()` method of the `DataSource()`'s lambda parameter. This method opens a chain whose members mirror the [client-side method fields](https://github.com/DevExpress/DevExtreme.AspNet.Data#client-side-method) in the already familiar DevExtreme.AspNet.Data library.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .DataSource(ds => ds
            .RemoteController()
            .Key("OrderID")
            .LoadUrl("http://www.example.com/Orders/GetOrders")
            .InsertUrl("http://www.example.com/Orders/InsertOrder")
            .UpdateUrl("http://www.example.com/Orders/UpdateOrder")
            .DeleteUrl("http://www.example.com/Orders/DeleteOrder")
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .DataSource(Function(ds)
            Return ds.RemoteController() _
                     .Key("OrderID") _
                     .LoadUrl("http://www.example.com/Orders/GetAllOrders") _
                     .InsertUrl("http://www.example.com/Orders/InsertOrder") _
                     .UpdateUrl("http://www.example.com/Orders/UpdateOrder") _
                     .DeleteUrl("http://www.example.com/Orders/DeleteOrder")
        End Function)
    )

In an app organized into [areas](https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/areas), a control from a view belonging to one area may need to access a data controller belonging to another. Use the `Area()` method to specify the data controller's area in this case. 

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .DataSource(ds => ds
            .Mvc()
            .Area("DifferentArea")
            // ...
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .DataSource(Function(ds)
            Return ds.Mvc() _
                     .Area("DifferentArea") _
                     ' ...
        End Function)
    )
