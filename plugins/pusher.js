import Pusher from "pusher-js";

export default (context, inject) => {
    const pusher = new Pusher(context.$config.pusherKey, {
        cluster: context.$config.pusherCluster
    });
    
    inject('pusher', pusher)
}



