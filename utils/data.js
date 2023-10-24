const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const thoughts = [
    'Decision Tracker',
    'Find My Phone',
    'Learn Piano',
    'Starbase Defender',
    'Tower Defense',
    'Monopoly Money Manager',
    'Movie trailers',
    'Hello world',
    'Stupid Social Media App',
    'Notes',
    'Messages',
    'Email',
    'Compass',
    'Firefox',
    'Running app',
    'Cooking app',
    'Poker',
    'Deliveries',
  ];
  
  const reactions = [
    ':)',
    ':(',
    'dang',
    'wow',
    'Gross',
    'What',
    'haha',
    'ummm',
    'Stupid',
    'I_Guess',
    'not interested',
    'huh',
    'hahahahah',
    ':]',
    'Run',
    'Cooking',
    'Playing',
    'Hot',
  ];

  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)}`;
  
  // Function to generate random thoughts that we can add to student object.
  const getRandomThoughts = () => {
    const randThought = getRandomArrItem(thoughts)
    const results = {thoughtText: randThought}
    console.log(`rand thought was ${results}` )
    return results;
  };
  
// Function to generate random assignments that we can add to student object.
const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactions),

      });
    }
    return results;
  };

  // Export the functions for use in seed.js
  module.exports = { getRandomName,getRandomThoughts, getRandomReactions };
  