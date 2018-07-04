A mask defines a pattern for the **TextBox** value. You can specify the mask using the [mask](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#mask) option. A mask can contain the following elements.

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Masking Element</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>0</td>
      <td>A digit.</td>
    </tr>
    <tr>
      <td>9</td>
      <td>A digit or a space.</td>
    </tr>
    <tr>
      <td>&#35;</td>
      <td>A digit, a space, "+" or "-" sign.</td>
    </tr>
    <tr>
      <td>L</td>
      <td>A literal.</td>
    </tr>
    <tr>
      <td>C</td>
      <td>Any character except space.</td>
    </tr>
    <tr>
      <td>c</td>
      <td>Any character.</td>
    </tr>
    <tr>
      <td>A</td>
      <td>An alphanumeric.</td>
    </tr>
    <tr>
      <td>a</td>
      <td>An alphanumeric or a space.</td>
    </tr>
    </tbody>
  </table>
</div>

You can also define custom masking elements using the [maskRules](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#maskRules) object. Each field of this object defines a single masking element.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            mask: "SFFFFHN",
            maskRules: {
                // a single character
                'S': '$',

                // a regular expression
                'H': /[0-9A-F]/,

                // an array of characters
                'N': ['$', '%', '&', '@'],

                // a function
                'F': function (char) {
                    return char == char.toUpperCase();
                }
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-box
        mask="SFFFFHN"
        [maskRules]="maskRules">
    </dx-text-box>

    <!--TypeScript-->
    import { DxTextBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        maskRules = {
            // a single character
            'S': '$',

            // a regular expression
            'H': /[0-9A-F]/,

            // an array of characters
            'N': ['$', '%', '&', '@'],

            // a function
            'F': function (char) {
                return char == char.toUpperCase();
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule
        ],
        // ...
    })

---

The masked value goes to the read-only [text](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#text) option, while its unmasked equivalent goes to the [value](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#value) option. If you use jQuery, you can get the value of either of these options using the [option(optionName)](/Documentation/ApiReference/UI_Widgets/dxTextBox/Methods/#optionoptionName) method.

    <!--JavaScript-->var maskedValue = $("#textBoxContainer").dxTextBox("option", "text");
    var unmaskedValue = $("#textBoxContainer").dxTextBox("option", "value");
    
By default, the widget uses underscores to designate blanks in the masked value. You can specify another symbol using the [maskChar](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#maskChar) option.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            mask: "+1 (200) 000-0000",
            maskChar: "‒"
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-box
        mask="+1 (200) 000-0000"
        maskChar="‒">
    </dx-text-box>

    <!--TypeScript-->
    import { DxTextBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule
        ],
        // ...
    })

---

If the input value does not match the mask, the **TextBox** displays an error message specified by the [maskInvalidMessage](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#maskInvalidMessage) option.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            mask: "+1 (200) 000-0000",
            maskInvalidMessage: "The input value does not match the mask"
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-box
        mask="+1 (200) 000-0000"
        maskInvalidMessage="The input value does not match the mask">
    </dx-text-box>

    <!--TypeScript-->
    import { DxTextBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTextBoxModule
        ],
        // ...
    })

---

#####See Also#####
- [TextBox Demos](/Demos/WidgetsGallery/#demo/editors-text_box-overview)
- [TextBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTextBox/)

[tags]textBox, text box, editor, input pattern, input mask, custom masking elements, maskChar, useMaskedValue