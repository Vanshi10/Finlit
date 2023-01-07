fetch("./message.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    from: "whatsapp:+14155238886",
    body: "Hello there!",
    to: "whatsapp:+15005550006",
  })
  .then((message) => console.log(message.sid));
