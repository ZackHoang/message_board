const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(), 
      ID: crypto.randomUUID()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(), 
      ID: crypto.randomUUID()
    } 
];

module.exports = messages; 