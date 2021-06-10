import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';


const HelloWorld = ({ flags }) => {
    return flags.test ? <div><img src="https://cdn.pixabay.com/photo/2021/03/30/01/11/fife-6135609_960_720.jpg" alt="image" /> </div> : <div>""</div>;
};

export default withLDConsumer()(HelloWorld);