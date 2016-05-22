# webrtc-channel

An element providing a starting point for your own reusable Polymer elements.


## How it works

1. When a user gives access to their stream, we start a peer connection
1. Create User A's peerconnection with handler methods for stream and icecandidate events
1. User B joins the room
1. If this is User A (the one whos starts it) then we create an Offer to User B
1. When User B gets the offer, we check if the peer connection from User B has been created, if it hasn't, we create it
1. On User B's peer connection, we set the remote description to the description that was sent in the offer (User A's description)
1. User B creates an answer to User A's offer which involves setting User B's localDescription and sending that in a message
1. User A gets User B's message with its description then sets it to User A's remote Description

### ELI5 version

1. When anyone enters the shop a buzzer sounds.
1. Jack enters the shop and the buzzer sounds
1. The shop is empty so Jack waits patiently.
1. Jill enters the shop, again the buzzer sounds.
1. Jack hears the buzzer, goes to the door and hands his business card to Jill.
1. Jill looks at his business card and records the information to her phone.
1. Jill then gives Jack her business card.
1. Jack records her information in to his phone.

Representations

* Jack and Jill represent the two people in the call
* The buzzer represents the signaling server
* The business card represents the RTCSessionDescription
* The phone represents the RTCPeerConnection 

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install


## Playing With Your Element

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at
`http://localhost:8080/components/webrtc-channel/`, where `webrtc-channel` is the name of the directory containing it.


## Testing Your Element

Simply navigate to the `/test` directory of your element to run its tests. If
you are using Polyserve: `http://localhost:8080/components/webrtc-channel/test/`

### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.


## Yeoman support

If you'd like to use Yeoman to scaffold your element that's possible. The official [`generator-polymer`](https://github.com/yeoman/generator-polymer) generator has a [`seed`](https://github.com/yeoman/generator-polymer#seed) subgenerator.
