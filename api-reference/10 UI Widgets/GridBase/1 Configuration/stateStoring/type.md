<!--id-->GridBase.Options.stateStoring.type<!--/id-->
===========================================================================
<!--default-->'localStorage'<!--/default-->
<!--acceptValues-->'custom' | 'localStorage' | 'sessionStorage'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of storage where the state is saved.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values: 

- *"sessionStorage"*    
    The state is stored for the duration of the browser's session.

- *"localStorage"*  
    The state is stored in the local storage and has no expiration time.

- *"custom"*       
    Puts state storing into manual mode. You need to implement the [customSave]({basewidgetpath}/Configuration/stateStoring/#customSave) and [customLoad]({basewidgetpath}/Configuration/stateStoring/#customLoad) functions. 

#include common-ref-enum with {
    enum: "`StateStoringType`",
    values: "`LocalStorage`, `SessionStorage`, and `Custom`"
}
<!--/fullDescription-->