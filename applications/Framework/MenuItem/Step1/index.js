(function() {
    var MyApp = window.MyApp = { };
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            animationSet: DevExpress.framework.html.animationSets['default'],
            layoutSet: DevExpress.framework.html.layoutSets['simple'],
            //highlight
            commandMapping: {
                "ios-header-toolbar": {
                    commands: [
                      {
                          id: "menu-add",
                          locateInMenu: "always"
                      },
                      {
                          id: "menu-edit",
                          locateInMenu: "always"
                      },
                      {
                          id: "menu-remove",
                          locateInMenu: "always"
                      }
                    ]
                },
                "android-simple-toolbar": {
                    commands: [
                      {
                          id: "menu-add",
                          locateInMenu: "always"
                      },
                      {
                          id: "menu-edit",
                          locateInMenu: "always"
                      },
                      {
                          id: "menu-remove",
                          locateInMenu: "always"
                      }
                    ]
                },
                "win8-phone-appbar": {
                    commands: [
                      {
                          id: "menu-add",
                          locateInMenu: "always"
                      },
                      {
                          id: "menu-edit",
                          locateInMenu: "always"
                      },
                      {
                          id: "menu-remove",
                          locateInMenu: "always"
                      }
                    ]
                },
                "tizen-simple-toolbar": {
                    commands: [
                      {
                          id: "menu-add",
                          locateInMenu: "always"
                      },
                      {
                          id: "menu-edit",
                          locateInMenu: "always"
                      },
                      {
                          id: "menu-remove",
                          locateInMenu: "always"
                      }
                    ]
                },
                "generic-header-toolbar": {
                    commands: [
                      {
                          id: "menu-add",
                          locateInMenu: "always"
                      },
                      {
                          id: "menu-edit",
                          locateInMenu: "always"
                      },
                      {
                          id: "menu-remove",
                          locateInMenu: "always"
                      }
                    ]
                }
            }
            //highlight
        });     
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.navigate();
    });    
})();