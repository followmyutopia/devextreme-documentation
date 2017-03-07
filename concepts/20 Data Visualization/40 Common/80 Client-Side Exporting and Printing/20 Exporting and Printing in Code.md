To export a widget in code, call its [exportTo(fileName, format)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#exportTofileName_format) method passing the needed file name and format (*'PNG'*, *'PDF'*, *'JPEG'*, *'SVG'* or *'GIF'*) as the arguments.

    <!--JavaScript-->widgetInstance.exportTo('Test Chart', 'PDF');
    
To print a widget, call its [print()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#print) method. Like the **Print** command in the [**Exporting/Printing** menu](/Documentation/Guide/Data_Visualization/Common/Client-Side_Exporting_and_Printing/#Exporting_and_Printing_in_the_UI), this method opens the Print window in the browser.

    <!--JavaScript-->widgetInstance.print();
    
Also, the DevExtreme Data Visualization widgets fire the following exporting-related events.

- [exporting](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#exporting)  
Allows you to request export details or prevent exporting.
- [exported](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#exported)  
Allows you to notify an end user when exporting is completed.
- [fileSaving](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#fileSaving)        
Allows you to access exported data in the <a href="https://en.wikipedia.org/wiki/Binary_large_object" target="_blank">BLOB</a> format and/or prevent it from being saved in a file on the user's local storage.