import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const App=()=>
{
return(
<ChatEngine height="100vh" projectID="6f3960a2-cf87-4d32-8f71-24dc79473860" userName="Chat" userSecret="Project123@1" renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
/>);}
export default App;
