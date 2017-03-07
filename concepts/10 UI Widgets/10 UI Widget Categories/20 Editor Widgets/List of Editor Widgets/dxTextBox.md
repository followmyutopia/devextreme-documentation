<article data-show="Content/Applications/16_1/UIWidgets/dxTextBox/markup.html,
        Content/Applications/16_1/UIWidgets/dxTextBox/script.js,
        Content/Applications/16_1/UIWidgets/dxTextBox/styles.css">

The [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/) widget enables a user to enter and edit a single line of text.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorstextboxtextboxtextbox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value)  
- [Handle the value change event](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event)  

In addition to common editor functionality, the widget enables you to perform the following adjustments.

**Limit the number of typed characters**

The widget allows you to limit the number of typed characters to the [maxLength](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#maxLength) option value.

    <!--JavaScript-->
    var textBoxOptions = {
        maxLength: 10
    }

**Specify the widget mode**

You can also specify the text box mode using the [mode](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#mode) option. This option passes the value to the **mode** attribute of the underlying **&lt;input&gt;** element. This option can take on values supported by the **mode** attribute of the **&lt;input&gt;** element.

    <!--JavaScript-->
    var textBoxOptions = {
        mode: 'password'
    }

<a name="dxTextBox_Masked_Edit"></a>
**Masked edit**

The **TextBox** widget enables you to specify a mask for the entered string using the [mask](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#mask) option. You can also specify mask placeholder character using the [maskChar](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#maskChar) option. The text displayed when a user enters a value, which does not match the mask, is specified using the [maskInvalidMessage](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#maskInvalidMessage) option.

    <!--JavaScript-->
    var textBoxOptions = {
        mask: '+1(999)000-0000',
        maskChar: '#',
        maskInvalidMessage: 'Value does not match pattern'
    }

For the full list of built-in mask rules, refer to the [mask](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#mask) option description in the API reference.

You can extend the built-in mask functionality by creating custom mask rules. A mask rule is specified as a key-value pair. A key holds a metacharacter. A value specifies which characters are accepted by the metacharacter. You can specify a rule value in any of following ways.

    <!--JavaScript-->
    var CustomMaskRules = {
        // a single character
        's': '$',

        // a regular expression
        'h': /[0-9A-F]/,

        // an array of characters
        'n': ['$', '%', '&', '@'],

        // a function
        'f': function(char) {
            var allowedChars = ['a', 'b', 'c', '$', '_', '.'];
            for(var i = 0; i < allowedChars.length; i++) {
                if (char === allowedChars[i])
                    return true;
            }
            return false;
        }
    }

Pass an object containing one or more rules to the [maskRules](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#maskRules) option.
</article>