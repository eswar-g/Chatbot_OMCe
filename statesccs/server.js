const express = require('express');  
 const bodyParser = require('body-parser');  
 const components = require('./statesccs');  
 const app = express();  
 app.use(bodyParser.json());  
 components(app);  
 app.listen(process.env.PORT || 3000, () => {  
  console.log('Custom Components Server Ready');  
 });  