A user can interact with the widget using the following keys:

<div class="simple-table">
    <table>
        <tr>
          <th style="width:25%;">Key</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>&larr; &rarr; &uarr; &darr;</td>
          <td>Navigates through cells</td>
        </tr>
        <tr>
          <td>Enter</td>
          <td>
            <ul>
                <li>Expands or collapses a group row.<sup>1</sup></li>
                <li>Switches a cell into the editing state.</li>
                <li>Saves changes made in a cell or row and switches it back to its normal state.</li>
            </ul>
          </td>        
        </tr>
        <tr>
          <td>Esc</td>
          <td>Cancels changes made in a cell or row and switches it back to its normal state.</td>
        </tr>
        <tr>
          <td>Alt + &#8595;</td>
          <td>Opens a drop-down editor (a select box<sup>2</sup>, a calendar<sup>3</sup>, etc.) in the editing state.</td>
        </tr>
        <tr>
          <td>Space</td>
          <td>Selects the focused row and clears the selection of previously selected rows.<sup>4</sup></td>        
        </tr>
        <tr>
          <td>Ctrl + Space or Ctrl + Click</td>
          <td>Selects or clears the selection of the focused row.<br />
              Previously selected rows remain selected.<sup>5</sup>
          </td>        
        </tr>
        <tr>
          <td>Shift + Space or Shift + Click</td>
          <td>Selects or clears the selection of a range of rows between the last selected or deselected and the focused rows.<sup>5</sup></td>
        </tr>
        <tr>
          <td>Ctrl + A</td>
          <td>Selects all rows.<sup>4,6</sup></td>
        </tr>
        <tr>
          <td>Ctrl + F</td>
          <td>Focuses the search panel.<sup>7</sup>
        </tr>
        <tr>
          <td>PageUp / PageDown</td>
          <td>Navigates to the previous/next page.
        </tr>
        <tr>
          <td>Tab / Shift + Tab</td>
          <td>Moves the focus one cell forward/back.<br /> Focuses the first/last cell in the next/previous row if cells in the current row run out.</td>
        </tr>
        <tr>
          <td>
            Shift + Click / Ctrl + Click<br/>
            on a column header
          </td>
          <td>Applies/clears the column's sorting settings.<sup>8</sup></td>
        </tr>
    </table>
</div>

<div style="font-size:12px">
    <sup>1</sup> - <b>grouping</b> | <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping#allowCollapsing">allowCollapsing</a> must be <i>true</i>.<br />
    <sup>2</sup> - A select box appears in a data cell when you use a <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/lookup">lookup</a> in a column.<br />
    <sup>3</sup> - A calendar appears in a data cell when a column contains <i>"date"</i> <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType">type</a> data.<br />
    <sup>4</sup> - <b>selection</b> | <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode">mode</a> must be different from <i>"none"</i>.<br />
    <sup>5</sup> - <b>selection</b> | <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#mode">mode</a> must be <i>"multiple"</i>.<br />
    <sup>6</sup> - <b>selection</b> | <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll">allowSelectAll</a> must be <i>true</i>.<br />
    <sup>7</sup> - The <a href="/Documentation/17_1/Guide/Widgets/DataGrid/Visual_Elements/#Search_Panel">search panel</a> must be visible.<br />
    <sup>8</sup> - <b>sorting</b> | <a href="/Documentation/17_1/ApiReference/UI_Widgets/dxDataGrid/Configuration/sorting/#mode">mode</a> must be <i>"multiple"</i>.
</div>
