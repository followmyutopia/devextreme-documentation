Client-side data validation allows you to validate input values _before_ sending them to the server, and therefore, without reloading the page. DevExtreme ASP.NET MVC Wrappers validate input values using the [Data Annotation validation attributes](https://www.asp.net/mvc/overview/older-versions/mvc-music-store/mvc-music-store-part-6) of model properties. The following validation attributes are supported.

- `[Required]`
- `[StringLength]`
- `[Range]`
- `[RegularExpression]`
- `[Compare]`
- `[Custom]`

Model properties that have one or several of these attributes can be validated. For example, suppose that a `Person` model contains a `FirstName` property that has three validation attributes.

    <!--C#-->
    using System.ComponentModel.DataAnnotations;

    namespace ApplicationName.Models {
        public class Person {
            [Required(ErrorMessage = "First name is required")]
            [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Do not use digits in the first name")]
            [StringLength(int.MaxValue, MinimumLength = 2, ErrorMessage = "First name must have at least 2 symbols")]
            public string FirstName { get; set; }
        }
    }

    <!--VB-->
    Imports System.ComponentModel.DataAnnotations

    Namespace ApplicationName.Models
        Public Class Person
            <Required(ErrorMessage:="First name is required")>
            <RegularExpression("^[a-zA-Z\s]+$", ErrorMessage:="Do not use digits in the first name")>
            <StringLength(Integer.MaxValue, MinimumLength:=2, ErrorMessage:="First name must have at least 2 symbols")>
            Public Property FirstName() As String
        End Class
    End Namespace

To apply these validation attributes to a DevExtreme editor, simply bind this editor to the model property using the `Name` method. In the following code, the DevExtreme [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/) widget plays the role of the editor.

    <!--Razor C#-->
    @model ApplicationName.Models.Person

    @(Html.DevExtreme().TextBox()
        .Name("FirstName")
        .Value(Model.FirstName)
    )

    <!--Razor VB-->
    @ModelType ApplicationName.Models.Person

    @(Html.DevExtreme().TextBox() _
        .Name("FirstName") _
        .Value(Model.FirstName)
    )

[note] For the [RangeSlider](/Documentation/ApiReference/UI_Widgets/dxRangeSlider) widget, use the `StartName` and `EndName` methods instead of the `Name` method.

By default, the input value is validated each time the [change](https://developer.mozilla.org/en-US/docs/Web/Events/change) event is raised. To change the DOM event that triggers validation, set the [valueChangeEvent](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#valueChangeEvent) option.

    <!--Razor C#-->
    @(Html.DevExtreme().TextBox()
        .Name("FirstName")
        .Value(Model.FirstName)
        .ValueChangeEvent("keyup")
    )

    <!--Razor VB-->
    @(Html.DevExtreme().TextBox() _
        .Name("FirstName") _
        .Value(Model.FirstName) _
        .ValueChangeEvent("keyup")
    )

[note]

If the `[Range]` attribute should limit a date or time range, use the `RangeAttribute` [overload that accepts type](https://msdn.microsoft.com/en-us/library/cc679255(v=vs.110).aspx) as the first argument. The date/time values must be set as strings. See an example in the following code.

    <!--C#-->
    namespace ApplicationName.Models {
        public class Person {
            // ...
            [Range(typeof(DateTime), "1/1/1901", "1/1/2016")]
            public DateTime BirthDate { get; set; }
        }
    }    

    <!--VB-->
    Imports System.ComponentModel.DataAnnotations

    Namespace Models
        Public Class Person
            ' ...
            <Range(GetType(DateTime), "1/1/1901", "1/1/2016")>
            Public Property BirthDate() As DateTime
        End Class
    End Namespace

[/note]

#####See Also#####
- [ASP.NET MVC Wrappers - Fundamentals](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/)
- [Client-Side Validation - Validate a Group of Editors](/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Validate_a_Group_of_Editors)
- [Client-Side Validation - Implement a Custom Validation Rule](/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Implement_a_Custom_Validation_Rule)
- [Client-Side Validation - Validate and Submit an HTML Form](/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Validate_and_Submit_an_HTML_Form/)
- [Client-Side Validation - Validate and Submit the Form Widget](/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Validate_and_Submit_the_Form_Widget/)

[tags]asp.net mvc wrappers, client-side data validation, data annotations, validation attributes