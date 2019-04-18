<!--widgettree-->
fileProvider: [{
    name: "Documents",
    isFolder: true,
    children: [{
        name: "Projects",
        isFolder: true,
        children: [{
            name: "About.rtf",
            isFolder: false
        }, {
            name: "Passwords.rtf",
            isFolder: false
        }]
    }, {
        name: "About.xml",
        isFolder: false
    }, {
        name: "Managers.rtf",
        isFolder: false
    }, {
        name: "ToDo.txt",
        isFolder: false
    }],
}, {
    name: "Images",
    isFolder: true,
    children: [{
        name: "logo.png",
        isFolder: false
    }, {
        name: "banner.gif",
        isFolder: false
    }]
}, {
    name: "System",
    isFolder: true,
    children: [{
        name: "Employees.txt",
        isFolder: false
    }, {
        name: "PasswordList.txt",
        isFolder: false
    }]
}, {
    name: "Description.rtf",
    isFolder: false
}, {
    name: "Description.txt",
    isFolder: false,
}],
permissions: {
    create: true,
    copy: true,
    move: true,
    remove: true,
    rename: true
},
itemView: {
    mode: "thumbnails"
}
<!--/widgettree-->
===========================================================================
<!--module-->ui/file_manager<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
[tags] ctp

The **FileManager** is a widget that allows users to upload, select, and manage files and folders on different file storages.

[note] The **FileManager** is at the Community Technology Preview (CTP) development stage: the component is available for testing, but its concept, design, and behavior can be reconsidered and changed without notice.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/jQuery/Light/"
}
<!--/fullDescription-->