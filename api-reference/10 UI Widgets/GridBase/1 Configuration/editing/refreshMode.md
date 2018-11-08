===========================================================================
<!--default-->'full'<!--/default-->
<!--acceptValues-->'full' | 'reshape' | 'repaint'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies operations that are performed after saving changes.
<!--/shortDescription-->

<!--fullDescription-->
The following table shows the operations that are performed after saving changes in different modes:

<div class="simple-table">
<table style="text-align:center">
 <tr>
    <th>Mode</th>
    <th>Data <a href="/Documentation/ApiReference/Data_Layer/DataSource/Methods/#reload">reloading</a> </th>
    <th>Data processing operations<sup>*</sup></th>
    <th>Widget repaint<sup>**</sup></th>
 </tr>
  <tr>
    <td>full</td>
    <td>+</td>
    <td>+</td>
    <td>+</td>
 </tr>
 <tr>
    <td>reshape</td>
    <td>- <sup>***</sup></td>
    <td>+<br>(on the client)</td>
    <td>+</td>
 </tr>
 <tr>
    <td>repaint</td>
    <td>-</td>
    <td>-</td>
    <td>+</td>
 </tr>
</table>
</div>

<div style="font-size:12px;margin-bottom:10px;margin-left:25px">
    <sup>*</sup> - Data processing operations include paging, filtering, sorting, grouping, and summary calculation (in the <b>DataGrid</b>). <br/>
    <sup>**</sup> - Set <a href="{basewidgetpath}/Configuration/#repaintChangesOnly">repaintChangesOnly</a> to <b>true</b> to repaint only elements whose data changed. <br/>
    <sup>***</sup> - Set <a href="{basewidgetpath}/Configuration/remoteOperations/">remoteOperations</a> to <b>false</b> and <a href="{basewidgetpath}/Configuration/#cacheEnabled">cacheEnabled</a> to <b>true</b> to avoid data reloading.
</div>

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/CRUDOperations/jQuery/Light/"
}

#include common-ref-enum with {
    enum: "`GridEditRefreshMode`",
    values: "`Full`, `Reshape`, and `Repaint`"
}
<!--/fullDescription-->