
import { AwsRum, AwsRumConfig } from 'aws-rum-web';
import { MyClickEventPlugin } from './MyClickEventPlugin';

function awsRumClient(){

try {
    const getInteractionId = (event: Event): string => {
      const eventPath = event.composedPath() as Element[];
      for (const element of eventPath) {
        if (element.hasAttribute && element.hasAttribute('data-rum-id')) {
          return element.getAttribute('data-rum-id') as string;
        }
      }
      return '';
    };
    const myClickCustomEventPlugin: MyClickEventPlugin = new MyClickEventPlugin();
    const config: AwsRumConfig = {
      sessionSampleRate: 1,
      identityPoolId: "ap-northeast-2:00af3603-fbe4-4aae-8745-5bf81af602be",
      endpoint: "https://dataplane.rum.ap-northeast-2.amazonaws.com",
      eventPluginsToLoad: [myClickCustomEventPlugin],
      telemetries: ["performance", "errors", "http"
        // , ['interaction', {
        //   events: [{ event: 'click', element: document }],
        //   interactionId: getInteractionId,
        //   enableMutationObserver: true
        // }]
      ],
      allowCookies: true,
      enableXRay: false
    };
  
    const APPLICATION_ID: string = 'ca483956-5e54-4ce6-b2a1-61188c790d7d';
    const APPLICATION_VERSION: string = '1.0.0';
    const APPLICATION_REGION: string = 'ap-northeast-2';
  
    const awsRum: AwsRum = new AwsRum(
      APPLICATION_ID,
      APPLICATION_VERSION,
      APPLICATION_REGION,
      config
    );
  } catch (error) {
    // Ignore errors thrown during CloudWatch RUM web client initialization
  }
}

export default awsRumClient;
