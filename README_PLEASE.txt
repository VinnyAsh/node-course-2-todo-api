Hi Andrew,
   Rather than nickel and dime you with my issues, I thought I would 
make punchlist to save time. 

1. In server-test.js, when I attempt to run it, at this point I am getting errors
describe('POST /todos', () => {
^
ReferenceError: describe is not defined
    at Object.<anonymous> (C:\Users\Vince\Desktop\node-todo-api\server\tests\server.test.js:14:1)
   I commented out the beforeEach statement as it was erroring out on it first.

2. I can't find a single reference to "address" in my code. 

3. Mondo DB. I created the DB manually ---> mongodb://gevja:#sandup1@ds235708.mlab.com:35708/mongoose-for-nodejs
   I ran -> heroku config:set MONGODB_URI=mongodb://gevja:#sandup1@ds235708.mlab.com:35708/mongoose-for-nodejs
   I still can't access the database using Postman. So, I have been attempting to limp along testing with localhost:3000
   Made the call from Postman -> https://intense-tundra-75477.herokuapp.com/todos - timed out with 503 error - service not available.
   I tried my best to follow this, but I apparently could not. All this OpenSource tech is still pretty new to me.  I am trying :-).

4. You might want to re-emphasize that in order to use the "_.", you must declare var _ = require("lodash");  
   That tripped me up for a bit :-(.  I think I now recall you mentioning it early on, but too far back for me, lol..

5. When testing the validator section, again, to the localhost, I am getting the following error:
       <pre>TypeError: Cannot read property &#39;password&#39; of undefined
   The body I am sending is:
    { 
    "email" : "vash1234@email.com",
   
    "password" : "mypassword3"
  }
     my _.pick command  -> var body = _.pick.body["email", "password"];  // 

I appreciate your help and patience.  You are really providing a lot of information.

Vince





