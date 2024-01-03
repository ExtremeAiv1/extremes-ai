const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Inertia");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }

    if (message.includes('tell me a joke')) {
        const jokes = [
            "Did you know that if dinosaur and a human were race. The human would be most likely to win? This is because dinosaurs are dead .",
            "I sent a message to my sister, which is, I like the girls who wear hello kitty mini skirt. and after a while, she sent me a picture of her wearing hello kitty skirt. like what the fuck ",
            "Let's study advanced English with me.  Normal English, look at those huge mountains.    Advanced English, ohh my god, she has a level 10 gyat.",
            "If u pour water on the rock, nothing happen. If u pour water on the rock, nothing happen. but If u pour water on the rock, again and again and again, nothing happen, so don't do it",
            "our world is more even crazier. scientist just discovered that you are gay."
        ];
    
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    
        speech.text = randomJoke;
    }

    else if (message.includes('tell me a riddle')) {
        const rizzJokes = [
            "Hey, little pookie. do you know , My name is bee , cuz , I just found my honey.",
            "I know. I can't have your eyes , but , our kids can.",
            "Are you French? Because Eiffel for you.",
            "Are you a Wi-Fi signal? Because I’m feeling a strong connection.",
            "No pen, no paper...but, you still draw my attention. ",
            "Are you a heart? Because I'd never stop beating for you. ",
            "I'm gangsta. I can kill you easily if i want. hmmm , I mean on the bed",
            " I believe in following my dreams, so you lead the way.",
            "If being beautiful was a crime, you’d be on the most wanted list.",
            "Kissing is a love language. Want to start a conversation with me?",
            "Hey, I’m sorry to bother you, but my phone must be broken because it doesn’t seem to have your number in it.",
            "Are you public speaking? Because you make me really nervous. ",
            "Do you know the difference between history and you? History is the past and you are my future.",
            "Are you April 1st? Because I'm a fool for you. ",
            "Do you work for NASA? Because your beauty is out of this world.",
            " Math is so confusing. It's always talking about x and y and never you and I. ",
            "Even the keyboard knows You and I are always together",
            "My mom said sharing is caring but, no...you're all mine!",
            "My name is D one , I mean the one for you.",
            "I wonder , Is your mom an artist? because she made a masterpiece",
            "You must be tired cuz you been running through my mind all day"
        ];
    
        const randomRizzJoke = rizzJokes[Math.floor(Math.random() * rizzJokes.length)];

    const speech = new SpeechSynthesisUtterance(randomRizzJoke);
    
    speechSynthesis.speak(speech);

    // Wait for the speech to end before playing the audio
    speech.addEventListener('end', function() {
        // Add music playback after the speech has ended
        const audio = new Audio('audio/music.mp3');
        audio.play();
    });
}

    else if(message.includes('who are you')) {
        const finalText = "Hello boss, I am Extreme artificial intelligence Assistant.";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "Hi, Hello, My name is Extreme artificial intelligence . Your assistant.";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}