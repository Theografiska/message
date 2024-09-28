
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

console.log(finalSentence);