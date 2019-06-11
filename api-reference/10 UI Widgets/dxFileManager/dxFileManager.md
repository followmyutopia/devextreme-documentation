<!--id-->dxFileManager<!--/id-->
<!--widgettree-->
fileProvider: [{
    name: "Documents",
    isDirectory: true,
    items: [{
        name: "Projects",
        isDirectory: true,
        items: [{
            name: "About.rtf",
            isDirectory: false
        }, {
            name: "Passwords.rtf",
            isDirectory: false
        }]
    }, {
        name: "About.xml",
        isDirectory: false
    }, {
        name: "Managers.rtf",
        isDirectory: false
    }, {
        name: "ToDo.txt",
        isDirectory: false
    }],
}, {
    name: "Images",
    isDirectory: true,
    items: [{
        name: "logo.png",
        isDirectory: false
    }, {
        name: "banner.gif",
        isDirectory: false
    }]
}, {
    name: "System",
    isDirectory: true,
    items: [{
        name: "Employees.txt",
        isDirectory: false
    }, {
        name: "PasswordList.txt",
        isDirectory: false
    }]
}, {
    name: "Description.rtf",
    isDirectory: false
}, {
    name: "Description.txt",
    isDirectory: false,
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

The **FileManager** is a widget that allows users to upload, select, and manage files and directories in different file storages.

#include common-ctp-note with {
    component: "FileManager"
}
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/jQuery/Light/"
}
<!--/fullDescription-->