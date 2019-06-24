DevExtreme provides an [API](/Documentation/ApiReference/Common/utils/localization/) for localizing messages, dates, or numbers in your app. 

The following example demonstrates how to localize a message. The [loadMessages()](/Documentation/ApiReference/Common/utils/localization/#loadMessagesmessages) method loads dictionaries for several locales. The current locale is specified using the [locale()](/Documentation/ApiReference/Common/utils/localization/#localelocale) method. The [formatMessage()](/Documentation/ApiReference/Common/utils/localization/#formatMessagekey_value) method gets a message from the current locale's dictionary.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var userName = "John";
        DevExpress.localization.loadMessages({
            "en": {
                "greetingMessage": "Good morning, {0}!"
            },
            "de": {
                "greetingMessage": "Guten morgen, {0}!"
            }
        });
        DevExpress.localization.locale(navigator.language);
        $("#greeting").text(
            DevExpress.localization.formatMessage("greetingMessage", userName);
        )
    })

    <!--HTML-->
    <h1 id="greeting"></h1>

##### Angular

    <!-- tab: app.component.html -->
    <h1>{{ greeting }}</h1>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { formatMessage, loadMessages, locale } from 'devextreme/localization';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor() {
            loadMessages({
                'en': {
                    'greetingMessage': 'Good morning, {0}!'
                },
                'de': {
                    'greetingMessage': 'Guten morgen, {0}!'
                }
            });
            locale('de');
        }

        userName: string = 'John';
        get greeting() {
            return formatMessage('greetingMessage', this.userName);
        }
    }


---

To localize a custom date or number, apply a format to it as shown in the [Format Custom Values](/Documentation/Guide/Common/Value_Formatting/#Format_Custom_Values) article. You app should have [Intl](/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl) or [Globalize](/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Globalize) configured.
