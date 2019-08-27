---
id: DevicesObject.orientationChanged
type: eventType
---
---
##### shortDescription
Fires after device orientation is changed.

##### param(e): object
Information about the event.

##### field(e.orientation): String
A new device orientation: *"portrait"* or *"landscape"*.

---
Use the [on(eventName, eventHandler)](/Documentation/ApiReference/Common/Utils/devices/Methods/#oneventName_eventHandler) method to subscribe to this event and the [off(eventName)](/Documentation/ApiReference/Common/Utils/devices/Methods/#offeventName) method to unsubscribe from it.