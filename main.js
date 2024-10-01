/*
// component 1: 

const phraseOne = [
    "Will you still love me, ", 
    "To the left, to the left, ", 
    "What goes around, goes around, goes around, ",
    "I'm like a bird, I'll only fly away, ",
    "When the sun shines, we'll shine together, "
];

// component 2:

const phraseTwo = [
    "when I'm no longer young and beautiful. \n", 
    "everything you own in the box to the left. \n", 
    "comes all the way back around. \n",
    "I don't know where my soul is (soul is). \n",
    "told you I'll be here forever. \n"
];

// component 3: 

const phraseThree = [
    "I know you will, I know you will, I know that you will, ",
    "I don't know where my home is, ",
    "Said I'll always be your friend, ",
    "But since you been gone, ",
    "Got me looking so crazy right now, "
];

// component 4:

const phraseFour = [
    "will you still love me when I got nothing but my aching soul?",
    "and baby, all I need for you to know is I'm like a bird.",
    "took an oath, I'ma stick it out to the end.",
    "I can breath for the first time.",
    "your love's got me looking so crazy right now."
];

// combining the phrases into a unique randomly generated message and logging them to the console. 

const finalSentence = phraseOne[Math.floor(Math.random() * phraseOne.length)] 
    + phraseTwo[Math.floor(Math.random() * phraseTwo.length)]
    + phraseThree[Math.floor(Math.random() * phraseThree.length)]
    + phraseFour[Math.floor(Math.random() * phraseFour.length)];

console.log(`These two sentences will show you the meaning of today: \n \n${finalSentence}`);


const finalOtherSentence = sentence => {

}
*/

// using arrays within objects

const randomNumber = number => {
   return Math.floor(Math.random() * number);
}

const characterStar = {
    persona: ['Justin Timberlake', 'Nelly Furtado', 'Rihanna', 'Beyonce', 'Lana del Rey', 'Britney Spears', 'Fergie', 'Pink'],
    characteristic: ['bold', 'brave', 'flirtatious', 'joyous', 'vibrant', 'exuberant', 'spirited'],
    action: ['book a spa day for relaxation and rejuvenation', 'sign up for a private yoga or meditation class', 'plan a weekend getaway to a scenic location', 'read a chapter from a new novel or poetry collection', 'write personal reflections or lyrics in a journal', 'schedule a boxing or kickboxing workout', 'jog in a local park or along a scenic route', 'try a new beauty or skincare routine']
};

let personalWisdom = [];

for(let prop in characterStar) {
    let optionIdx = randomNumber(characterStar[prop].length);
    switch(prop) {
        case 'persona':
                personalWisdom.push(`Today you're "${characterStar[prop][optionIdx]}".`);
                break;
        case 'characteristic':
                personalWisdom.push(`You should act extremely ${characterStar[prop][optionIdx]}ly.`);
                break;
        case 'action':
                personalWisdom.push(`Still, you should ${characterStar[prop][optionIdx]}.`);
                break;
    };
}

const formatWisdom = wisdom => {
    const formatted = personalWisdom.join('\n');
    return formatted;
}

formatWisdom(personalWisdom);

let buttonPush = document.getElementById('generateButton');

buttonPush.addEventListener('click', function() {
    document.getElementById('answerPersona').innerHTML = formatWisdom(personalWisdom);
})

