import { Plugin } from 'aws-rum-web';

export class MyClickEventPlugin implements Plugin {
    constructor() {
        this.enabled;
        this.context;
        this.id = 'custom_click_event';
    }
    // Load MyCustomPlugin.
    load(context) {
        this.context = context;
        this.enable();
    }
    // Turn on MyCustomPlugin.
    enable() {
        this.enabled = true;
        this.addEventHandler();
    }
    // Turn off MyCustomPlugin.
    disable() {
        this.enabled = false;
        this.removeEventHandler();
    }
    // Return MyCustomPlugin Id.
    getPluginId() {
        return this.id;
    }
    // Record custom event.
    record(data) {
        this.context.record('custom_click_event', data);
    }
    private getCookie(name: string) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    private getInteractionId = (event: Event): string => {
        const eventPath = event.composedPath() as Element[];
        for (const element of eventPath) {
            return element.outerHTML.toString().trim();
        }
        return '';
    };
    // EventHandler.
    private eventHandler = (clickEvent: Event) => {
        this.record({ eventType: "click", elementInfo: this.getInteractionId(clickEvent), JSESSIONID: this.getCookie("JSESSIONID"), timestamp: Date.now() })
    }
    // Attach an eventHandler to scroll event.
    private addEventHandler(): void {
        window.addEventListener('click', this.eventHandler);
    }
    // Detach eventHandler from scroll event.
    private removeEventHandler(): void {
        window.removeEventListender('click', this.eventHandler);
    }
}
