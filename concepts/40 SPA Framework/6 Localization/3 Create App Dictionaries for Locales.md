Using the [created dictionary](/Documentation/Guide/SPA_Framework/Localization/#Generate_a_Dictionary_for_Your_App) as a base, create dictionaries for different locales. For this purpose, do the following.

- Make a copy of the *localization.XX.js* file and rename it replacing XX with the required locale identifier.

- Modify the **Globalize.loadMessages** function call. Apply the following modifications to the **Globalize.loadMessages** function call.
- Rename the field of an argument object passed to this function using the required locale identifier.
- Provide the corresponding translation for the keys.

        <!--JavaScript-->
        Globalize.loadMessages({
            "de": {
                "billTotal": "Rechnungsbetrag",
                "typeHere": "Hier eingeben"
            }
        });