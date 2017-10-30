<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->''<!--/default-->
<!--type-->format<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the value's display format and controls the user input according to it.
<!--/shortDescription-->

<!--fullDescription-->
The format can contain the following characters:

<div class="simple-table">
  <table>
    <thead>
    <tr>
      <th>Format character</th>
      <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>0</td>
      <td>A digit. Displays '0' if it is not specified in the UI.</td>
    </tr>
    <tr>
      <td>&#35;</td>
      <td>
            A digit or nothing. One symbol matches several integer digits, but only one decimal digit. </br> 
            For example, "#.#" matches "123.4", not "123.45".
      </td>
    </tr>
    <tr>
      <td>.</td>
      <td>A decimal separator. Displayed in the localized variant.</td>
    </tr>
    <tr>
      <td>,</td>
      <td>A group separator. Displayed in the localized variant.</td>
    </tr>
    <tr>
      <td>%</td>
      <td>
            The percent sign. Divides the input value by 100. </br>    
            If it is enclosed in single quotes ('%'), it only adds this sign to the input value.
      </td>
    </tr>
    <tr>
      <td>;</td>
      <td>Separates positive and negative numbers. If there is no explicit negative format, a positive number receives the "-" prefix. </td>
    </tr>
    <tr>
      <td>Other characters</td>
      <td>
            Any character. Should be placed only at the format string's beginning or end. </br>
            You can use the special characters above as well (in single quote marks).
      </td>
    </tr>
    </tbody>
  </table>
</div>

<!--/fullDescription-->