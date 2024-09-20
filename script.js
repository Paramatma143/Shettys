// Variables for storing booking information
let bookingData = {
    place: '',
    persons: '',
    date: '',
    amount: '',tamt:'',
    ConfirM:''
  };
  
  // Current state of the conversation
  let currentStep = 0;
  
  // Handle sending of user message and bot responses
  function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim();
    const chatBody = document.getElementById('chatBody');
  
    if (!userInput) return;
  
    // Add user message to chat
    addMessage(userInput, 'user-message');
    document.getElementById('userInput').value = ''; // Clear input
  
    // Process bot's response based on the current step in the booking process
    processChatFlow(userInput);
  }
  
  // Function to add messages to the chat body
  function addMessage(text, className) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', className);
    messageDiv.textContent = text;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to bottom
  }
  
  // Chatbot conversation flow for booking
  function processChatFlow(userInput) {
    setTimeout(() => {
      switch (currentStep) {
        case 0:
          addMessage("Welcome to the Tourism Ticket Booking System! Where would you like to go?", 'bot-message');
          currentStep++;
          break;
        case 1:
          bookingData.place = userInput;
          addMessage(`The Place  ${bookingData.place}  You have Selected is Quiet Impressive`, 'bot-message');
          addMessage(`Great! Then How many persons are you booking for  ${bookingData.place}?`, 'bot-message');
          currentStep++;
          break;
        case 2:
          bookingData.persons = userInput;
          addMessage("Got it! What date would you like to book?", 'bot-message');
          currentStep++;
          break;
        case 3:
          bookingData.date = userInput;
          addMessage("Awesome! Tickets are Available ", 'bot-message');
          addMessage(`Would You Like to Continue ?`, 'bot-message');
          currentStep++;
          break;
        case 4:
            bookingData.ConfirM = userInput;
            if(bookingData.ConfirM=="yes"){
            addMessage(`Amount We charges for the selected place is ${bookingData.place} :Rs 99/-`, 'bot-message');
            addMessage(`Please pay the full amount to confirm ticket`, 'bot-message');
            currentStep++;
            break;
        }
            else{
             Confirm();
             break;
            }
        case 5:
          bookingData.tamt = userInput;
          confirmBooking();
          break;
        default:
          addMessage("Sorry, I didn't understand that.", 'bot-message');
      }
    }, 1000); // Delay to simulate typing
  }
  
  // Final booking confirmation
  function confirmBooking() {
    let p=parseInt(bookingData.persons);
    let tm=p*99;
    bookingData.amount=tm;
    addMessage(`Your booking is confirmed! 🎉\n
      Place: ${bookingData.place}\n
      Number of persons: ${bookingData.persons}\n
      Date: ${bookingData.date}\n
      Total Amount: $${bookingData.amount}`, 'bot-message');
    
    // Reset conversation
    currentStep = 0;
    bookingData = {
      place: '',
      persons: '',
      date: '',
      amount: '',tamt:'',confirM:''
    };
  }
  function Confirm(){
    addMessage(`Ticket has been canceled `, 'bot-message');
     // Reset conversation
    currentStep = 0;
    bookingData = {
      place: '',
      persons: '',
      date: '',
      amount: '',
      tamt:'',
      confirM:''
    };
  }
  