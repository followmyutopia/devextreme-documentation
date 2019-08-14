Exposes an object that serves as a namespace for methods used for working with [UI events](/Documentation/ApiReference/UI_Widgets/UI_Events/).

Exports:

- *off* - The [off](/Documentation/ApiReference/Common/utils/events/#offelement_eventName_selector_handler) method

        require("events").off;
        // ===== or =====
        import { off } from "devextreme/events";

- *on* - The [on](/Documentation/ApiReference/Common/utils/events/#onelement_eventName_selector_data_handler) method

        require("events").on;
        // ===== or =====
        import { on } from "devextreme/events";

- *one* - The [one](/Documentation/ApiReference/Common/utils/events/#oneelement_eventName_selector_data_handler) method

        require("events").one
        // ===== or =====
        import { one } from "devextreme/events";

- *trigger* - The [trigger](/Documentation/ApiReference/Common/utils/events/#triggerelement_event_extraParameters) method

        require("events").trigger;
        // ===== or =====
        import { trigger } from "devextreme/events";