"use strict"

const log4js=require('log4js')
const logger=log4js.getLogger()

module.exports={
    metadata: ()=>(
        {
        
        "name":"states",
        "properties":{
            "myname":{"type":"string", "required":true}
        },
        "supportedActions":[]
    }
    ),

    invoke:(conversation, done)=>{
        // const name=conversation.properties().name ? conversation.properties().name: '';
        const name=conversation.properties().myname ;
        conversation.reply({text: 'Hello '+ name})
        conversation.transition();
        done();
    }
}