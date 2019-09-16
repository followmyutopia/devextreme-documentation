---
id: dxGantt
module: ui/gantt
export: default
inherits: Widget
---
---
##### shortDescription
[tags] ctp

The **Gantt** is a widget that displays the task flow and dependencies between tasks. 

#include common-ctp-note with {
    component: "Gantt"
}

##### widgettree
tasks: {
 dataSource: 
[{
    "id": 1,
    "parentId": 0,
    "title": "Software Development",
    "start": "2019-02-17T05:00:00.000Z",
    "end": "2019-02-22T09:00:00.000Z",
    "progress": 31
}, {
    "id": 2,
    "parentId": 1,
    "title": "Scope",
    "start": "2019-02-17T05:00:00.000Z",
    "end": "2019-02-22T09:00:00.000Z",
    "progress": 60
}, {
    "id": 3,
    "parentId": 2,
    "title": "Determine project scope",
    "start": "2019-02-17T05:00:00.000Z",
    "end": "2019-02-17T09:00:00.000Z",
    "progress": 100
}, {
    "id": 4,
    "parentId": 2,
    "title": "Secure project sponsorship",
    "start": "2019-02-17T10:00:00.000Z",
    "end": "2019-02-18T09:00:00.000Z",
    "progress": 100
}, {
    "id": 5,
    "parentId": 2,
    "title": "Define preliminary resources",
    "start": "2019-02-18T10:00:00.000Z",
    "end": "2019-02-21T09:00:00.000Z",
    "progress": 60
}, {
    "id": 6,
    "parentId": 2,
    "title": "Secure core resources",
    "start": "2019-02-21T10:00:00.000Z",
    "end": "2019-02-22T09:00:00.000Z",
    "progress": 0
}, {
    "id": 7,
    "parentId": 2,
    "title": "Scope complete",
    "start": "2019-02-22T09:00:00.000Z",
    "end": "2019-02-22T09:00:00.000Z",
    "progress": 0
}]
},
columns: [{
    dataField: "title",
    caption: "Subject"
}],
treeListWidth: 150

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Gantt/Overview/jQuery/Light/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
