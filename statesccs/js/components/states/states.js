"use strict"

const log4js=require('log4js')
const logger=log4js.getLogger()

module.exports={
    metadata: ()=>(
        {
        
        "name":"get.states",
        "properties":{
            "name1": {"type":"string", "required":true}
            },
        "supportedActions":[]
    }
    ),

    invoke:(conversation, done)=>{
        const myname=conversation.properties().name1 ? conversation.properties().name1: '';
        // const myname=conversation.text()
        conversation.reply({text: 'Hello '+ myname})
        conversation.transition();
        done();
    }
}