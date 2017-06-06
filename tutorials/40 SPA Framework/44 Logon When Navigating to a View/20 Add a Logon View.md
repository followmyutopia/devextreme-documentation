<article data-show="/Content/Applications/17_2/framework/LogonPopup/step2/index.html" data-show-first="views/logon.html">

Add a 'login' view to the application.

- Implement the view's HTML template.  
	An end user will enter his/her credentials within this view. So add a [field set](/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-fieldset) with the **E-mail** and **Password** fields, and two [buttons](/Documentation/ApiReference/UI_Widgets/dxButton/) - **Log on** and **Cancel** - to this view. Bind the field values as well as the button click actions to the corresponding ViewModel fields - **email**, **password**, **logIn** and **close**.

- Implement a ViewModel for the 'login' view.  
	Currently, the ViewModel will have the **email** and **password** [observable](http://knockoutjs.com/documentation/observables.html) fields and the **logIn** and **close** fields that are set to empty functions (at this step).
  
- Add links to the files with the view's HTML template and ViewModel object to the application's main page (the *index.html* file).

- Add the [Popup Layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Popup_Layout) to the application, since this layout will be used to display the "login" view as a popup modal view.  
    [note]Add links to the Popup Layout after other layout links.

</article>


