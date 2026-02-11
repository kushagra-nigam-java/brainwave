import type { Lesson, Question } from "./types";

export const defaultLessons: Lesson[] = [
  {
    id: "math-1",
    title: "Introduction to Algebra",
    subject: "Mathematics",
    grade: "Class 8",
    ncertTopic: "Linear Equations in One Variable",
    chapter: "Chapter 2",
    duration: "15 min",
    syllabus: "Understanding variables, constants, and linear equations; solving simple equations",
    content: `Algebra is a branch of mathematics that uses symbols and letters to represent numbers and quantities in formulas and equations.

**Key Concepts:**

1. **Variables**: Letters like x, y, z that represent unknown values
2. **Constants**: Fixed numerical values like 2, 5, -3
3. **Expressions**: Combinations of variables and constants (e.g., 2x + 5)
4. **Equations**: Statements showing two expressions are equal (e.g., 2x + 5 = 15)

**Understanding Variables:**
Variables are like empty boxes that can hold different values. For instance, if we say x = 5, then x is a box containing the number 5. We use variables when we don't know the exact value yet, or when the value can change.

**Solving Linear Equations:**
The goal is to isolate the variable on one side of the equation. We do this by performing inverse operations:
- Addition ↔ Subtraction
- Multiplication ↔ Division

**Example Problem 1:**
Solve for x: 2x + 6 = 14
Step 1: Subtract 6 from both sides: 2x + 6 - 6 = 14 - 6 → 2x = 8
Step 2: Divide both sides by 2: 2x ÷ 2 = 8 ÷ 2 → x = 4
Verification: 2(4) + 6 = 8 + 6 = 14 ✓

**Example Problem 2:**
Solve for y: 3y - 5 = 16
Step 1: Add 5 to both sides: 3y - 5 + 5 = 16 + 5 → 3y = 21
Step 2: Divide both sides by 3: 3y ÷ 3 = 21 ÷ 3 → y = 7
Verification: 3(7) - 5 = 21 - 5 = 16 ✓

**Practice Tip:** Always perform the same operation on both sides of an equation to maintain balance. Check your answer by substituting it back into the original equation.

**Real-World Application:**
Algebra helps us solve everyday problems. For example, if you earn ₹50 per hour and want to make ₹500, how many hours do you need to work? We can write: 50x = 500, so x = 10 hours.`,
  },
  {
    id: "science-1",
    title: "The Water Cycle",
    subject: "Science",
    grade: "Class 6",
    ncertTopic: "Water: A Precious Resource",
    chapter: "Chapter 14",
    duration: "12 min",
    syllabus: "Understanding evaporation, condensation, precipitation, and collection; role of water in human life",
    content: `The water cycle, also known as the hydrological cycle, describes the continuous movement of water on, above, and below the surface of the Earth. This never-ending cycle is essential for all life on our planet.

**Main Stages of the Water Cycle:**

1. **Evaporation**: Water from oceans, lakes, and rivers turns into water vapor due to heat from the sun
   - Occurs when heat energy gives water molecules enough energy to escape as gas
   - The sun is the primary source of energy for evaporation
   - Happens faster in warm temperatures and slower in cold weather

2. **Condensation**: Water vapor rises into the atmosphere and cools, forming tiny water droplets that create clouds
   - As warm air rises, it expands and cools
   - When temperature drops below dew point, water vapor condenses into liquid
   - This process forms clouds and dew on grass in the morning

3. **Precipitation**: Water falls back to Earth in various forms
   - Rain: most common form
   - Snow: falls in colder regions
   - Sleet: mixture of rain and ice
   - Hail: frozen raindrops

4. **Collection**: Water collects in different places
   - Oceans and seas (97% of water)
   - Rivers and lakes
   - Underground aquifers and soil
   - Plants and animals

**Transpiration - A Key Component:**
Plants absorb water through roots and release water vapor through leaves. This process is called transpiration. The combined process of evaporation and transpiration is called evapotranspiration.

**Did You Know?**
- The same water has been cycling through Earth for billions of years
- About 97% of Earth's water is in the oceans (salt water)
- Only 3% is freshwater, and most of that (about 68%) is frozen in glaciers and polar ice caps
- Less than 1% of freshwater is available for human use
- A single cloud can contain millions of water droplets

**Importance of the Water Cycle:**
- Distributes water across the planet
- Regulates Earth's temperature
- Supports all life forms
- Influences weather patterns
- Provides fresh water for drinking, agriculture, and industry`,
  },
  {
    id: "english-1",
    title: "Parts of Speech",
    subject: "English",
    grade: "Class 7",
    ncertTopic: "Grammar - Parts of Speech",
    chapter: "Unit 1",
    duration: "10 min",
    syllabus: "Eight parts of speech; usage of nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections in sentences",
    content: `Parts of speech are categories that describe the function of words in sentences. Understanding them helps you write better and understand grammar rules. Every word in English belongs to one or more of these eight categories.

**The 8 Parts of Speech:**

1. **Noun**: Names a person, place, thing, or idea
   - Common nouns: book, table, girl
   - Proper nouns: Raj, India, Taj Mahal (always capitalized)
   - Abstract nouns: happiness, freedom, knowledge
   Example: *Priya*, *Mumbai*, *computer*, *courage*

2. **Pronoun**: Replaces a noun to avoid repetition
   - Personal pronouns: I, you, he, she, it, we, they
   - Possessive pronouns: my, your, his, her, its, our, their
   Example: She gave *him* *her* book.

3. **Verb**: Shows action or state of being
   - Action verbs: run, jump, write, eat
   - Linking verbs: is, am, are, was, were, become
   - Helping verbs: have, has, do, does, will, can, should
   Example: *The students study* mathematics. *The answer is* correct.

4. **Adjective**: Describes or modifies a noun
   - Quality adjectives: beautiful, tall, old, smart
   - Quantitative adjectives: some, many, few, several
   - Demonstrative adjectives: this, that, these, those
   Example: The *intelligent young* student won the *prestigious* award.

5. **Adverb**: Describes or modifies a verb, adjective, or another adverb
   - Adverbs of manner: quickly, slowly, carefully, happily
   - Adverbs of time: today, yesterday, soon, always
   - Adverbs of place: here, there, outside, upstairs
   Example: The student *very carefully* solved the problem.

6. **Preposition**: Shows the relationship between a noun/pronoun and other words
   - Location: in, on, at, under, above, between
   - Direction: to, from, toward, away from
   - Time: before, after, during, since
   Example: The book is *on* the table. They walked *through* the park.

7. **Conjunction**: Connects words, phrases, or sentences
   - Coordinating: and, but, or, nor, for, yet, so
   - Subordinating: because, although, while, if, since, unless
   Example: *Raj and Priya* studied hard *because* the exam was important.

8. **Interjection**: Expresses emotion or strong feeling
   - Mild: Oh, well, hmm, alas
   - Strong: Wow! Oops! Hurray! Help!
   Example: *Wow!* That was amazing!

**Practice Exercise:** Identify the parts of speech in this sentence:
"The clever student quickly solved the difficult mathematical problem."
- The (adjective)
- clever (adjective)
- student (noun)
- quickly (adverb)
- solved (verb)
- the (adjective)
- difficult (adjective)
- mathematical (adjective)
- problem (noun)

**Tips for Identifying Parts of Speech:**
- Ask "What is this word doing in the sentence?"
- Look at how it's used, not just the word itself (words can be different parts of speech in different sentences)
- Example: "Water" is a noun in "I drink water" but a verb in "Please water the plants."`,
  },
  {
    id: "history-1",
    title: "The Maurya Empire",
    subject: "Social Studies",
    grade: "Class 6",
    ncertTopic: "Ancient Empires - The Mauryas",
    chapter: "Chapter 6",
    duration: "14 min",
    syllabus: "Maurya Empire timeline; rule of Chandragupta, Bindusara, and Ashoka; political organization; Ashoka's edicts and conversion to Buddhism",
    content: `The Maurya Empire was one of the largest and most powerful empires in ancient India, lasting from 322 BCE to 185 BCE. At its peak, it covered most of the Indian subcontinent from the Himalayas to the Deccan Plateau.

**Timeline and Key Rulers:**

1. **Chandragupta Maurya** (322-298 BCE) - The Founder
   - Born as the son of a wealthy merchant or noble
   - Received education from Chanakya (also known as Kautilya)
   - Overthrew the Nanda Dynasty and established the Mauryan dynasty
   - With help from Chanakya's strategies, he defeated the Greek forces of Seleucus Nicator
   - United most of the Indian subcontinent under one rule
   - Abdicated the throne and became a Jain monk in his later years

2. **Bindusara** (298-272 BCE) - The Expander
   - Son of Chandragupta Maurya
   - Expanded the empire southward
   - Known as "Amitraghata" (slayer of enemies) and "Simhasena" (man with lion strength)
   - Maintained friendly relations with foreign rulers
   - Ruled a vast territory but faced some rebellions

3. **Ashoka the Great** (268-232 BCE) - The Transformer
   - Grandson of Chandragupta Maurya
   - Most famous Mauryan emperor
   - Early rule was marked by expansion and aggression
   - The turning point: The Kalinga War (260 BCE)
     * Fought to conquer the kingdom of Kalinga (present-day Odisha)
     * Though victorious, witnessed immense bloodshed and suffering
     * This war changed his outlook on life and governance
   - Converted to Buddhism and became a devoted Buddhist
   - Renounced violence and pursued a policy of "Dhamma" (righteousness)
   - Spread messages of peace through rock edicts carved across the empire

**Administrative System:**
- Divided the empire into provinces
- Appointed governors to rule different regions
- Created a sophisticated tax collection system
- Established public works like roads, wells, and hospitals
- Maintained a large standing army
- Used a network of spies and intelligence officers (Chakravimukhis)

**Key Achievements:**
- Built the famous Grand Trunk Road (Sher Shah Suri Marg) connecting east to west
- Established Pataliputra as the capital (modern-day Patna)
- Constructed stupas (Buddhist temples) and monasteries
- Created public gardens and parks
- Organized the first All-India civil service
- Supported Buddhism and spread it to countries like Sri Lanka, China, and Southeast Asia

**The Arthashastra:**
- Written by Chanakya, Ashoka's grandfather's teacher
- A comprehensive text on statecraft, economics, and politics
- Covers topics like administration, law, war strategy, and espionage
- Still studied today as one of the earliest works on political science

**Ashoka's Edicts:**
- Rock-carved inscriptions found across the empire
- Messages about moral conduct, justice, and compassion
- Advocated non-violence (ahimsa) and respect for all religions
- Promoted education, healthcare, and animal welfare
- Most famous: "All men are my children"

**Legacy:**
- The Lion Capital of Ashoka at Sarnath became India's national emblem
- His symbol, the Ashoka Chakra (wheel), features on the Indian flag
- Established the foundation for Buddhist philosophy and spread
- Set examples of ethical governance still relevant today
- The Mauryan administration became a model for later Indian empires`,
  },
  {
    id: "math-2",
    title: "Geometry Basics",
    subject: "Mathematics",
    grade: "Class 7",
    ncertTopic: "Basic Geometric Shapes",
    chapter: "Chapter 5",
    duration: "13 min",
    syllabus: "Understanding triangles, quadrilaterals, and circles; properties and measurements; perimeter and area calculations",
    content: `Geometry is the study of shapes, sizes, positions, and properties of space. The word comes from Greek: "geo" (earth) and "metria" (measurement). Let's explore the fundamental concepts.

**Triangles:**

1. **Triangle**: A polygon with 3 sides and 3 angles
   - Property: Sum of all angles = 180°
   
   Types based on sides:
   - **Equilateral**: All 3 sides equal, all angles 60°
     * Most symmetrical triangle
   - **Isosceles**: Two sides equal, two angles equal
     * The equal angles are opposite the equal sides
   - **Scalene**: All sides different lengths, all angles different
     * No line of symmetry

   Types based on angles:
   - **Acute**: All angles less than 90°
   - **Right**: One angle = 90° (has a hypotenuse)
   - **Obtuse**: One angle greater than 90°

**Quadrilaterals:**

Quadrilaterals are 4-sided polygons with a sum of all angles = 360°

1. **Square**
   - All 4 sides equal
   - All 4 angles = 90°
   - Diagonals are equal and bisect at 90°
   - Perimeter = 4 × side
   - Area = side²

2. **Rectangle**
   - Opposite sides equal
   - All 4 angles = 90°
   - Diagonals are equal
   - Perimeter = 2(length + width)
   - Area = length × width

3. **Parallelogram**
   - Opposite sides parallel and equal
   - Opposite angles equal
   - Diagonals bisect each other
   - Perimeter = 2(length + width)
   - Area = base × height

4. **Rhombus**
   - All 4 sides equal
   - Opposite angles equal
   - Diagonals are perpendicular and bisect each other
   - Area = (diagonal₁ × diagonal₂) / 2

5. **Trapezium**
   - One pair of parallel sides (called bases)
   - Area = ½ × (sum of parallel sides) × height

**Circle:**

A circle is a set of all points equidistant from a central point.

Key terms:
- **Radius (r)**: Distance from center to any point on the circle
- **Diameter (d)**: Distance across the circle through the center = 2r
- **Circumference**: The distance around the circle = 2πr = πd
- **Area**: Space enclosed by the circle = πr²

Properties:
- All radii of a circle are equal
- A circle has no corners or edges
- The longest chord of a circle is the diameter

**Important Formulas Summary:**

Perimeter/Circumference:
- Triangle: side₁ + side₂ + side₃
- Rectangle: 2(l + b)
- Square: 4 × side
- Circle: 2πr or πd

Area:
- Rectangle: length × width
- Square: side²
- Triangle: ½ × base × height
- Circle: πr²
- Parallelogram: base × height

**Example Problems:**

1. Find the area of a rectangle with length 8 cm and width 5 cm.
   Area = 8 × 5 = 40 cm²

2. Find the circumference of a circle with radius 7 cm (use π = 22/7).
   Circumference = 2πr = 2 × (22/7) × 7 = 44 cm

3. A triangle has base 10 cm and height 6 cm. Find its area.
   Area = ½ × 10 × 6 = 30 cm²

**Remember:** π (pi) ≈ 3.14159 or 22/7 for calculations.

**Real-World Applications:**
- Architects use geometry to design buildings
- Engineers use it to build bridges and roads
- Artists use geometric principles in drawing and painting
- Cartographers use geometry to create maps`,
  },
  {
    id: "science-2",
    title: "Photosynthesis",
    subject: "Science",
    grade: "Class 7",
    ncertTopic: "Plant Nutrition",
    chapter: "Chapter 1",
    duration: "16 min",
    syllabus: "Understanding photosynthesis process, role of chlorophyll, sunlight, water, and carbon dioxide; importance for life on Earth",
    content: `Photosynthesis is the process by which plants make their own food using sunlight, water, and carbon dioxide. It's one of the most important biochemical processes on Earth.

**Definition:**
Photosynthesis is a process where plants convert light energy into chemical energy stored in glucose (food).

**The Photosynthesis Equation:**
6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ + 6O₂
(Carbon dioxide + Water + Light energy → Glucose + Oxygen)

**Requirements for Photosynthesis:**

1. **Sunlight**: Energy source for the entire process
   - Only the wavelengths that chlorophyll can absorb are useful
   - More sunlight = faster photosynthesis

2. **Water (H₂O)**: Absorbed by roots and transported to leaves
   - Provides hydrogen for glucose formation
   - Needed in both light and dark reactions

3. **Carbon Dioxide (CO₂)**: Obtained from the air through stomata (pores in leaves)
   - Provides carbon for glucose formation
   - Stored in the form of glucose for future use

4. **Chlorophyll**: Green pigment in chloroplasts
   - Absorbs light energy
   - Found primarily in leaves

**Two Main Stages:**

1. **Light Reactions** (occurring in thylakoid membranes)
   - Requires light (cannot occur in darkness)
   - Water is split, releasing oxygen as a byproduct
   - Energy (ATP) and reducing power (NADPH) are produced
   - Takes place in the day

2. **Dark Reactions** (Calvin Cycle - occurring in stroma)
   - Can occur with or without light
   - Uses ATP and NADPH from light reactions
   - Converts CO₂ into glucose
   - Doesn't directly require light but depends on products from light reactions

**Why is Photosynthesis Important?**

- **Produces Food**: Creates organic compounds that form the base of food chains
- **Produces Oxygen**: The oxygen we breathe is a byproduct of photosynthesis
- **Removes CO₂**: Helps regulate atmospheric carbon dioxide levels
- **Energy Source**: Stores solar energy in chemical bonds for all living organisms
- **Supports Life**: Without photosynthesis, life as we know it couldn't exist

**Factors Affecting Photosynthesis:**
- Light intensity: More light increases photosynthesis up to a saturation point
- Temperature: Optimal range is 25-35°C
- CO₂ concentration: Increased CO₂ increases photosynthesis
- Water availability: Essential for the process
- Chlorophyll content: More chlorophyll = more photosynthesis

**Interesting Facts:**
- Plants conduct photosynthesis 24/7 during daylight
- A single plant can produce enough oxygen for two people
- Leaves change color in autumn because chlorophyll breaks down`,
  },
  {
    id: "english-2",
    title: "Tenses and Verb Forms",
    subject: "English",
    grade: "Class 8",
    ncertTopic: "Grammar - Tenses",
    chapter: "Chapter 3",
    duration: "18 min",
    syllabus: "Understanding present, past, and future tenses; simple, continuous, and perfect forms; usage in sentences",
    content: `Tenses show the time of an action or state. There are three main time divisions: present, past, and future. Each can be expressed in different ways.

**Present Tense:**

1. **Simple Present**
   - For habitual actions, facts, general truths
   - Form: Base verb (+ s/es for 3rd person singular)
   - Example: "She plays cricket." "The Earth revolves around the Sun."

2. **Present Continuous**
   - For actions happening right now
   - Form: is/am/are + verb-ing
   - Example: "I am studying mathematics." "They are playing football."

3. **Present Perfect**
   - For actions that started in past but continue to present
   - Form: has/have + past participle
   - Example: "I have completed my homework." "She has lived here for 5 years."

**Past Tense:**

1. **Simple Past**
   - For completed actions in the past
   - Form: verb in past form (usually + ed)
   - Example: "He played cricket yesterday." "They visited Delhi last month."

2. **Past Continuous**
   - For actions ongoing at a specific time in past
   - Form: was/were + verb-ing
   - Example: "I was reading when you called." "They were playing when it rained."

3. **Past Perfect**
   - For action completed before another past action
   - Form: had + past participle
   - Example: "I had finished before he arrived." "She had studied before the exam."

**Future Tense:**

1. **Simple Future**
   - For planned or definite future actions
   - Form: will/shall + base verb
   - Example: "I will help you tomorrow." "They shall meet next week."

2. **Future Continuous**
   - For ongoing actions in the future
   - Form: will be + verb-ing
   - Example: "I will be studying tomorrow afternoon." "They will be traveling next month."

3. **Future Perfect**
   - For future action that will be completed before a specific time
   - Form: will have + past participle
   - Example: "I will have completed by 5 PM." "They will have reached by evening."

**Quick Reference Table:**

Simple: Base action at a particular time
Continuous: Ongoing action at a particular time
Perfect: Completed action before a reference point

**Practice Exercise:**
Fill in the correct tense:
1. She _______ (watch) a movie when I called.
2. By next year, I _______ (study) for 10 years.
3. They _______ (visit) the temple every Sunday.`,
  },
  {
    id: "history-2",
    title: "Ancient India: The Vedic Period",
    subject: "Social Studies",
    grade: "Class 6",
    ncertTopic: "Early Civilizations",
    chapter: "Chapter 4",
    duration: "17 min",
    syllabus: "Understanding the Vedic period, Rig Vedas, caste system, religious practices, early settlements and agriculture",
    content: `The Vedic Period (1500 BCE to 600 BCE) marks the era when the Vedas were composed. This period shaped the foundation of Indian civilization, culture, and philosophy.

**Timeline and Phases:**

1. **Early Vedic Period** (1500-1200 BCE)
   - Marked by composition of the Rig Veda
   - Aryans entered India through passes in the Hindu Kush
   - Semi-nomadic pastoral society
   - Settled in the Indus Valley and Gangetic plains

2. **Later Vedic Period** (1200-600 BCE)
   - Composed other Vedas: Yajur Veda, Sama Veda, Atharva Veda
   - Transition from pastoral to agricultural society
   - Expansion into Gangetic Valley
   - Development of early kingdoms and republics

**The Vedas - Sacred Texts:**

1. **Rig Veda**
   - Oldest and most important Veda
   - Collection of 1,028 hymns
   - Composed in Sanskrit
   - Contains knowledge about gods, rituals, and society

2. **Yajur Veda**
   - Contains instructions for performing rituals and sacrifices
   - Provides practical knowledge for daily life

3. **Sama Veda**
   - Collection of melodies and chants
   - Used in religious ceremonies

4. **Atharva Veda**
   - Contains magical formulas, spells, and medicine
   - Addresses common people's concerns

**Society and Social Structure:**

The Vedic society was divided into classes:

1. **Brahmins**: Priests and scholars, keeper of knowledge
2. **Kshatriyas**: Warriors and rulers, protectors of society
3. **Vaishyas**: Merchants, farmers, and artisans
4. **Shudras**: Laborers and servants

This division eventually evolved into the caste system.

**Economic Life:**

- **Agriculture**: Main occupation; wheat, barley, and rice cultivation
- **Pastoralism**: Cattle rearing was very important
- **Trade**: Barter system; no currency yet
- **Crafts**: Pottery, weaving, and metalwork developed

**Religious Beliefs:**

- Polytheistic: Worship of multiple gods
- Main gods: Indra (thunder), Agni (fire), Soma (moon), Varuna (water)
- Rituals and sacrifices (Yagas) were central to religion
- Belief in life after death
- Foundation of Hinduism laid during this period

**Achievements:**

- Development of Sanskrit language
- Creation of the Vedas and Upanishads
- Early urban settlements
- Agricultural advancements
- Metallurgical knowledge
- Mathematical concepts

**Impact on Later Civilization:**

- Vedic principles influenced Indian philosophy
- Caste system originated during this period
- Sanskrit became the language of scholars
- Religious practices continue to influence modern Hinduism`,
  },
  {
    id: "math-3",
    title: "Factors and Multiples",
    subject: "Mathematics",
    grade: "Class 6",
    ncertTopic: "Number System",
    chapter: "Chapter 3",
    duration: "14 min",
    syllabus: "Understanding factors, multiples, prime numbers, composite numbers, HCF, and LCM",
    content: `Factors and multiples are fundamental concepts in number theory. Understanding them helps in solving complex mathematical problems.

**Factors:**

A factor of a number is a number that divides it completely with no remainder.

Example: Factors of 12 are: 1, 2, 3, 4, 6, 12
- 1 × 12 = 12
- 2 × 6 = 12
- 3 × 4 = 12

**Properties of Factors:**
- 1 is a factor of every number
- Every number is a factor of itself
- Number of factors is always finite

**Multiples:**

A multiple of a number is obtained by multiplying that number by any natural number.

Example: Multiples of 5 are: 5, 10, 15, 20, 25, 30, ...

**Properties of Multiples:**
- Every number is a multiple of itself
- Multiples are infinite
- The smallest multiple is the number itself
- Multiples can be found using multiplication

**Prime Numbers:**

A prime number is a natural number greater than 1 with exactly two factors: 1 and itself.

Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47...

**Special Notes:**
- 2 is the only even prime number
- 1 is neither prime nor composite

**Composite Numbers:**

A composite number is a natural number greater than 1 that has more than two factors.

Composite numbers: 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20...

Example: 12 has factors 1, 2, 3, 4, 6, 12

**HCF (Highest Common Factor) / GCD:**

The HCF is the greatest number that divides two or more numbers without remainder.

Method 1: Listing factors
Factors of 18: 1, 2, 3, 6, 9, 18
Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24
Common factors: 1, 2, 3, 6
HCF(18, 24) = 6

Method 2: Prime factorization
18 = 2 × 3²
24 = 2³ × 3
HCF = 2 × 3 = 6

**LCM (Least Common Multiple):**

The LCM is the smallest number that is a multiple of two or more given numbers.

Method 1: Listing multiples
Multiples of 4: 4, 8, 12, 16, 20, 24, ...
Multiples of 6: 6, 12, 18, 24, 30, ...
Common multiples: 12, 24, 36, ...
LCM(4, 6) = 12

Method 2: Prime factorization
4 = 2²
6 = 2 × 3
LCM = 2² × 3 = 12

**Relationship between HCF and LCM:**
For any two numbers a and b:
HCF(a, b) × LCM(a, b) = a × b

**Real-World Applications:**
- Finding HCF: Dividing objects into equal groups
- Finding LCM: Determining when events will occur together again
- Example: If buses leave every 4 hours and trains every 6 hours, when will they leave together?
  LCM(4, 6) = 12 hours`,
  },
  {
    id: "science-3",
    title: "Human Digestive System",
    subject: "Science",
    grade: "Class 7",
    ncertTopic: "Nutrition in Animals",
    chapter: "Chapter 2",
    duration: "19 min",
    syllabus: "Understanding organs of digestion, process of digestion, enzymes, nutrient absorption, and role in health",
    content: `The digestive system is a series of organs that work together to break down food into nutrients that the body can absorb and use for energy and growth.

**Parts of the Digestive System:**

1. **Mouth (Oral Cavity)**
   - Teeth: Break food into smaller pieces (mechanical digestion)
   - Saliva: Contains enzyme amylase that begins chemical digestion of carbohydrates
   - Tongue: Helps mix food and move it backward
   - Process: Mastication (chewing)

2. **Esophagus**
   - Tube connecting mouth to stomach
   - Length: About 25 cm
   - Moves food through peristalsis (muscular contractions)
   - No digestion occurs here

3. **Stomach**
   - Muscular bag-like organ
   - Produces gastric juice containing:
     * Pepsin: Enzyme that breaks down proteins
     * HCl (Hydrochloric acid): Creates acidic environment
     * Mucus: Protects stomach lining
   - Churns food into a paste called chyme
   - Digestion time: 3-4 hours

4. **Small Intestine**
   - Most important site of digestion and absorption
   - Three parts: Duodenum, Jejunum, Ileum
   - Length: 6-7 meters
   - Receives:
     * Bile from liver: Breaks down fats
     * Pancreatic juice: Contains enzymes for carbs, proteins, fats
     * Intestinal juice: Contains various enzymes
   - Has tiny finger-like projections called villi for absorption

5. **Large Intestine**
   - Absorbs water and minerals
   - Forms feces
   - Length: 1.5 meters
   - Contains beneficial bacteria

6. **Rectum and Anus**
   - Stores and expels feces
   - Last part of digestive system

**Accessory Organs:**

1. **Liver**
   - Produces bile for fat digestion
   - Stores nutrients
   - Detoxifies harmful substances
   - Regulates blood sugar

2. **Pancreas**
   - Produces pancreatic juice with digestive enzymes
   - Produces insulin for blood sugar regulation
   - Produces glucagon

3. **Gallbladder**
   - Stores bile
   - Releases bile when needed for fat digestion

**Stages of Digestion:**

1. **Mechanical Digestion**
   - Physical breakdown of food
   - Occurs in mouth and stomach through chewing and churning
   - Increases surface area for chemical digestion

2. **Chemical Digestion**
   - Breakdown of food using enzymes and other chemicals
   - Starts in mouth with salivary amylase
   - Continues in stomach with pepsin
   - Completes in small intestine

**Important Enzymes:**

- **Amylase**: Breaks down carbohydrates (starch) → sugars
- **Protease**: Breaks down proteins → amino acids
- **Lipase**: Breaks down fats → fatty acids and glycerol

**Journey of Food Through Digestive System:**

1. Food enters mouth → chewed and mixed with saliva (5-30 seconds)
2. Swallowed and travels through esophagus → stomach (10 seconds)
3. Mixed with stomach acid and enzymes for 3-4 hours
4. Enters small intestine → further broken down and absorbed (3-5 hours)
5. Remaining material → large intestine (24-48 hours)
6. Feces → expelled through anus

**Tips for Healthy Digestion:**
- Chew food properly (at least 30 times)
- Eat slowly
- Drink plenty of water
- Include fiber-rich foods (vegetables, fruits, whole grains)
- Don't eat before sleeping
- Maintain regular meal times
- Exercise regularly`,
  },
];

export const defaultQuestions: Question[] = [
  // Algebra questions
  {
    id: "q-math-1-1",
    lessonId: "math-1",
    question: "What is a variable in algebra?",
    options: [
      "A fixed number",
      "A letter representing an unknown value",
      "A mathematical operation",
      "A type of equation",
    ],
    correctAnswer: 1,
  },
  {
    id: "q-math-1-2",
    lessonId: "math-1",
    question: "Solve for x: 3x = 15",
    options: ["x = 3", "x = 5", "x = 12", "x = 45"],
    correctAnswer: 1,
  },
  {
    id: "q-math-1-3",
    lessonId: "math-1",
    question: "Which of these is an algebraic expression?",
    options: ["5 + 3 = 8", "2x + 7", "Hello", "15"],
    correctAnswer: 1,
  },
  // Water cycle questions
  {
    id: "q-science-1-1",
    lessonId: "science-1",
    question: "What causes evaporation in the water cycle?",
    options: ["Wind", "Heat from the sun", "Gravity", "Plants"],
    correctAnswer: 1,
  },
  {
    id: "q-science-1-2",
    lessonId: "science-1",
    question: "What percentage of Earth's water is in the oceans?",
    options: ["50%", "75%", "97%", "30%"],
    correctAnswer: 2,
  },
  {
    id: "q-science-1-3",
    lessonId: "science-1",
    question: "What is transpiration?",
    options: [
      "Water falling as rain",
      "Water vapor released by plants",
      "Water turning to ice",
      "Ocean currents",
    ],
    correctAnswer: 1,
  },
  // English questions
  {
    id: "q-english-1-1",
    lessonId: "english-1",
    question: "Which part of speech is the word 'quickly'?",
    options: ["Noun", "Verb", "Adjective", "Adverb"],
    correctAnswer: 3,
  },
  {
    id: "q-english-1-2",
    lessonId: "english-1",
    question: "What does a pronoun do?",
    options: [
      "Describes a noun",
      "Replaces a noun",
      "Shows action",
      "Connects words",
    ],
    correctAnswer: 1,
  },
  {
    id: "q-english-1-3",
    lessonId: "english-1",
    question: "In 'beautiful garden', what is 'beautiful'?",
    options: ["Noun", "Verb", "Adjective", "Adverb"],
    correctAnswer: 2,
  },
  // History questions
  {
    id: "q-history-1-1",
    lessonId: "history-1",
    question: "Who founded the Maurya Empire?",
    options: ["Ashoka", "Chanakya", "Chandragupta Maurya", "Bindusara"],
    correctAnswer: 2,
  },
  {
    id: "q-history-1-2",
    lessonId: "history-1",
    question: "Which emperor converted to Buddhism after the Kalinga War?",
    options: ["Chandragupta", "Bindusara", "Ashoka", "Chanakya"],
    correctAnswer: 2,
  },
  {
    id: "q-history-1-3",
    lessonId: "history-1",
    question: "What is the Arthashastra?",
    options: [
      "A religious text",
      "A book on statecraft by Chanakya",
      "A poem about war",
      "A historical monument",
    ],
    correctAnswer: 1,
  },
  // Geometry questions
  {
    id: "q-math-2-1",
    lessonId: "math-2",
    question: "What is the sum of angles in a triangle?",
    options: ["90°", "180°", "360°", "270°"],
    correctAnswer: 1,
  },
  {
    id: "q-math-2-2",
    lessonId: "math-2",
    question: "What is the formula for the area of a rectangle?",
    options: [
      "side × side",
      "length × width",
      "2 × (length + width)",
      "πr²",
    ],
    correctAnswer: 1,
  },
  {
    id: "q-math-2-3",
    lessonId: "math-2",
    question: "The diameter of a circle is 10 cm. What is the radius?",
    options: ["5 cm", "10 cm", "20 cm", "15 cm"],
    correctAnswer: 0,
  },
  // Photosynthesis questions
  {
    id: "q-science-2-1",
    lessonId: "science-2",
    question: "What is the main product of photosynthesis that we breathe?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    correctAnswer: 1,
  },
  {
    id: "q-science-2-2",
    lessonId: "science-2",
    question: "Which pigment is essential for photosynthesis?",
    options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"],
    correctAnswer: 1,
  },
  {
    id: "q-science-2-3",
    lessonId: "science-2",
    question: "In which part of the leaf does the light reaction occur?",
    options: ["Stroma", "Thylakoid membrane", "Vacuole", "Nucleus"],
    correctAnswer: 1,
  },
  // Tenses questions
  {
    id: "q-english-2-1",
    lessonId: "english-2",
    question: "Which tense is used for habitual actions?",
    options: [
      "Present Continuous",
      "Present Perfect",
      "Simple Present",
      "Past Perfect",
    ],
    correctAnswer: 2,
  },
  {
    id: "q-english-2-2",
    lessonId: "english-2",
    question: "Complete: 'I _____ (study) for 2 hours.'",
    options: ["study", "am studying", "have studied", "studied"],
    correctAnswer: 2,
  },
  {
    id: "q-english-2-3",
    lessonId: "english-2",
    question: "Which is an example of Past Perfect tense?",
    options: [
      "She was playing",
      "She had played",
      "She plays",
      "She will play",
    ],
    correctAnswer: 1,
  },
  // Vedic Period questions
  {
    id: "q-history-2-1",
    lessonId: "history-2",
    question: "Which is the oldest Veda?",
    options: ["Yajur Veda", "Sama Veda", "Rig Veda", "Atharva Veda"],
    correctAnswer: 2,
  },
  {
    id: "q-history-2-2",
    lessonId: "history-2",
    question: "What was the main occupation during the Vedic period?",
    options: ["Trade", "Pastoralism and Agriculture", "Manufacturing", "Mining"],
    correctAnswer: 1,
  },
  {
    id: "q-history-2-3",
    lessonId: "history-2",
    question: "How many classes was Vedic society divided into?",
    options: ["Two", "Three", "Four", "Five"],
    correctAnswer: 2,
  },
  // Factors and Multiples questions
  {
    id: "q-math-3-1",
    lessonId: "math-3",
    question: "What is the HCF of 18 and 24?",
    options: ["3", "6", "12", "18"],
    correctAnswer: 1,
  },
  {
    id: "q-math-3-2",
    lessonId: "math-3",
    question: "Which number is prime?",
    options: ["1", "4", "17", "21"],
    correctAnswer: 2,
  },
  {
    id: "q-math-3-3",
    lessonId: "math-3",
    question: "What is the LCM of 4 and 6?",
    options: ["12", "24", "8", "6"],
    correctAnswer: 0,
  },
  // Human Digestive System questions
  {
    id: "q-science-3-1",
    lessonId: "science-3",
    question: "Which enzyme is produced in the mouth?",
    options: ["Pepsin", "Lipase", "Amylase", "Protease"],
    correctAnswer: 2,
  },
  {
    id: "q-science-3-2",
    lessonId: "science-3",
    question: "Where is the majority of digestion completed?",
    options: ["Mouth", "Stomach", "Small Intestine", "Large Intestine"],
    correctAnswer: 2,
  },
  {
    id: "q-science-3-3",
    lessonId: "science-3",
    question: "What does the large intestine primarily absorb?",
    options: ["Proteins", "Water and minerals", "Fats", "Carbohydrates"],
    correctAnswer: 1,
  },
];
