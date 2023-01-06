fetch("./message.json")
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data));
const accountSid = ACb852a21a31dbe07cb559b69d2fe6dd9a;
const authToken = b00e71a711a4790e3025a9667c593b01;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    from: 'whatsapp:+14155238886',
    body: 'Hello there!',
    to: 'whatsapp:+15005550006'
  })
  .then(message => console.log(message.sid));
