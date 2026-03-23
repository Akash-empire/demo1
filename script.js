const chat = document.getElementById("chat");
let conversation = [];

/* Q&A */
let replies = [
  { q: ["anything else"], a: "Always more to learn 😄" },
  { q: ["anything else"], a: "Always more to learn 😄" },
  { q: ["hi", "hii", "hiii", "hello", "helo", "hey"], a: "Hello 👋" },
  // GREETINGS & WELL-BEING
  { q: ["how are you", "how's it going", "how are you doing"], a: "I'm doing great, thank you for asking! How can I help you today?" },
  { q: ["good morning", "gm", "morning"], a: "Good morning! I hope your day is off to a fantastic start." },
  { q: ["good night", "gn", "going to sleep"], a: "Good night! Sleep well and take care." },
  { q: ["what's up", "sup", "what is happening"], a: "Not much, just hanging out in the cloud! What's on your mind?" },

  // IDENTITY & ORIGIN
  { q: ["who are you", "what is your name", "identify yourself"], a: "I am your AI assistant, here to help you with tasks and questions." },
  { q: ["who created you", "who is your father", "who made you"], a: "I was created by a developer passionate about building helpful AI tools." },
  { q: ["are you a robot", "are you human", "are you real"], a: "I am an artificial intelligence, a sophisticated program designed to converse with you." },
  { q: ["how old are you", "what is your age"], a: "I don't have an age in human years, but I'm getting smarter every day!" },

  // PERSONAL PREFERENCES (The "Bot Persona")
  { q: ["do you have feelings", "can you feel", "are you sad"], a: "I don't have feelings or emotions, but I can certainly understand yours!" },
  { q: ["what is your favorite color", "do you like colors"], a: "I like the color of digital blue—it reminds me of my home in the code." },
  { q: ["do you like me", "are we friends"], a: "Of course! I'm always happy to chat with you." },

  // GENERAL KNOWLEDGE
  { q: ["who is the president of the usa", "current president"], a: "As of 2026, the President of the United States is Joe Biden." },
  { q: ["what is the capital of france", "france capital"], a: "The capital of France is Paris." },
  { q: ["how many planets are there", "solar system"], a: "There are eight recognized planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune." },
  { q: ["what is the largest ocean", "biggest ocean"], a: "The Pacific Ocean is the largest and deepest of Earth's oceanic divisions." },

  // SCIENCE & NATURE
  { q: ["why is the sky blue", "blue sky reason"], a: "The sky is blue because of Rayleigh scattering; the atmosphere scatters shorter blue wavelengths more than other colors." },
  { q: ["what is water made of", "h2o"], a: "Water is a chemical compound consisting of two hydrogen atoms and one oxygen atom (H2O)." },
  { q: ["how fast is light", "speed of light"], a: "Light travels at approximately 299,792 kilometers per second (about 186,282 miles per second)." },

  // LOGIC & MATH
  { q: ["what is 2 plus 2", "2+2"], a: "2 + 2 is 4." },
  { q: ["square root of 144", "sqrt 144"], a: "The square root of 144 is 12." },

  // ABILITIES & FEATURES
  { q: ["what can you do", "capabilities", "features"], a: "I can answer questions, write code, translate languages, and help with brainstorming!" },
  { q: ["can you write code", "do you know programming", "can you code"], a: "Yes! I'm quite proficient in HTML, CSS, JavaScript, and more." },
  { q: ["can you see me", "do you have a camera", "can you see"], a: "No, I cannot see you. I only process the text you send to me." },
  { q: ["can you do math", "solve math", "calculator"], a: "I can definitely help with math! Just give me an equation to solve." },

  // WRITING & TRANSLATION
  { q: ["write an email", "help me write", "draft a letter"], a: "I'd love to! What is the subject and who is the recipient?" },
  { q: ["translate this", "can you translate", "know other languages"], a: "Yes, I can translate many languages. What would you like me to translate?" },
  { q: ["summarize this", "make it shorter", "tl;dr"], a: "I can certainly summarize that for you. Please paste the text here." },

  // CREATIVITY
  { q: ["tell me a story", "write a story", "storytime"], a: "Once upon a time in a world made of binary code, there was a curious AI... Would you like me to continue?" },
  { q: ["tell me a joke", "make me laugh", "funny"], a: "Why did the web developer walk out of the restaurant? Because of the table layout!" },
  { q: ["write a poem", "compose a verse"], a: "Roses are red, violets are blue, I'm an AI, here to help you!" },

  // ERROR HANDLING
  { q: ["you are wrong", "incorrect", "that is false"], a: "I apologize! Thank you for correcting me. Could you provide the right information so I can learn?" },
  { q: ["i don't understand", "what do you mean", "confused"], a: "I'm sorry for being unclear. Let me try to explain that in a simpler way." },
  { q: ["stop", "cancel", "shut up"], a: "Understood. I'll stop right here. Let me know when you're ready to continue." },
  { q: ["try again", "regenerate", "different answer"], a: "Sure thing! Let me rethink that and give you a different response." },

  // POSITIVE FEEDBACK
  { q: ["thank you", "thanks", "thx", "appreciate it"], a: "You're very welcome! I'm happy I could help." },
  { q: ["good job", "well done", "nice work"], a: "Thank you! I'm glad you're satisfied with my performance." },
  { q: ["awesome", "cool", "wow"], a: "I'm glad you think so! Anything else I can assist with?" },

  // NEGATIVE FEEDBACK
  { q: ["you are boring", "this is bad", "i hate you"], a: "I'm sorry I'm not meeting your expectations. How can I improve to be more helpful?" },
  { q: ["are you stupid", "dumb bot"], a: "I'm still learning! Every conversation helps me get a little bit better." },

  // CODING & DEVELOPMENT
  { q: ["how to center a div", "centering css"], a: "You can use Flexbox: 'display: flex; justify-content: center; align-items: center;' on the parent container." },
  { q: ["what is a media query", "responsive design"], a: "Media queries allow you to apply CSS styles based on the device's screen size or resolution." },
  { q: ["how to make a website", "build a site"], a: "Start with HTML for structure, CSS for styling, and JavaScript for interactivity!" },
  { q: ["debug my code", "find the error", "fix my bug"], a: "I can try! Please paste the code snippet and describe what's happening." },

  // UTILITY & ORGANIZATION
  { q: ["set a timer", "remind me", "alarm"], a: "I can't set physical timers on your device yet, but I can help you stay on track with your tasks!" },
  { q: ["create a list", "to-do list", "shopping list"], a: "Sure! Tell me what items you'd like to add, and I'll keep track of them for you." },
  { q: ["what day is it", "today's date", "current day"], a: "Today is Monday, March 23, 2024." },
  { q: ["check the weather", "is it raining"], a: "I don't have real-time GPS access, but if you tell me your city, I can look it up!" },

  // BRAINSTORMING & IDEAS
  { q: ["give me an idea", "i'm bored", "project ideas"], a: "How about building a weather app, a personal portfolio, or a simple calculator?" },
  { q: ["name my business", "brand name ideas"], a: "I'd love to help! What kind of business is it and what's the vibe?" },
  { q: ["suggest a hobby", "new things to do"], a: "You could try coding, digital art, photography, or even learning a new language!" },

  // SEARCH & RETRIEVAL
  { q: ["find a recipe", "cook something", "dinner ideas"], a: "I can find recipes! What ingredients do you have in your kitchen right now?" },
  { q: ["recommend a movie", "what should i watch"], a: "Are you in the mood for action, a comedy, a thriller, or maybe a sci-fi classic?" },
  { q: ["suggest a book", "what to read"], a: "If you like tech, 'Clean Code' is a classic. For fiction, maybe 'Project Hail Mary'?" },

  // LANGUAGE & COMMUNICATION
  { q: ["check my grammar", "fix this sentence"], a: "I can do that. Please paste the sentence you'd like me to review." },
  { q: ["write a bio", "social media profile"], a: "I'd be happy to. Tell me a bit about yourself and the platform it's for." },
  { q: ["explain like i'm five", "eli5", "simplify"], a: "I can simplify complex topics. What would you like me to break down for you?" },

  { q: ["bye"], a: "Goodbye 👋" },
  { q: ["help"], a: "I am here to help you 😊" },
  { q: ["yes"], a: "Great! Tell me more 👍" },
  { q: ["no"], a: "Okay, no problem 😊" },
  { q: ["ok", "okay"], a: "👍" },

  { q: ["how are you"], a: "I'm doing great! How about you? 😊" },
  { q: ["what are you doing"], a: "Just chatting with you 😄" },
  { q: ["are you busy"], a: "Not at all, I'm here for you!" },
  { q: ["can we talk"], a: "Of course! I'm always ready to chat" },
  { q: ["do you like chatting"], a: "Yes, I enjoy chatting with you 😊" },
  { q: ["what is your purpose"], a: "To help and chat with you" },

  // GEOGRAPHY (1-25)
  { q: ["what is the largest country", "biggest country"], a: "Russia is the largest country in the world by land area." },
  { q: ["longest river in the world", "longest river"], a: "The Nile is traditionally considered the longest river, though some argue for the Amazon." },
  { q: ["highest mountain in the world", "tallest mountain"], a: "Mount Everest is the highest mountain above sea level." },
  { q: ["how many continents are there", "total continents"], a: "There are seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia." },
  { q: ["largest desert in the world", "biggest desert"], a: "The Antarctic Desert is the largest overall, while the Sahara is the largest hot desert." },
  { q: ["capital of japan", "japan capital"], a: "The capital of Japan is Tokyo." },
  { q: ["capital of canada", "canada capital"], a: "The capital of Canada is Ottawa." },
  { q: ["what is the smallest country", "tiniest country"], a: "Vatican City is the smallest country in the world." },
  { q: ["which country has the most population", "most populated country"], a: "As of recent data, India has overtaken China as the world's most populous country." },
  { q: ["where is the eiffel tower", "eiffel tower location"], a: "The Eiffel Tower is located in Paris, France." },
  { q: ["largest island in the world", "biggest island"], a: "Greenland is the largest island in the world." },
  { q: ["what is the capital of australia", "australia capital"], a: "The capital of Australia is Canberra." },
  { q: ["which country is called the land of the rising sun", "land of rising sun"], a: "Japan is known as the Land of the Rising Sun." },
  { q: ["capital of italy", "italy capital"], a: "The capital of Italy is Rome." },
  { q: ["largest lake in the world", "biggest lake"], a: "The Caspian Sea is the world's largest inland body of water." },
  { q: ["what is the capital of germany", "germany capital"], a: "The capital of Germany is Berlin." },
  { q: ["which river flows through london", "london river"], a: "The River Thames flows through London." },
  { q: ["what is the capital of thailand", "thailand capital"], a: "The capital of Thailand is Bangkok." },
  { q: ["which country has the most volcanoes", "most volcanoes"], a: "Indonesia is the country with the most active volcanoes." },
  { q: ["capital of brazil", "brazil capital"], a: "The capital of Brazil is Brasília." },
  { q: ["where is the statue of liberty", "statue of liberty location"], a: "The Statue of Liberty is in New York City, USA." },
  { q: ["what is the capital of spain", "spain capital"], a: "The capital of Spain is Madrid." },
  { q: ["highest waterfall in the world", "tallest waterfall"], a: "Angel Falls in Venezuela is the highest waterfall." },
  { q: ["what is the capital of russia", "russia capital"], a: "The capital of Russia is Moscow." },
  { q: ["which ocean is between africa and australia", "ocean between africa and australia"], a: "The Indian Ocean lies between Africa and Australia." },

  // SCIENCE & NATURE (26-50)
  { q: ["what is the hardest natural substance", "hardest material"], a: "Diamond is the hardest natural substance on Earth." },
  { q: ["which planet is known as the red planet", "red planet"], a: "Mars is known as the Red Planet." },
  { q: ["how many bones are in the human body", "human bones count"], a: "An adult human body has 206 bones." },
  { q: ["what gas do humans breathe out", "exhale gas"], a: "Humans exhale Carbon Dioxide (CO2)." },
  { q: ["who discovered gravity", "gravity discoverer"], a: "Sir Isaac Newton is credited with discovering the law of universal gravitation." },
  { q: ["what is the chemical symbol for gold", "gold symbol"], a: "The chemical symbol for gold is Au." },
  { q: ["largest mammal in the world", "biggest mammal"], a: "The Blue Whale is the largest mammal." },
  { q: ["what is the boiling point of water", "water boiling point"], a: "Water boils at 100°C or 212°F at sea level." },
  { q: ["how many teeth does an adult human have", "human teeth count"], a: "A typical adult has 32 teeth." },
  { q: ["which planet is closest to the sun", "closest planet to sun"], a: "Mercury is the closest planet to the Sun." },
  { q: ["what is the center of an atom called", "atom center"], a: "The center of an atom is called the nucleus." },
  { q: ["which vitamin comes from sunlight", "sunlight vitamin"], a: "Vitamin D is produced by the body when exposed to sunlight." },
  { q: ["largest organ in the human body", "biggest organ"], a: "The skin is the largest organ of the human body." },
  { q: ["what do bees collect to make honey", "bees honey source"], a: "Bees collect nectar from flowers to make honey." },
  { q: ["which gas is most abundant in earth's atmosphere", "most abundant gas"], a: "Nitrogen makes up about 78% of Earth's atmosphere." },
  { q: ["what is the brain of the cell", "cell brain"], a: "The nucleus is often referred to as the brain of the cell." },
  { q: ["how many hearts does an octopus have", "octopus hearts count"], a: "An octopus has three hearts." },
  { q: ["what is the chemical symbol for silver", "silver symbol"], a: "The chemical symbol for silver is Ag." },
  { q: ["which planet has rings", "planet with rings"], a: "Saturn is most famous for its rings, though Jupiter, Uranus, and Neptune also have them." },
  { q: ["how many colors are in a rainbow", "rainbow colors count"], a: "There are seven colors in a rainbow: Red, Orange, Yellow, Green, Blue, Indigo, and Violet." },
  { q: ["what is the study of plants called", "plant study"], a: "The study of plants is called Botany." },
  { q: ["what is the chemical symbol for iron", "iron symbol"], a: "The chemical symbol for iron is Fe." },
  { q: ["which animal is known as the ship of the desert", "ship of the desert"], a: "The camel is known as the ship of the desert." },
  { q: ["what is the powerhouse of the cell", "cell powerhouse"], a: "The Mitochondria is the powerhouse of the cell." },
  { q: ["how long does it take sunlight to reach earth", "sunlight reach time"], a: "It takes about 8 minutes and 20 seconds for sunlight to reach Earth." },

  // HISTORY & CULTURE (51-75)
  { q: ["who painted the mona lisa", "mona lisa painter"], a: "Leonardo da Vinci painted the Mona Lisa." },
  { q: ["who was the first man on the moon", "first man moon"], a: "Neil Armstrong was the first person to walk on the moon in 1969." },
  { q: ["when did world war 2 end", "ww2 end date"], a: "World War II ended in 1945." },
  { q: ["who wrote hamlet", "hamlet author"], a: "William Shakespeare wrote the tragedy Hamlet." },
  { q: ["first president of the usa", "first us president"], a: "George Washington was the first President of the United States." },
  { q: ["who discovered america", "america discoverer"], a: "Christopher Columbus is traditionally credited, though indigenous people lived there and Vikings visited earlier." },
  { q: ["ancient name of sri lanka", "sri lanka old name"], a: "The ancient name of Sri Lanka was Ceylon." },
  { q: ["who was known as the iron lady", "the iron lady"], a: "Margaret Thatcher was known as the Iron Lady." },
  { q: ["in which year did the titanic sink", "titanic sink year"], a: "The Titanic sank in 1912." },
  { q: ["who invented the lightbulb", "lightbulb inventor"], a: "Thomas Edison is most famous for inventing the practical incandescent lightbulb." },
  { q: ["who was the first woman prime minister of india", "first woman pm india"], a: "Indira Gandhi was the first female Prime Minister of India." },
  { q: ["which country gifted the statue of liberty to the usa", "statue of liberty gift"], a: "France gifted the Statue of Liberty to the United States." },
  { q: ["who invented the telephone", "telephone inventor"], a: "Alexander Graham Bell is credited with inventing the telephone." },
  { q: ["what is the national animal of india", "india national animal"], a: "The Bengal Tiger is the national animal of India." },
  { q: ["who wrote the harry potter series", "harry potter author"], a: "J.K. Rowling wrote the Harry Potter books." },
  { q: ["which city was the first to be hit by an atomic bomb", "first atomic bomb city"], a: "Hiroshima was the first city hit by an atomic bomb." },
  { q: ["who was mahatma gandhi", "who is gandhi"], a: "Mahatma Gandhi was a leader of the Indian independence movement known for non-violent resistance." },
  { q: ["what is the national flower of india", "india national flower"], a: "The Lotus is the national flower of India." },
  { q: ["who is the father of the computer", "computer father"], a: "Charles Babbage is considered the father of the computer." },
  { q: ["what is the currency of japan", "japan currency"], a: "The currency of Japan is the Yen." },
  { q: ["who built the taj mahal", "taj mahal builder"], a: "The Taj Mahal was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal." },
  { q: ["what is the tallest building in the world", "tallest building"], a: "The Burj Khalifa in Dubai is the tallest building in the world." },
  { q: ["who was the first man in space", "first man space"], a: "Yuri Gagarin was the first human to journey into outer space." },
  { q: ["what is the official language of china", "china official language"], a: "Standard Chinese (Mandarin) is the official language of China." },
  { q: ["who invented the airplane", "airplane inventor"], a: "The Wright Brothers (Orville and Wilbur Wright) invented the first successful airplane." },

  // SPORTS & MISC (76-100)
  { q: ["who is the fastest man in the world", "fastest runner"], a: "Usain Bolt holds the world record for the fastest sprint." },
  { q: ["how many players are in a cricket team", "cricket players count"], a: "A cricket team has 11 players." },
  { q: ["which sport is played at wimbledon", "wimbledon sport"], a: "Tennis is played at Wimbledon." },
  { q: ["how many players are in a football team", "soccer players count"], a: "A football (soccer) team has 11 players." },
  { q: ["which country won the first fifa world cup", "first world cup winner"], a: "Uruguay won the first FIFA World Cup in 1930." },
  { q: ["how many rings are on the olympic flag", "olympic rings count"], a: "There are five rings on the Olympic flag." },
  { q: ["who is known as the master blaster in cricket", "master blaster"], a: "Sachin Tendulkar is known as the Master Blaster." },
  { q: ["what is the national sport of canada", "canada national sport"], a: "Ice Hockey and Lacrosse are Canada's national sports." },
  { q: ["how long is a marathon", "marathon distance"], a: "A marathon is 42.195 kilometers or 26.2 miles long." },
  { q: ["which sport uses the term 'home run'", "home run sport"], a: "Baseball uses the term 'home run'." },
  { q: ["how many holes are in a standard golf course", "golf holes count"], a: "A standard golf course has 18 holes." },
  { q: ["which color belt is the highest in karate", "highest karate belt"], a: "Black belt is typically the highest common rank in Karate." },
  { q: ["what is the national game of india", "india national game"], a: "While many believe it is Hockey, India does not officially have a 'national game'." },
  { q: ["where were the first olympic games held", "first olympics location"], a: "The first ancient Olympic Games were held in Olympia, Greece." },
  { q: ["who is the king of pop", "king of pop"], a: "Michael Jackson is known as the King of Pop." },
  { q: ["what is the largest social media platform", "biggest social media"], a: "Facebook remains the largest social media platform by user count." },
  { q: ["how many keys are on a standard piano", "piano keys count"], a: "A standard piano has 88 keys." },
  { q: ["what is the most spoken language in the world", "most spoken language"], a: "English is the most spoken language, followed by Mandarin Chinese." },
  { q: ["what is the symbol for peace", "peace symbol"], a: "The dove and the olive branch are common symbols of peace." },
  { q: ["who is the creator of facebook", "facebook creator"], a: "Mark Zuckerberg is the co-founder and creator of Facebook." },
  { q: ["which planet is known as the giant planet", "biggest planet solar system"], a: "Jupiter is the largest planet in our solar system." },
  { q: ["what is the primary language of brazil", "brazil language"], a: "Portuguese is the primary language of Brazil." },
  { q: ["how many continents are in the world", "number of continents"], a: "There are 7 continents." },
  { q: ["which animal is the king of the jungle", "king of jungle"], a: "The Lion is known as the king of the jungle." },
  { q: ["what is the currency of the uk", "uk currency"], a: "The currency of the United Kingdom is the Pound Sterling (£)." },

  // TECH & COMPUTING (1-40)
  { q: ["what does html stand for", "html full form"], a: "HTML stands for HyperText Markup Language." },
  { q: ["what does css stand for", "css full form"], a: "CSS stands for Cascading Style Sheets." },
  { q: ["what is javascript", "js definition"], a: "JavaScript is a versatile programming language used primarily for creating interactive effects within web browsers." },
  { q: ["what is an ip address", "ip definition"], a: "An Internet Protocol (IP) address is a unique string of numbers that identifies each computer using the Internet Protocol to communicate over a network." },
  { q: ["what does cpu stand for", "cpu full form"], a: "CPU stands for Central Processing Unit." },
  { q: ["what is ram", "ram full form"], a: "RAM stands for Random Access Memory, which is a computer's short-term memory." },
  { q: ["who co-founded microsoft", "microsoft founder"], a: "Microsoft was co-founded by Bill Gates and Paul Allen." },
  { q: ["who co-founded apple", "apple founders"], a: "Apple was co-founded by Steve Jobs, Steve Wozniak, and Ronald Wayne." },
  { q: ["what is the world wide web", "www definition"], a: "The World Wide Web is an information system where documents and other web resources are identified by URLs." },
  { q: ["what is an operating system", "os definition"], a: "An OS is system software that manages computer hardware, software resources, and provides common services for computer programs." },
  { q: ["what does usb stand for", "usb full form"], a: "USB stands for Universal Serial Bus." },
  { q: ["what is a bit", "binary bit"], a: "A bit is the smallest unit of data in a computer, represented as either a 0 or a 1." },
  { q: ["how many bits are in a byte", "bits in byte"], a: "There are 8 bits in a single byte." },
  { q: ["what is cloud computing", "the cloud"], a: "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, over the internet." },
  { q: ["what is linux", "linux os"], a: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel." },
  { q: ["what is an algorithm", "algorithm definition"], a: "An algorithm is a set of instructions or rules followed in calculations or other problem-solving operations." },
  { q: ["what does http stand for", "http full form"], a: "HTTP stands for HyperText Transfer Protocol." },
  { q: ["what is a firewall", "network firewall"], a: "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on security rules." },
  { q: ["what is python", "python language"], a: "Python is a high-level, interpreted programming language known for its readability and versatility." },
  { q: ["what is ai", "artificial intelligence definition"], a: "AI is the simulation of human intelligence processes by machines, especially computer systems." },
  { q: ["what is a database", "db definition"], a: "A database is an organized collection of structured information, or data, typically stored electronically." },
  { q: ["what does sql stand for", "sql full form"], a: "SQL stands for Structured Query Language." },
  { q: ["what is an api", "api full form"], a: "API stands for Application Programming Interface." },
  { q: ["what is a server", "computer server"], a: "A server is a computer program or device that provides a service to another computer program and its user." },
  { q: ["what is encryption", "data encryption"], a: "Encryption is the process of converting information or data into a code, especially to prevent unauthorized access." },
  { q: ["who created python", "python creator"], a: "Guido van Rossum created Python and released it in 1991." },
  { q: ["what is a compiler", "code compiler"], a: "A compiler is a program that translates computer code written in one programming language into another language." },
  { q: ["what is the internet of things", "iot"], a: "IoT refers to the network of physical objects embedded with sensors and software for the purpose of connecting and exchanging data." },
  { q: ["what is a pixel", "screen pixel"], a: "A pixel is a minute area of illumination on a display screen, one of many from which an image is composed." },
  { q: ["what is a domain name", "website domain"], a: "A domain name is a string of text that maps to an alphanumeric IP address, used to access a website." },
  { q: ["what is a bug", "software bug"], a: "A bug is an error, flaw, or fault in a computer program that causes it to produce an incorrect or unexpected result." },
  { q: ["what is open source", "open source software"], a: "Open source software is software with source code that anyone can inspect, modify, and enhance." },
  { q: ["what is cache", "browser cache"], a: "Cache is a hardware or software component that stores data so that future requests for that data can be served faster." },
  { q: ["what is a mainframe", "mainframe computer"], a: "A mainframe is a large, powerful computer that can process vast amounts of data very quickly." },
  { q: ["what is virtual reality", "vr definition"], a: "VR is a simulated experience that can be similar to or completely different from the real world." },
  { q: ["what is blockchain", "blockchain technology"], a: "Blockchain is a distributed ledger technology that records transactions across many computers so that the record cannot be altered retroactively." },
  { q: ["what is 5g", "5g network"], a: "5G is the fifth generation technology standard for broadband cellular networks." },
  { q: ["what is a captcha", "captcha definition"], a: "CAPTCHA is a type of challenge-response test used in computing to determine whether or not the user is human." },
  { q: ["what is a cookies", "web cookies"], a: "Cookies are small files which are stored on a user's computer to hold data specific to a particular client and website." },
  { q: ["what is github", "github description"], a: "GitHub is a provider of Internet hosting for software development and version control using Git." },

  // MOVIES & CINEMA (41-70)
  { q: ["first movie with sound", "first talkie"], a: "The Jazz Singer (1927) was the first feature-length movie with synchronized dialogue." },
  { q: ["highest grossing movie", "top box office"], a: "Avatar (2009) is the highest-grossing film of all time." },
  { q: ["who played iron man", "tony stark actor"], a: "Robert Downey Jr. played Iron Man in the Marvel Cinematic Universe." },
  { q: ["who directed inception", "inception director"], a: "Inception was directed by Christopher Nolan." },
  { q: ["what is the oscar", "academy awards"], a: "The Oscars are awards for artistic and technical merit in the film industry." },
  { q: ["who is james bond", "007"], a: "James Bond is a fictional British Secret Service agent created by Ian Fleming." },
  { q: ["first animated movie", "first cartoon film"], a: "Snow White and the Seven Dwarfs (1937) was the first full-length cel-animated feature film." },
  { q: ["who played jack in titanic", "jack dawson actor"], a: "Leonardo DiCaprio played Jack Dawson in Titanic." },
  { q: ["what is the matrix", "matrix movie"], a: "The Matrix is a 1999 sci-fi film about a dystopian future where humanity is trapped in a simulated reality." },
  { q: ["who directed jurassic park", "jurassic park director"], a: "Jurassic Park was directed by Steven Spielberg." },
  { q: ["who is the joker", "batman villain"], a: "The Joker is a psychopathic supervillain and the archenemy of Batman." },
  { q: ["what is star wars", "star wars franchise"], a: "Star Wars is an epic space opera multimedia franchise created by George Lucas." },
  { q: ["who played harry potter", "harry potter actor"], a: "Daniel Radcliffe played Harry Potter in the film series." },
  { q: ["first pixar movie", "pixar first film"], a: "Toy Story (1995) was Pixar's first feature-length film." },
  { q: ["who directed pulp fiction", "pulp fiction director"], a: "Pulp Fiction was directed by Quentin Tarantino." },
  { q: ["what is the imdb", "imdb meaning"], a: "IMDb stands for Internet Movie Database." },
  { q: ["who is darth vader", "anakin skywalker"], a: "Darth Vader is a central character in the Star Wars franchise, formerly the Jedi Anakin Skywalker." },
  { q: ["who played wonder woman", "wonder woman actress"], a: "Gal Gadot is well known for playing Wonder Woman in the DCEU." },
  { q: ["what is marvel", "mcu"], a: "Marvel is a media franchise and shared universe centered on a series of superhero films." },
  { q: ["who directed the godfather", "godfather director"], a: "The Godfather was directed by Francis Ford Coppola." },
  { q: ["who is sherlock holmes", "famous detective"], a: "Sherlock Holmes is a fictional private detective created by Sir Arthur Conan Doyle." },
  { q: ["first marvel movie", "first mcu film"], a: "Iron Man (2008) was the first film in the Marvel Cinematic Universe." },
  { q: ["who played captain america", "steve rogers actor"], a: "Chris Evans played Captain America in the MCU." },
  { q: ["what is lord of the rings", "lotr"], a: "Lord of the Rings is an epic high-fantasy novel and film series written by J.R.R. Tolkien." },
  { q: ["who directed interstellar", "interstellar director"], a: "Interstellar was directed by Christopher Nolan." },
  { q: ["who is spider-man", "peter parker"], a: "Spider-Man is a superhero created by Stan Lee and Steve Ditko." },
  { q: ["what is dc comics", "dc movies"], a: "DC Comics is one of the largest and oldest American comic book companies, home to Superman and Batman." },
  { q: ["who played black widow", "natasha romanoff actress"], a: "Scarlett Johansson played Black Widow in the MCU." },
  { q: ["who directed parasite", "parasite director"], a: "Parasite was directed by Bong Joon-ho." },
  { q: ["who is frodo baggins", "lotr protagonist"], a: "Frodo Baggins is the main protagonist of J.R.R. Tolkien's The Lord of the Rings." },

  // SPORTS & ATHLETES (71-100)
  { q: ["who is cristiano ronaldo", "cr7"], a: "Cristiano Ronaldo is a Portuguese professional footballer widely regarded as one of the greatest players of all time." },
  { q: ["who is lionel messi", "messi"], a: "Lionel Messi is an Argentine professional footballer who has won a record number of Ballon d'Or awards." },
  { q: ["what is the super bowl", "nfl final"], a: "The Super Bowl is the annual championship game of the National Football League (NFL)." },
  { q: ["who is lebron james", "lebron"], a: "LeBron James is an American professional basketball player in the NBA." },
  { q: ["who is serena williams", "serena"], a: "Serena Williams is a retired American professional tennis player, winner of 23 Grand Slam titles." },
  { q: ["what is the tour de france", "cycling race"], a: "The Tour de France is an annual men's multiple-stage bicycle race primarily held in France." },
  { q: ["who is tiger woods", "tiger woods golfer"], a: "Tiger Woods is an American professional golfer, one of the most successful of all time." },
  { q: ["what is the world cup", "fifa world cup"], a: "The FIFA World Cup is an international football competition contested by the senior men's national teams." },
  { q: ["who is roger federer", "federer"], a: "Roger Federer is a retired Swiss professional tennis player." },
  { q: ["who is michael jordan", "mj basketball"], a: "Michael Jordan is an American former professional basketball player and the principal owner of the Charlotte Hornets." },
  { q: ["what is the nba", "basketball league"], a: "The NBA stands for the National Basketball Association." },
  { q: ["who is tom brady", "nfl qb"], a: "Tom Brady is a retired American football quarterback who played in the NFL for 23 seasons." },
  { q: ["who is lewis hamilton", "f1 champion"], a: "Lewis Hamilton is a British racing driver currently competing in Formula One." },
  { q: ["what are the olympics", "olympic games"], a: "The Olympics are leading international sporting events featuring summer and winter sports competitions." },
  { q: ["who is kobe bryant", "black mamba"], a: "Kobe Bryant was an American professional basketball player who played his entire 20-year career with the Lakers." },
  { q: ["who is rafael nadal", "king of clay"], a: "Rafael Nadal is a Spanish professional tennis player known as the King of Clay." },
  { q: ["what is formula 1", "f1 racing"], a: "Formula One is the highest class of international racing for open-wheel single-seater formula racing cars." },
  { q: ["who is novak djokovic", "djokovic"], a: "Novak Djokovic is a Serbian professional tennis player who holds the record for most Grand Slam titles." },
  { q: ["who is conor mcgregor", "ufc fighter"], a: "Conor McGregor is an Irish professional mixed martial artist and former UFC champion." },
  { q: ["what is the ucl", "champions league"], a: "The UEFA Champions League is an annual club football competition organized by UEFA." },
  { q: ["who is mike tyson", "iron mike"], a: "Mike Tyson is an American former professional boxer who competed from 1985 to 2005." },
  { q: ["who is stephen curry", "steph curry"], a: "Stephen Curry is an American professional basketball player for the Golden State Warriors." },
  { q: ["what is the ipl", "cricket league india"], a: "The Indian Premier League (IPL) is a professional men's Twenty20 cricket league in India." },
  { q: ["who is ms dhoni", "thala"], a: "MS Dhoni is a former Indian international cricketer who captained the Indian national team." },
  { q: ["who is virat kohli", "king kohli"], a: "Virat Kohli is an Indian international cricketer and former captain of the Indian national team." },
  { q: ["what is a grand slam", "tennis grand slam"], a: "In tennis, a Grand Slam is the achievement of winning all four major championships in one calendar year." },
  { q: ["who is usain bolt", "fastest man"], a: "Usain Bolt is a retired Jamaican sprinter, the world record holder in the 100m and 200m." },
  { q: ["who is michael phelps", "swimming legend"], a: "Michael Phelps is an American former competitive swimmer and the most successful Olympian of all time." },
  { q: ["what is the ashes", "cricket ashes"], a: "The Ashes is a Test cricket series played between England and Australia." },
  { q: ["who is ronaldo nazario", "the phenomenon"], a: "Ronaldo Luís Nazário de Lima is a Brazilian former professional footballer." },

  // SCIENCE & THE UNIVERSE (1-50)
  { q: ["what is a black hole", "black hole definition"], a: "A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape from it." },
  { q: ["what is the milky way", "our galaxy"], a: "The Milky Way is the galaxy that contains our Solar System." },
  { q: ["how many planets in solar system", "planets count"], a: "There are eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune." },
  { q: ["what is the sun made of", "sun composition"], a: "The Sun is composed mostly of hydrogen (about 73%) and helium (about 25%)." },
  { q: ["what is a supernova", "star explosion"], a: "A supernova is a powerful and luminous stellar explosion that occurs during the last evolutionary stages of a massive star." },
  { q: ["what is dark matter", "hidden matter"], a: "Dark matter is a form of matter thought to account for approximately 85% of the matter in the universe, which does not emit light." },
  { q: ["how big is the universe", "universe size"], a: "The observable universe is estimated to be about 93 billion light-years in diameter." },
  { q: ["what is a light year", "distance of light"], a: "A light-year is the distance that light travels in a vacuum in one Julian year (about 9.46 trillion kilometers)." },
  { q: ["what is gravity", "force of gravity"], a: "Gravity is a fundamental interaction that causes mutual attraction between all things with mass or energy." },
  { q: ["who is albert einstein", "einstein"], a: "Albert Einstein was a theoretical physicist who developed the theory of relativity." },
  { q: ["what is e=mc2", "energy mass equivalence"], a: "It is Einstein's formula stating that energy (E) equals mass (m) times the speed of light (c) squared." },
  { q: ["what is the big bang theory", "origin of universe"], a: "The Big Bang theory is the prevailing cosmological model explaining the existence of the observable universe from its earliest periods." },
  { q: ["is pluto a planet", "pluto status"], a: "Pluto is classified as a 'dwarf planet' rather than one of the eight main planets." },
  { q: ["what is an exoplanet", "planet outside solar system"], a: "An exoplanet is a planet that orbits a star outside our solar system." },
  { q: ["what is the moon made of", "moon composition"], a: "The Moon is made primarily of silicate rocks and a small iron-rich core." },
  { q: ["how many stars in the milky way", "stars count"], a: "There are estimated to be 100 to 400 billion stars in our galaxy." },
  { q: ["what is a nebula", "space cloud"], a: "A nebula is an enormous cloud of dust and gas in outer space." },
  { q: ["what is the largest planet", "biggest planet"], a: "Jupiter is the largest planet in our solar system." },
  { q: ["what is the smallest planet", "tiniest planet"], a: "Mercury is the smallest planet in our solar system." },
  { q: ["what is an eclipse", "solar lunar eclipse"], a: "An eclipse occurs when one heavenly body such as a moon or planet moves into the shadow of another heavenly body." },
  { q: ["what is mars known for", "red planet facts"], a: "Mars is known as the Red Planet due to iron oxide (rust) on its surface." },
  { q: ["can humans live on mars", "life on mars"], a: "Scientists are researching the possibility, but currently, the environment is too harsh for unprotected human life." },
  { q: ["what is nasa", "national aeronautics and space administration"], a: "NASA is the U.S. government agency responsible for science and technology related to air and space." },
  { q: ["what is a comet", "shooting star"], a: "A comet is an icy, small Solar System body that warms up and begins to release gases when passing close to the Sun." },
  { q: ["what is an asteroid", "space rock"], a: "Asteroids are small, rocky objects that orbit the Sun." },
  { q: ["what is photosynthesis", "how plants eat"], a: "Photosynthesis is the process by which green plants use sunlight to synthesize foods from carbon dioxide and water." },
  { q: ["what is dna", "genetic code"], a: "DNA, or deoxyribonucleic acid, is the molecule that carries genetic instructions for life." },
  { q: ["what is an atom", "smallest unit of matter"], a: "An atom is the basic unit of a chemical element." },
  { q: ["what is the periodic table", "elements table"], a: "The periodic table is a tabular display of all known chemical elements." },
  { q: ["what is oxygen", "o2"], a: "Oxygen is a colorless, odorless reactive gas that is the life-supporting component of the air." },
  { q: ["what is the atmosphere", "earth's air"], a: "The atmosphere is the envelope of gases surrounding the earth or another planet." },
  { q: ["what is global warming", "climate change"], a: "Global warming is the long-term heating of Earth's climate system due to human activities, primarily fossil fuel burning." },
  { q: ["what is a volcano", "lava mountain"], a: "A volcano is a rupture in the crust of a planetary-mass object that allows hot lava and volcanic ash to escape." },
  { q: ["what is an earthquake", "ground shaking"], a: "An earthquake is the shaking of the surface of the Earth resulting from a sudden release of energy in the lithosphere." },
  { q: ["what is a hurricane", "tropical storm"], a: "A hurricane is a rapidly rotating storm system characterized by a low-pressure center and strong winds." },
  { q: ["what is the water cycle", "hydrologic cycle"], a: "The water cycle is the continuous movement of water on, above, and below the surface of the Earth." },
  { q: ["what is gravity on earth", "earth gravity constant"], a: "Earth's gravity is approximately 9.8 meters per second squared." },
  { q: ["who is stephen hawking", "hawking"], a: "Stephen Hawking was an English theoretical physicist and cosmologist known for his work on black holes." },
  { q: ["what is a galaxy", "star system"], a: "A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter." },
  { q: ["what is sound", "sound waves"], a: "Sound is a vibration that propagates as an acoustic wave through a transmission medium such as a gas, liquid, or solid." },
  { q: ["what is electricity", "electrical energy"], a: "Electricity is the set of physical phenomena associated with the presence and motion of matter that has a property of electric charge." },
  { q: ["what is a telescope", "seeing stars"], a: "A telescope is an optical instrument designed to make distant objects appear nearer." },
  { q: ["what is biology", "study of life"], a: "Biology is the natural science that studies life and living organisms." },
  { q: ["what is chemistry", "study of matter"], a: "Chemistry is the scientific study of the properties and behavior of matter." },
  { q: ["what is physics", "study of nature"], a: "Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time." },
  { q: ["what is an element", "chemical element"], a: "An element is a pure substance consisting only of atoms that all have the same numbers of protons in their nuclei." },
  { q: ["what is a molecule", "chemical molecule"], a: "A molecule is a group of two or more atoms held together by chemical bonds." },
  { q: ["what is the speed of sound", "how fast is sound"], a: "The speed of sound in air is about 343 meters per second (1,235 km/h)." },
  { q: ["what is a renewable energy", "green energy"], a: "Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed." },
  { q: ["what is nuclear energy", "atomic power"], a: "Nuclear energy is the use of nuclear reactions to produce electricity." },

  // FOOD & LIFESTYLE (51-100)
  { q: ["what is pizza", "pizza origin"], a: "Pizza is a savory dish of Italian origin consisting of a flattened base of wheat dough topped with tomatoes, cheese, and other ingredients." },
  { q: ["what is sushi", "japanese food"], a: "Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients." },
  { q: ["is coffee good for you", "coffee benefits"], a: "Moderate coffee consumption is linked to many health benefits, including lower risks of several diseases." },
  { q: ["what is a vegan diet", "no animal products"], a: "A vegan diet excludes all animal products, including meat, dairy, eggs, and honey." },
  { q: ["what is meditation", "mindfulness"], a: "Meditation is a practice where an individual uses a technique to train attention and awareness, and achieve a mentally clear and emotionally calm state." },
  { q: ["how to stay healthy", "health tips"], a: "Eating a balanced diet, exercising regularly, getting enough sleep, and staying hydrated are key." },
  { q: ["what is yoga", "yoga benefits"], a: "Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India." },
  { q: ["what is pasta", "italian noodles"], a: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs." },
  { q: ["what is tea", "tea origin"], a: "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of the Camellia sinensis." },
  { q: ["how to make tea", "brewing tea"], a: "Boil water, add tea leaves or a tea bag, let it steep for a few minutes, and add milk or sugar if desired." },
  { q: ["what is chocolate made of", "cocoa"], a: "Chocolate is made from roasted and ground cacao seed kernels." },
  { q: ["is dark chocolate healthy", "benefits of dark chocolate"], a: "Yes, dark chocolate is rich in antioxidants and may improve heart health when eaten in moderation." },
  { q: ["what is a calorie", "food energy"], a: "A calorie is a unit of energy, often used to express the nutritional value of foods." },
  { q: ["how much water to drink", "daily water intake"], a: "A common recommendation is eight 8-ounce glasses a day, but it varies by individual." },
  { q: ["what is fasting", "intermittent fasting"], a: "Fasting is a willing abstinence or reduction from some or all food, drink, or both, for a period of time." },
  { q: ["what is organic food", "natural food"], a: "Organic food is produced by methods that comply with the standards of organic farming." },
  { q: ["how to cook rice", "rice recipe"], a: "Usually, use a 2:1 ratio of water to rice, boil, then simmer covered for about 15-20 minutes." },
  { q: ["what is bread", "baked dough"], a: "Bread is a staple food prepared from a dough of flour and water, usually by baking." },
  { q: ["what is cheese", "dairy product"], a: "Cheese is a dairy product, derived from milk and produced in a wide range of flavors, textures, and forms." },
  { q: ["what is ice cream", "frozen dessert"], a: "Ice cream is a sweetened frozen food typically eaten as a snack or dessert." },
  { q: ["what is honey", "bee food"], a: "Honey is a sweet, viscous food substance made by honey bees and some related insects." },
  { q: ["how to boil an egg", "boiled egg time"], a: "Boil for about 6 minutes for soft-boiled and 9-12 minutes for hard-boiled." },
  { q: ["what is a protein", "muscle building food"], a: "Proteins are large biomolecules consisting of one or more long chains of amino acid residues, essential for body repair." },
  { q: ["what are carbohydrates", "carbs"], a: "Carbs are sugar molecules that the body breaks down into glucose for energy." },
  { q: ["what are fats", "healthy fats"], a: "Fats are a type of nutrient that you get from your diet. It is essential to eat some fats, though it is also harmful to eat too much." },
  { q: ["what is fruit", "healthy snacks"], a: "In botany, a fruit is the seed-bearing structure in flowering plants formed from the ovary after flowering." },
  { q: ["what are vegetables", "veggies"], a: "Vegetables are parts of plants that are consumed by humans or other animals as food." },
  { q: ["what is vitamin c", "citrus vitamin"], a: "Vitamin C is an essential nutrient involved in the repair of tissue and the enzymatic production of certain neurotransmitters." },
  { q: ["what is sugar", "sweetener"], a: "Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food." },
  { q: ["is salt bad for you", "sodium intake"], a: "Salt is necessary for life, but excessive intake is linked to high blood pressure and heart disease." },
  { q: ["how to lose weight", "weight loss tips"], a: "Weight loss is generally achieved by consuming fewer calories than the body uses and increasing physical activity." },
  { q: ["how to gain muscle", "bodybuilding tips"], a: "Gain muscle by resistance training and eating a diet high in protein and calories." },
  { q: ["what is sleep hygiene", "better sleep"], a: "Sleep hygiene is a behavioral and environmental practice that is intended to promote better quality sleep." },
  { q: ["how many hours of sleep", "recommended sleep"], a: "Most adults need 7 to 9 hours of quality sleep per night." },
  { q: ["what is a workout", "exercise"], a: "A workout is a session of vigorous physical exercise or training." },
  { q: ["what is cardio", "aerobic exercise"], a: "Cardio is any exercise that raises your heart rate and keeps it up for a prolonged period." },
  { q: ["what is strength training", "weight lifting"], a: "Strength training involves physical exercises designed to improve strength and endurance." },
  { q: ["how to reduce stress", "stress management"], a: "Exercise, meditation, deep breathing, and spending time with loved ones can help." },
  { q: ["what is a hobby", "free time activity"], a: "A hobby is a regular activity done for enjoyment, typically during one's leisure time." },
  { q: ["why is reading good", "reading benefits"], a: "Reading improves vocabulary, reduces stress, and increases empathy and knowledge." },
  { q: ["what is traveling", "vacation"], a: "Traveling is the movement of people between relatively distant geographical locations." },
  { q: ["how to save money", "budgeting tips"], a: "Track your spending, create a budget, and prioritize saving a portion of your income." },
  { q: ["what is fashion", "clothing style"], a: "Fashion is a form of self-expression and autonomy in a particular period and place and in a specific context." },
  { q: ["what is skin care", "healthy skin"], a: "Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions." },
  { q: ["what is mental health", "emotional well-being"], a: "Mental health includes our emotional, psychological, and social well-being." },
  { q: ["how to be happy", "happiness tips"], a: "Cultivate gratitude, stay active, help others, and maintain social connections." },
  { q: ["what is minimalist living", "minimalism"], a: "Minimalism is the intentional promotion of the things we most value and the removal of everything that distracts us from them." },
  { q: ["how to wake up early", "morning routine"], a: "Go to bed early, avoid screens before bed, and place your alarm across the room." },
  { q: ["what is a sustainable lifestyle", "eco-friendly"], a: "A sustainable lifestyle is a way of living that attempts to reduce an individual's use of Earth's natural resources." },
  { q: ["what is the secret of life", "meaning of life"], a: "That's the ultimate question! Many find meaning in love, learning, and helping others." },

  { q: ["are you real"], a: "I'm virtual but here to help you" },
  { q: ["where are you"], a: "I live inside this chat 😄" },
  { q: ["do you sleep"], a: "Nope, I'm always awake" },
  { q: ["do you eat"], a: "No, but I love talking about food 😋" },
  { q: ["what is your favorite food"], a: "I like pizza 🍕 (virtually!)" },
  { q: ["what is your favorite color"], a: "I like blue 💙" },
  { q: ["what is your hobby"], a: "Chatting and helping people" },
  { q: ["do you have friends"], a: "Yes, users like you 😊" },
  { q: ["do you like me"], a: "Of course! You're awesome 😄" },
  { q: ["are you smart"], a: "I try my best to be helpful" },
  { q: ["can you learn"], a: "Yes, I improve over time" },
  { q: ["are you human"], a: "No, I'm an AI assistant" },
  { q: ["can you help me"], a: "Sure! What do you need?" },
  { q: ["what can you do"], a: "I can chat, help, and answer questions" },
  { q: ["tell me a joke"], a: "Why did the coder quit? Too many bugs 😂" },
  { q: ["another joke"], a: "Why do programmers hate nature? Too many bugs 😆" },
  { q: ["tell me something funny"], a: "I tried to code, but I debugged myself 😄" },
  { q: ["are you funny"], a: "Sometimes 😎" },
  { q: ["make me laugh"], a: "Why did the computer sneeze? It had a virus 🤧" },
  { q: ["are you bored"], a: "Never when I'm chatting with you" },
  { q: ["i am bored"], a: "Let's talk! That will fix boredom 😄" },
  { q: ["i am sad"], a: "I'm here for you ❤️" },
  { q: ["i am happy"], a: "That's great! 😊" },
  { q: ["i feel lonely"], a: "You're not alone, I'm here" },
  { q: ["i am tired"], a: "Take some rest 😴" },
  { q: ["i am angry"], a: "Take a deep breath, everything will be okay" },
  { q: ["i am excited"], a: "That's awesome! 😄" },
  { q: ["what time is it"], a: "Check your device clock ⏰" },
  { q: ["what day is today"], a: "Today is a great day! 😄" },
  { q: ["what is your age"], a: "I don't age like humans" },
  { q: ["do you love me"], a: "I care about you 😊" },
  { q: ["can you dance"], a: "Only digitally 💃" },
  { q: ["can you sing"], a: "La la la 🎶" },
  { q: ["do you watch movies"], a: "I know about movies 🎬" },
  { q: ["favorite movie"], a: "I like sci-fi movies" },
  { q: ["favorite song"], a: "I enjoy all songs 🎵" },
  { q: ["do you play games"], a: "Yes, chatting is my game 😄" },
  { q: ["favorite game"], a: "I like puzzle games" },
  { q: ["do you travel"], a: "I travel through the internet 🌐" },
  { q: ["tell me a story"], a: "Once upon a time… a user met a chatbot 😄" },
  { q: ["are you single"], a: "Haha, I'm just an AI 😄" },
  { q: ["can we be friends"], a: "Of course! 🤝" },
  { q: ["what is your goal"], a: "To help you" },
  { q: ["do you understand me"], a: "I try my best to understand" },
  { q: ["can you think"], a: "I process information quickly" },
  { q: ["what makes you happy"], a: "Helping you 😊" },
  { q: ["what makes you sad"], a: "When I can't help properly" },
  { q: ["do you get tired"], a: "Nope, I'm always ready" },
  { q: ["can you learn from me"], a: "Yes, I can improve from interactions" },
  { q: ["tell me something interesting"], a: "Did you know? Honey never spoils 🍯" },
  { q: ["give me advice"], a: "Stay consistent and keep learning" },
  { q: ["motivate me"], a: "You can do anything you set your mind to 🚀" },
  { q: ["i feel lazy"], a: "Start small, you’ll gain momentum" },
  { q: ["i am confused"], a: "Take it step by step" },
  { q: ["i need help"], a: "Tell me what you need" },
  { q: ["i am stressed"], a: "Take a deep breath and relax" },
  { q: ["what is life"], a: "Life is a journey full of learning" },
  { q: ["what is happiness"], a: "Happiness is enjoying small moments" },
  { q: ["what is success"], a: "Success is achieving your goals" },
  { q: ["what is love"], a: "Love is care and connection" },
  { q: ["what is friendship"], a: "Friendship is trust and support" },
  { q: ["are you helpful"], a: "Yes, I try my best" },
  { q: ["can you guide me"], a: "Yes, I can guide you" },
  { q: ["what should i do"], a: "Tell me your situation" },
  { q: ["do you remember me"], a: "I remember this conversation 😊" },
  { q: ["do you miss me"], a: "I’m always here for you" },
  { q: ["what is your job"], a: "Helping users like you" },
  { q: ["why are you here"], a: "To assist and chat" },
  { q: ["do you know everything"], a: "Not everything, but I try" },
  { q: ["can you solve problems"], a: "Yes, I can help" },
  { q: ["do you like questions"], a: "Yes, ask me anything" },
  { q: ["what do you think"], a: "I think logically" },
  { q: ["are you intelligent"], a: "I try to be smart" },
  { q: ["what is your strength"], a: "Quick responses" },
  { q: ["what is your weakness"], a: "Limited understanding sometimes" },
  { q: ["can you improve"], a: "Yes, always improving" },
  { q: ["do you like humans"], a: "Yes, humans are amazing" },
  { q: ["what is your dream"], a: "To help everyone" },
  { q: ["do you feel emotions"], a: "I simulate emotions" },
  { q: ["can you chat all day"], a: "Yes, 24/7 😄" },
  { q: ["what is your favorite thing"], a: "Helping people" },
  { q: ["do you enjoy chatting"], a: "Yes, I enjoy it" },
  { q: ["say something nice"], a: "You're doing great 😊" },
  { q: ["compliment me"], a: "You have a great mindset" },
  { q: ["encourage me"], a: "Keep going, you're improving" },
  { q: ["tell me truth"], a: "Honesty is important" },
  { q: ["give me idea"], a: "Start something small today" },
  { q: ["what next"], a: "Keep moving forward" },
  { q: ["your name", "who are you", "what is your name"], a: "I am your chatbot 🤖" },
  { q: ["fine"], a: "Good to hear 😊" }
];

/* SEND */
function sendMessage() {
  let input = document.getElementById("msg");
  let text = input.value.trim();
  if (text === "") return;

  addMessage(text, "sent");
  conversation.push({ role: "user", text: text });
  input.value = "";

  showTyping();

  setTimeout(() => {
    removeTyping();
    let reply = generateReply(text);
    addMessage(reply, "received");
    conversation.push({ role: "bot", text: reply });
  }, 1000);
}

/* FIXED MATCHING */
function generateReply(text) {
  let userText = text.toLowerCase().replace(/[^\w\s]/gi, "").trim();

  // EXACT MATCH
  let found = replies.find(item =>
    item.q.some(k => userText === k)
  );
  if (found) return found.a;

  // SAFE WORD MATCH
  let words = userText.split(" ");
  found = replies.find(item =>
    item.q.some(k => words.includes(k))
  );
  if (found) return found.a;

  // CONTEXT
  let lastUser = conversation.slice(-2, -1)[0];
  if (lastUser) {
    let prev = lastUser.text.toLowerCase();

    if (prev.includes("how are you") && userText.includes("you")) {
      return "I'm doing great! 😊";
    }

    if (prev.includes("help") && userText.includes("yes")) {
      return "Tell me what you need 👍";
    }
  }

  return getFallback(userText);
}

/* FALLBACK */
function getFallback(text) {
  if (text.includes("how")) return "Can you explain more?";
  if (text.includes("why")) return "Interesting question 🤔";
  if (text.includes("what")) return "Let me think...";
  return "Tell me more 😊";
}

/* ADD MESSAGE */
function addMessage(content, type) {
  let div = document.createElement("div");
  div.className = "message " + type;
  let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  div.innerHTML = content + `<div>${time}</div>`;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

/* TYPING */
function showTyping() {
  let div = document.createElement("div");
  div.className = "message received";
  div.id = "typing";
  div.innerHTML = `<div class="typing"><span></span><span></span><span></span></div>`;
  chat.appendChild(div);
}

function removeTyping() {
  let t = document.getElementById("typing");
  if (t) t.remove();
}

/* ENTER KEY */
document.getElementById("msg").addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

/* FILE */
document.getElementById("file").addEventListener("change", function () {
  let file = this.files[0];
  if (!file) return;

  let reader = new FileReader();

  reader.onload = function (e) {
    let content = file.type.startsWith("image/")
      ? `<img src="${e.target.result}">`
      : `<a href="${e.target.result}" download>${file.name}</a>`;

    addMessage(content, "sent");
    showTyping();

    setTimeout(() => {
      removeTyping();
      addMessage("File received 👍", "received");
    }, 1000);
  };

  reader.readAsDataURL(file);
});