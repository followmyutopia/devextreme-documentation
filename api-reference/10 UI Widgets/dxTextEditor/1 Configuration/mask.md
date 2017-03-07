<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The mask of editor which makes to enter string matching a specific format.
Supports following built-in patterns:
'0' is digit only
'9' is digit or space
'#' is digit or space|'+'|'-'
'L' is literal only
'l' is literal only or space
'C' is any char except space
'c' is any char
'A' is alphanumeric
'a' is alphanumeric or space
Built-in symbols may be escaped with backslash '\'.<!--/d-->
===========================================================================
<!--default-->''<!--/default-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
The editor mask that specifies the format of the entered string.
<!--/shortDescription-->

<!--fullDescription-->
A mask can contain the following elements.

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

[note] To escape the masking elements, use the double backslash character (\\\). For example, *"000.\\\0\\\0"*.
<!--/fullDescription-->