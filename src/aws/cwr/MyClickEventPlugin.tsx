import { Plugin, PluginContext } from 'aws-rum-web';

interface CustomClickRecordData { eventType: string; elementInfo: string; JSESSIONID: string | undefined; timestamp: number; };

export class MyClickEventPlugin implements Plugin {
    private getInteractionId = (event: Event): string => {
        const eventPath = event.composedPath() as Element[];
        for (const element of eventPath) {
            return element.outerHTML.toString().trim();
        }
        return '';
    };
    private getCookie(name: string) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    protected context!: PluginContext;
    id: string;

    constructor() {
        this.id = 'MyScrollEventPlugin';
    }

    load(context: PluginContext) {
        this.context = context;
        this.enable();
    }

    enable() {
        window.addEventListener('click', this.eventHandler);
    }

    disable() {
        window.removeEventListener('click', this.eventHandler);
    }
    record<CustomClickRecordData>(data: CustomClickRecordData)  {
        this.context.record('custom_click_event', data as Object);
    }

    getPluginId() {
        return this.id;
    }

    private eventHandler = (clickEvent: Event) => {
        this.record({ eventType: "click", elementInfo: this.getInteractionId(clickEvent), JSESSIONID: this.getCookie("JSESSIONID"), timestamp: Date.now() });
    };
}

// export class MyClickEventPlugin implements Plugin {
//     enabled: any;
//     context: any;
//     id: string;
//     constructor() {
//         this.enabled;
//         this.context;
//         this.id = 'custom_click_event';
//     }
//     // Load MyCustomPlugin.
//     load(context: any) {
//         this.context = context;
//         this.enable();
//     }
//     // Turn on MyCustomPlugin.
//     enable() {
//         this.enabled = true;
//         this.addEventHandler();
//     }
//     // Turn off MyCustomPlugin.
//     disable() {
//         this.enabled = false;
//         this.removeEventHandler();
//     }
//     // Return MyCustomPlugin Id.
//     getPluginId() {
//         return this.id;
//     }
//     // Record custom event.
//     record:<D>(data: { eventType: string; elementInfo: string; JSESSIONID: string | undefined; timestamp: number; }) => {
//         this.context.record('custom_click_event', data);
//     }
//     private getCookie(name: string) {
//         let matches = document.cookie.match(new RegExp(
//             "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//         ));
//         return matches ? decodeURIComponent(matches[1]) : undefined;
//     }
//     private getInteractionId = (event: Event): string => {
//         const eventPath = event.composedPath() as Element[];
//         for (const element of eventPath) {
//             return element.outerHTML.toString().trim();
//         }
//         return '';
//     };
//     // EventHandler.
//     private eventHandler = (clickEvent: Event) => {
//         this.record({ eventType: "click", elementInfo: this.getInteractionId(clickEvent), JSESSIONID: this.getCookie("JSESSIONID"), timestamp: Date.now() })
//     }
//     // Attach an eventHandler to scroll event.
//     private addEventHandler(): void {
//         window.addEventListener('click', this.eventHandler);
//     }
//     // Detach eventHandler from scroll event.
//     private removeEventHandler(): void {
//         window.removeEventListener('click', this.eventHandler);
//     }
// }
