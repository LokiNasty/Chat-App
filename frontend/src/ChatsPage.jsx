import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'a5a69e4e-8d04-4ff6-84b6-9c06594829fc', 
        props.user.username,
        props.user.secret
);
return ( 
  
<div style= {{height: '100vh'}}>
   <MultiChatSocket {...chatProps} />
   <MultiChatWindow {...chatProps} style ={{height: '100%'}} />
</div>
   ) 
}
export default ChatsPage
