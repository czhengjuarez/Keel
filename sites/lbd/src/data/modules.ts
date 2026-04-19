export interface Slide {
  title: string;
  bullets?: string[];
  body?: string;
  quote?: { text: string; author: string };
  image?: string;
}

export interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'podcast' | 'book' | 'tool' | 'framework';
  description: string;
}

export interface Practice {
  title: string;
  description: string;
  deliverable: string;
  dueInfo?: string;
  aiEncouraged?: boolean;
}

export interface BookSuggestion {
  title: string;
  author: string;
  url: string;
  thumbnailUrl?: string;
  note?: string;
  topPick?: boolean;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: 'compass' | 'user-round' | 'globe' | 'handshake' | 'rocket' | 'bot';
  color: string;
  slides: Slide[];
  resources: Resource[];
  books: BookSuggestion[];
  practice: Practice[];
}

export const modules: Module[] = [
  {
    id: 'intro',
    number: 1,
    title: 'Introduction',
    subtitle: 'The State of Leadership Today',
    description:
      'Welcome to Leadership by Design. Explore what leadership means in design, the 4-pillar framework, and set your personal OKRs for the course.',
    icon: 'compass',
    color: 'var(--of-magenta-400)',
    slides: [
      {
        title: 'Welcome to Leadership by Design',
        body: 'This course explores how designers lead — themselves, their peers, their teams, and their organizations. Over 5 sessions you will build a leadership toolkit grounded in real practice.',
      },
      {
        title: 'Why Leadership for Designers?',
        bullets: [
          'Leadership, design, and living a creative life all share the same foundational ability: decision-making.',
          'What you choose to frame, focus on, and invest your time and energy in defines your impact.',
          'You have more power than you realize.',
        ],
      },
      {
        title: 'The 4-Pillar Framework',
        bullets: [
          'Pillar 1 — Self-Leadership: Know yourself as a leader.',
          'Pillar 2 — Leading from the Whole: Read and shape organizational culture.',
          'Pillar 3 — Leading from the Side: Influence without authority.',
          'Pillar 4 — Leading from the Front: Set vision, build teams, drive strategy.',
        ],
      },
      {
        title: 'What Is Leadership?',
        body: 'Activity: In small groups (3-4), free-write for 5 minutes on the prompt "What is leadership?" Then discuss and have a spokesperson share highlights with the full group.',
      },
      {
        title: 'Manager vs. Leader',
        bullets: [
          'Manager is a job — Leader is a mindset.',
          'You do not need a title to lead. Leadership can come from any seat.',
          'Who can be a leader? Anyone willing to take initiative and serve others.',
          'The best managers are also leaders; the best leaders know how to manage.',
        ],
      },
      {
        title: 'Five Qualities of Good Leadership',
        bullets: [
          'Accountability — Radical self-awareness, seeking diverse opinions, owning both the good and the bad.',
          'Curiosity — Active listening, seeking first to understand, staying adaptable.',
          'Transparency — Building trust, acknowledging the good and the bad, showing up as authentic "you".',
          'Engagement — Deeply invested in the work, aligned to values and mission, committed to the team.',
          'Emotional Intelligence (EQ) — Self-awareness, social awareness, relationship management, investing in people.',
        ],
      },
      {
        title: 'Brené Brown: Daring Leadership',
        bullets: [
          'Rumbling with Vulnerability — The courage to show up and be seen when you can\'t control the outcome.',
          'Living into Our Values — Aligning intentions, words, thoughts, and behaviors with what we believe.',
          'Braving Trust — Trust is built in small gestures, over time. Handle conflict directly.',
          'Learning to Rise — Getting up from falls, overcoming mistakes, facing setbacks with resilience.',
        ],
      },
      {
        title: 'Course Structure',
        bullets: [
          '5 in-person sessions mapped to 6 modules',
          '2 full-day offsites + 1 shorter offsite',
          'Assignments: Leadership Diary, Facilitated Discussion, Interview, Final App Project',
          'Self-assessments: SCARF, VIA, Superpowers',
          'AI-assisted work is encouraged throughout',
        ],
      },
      {
        title: 'Grading Overview',
        bullets: [
          'Attendance — 10%',
          'Participation — 30%',
          'Personal Growth — 10%',
          'Three Mini Assignments — 30%',
          'Final Project: Leading in the Era of AI — 20%',
        ],
      },
      {
        title: 'Your OKRs',
        body: 'Objectives & Key Results (OKRs) are your personal growth tool for this course. Set ambitious objectives and measurable results. We will check in on these throughout the semester.',
      },
      {
        title: 'OKR Deep Dive',
        bullets: [
          'Objectives answer: "Where do we need to go?" — Concrete and inspirational.',
          'Key Results answer: "How do we know we\'re getting there?" — Measurable, time-bound, outcome-oriented.',
          'Initiatives answer: "What do we do to get there?" — Mapped to KRs, measurable, time-bound.',
          'Bad example: "Everyone gets a job." Better: "100% of class members secure interviews by week 10."',
          'OKR cycle: Plan → Record → Reflect → Adjust.',
        ],
      },
      {
        title: 'Class Agreements',
        bullets: [
          'Be present — physically and mentally',
          'Active listening and critical thinking',
          'Respect diverse perspectives',
          'Done is better than perfect',
          'Communicate proactively with your instructor',
        ],
      },
    ],
    resources: [
      {
        title: 'The Art of the OKR, Redux',
        url: 'https://eleganthack.com/the-art-of-the-okr/',
        type: 'article',
        description:
          'Christina Wodtke\'s foundational piece on setting effective Objectives & Key Results.',
      },
      {
        title: 'What Matters: OKR Google Playbook',
        url: 'https://www.whatmatters.com/get-started',
        type: 'tool',
        description: 'Templates and examples for writing great OKRs.',
      },
      {
        title: 'Courageous Leadership Starts with Self Leadership',
        url: 'https://annekoopmann.com/ep001-courageous-leadership-starts-with-self-leadership/',
        type: 'podcast',
        description:
          'Podcast episode on why self-leadership is the foundation of all leadership.',
      },
      {
        title: 'Priya Parker — The Art of Gathering',
        url: 'https://www.priyaparker.com/',
        type: 'book',
        description: 'Summary of facilitation principles for leading meaningful gatherings.',
      },
    ],
    books: [
      {
        title: 'Drive',
        author: 'Daniel H. Pink',
        url: 'https://www.danpink.com/books/drive/',
        thumbnailUrl: 'https://covers.openlibrary.org/b/title/Drive-M.jpg',
        note: 'Motivation foundations for setting leadership goals and OKRs.',
      },
      {
        title: 'Think Again',
        author: 'Adam Grant',
        url: 'https://adamgrant.net/book/think-again/',
        thumbnailUrl: 'https://covers.openlibrary.org/b/title/Think%20Again-M.jpg',
        note: 'Builds the rethinking mindset needed for early leadership growth.',
      },
      {
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        url: 'https://www.dalecarnegie.com/en/resources/how-to-win-friends-and-influence-people',
        thumbnailUrl:
          'https://covers.openlibrary.org/b/title/How%20to%20Win%20Friends%20and%20Influence%20People-M.jpg',
        note: 'Classic baseline for interpersonal leadership and trust-building.',
      },
    ],
    practice: [
      {
        title: 'Set Your Personal OKRs',
        description:
          'Define 2-3 personal leadership objectives with measurable key results for this course. These should connect to intrinsic motivation — what do you genuinely want to grow in?',
        deliverable:
          'Submit a live URL to your OKR document (Google Doc/Notion/Coda/etc.). Attachments are not accepted.',
        aiEncouraged: true,
      },
    ],
  },
  {
    id: 'self-leadership',
    number: 2,
    title: 'Self Leadership',
    subtitle: 'Leading Yourself First',
    description:
      'Understand your leadership capacity, style, motivators, and growth areas. Practice self-awareness through assessments and reflection.',
    icon: 'user-round',
    color: 'var(--of-magenta-500)',
    slides: [
      {
        title: 'Why Lead Yourself First?',
        bullets: [
          'You cannot lead others effectively until you understand yourself.',
          'Self-leadership is about decision-making: what you focus on, invest in, and accept.',
          'Focus on what IS in your control rather than what is not.',
        ],
      },
      {
        title: 'Self-Assessment: SCARF Model',
        bullets: [
          'Status — How important is rank and recognition to you?',
          'Certainty — How much do you need predictability?',
          'Autonomy — How important is having choice and control?',
          'Relatedness — How much do social connections drive you?',
          'Fairness — How sensitive are you to equitable treatment?',
        ],
      },
      {
        title: 'Self-Assessment: VIA Character Strengths',
        body: 'The VIA survey evaluates your personality across 24 character strengths. Understanding your top strengths helps you lead authentically and leverage what comes naturally.',
      },
      {
        title: 'Intrinsic vs. Extrinsic Motivation',
        bullets: [
          'Extrinsic: rewards, status, external validation',
          'Intrinsic: purpose, mastery, autonomy, curiosity',
          'Dan Pink: Autonomy, Mastery, and Purpose are the three pillars of intrinsic motivation.',
          'Leaders who tap intrinsic motivation sustain themselves and inspire others.',
        ],
      },
      {
        title: 'The Creative Act',
        quote: {
          text: 'The ability to look deeply is the root of creativity. It produces beauty and is the key to our survival.',
          author: 'Rick Rubin, The Creative Act: A Way of Being',
        },
        body: 'Reflection: Why is this important for a leadership class in a design school?',
      },
      {
        title: 'Leading with Compassion',
        bullets: [
          'Compassion for self: acknowledge your growth edges without judgment.',
          'Compassion for others: hold space for different speeds and styles.',
          'The paradox: being gentle AND holding high standards.',
          'Reflection: What would it look like in 10 weeks if I led myself well?',
        ],
      },
      {
        title: 'Strengths-Based Leadership',
        bullets: [
          'Natural Strengths (good at + enjoy) — Work WITH them. Celebrate, excel, teach.',
          'Potential Strengths (not good at yet + enjoy) — Work them UP. Read, take courses, seek mentorship.',
          'Fragile Strengths (good at + don\'t enjoy) — Work ON them. They drain energy; manage your time.',
          'Resistant Limitations (not good at + don\'t enjoy) — Work AROUND them. Pair with others, delegate.',
          'No one is good at everything. It\'s the team that wins — turn individual limitation into enhanced collective capability.',
        ],
      },
      {
        title: 'Emotional Intelligence (EQ) Deep Dive',
        bullets: [
          'Self-Awareness — Read and understand your emotions; recognize their impact on performance and relationships.',
          'Self-Management — Keep disruptive emotions under control; display honesty and integrity; adapt to change.',
          'Social Awareness — Sense others\' emotions, understand their perspective, read organizational currents.',
          'Social Skill — Inspire with compelling vision; listen and send clear messages; cultivate relationships.',
        ],
      },
      {
        title: 'Goleman\'s Six Leadership Styles',
        bullets: [
          'Visionary — Mobilizes people toward a shared vision.',
          'Coaching — Develops people for the future.',
          'Affiliative — Creates harmony and emotional bonds.',
          'Democratic — Builds consensus through participation.',
          'Pacesetting — Sets high standards for performance.',
          'Commanding — Demands immediate compliance. Use sparingly.',
        ],
      },
      {
        title: 'Social Identity, Privilege & Bias',
        bullets: [
          'Social identity: a person\'s sense of who they are based on group membership.',
          'Privilege: advantage available only to a particular person or group.',
          'Bias types: Implicit, Automation, Attribution, Bandwagon, Confirmation, Like-me, Recency.',
          'Address bias with Curiosity, Courage, and Critical Reflection.',
          'As a leader, be conscious of your power. Dedicate using it for others.',
        ],
      },
      {
        title: 'Psychological Safety & the BRAVING Framework',
        bullets: [
          'Psychological safety: a shared belief that the team is safe for interpersonal risk-taking.',
          'B = Boundaries, R = Reliability, A = Accountability, V = Vault.',
          'I = Integrity, N = Non-judgment, G = Generosity.',
          'Trust is choosing to make something important to you vulnerable to the actions of someone else.',
          'Make psychological safety explicit. Facilitate everyone speaking up. Establish norms for failure.',
        ],
      },
      {
        title: 'The LEAD Framework for Inclusive Conversations',
        bullets: [
          'Listen actively — "I heard you say\u2026 am I getting that right?"',
          'Express gratitude — "Thank you for sharing. I know it\'s not easy."',
          'Assume responsibility — "It\'s my job to address this."',
          'Discuss action — "How do you want to be involved here?"',
        ],
      },
      {
        title: 'Balancing Humility & Confidence',
        bullets: [
          'Humility — A modest view of one\'s own importance; humbleness.',
          'Confidence — Self-assurance arising from appreciation of one\'s own abilities.',
          'Cultural and social influences shape how we express both.',
          'Authentic self-leadership means leading with, not against, your personality.',
        ],
      },
      {
        title: 'Goal-Setting with OKRs',
        bullets: [
          'Common errors: confusing actions with goals, objectives with results',
          'Good OKRs connect personal growth to measurable outcomes',
          'Peer check-in: share your OKRs, ask questions, refine together',
          'These are supposed to be hard — it takes a few rounds!',
        ],
      },
      {
        title: 'Reflection Prompts',
        bullets: [
          'Why is it important to lead myself first?',
          'What would it look like if I led myself well?',
          'What commitments can I start making TODAY?',
          'What aspects of leading myself are challenging? How well do I understand why?',
        ],
      },
    ],
    resources: [
      {
        title: 'Dan Pink on Motivation',
        url: 'https://www.youtube.com/watch?v=rrkrvAUbU9Y',
        type: 'video',
        description:
          'TED talk on the surprising science of what motivates us beyond carrots and sticks.',
      },
      {
        title: 'Extrinsic vs. Intrinsic Motivation',
        url: 'https://www.verywellmind.com/differences-between-extrinsic-and-intrinsic-motivation-2795384',
        type: 'article',
        description: 'Clear overview of the two motivation types and when each matters.',
      },
      {
        title: 'The Creative Act: A Way of Being',
        url: 'https://www.penguinrandomhouse.com/books/717356/the-creative-act-by-rick-rubin/',
        type: 'book',
        description:
          'Rick Rubin on creativity, presence, and the practice of making — first 27 pages recommended.',
      },
      {
        title: 'To Be a Great Leader, Start by Leading Yourself',
        url: 'https://www.forbes.com/councils/forbescoachescouncil/2019/10/24/15-leadership-lessons-coaches-wish-they-knew-when-they-started-their-careers/',
        type: 'article',
        description:
          'Forbes Coaches Council on why self-leadership is the prerequisite to leading others.',
      },
      {
        title: 'Zooming in on OKRs with Christina Wodtke',
        url: 'https://www.produxlabs.com/product-thinking-blog/episode-102-christina-wodke',
        type: 'podcast',
        description: 'Deep dive into practical OKR implementation.',
      },
    ],
    books: [
      {
        title: 'The Making of a Manager',
        author: 'Julie Zhuo',
        url: 'https://www.juliezhuo.com/book/manager.html',
        thumbnailUrl: 'https://covers.openlibrary.org/b/title/The%20Making%20of%20a%20Manager-M.jpg',
        note: 'Best starting point for first-time design leaders from the BOOKS page 2 list.',
        topPick: true,
      },
      {
        title: 'Dare to Lead',
        author: 'Brene Brown',
        url: 'https://brenebrown.com/book/dare-to-lead/',
        thumbnailUrl: 'https://covers.openlibrary.org/b/title/Dare%20to%20Lead-M.jpg',
        note: 'Deepens vulnerability, courage, and values-driven leadership practice.',
      },
      {
        title: 'Atlas of the Heart',
        author: 'Brene Brown',
        url: 'https://brenebrown.com/book/atlas-of-the-heart/',
        thumbnailUrl: 'https://covers.openlibrary.org/b/title/Atlas%20of%20the%20Heart-M.jpg',
        note: 'Supports emotional fluency and self-awareness for leadership growth.',
      },
    ],
    practice: [
      {
        title: 'Mini Assignment 1: Leadership Toolkit App',
        description:
          'As a design leader, self-awareness is your most important asset. The SCARF model, VIA strengths, Goleman\'s leadership styles, the strengths quadrant, and OKRs are all frameworks designed to help you understand how you show up, what drives you, and where you can grow. But frameworks on paper only go so far — the real learning happens when you build them into something you can interact with and use.\n\nYour task is to build a working web app that serves as your personal leadership toolkit. It must include at least 2 interactive tools from the course frameworks: a strengths quadrant mapper (plot your natural, potential, fragile strengths and resistant limitations), a SCARF profile visualizer, an EQ self-assessment, a leadership style finder (based on Goleman\'s 6 styles), or an OKR tracker. The app should be functional, not just informational — users should be able to input data, see results, and get insights. Use of AI to assist in development (vibe coding) is encouraged and expected.',
        deliverable:
          'Submit live URLs only: (1) deployed app URL, (2) uploaded video walkthrough URL (around 2 minutes) showing the app in action and explaining your design decisions. No file attachments.',
        dueInfo: 'Due by Module 3',
        aiEncouraged: true,
      },
    ],
  },
  {
    id: 'leading-whole',
    number: 3,
    title: 'Leading from the Whole',
    subtitle: 'Organizational Culture & Systems Thinking',
    description:
      'Learn to read, assess, and shape organizational culture. Understand how structure, values, and behaviors connect across a company\'s system.',
    icon: 'globe',
    color: 'var(--of-info-500)',
    slides: [
      {
        title: 'What Does "Leading from the Whole" Mean?',
        bullets: [
          'Going from leading a team to fostering an entire organizational culture.',
          'Connecting the dots across a company\'s system.',
          'Reading between the lines of job descriptions, Glassdoor reviews, and corporate messaging.',
        ],
      },
      {
        title: 'Types of Organizational Culture',
        bullets: [
          'Clan Culture — collaborative, family-like, mentor-driven',
          'Adhocracy Culture — creative, risk-taking, visionary',
          'Market Culture — competitive, results-oriented, goal-focused',
          'Hierarchy Culture — structured, process-driven, efficient',
          'Most organizations are a blend. Which suits you best right now?',
        ],
      },
      {
        title: 'Reading Between the Lines',
        bullets: [
          'Stated values vs. manifested values — how do you tell the difference?',
          'Signals: how decisions get made, who gets promoted, what gets celebrated',
          'Red flags: misalignment between what a company says and what it does',
          'Your job: become a skilled reader of organizational reality.',
        ],
      },
      {
        title: 'Design Ops & Systems Leadership',
        bullets: [
          'DesignOps: the operational backbone that enables design to scale.',
          'Rituals and rhythms: standups, critiques, retrospectives, all-hands.',
          'Balancing autonomy and synergy across a design organization.',
          'The role of a design leader in shaping these systems.',
        ],
      },
      {
        title: 'Good Design Is Good Business',
        bullets: [
          'McKinsey Design Index: design-led companies outperform industry benchmarks by 2:1.',
          'Design ROI: increased sales, growth, retention, satisfaction, brand perception, and reduced costs.',
          'Four themes: Analytical leadership, Cross-functional talent, Continuous iteration, User experience.',
          'Companies that tackle these priorities boost their odds of becoming more creative organizations.',
        ],
      },
      {
        title: 'Design Maturity Model',
        bullets: [
          'Strategy — UX leadership, planning, and resource prioritization.',
          'Culture — UX knowledge and cultivating practitioners\' growth.',
          'Process — Systematic use of UX research and design methods.',
          'Outcomes — Intentionally defining and measuring design impact.',
          'Assess where your organization sits and identify levers for growth.',
        ],
      },
      {
        title: '12 Qualities of Effective Design Organizations',
        bullets: [
          'Foundation: Shared sense of purpose, focused empowered leadership, authentic user empathy, create value.',
          'Output: Support the entire journey, deliver at all levels of scale, establish and uphold standards.',
          'Management: Foster a creative culture, invest in people, develop design operations.',
          'Source: Org Design for Design Orgs by Peter Merholz & Kristin Skinner.',
        ],
      },
      {
        title: 'Org Design for Design Orgs',
        bullets: [
          'Distributed/Embedded — Designers sit within product teams. Pro: ownership. Con: design silos.',
          'Centralized/Internal Services — In-house agency model. Pro: strong community. Con: design not strategic.',
          'Centralized Partnership — Best of both: singular empowered leader + embedded team commitment.',
          'The EPD Triad: Product (viability) + Design (desirability) + Engineering (feasibility).',
        ],
      },
      {
        title: 'Schein\'s Three Levels of Culture',
        bullets: [
          'Artifacts — Surface level: visible structures, dress code, office layout, rituals.',
          'Espoused Values — Values adopted from influential leaders; conscious-level beliefs.',
          'Shared Tacit Assumptions — Deeply embedded, taken-for-granted beliefs that drive behavior.',
          'How culture is created: stories & myths, rituals & routines, symbols, power structures, control systems.',
        ],
      },
      {
        title: 'Goffee & Jones: Sociability vs. Solidarity',
        bullets: [
          'Sociability — Friendliness and emotional relations between group members.',
          'Solidarity — The group\'s ability to effectively achieve common goals.',
          'Four culture types: Networked (high social/low solid), Communal (high/high), Fragmented (low/low), Mercenary (low social/high solid).',
          'Discussion: Who determines culture? Can you influence it as a new employee?',
        ],
      },
      {
        title: 'Change Management: Lewin\'s Model',
        bullets: [
          'Unfreeze — Reveal aspects requiring change, gain leadership support, motivate the need.',
          'Change — Implement the new direction; communicate, involve, empower.',
          'Refreeze — Stabilize the new state; reinforce through culture, rewards, and norms.',
          'Kotter\'s 8 Steps map onto Lewin\'s three phases for more granular execution.',
          'Maps to the Double Diamond: Discover/Define (Unfreeze) → Develop/Deliver (Change → Refreeze).',
        ],
      },
      {
        title: 'Purpose-Driven & Alternative Organizations',
        bullets: [
          'B Corporations — For-profit companies certified for social impact across 5 areas.',
          'Holacracy — Self-management; individuals assume multiple roles with purpose, domain, and accountability.',
          'Progressive workplace trends: Profit → Purpose, Hierarchy → Networks, Directive → Supportive leadership.',
          'Flat org ≠ No org. Self-management ≠ No management. Power dynamics still exist.',
        ],
      },
      {
        title: 'Culture Change & Ethical Practice',
        bullets: [
          'Integrating ethical, equitable, inclusionary design practices',
          'Social responsibility as a design leader',
          'Perks ≠ Culture. No one size fits all.',
          '"Company culture comes from the people, not the physical space they inhabit." — Josh Catone',
          'Your role in advocating for culture change from any position.',
        ],
      },
      {
        title: 'Reflection Prompts',
        bullets: [
          'What kind of organizational culture suits you best right now?',
          'How do you assess whether a company\'s stated culture matches reality?',
          'What role can you play in shaping culture, even without a title?',
        ],
      },
    ],
    resources: [
      {
        title: 'Types of Org Culture',
        url: 'https://www.orgculturecafe.com/',
        type: 'article',
        description: 'Overview of organizational culture frameworks and types.',
      },
      {
        title: 'Being the Boss in Brussels, Boston, and Beijing',
        url: 'https://hbr.org/2017/07/being-the-boss-in-brussels-boston-and-beijing',
        type: 'article',
        description:
          'How to navigate cultural orientations within global and diverse teams.',
      },
      {
        title: 'Crafting a Design Team Vision Statement',
        url: 'https://www.nngroup.com/articles/ux-vision-statements/',
        type: 'article',
        description: 'Practical guide to articulating your team\'s purpose and principles.',
      },
      {
        title: 'How to Build a Strong Team Structure',
        url: 'https://hbr.org/2012/04/the-new-science-of-building-great-teams',
        type: 'article',
        description: 'Frameworks for building high-performing team structures.',
      },
      {
        title: 'Schein\'s Organizational Culture Model',
        url: 'https://umbrex.com/resources/frameworks/organization-frameworks/schein-three-levels-of-organizational-culture/',
        type: 'framework',
        description:
          'Clear breakdown of Artifacts, Espoused Values, and Basic Assumptions (Schein\'s 3 levels).',
      },
      {
        title: 'Product Operations Manifesto',
        url: 'https://www.productopsmanifesto.org/',
        type: 'framework',
        description:
          'Practical principles for designing product operations across cross-functional teams.',
      },
      {
        title: 'Design for Action',
        url: 'https://hbr.org/2015/09/design-for-action',
        type: 'article',
        description:
          'Tim Brown and Roger Martin on building organizations that can turn design intent into change.',
      },
      {
        title: 'What Is a Purpose-Driven Firm?',
        url: 'https://online.hbs.edu/blog/post/purpose-driven-firms',
        type: 'article',
        description:
          'HBS Online primer on purpose-driven organizations and the wheel of change.',
      },
      {
        title: 'Employee Experience: Essential to Compete',
        url: 'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-organization-blog/employee-experience-essential-to-compete',
        type: 'article',
        description:
          'McKinsey perspective on why employee experience is central to organizational performance.',
      },
    ],
    books: [
      {
        title: 'Org Design for Design Orgs',
        author: 'Peter Merholz, Kristin Skinner',
        url: 'https://www.oreilly.com/library/view/org-design-for/9781491938394/',
        thumbnailUrl:
          'https://books.google.com/books/content?id=zgDjDAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        note: 'Core operating model playbook for scaling design organizations.',
      },
      {
        title: 'Rise of the DEO',
        author: 'Maria Giudice, Christopher Ireland',
        url: 'https://www.oreilly.com/library/view/rise-of-the/9780133441315/',
        thumbnailUrl:
          'https://books.google.com/books/content?id=FZBLAQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        note: 'Connects design practice with organizational and business impact.',
      },
      {
        title: 'Team of Teams',
        author: 'General Stanley McChrystal',
        url: 'https://www.penguinrandomhouse.com/books/307060/team-of-teams-by-general-stanley-mcchrystal/',
        thumbnailUrl: 'https://covers.openlibrary.org/b/title/Team%20of%20Teams-M.jpg',
        note: 'Systems thinking model for operating in complexity and change.',
      },
    ],
    practice: [
      {
        title: 'Mini Assignment 2: Culture Decoder App',
        description:
          'One of the most important skills a design leader can develop is the ability to read organizational culture — not what a company says it values, but what it actually rewards, tolerates, and punishes. Whether you are evaluating a new job opportunity, diagnosing why your team is struggling, or trying to drive change, being able to decode culture quickly and systematically is a superpower.\n\nYour task is to choose a real organization (current employer, internship, a company you admire, or one you are interviewing with) and build an interactive culture profile as a web app or microsite. Use the course frameworks to structure your analysis: map the organization across Schein\'s 3 levels of culture (artifacts, espoused values, shared tacit assumptions), plot it on the Goffee & Jones sociability vs. solidarity grid, and assess its design maturity. Use real evidence: Glassdoor reviews, job postings, LinkedIn signals, company values pages, news articles, and your own observations. The app should let a viewer explore the analysis interactively — not just read a static report.',
        deliverable:
          'Submit live URLs only: (1) deployed app/microsite URL, (2) live URL to your evidence document listing sources and how they informed each framework mapping. No file attachments.',
        dueInfo: 'Due by Module 4',
        aiEncouraged: true,
      },
    ],
  },
  {
    id: 'leading-side',
    number: 4,
    title: 'Leading from the Side',
    subtitle: 'Influence, Coaching & Collaboration',
    description:
      'Master lateral leadership — influencing cross-functional partners, coaching peers, and creating conditions for your team to thrive.',
    icon: 'handshake',
    color: 'var(--of-success-500)',
    slides: [
      {
        title: 'What Does "Leading from the Side" Mean?',
        bullets: [
          'Influencing cross-functional partners without direct authority.',
          'Creating conditions for your team to be at its best.',
          'A side leader sees the entire group and motivates progress toward shared goals.',
          'You don\'t need a manager title to lead from the side.',
        ],
      },
      {
        title: 'Coaching vs. Mentoring vs. Sponsorship',
        bullets: [
          'Coaching: asking powerful questions, unlocking someone\'s own answers.',
          'Mentoring: sharing experience and guidance from your own journey.',
          'Sponsorship: advocating for someone when they\'re not in the room.',
          'Know which to apply in which context.',
        ],
      },
      {
        title: 'The GROW Coaching Framework',
        bullets: [
          'Goal — What do you want to achieve?',
          'Reality — Where are you now?',
          'Options — What could you do?',
          'Will — What will you do?',
          'Use GROW to structure coaching conversations with peers and reports.',
        ],
      },
      {
        title: 'Facilitation as Leadership',
        bullets: [
          'Facilitation is a critical leadership skill.',
          'Reading the room: body language, energy, engagement levels.',
          'Creating psychological safety for honest discussion.',
          'Tips from Priya Parker\'s Art of Gathering: every gathering needs a purpose.',
        ],
      },
      {
        title: 'Recognizing Your Power Sources',
        bullets: [
          'Positional power — Derives from your status or ranking in a hierarchy.',
          'Relational power — Built through trust, respect, and genuine connections.',
          'Expert power — Comes from deep knowledge or skill in a domain.',
          'Informational power — Access to or control of important information.',
          'Identify your own power sources and learn to leverage them ethically.',
        ],
      },
      {
        title: 'Cialdini\'s 7 Principles of Influence',
        bullets: [
          'Reciprocation — People return favors.',
          'Commitment & Consistency — People align with prior commitments.',
          'Social Proof — People follow what others do.',
          'Authority — People defer to credible experts.',
          'Liking — People say yes to those they like.',
          'Scarcity — Limited availability increases perceived value.',
          'Unity — Shared identity creates influence.',
        ],
      },
      {
        title: 'Creative Negotiation',
        bullets: [
          'Distributive — Win-lose: parties compete for their own best outcome.',
          'Integrative — Win-win: parties seek joint gain through open-minded collaboration.',
          'Basic principles: Form (understand context & people), Framing (communication style), Anchoring (set direction).',
          'Ask: Who, What, When, Where, Why before entering any negotiation.',
        ],
      },
      {
        title: 'Radical Candor: Care Personally, Challenge Directly',
        body: 'Radical Candor is guidance that\'s both kind and clear, specific and sincere. It\'s the antidote to toxic company cultures. The framework maps behaviors on two axes: Care Personally and Challenge Directly. The goal is the upper-right quadrant — where you give honest, caring feedback.',
      },
      {
        title: 'Feedback Frameworks',
        bullets: [
          'AID — Action (describe what happened) → Impact (explain the effect) → Development (suggest next steps).',
          'SBI — Situation (specific context) → Behavior (observable actions) → Impact (what you felt/thought).',
          'STAR — Situation/Task → Action → Result — good for structured performance feedback.',
          'Pendleton — Learner-centered, conversation-based "reflection for action." Most participatory model.',
        ],
      },
      {
        title: 'Feedback vs. Critique',
        bullets: [
          'Critique — Used in design reviews; objective analysis of strengths and room for improvement.',
          'Feedback — Day-to-day insights aimed at improving performance, behavior, or understanding.',
          'Critique asks: What is the objective? Are design elements effective in achieving it? Why or why not?',
          'Both require psychological safety and a focus on the work, not the person.',
        ],
      },
      {
        title: 'Five Conflict-Handling Approaches',
        bullets: [
          'The Fighter — "Compete with strength." Useful when quick action is needed.',
          'The Negotiator — "Strike a deal." Useful to prevent deadlock and learn about assumptions.',
          'The Diplomat — "Find the middle ground." Useful for temporarily settling complicated issues.',
          'The Avoider — "Avoid the interaction." Useful when emotions are high or stakes are low.',
          'The People Pleaser — "Put others\' needs first." Useful for building trust, risky for authenticity.',
        ],
      },
      {
        title: 'Conflict Resolution: The ABC Triangle',
        bullets: [
          'Attitude — Invisible: assumptions, perceptions, emotions driving the conflict.',
          'Behaviour — Visible: statements, offenses, insults, attacks.',
          'Context — Invisible: political, cultural, economical, historical background.',
          'Tips: Begin from curiosity and respect. Focus on listening. Be direct. Expect a positive outcome.',
        ],
      },
      {
        title: 'DesignOps as Lateral Leadership',
        bullets: [
          'DesignOps is a human-centered approach to building stronger design teams.',
          'It supports the orchestration of individuals, processes, and tools to amplify creativity at scale.',
          'Any team can benefit from DesignOps as a mindset — standardized processes, methods, and tools.',
          'DesignOps as a practice is not new, but as a discipline it is emerging.',
        ],
      },
      {
        title: 'Reflection Prompts',
        bullets: [
          'What does "leading from the side" mean to you?',
          'How do you create conditions for your team to be at its best?',
          'What is your natural conflict-handling style? When does it serve you and when does it not?',
          'When have you coached or mentored someone effectively?',
        ],
      },
    ],
    resources: [
      {
        title: 'Coaching Your Team as a Collective Makes It Stronger',
        url: 'https://hbr.org/2023/02/coaching-your-team-as-a-collective-makes-it-stronger',
        type: 'article',
        description:
          'Sanyin Siang & Michael Canning on why team-level coaching outperforms individual coaching alone.',
      },
      {
        title: 'Creative Leadership: Transforming Individuals and Organizations',
        url: 'https://www.designcouncil.org.uk/',
        type: 'article',
        description: 'Gheerawo on how creative leadership transforms teams.',
      },
      {
        title: 'Coaching Skills for Managers',
        url: 'https://www.youtube.com/playlist?list=PLA9AAA962AF5146A2',
        type: 'video',
        description: 'Practical coaching techniques managers can use immediately.',
      },
      {
        title: 'Facilitate Powerful Collaborations with Deb Mashek',
        url: 'https://themodernmanager.com/podcast-252/',
        type: 'podcast',
        description:
          'The Modern Manager podcast on building collaborative environments.',
      },
      {
        title: 'Leading in Times of Trauma',
        url: 'https://hbr.org/2002/01/leading-in-times-of-trauma',
        type: 'article',
        description:
          'Dutton, Frost, Worline, Lilius & Kanov on compassionate leadership during crisis.',
      },
      {
        title: 'What\'s Your Influencing Style?',
        url: 'https://hbr.org/2012/01/whats-your-influencing-style',
        type: 'article',
        description:
          'HBR guide to identifying and expanding your influence style in different contexts.',
      },
      {
        title: 'What Is Lateral Leadership and Why Does It Work So Well?',
        url: 'https://www.inc.com/robin-camarote/what-is-lateral-leadership-why-does-it-work-so-well.html',
        type: 'article',
        description:
          'Practical take on influencing without formal authority in modern organizations.',
      },
      {
        title: 'How to Lead with Radical Candor',
        url: 'https://www.ted.com/talks/kim_scott_how_to_lead_with_radical_candor',
        type: 'video',
        description:
          'Kim Scott on balancing care and direct challenge in leadership communication.',
      },
    ],
    books: [
      {
        title: 'Difficult Conversations',
        author: 'Douglas Stone, Bruce Patton, Sheila Heen',
        url: 'https://www.penguinrandomhouse.com/books/330812/difficult-conversations-by-douglas-stone-bruce-patton-and-sheila-heen/',
        thumbnailUrl: 'https://covers.openlibrary.org/b/title/Difficult%20Conversations-M.jpg',
        note: 'Essential framework for navigating conflict with clarity and respect.',
      },
      {
        title: 'Influence Is Your Superpower',
        author: 'Zoe Chance',
        url: 'https://www.zoechance.com/book',
        thumbnailUrl:
          'https://books.google.com/books/content?id=wrpPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        note: 'Practical influence toolkit for leading laterally without formal authority.',
      },
      {
        title: 'Never Split the Difference',
        author: 'Chris Voss',
        url: 'https://www.blackswanltd.com/never-split-the-difference',
        thumbnailUrl: 'https://covers.openlibrary.org/b/title/Never%20Split%20the%20Difference-M.jpg',
        note: 'Negotiation tactics for high-stakes, cross-functional conversations.',
      },
    ],
    practice: [
      {
        title: 'Mini Assignment 3: Conflict & Feedback Simulator',
        description:
          'Lateral leadership is where most of your day-to-day leadership happens — navigating disagreements with cross-functional partners, giving feedback to peers, negotiating priorities with PMs, and handling conflict without formal authority. These are high-stakes situations that most people never practice until they are in the middle of one. The best way to get better is to rehearse.\n\nYour task is to build an interactive choose-your-own-adventure style scenario app. Design at least 3 realistic workplace scenarios that a design leader might face. Examples: a PM wants to cut the design process to hit a deadline, a peer designer publicly disagrees with your direction in a critique, engineering wants to cut accessibility scope, a stakeholder bypasses your team\'s intake process. At each decision point, the user picks an approach — mapped to the course frameworks (Fighter/Negotiator/Diplomat/Avoider/People Pleaser, or a feedback model like AID/SBI/Radical Candor). The app shows the consequences of each choice and provides coaching on why certain approaches work better in certain contexts. Think of it as a leadership flight simulator.',
        deliverable:
          'Submit live URLs only: (1) deployed app URL, (2) live URL to a short design rationale (1 page max) explaining which frameworks you built into the scenarios and why. No file attachments.',
        dueInfo: 'Due by Module 5',
        aiEncouraged: true,
      },
    ],
  },
  {
    id: 'leading-front',
    number: 5,
    title: 'Leading from the Front',
    subtitle: 'Vision, Strategy & Team Building',
    description:
      'Learn to set vision, build and grow teams, communicate strategy, manage up, and balance business with design quality.',
    icon: 'rocket',
    color: 'var(--of-warning-500)',
    slides: [
      {
        title: 'What Does "Leading from the Front" Mean?',
        bullets: [
          'Setting vision that others want to follow.',
          'Ensuring everyone understands their part without micromanaging.',
          'Engaging and inspiring stakeholders to enact change.',
          'Building resilience and helping teams thrive.',
        ],
      },
      {
        title: 'Vision-Setting',
        bullets: [
          'A compelling vision connects daily work to meaningful outcomes.',
          'Who leads this? What inputs are essential?',
          'Crafting a team mission statement and principles.',
          'Exercise: Use Shopify\'s design principles as a model.',
        ],
      },
      {
        title: 'Building High-Performing Teams',
        bullets: [
          'What to look for when assembling a team.',
          'Hiring for key roles: debunking the mystery of headcount.',
          'Investing in people: GROW framework, advocacy, accountability.',
          'Different design team structures: centralized, embedded, hybrid.',
        ],
      },
      {
        title: 'Design Strategy & Execution',
        bullets: [
          'Balancing business with design.',
          'Balancing intuition with data.',
          'Working in a cross-functional triad (Product, Design, Engineering).',
          'How products get built: Agile, Scrum, Kanban.',
          'Championing user experience and design quality.',
        ],
      },
      {
        title: 'Managing Up: Build the Relationship',
        bullets: [
          'Managers don\'t like surprises. Let them know when trouble may be brewing, even if you think you have it under control.',
          'Prioritize with a Minimum Viable Backstory — your manager is busy; get to the point.',
          'Be the solution, not the problem — progress from identifying problems to bringing solutions with recommendations.',
          'Use Jessica Powell\'s Guide to Great 1:1s to structure productive conversations.',
        ],
      },
      {
        title: 'Mentor, Coach & Sponsor',
        bullets: [
          'Mentor — Provides guidance and wisdom from their own experience. Long-term relationship.',
          'Coach — Asks powerful questions to help others discover their own answers. Uses structured frameworks.',
          'Sponsor — Advocates for you in closed-door meetings. Shares your accomplishments with senior leaders.',
          'The mentoring process: Investigate → Identify → Plan → Enable.',
        ],
      },
      {
        title: 'Coaching Models: GROW & FUEL',
        bullets: [
          'GROW — Goal (what do you want?), Reality (where are you now?), Options (what could you do?), Will (what will you do?).',
          'FUEL — Frame the conversation, Understand the current state, Explore the desired state, Lay out a plan.',
          'Both models provide structure for developmental conversations.',
          'Use coaching when you want to develop someone\'s own thinking, not just give them answers.',
        ],
      },
      {
        title: 'Team Rituals That Build Culture',
        bullets: [
          'Building Product: Design Critiques, Design Share, Office Hours, Retrospectives, Standups, Quarterly Planning.',
          'Building Culture: 1-on-1s, Coffee Chats, Team Outings, Celebrations, Creative Recharge Days.',
          'Retrospectives — Formats: Rose/Bud/Thorn, 4Ls (Liked/Learned/Lacked/Longed For), Start/Stop/Continue, Sailboat.',
          'Team Norming — Members learn how to work together and establish shared strategy.',
        ],
      },
      {
        title: 'Design Critique Best Practices',
        bullets: [
          'Everyone is equal (check hierarchy at the door). Everyone is a critic.',
          'Lead with questions. Don\'t assume — ask clarifying questions.',
          'Talk about the design, not the person. Think about perspective.',
          'Types: Group (verbal) for in-depth discussion; Silent critique for equal voices.',
          'Agenda: Provide context → Identify persona → Articulate goals → Specify type of feedback needed → Present → Critique.',
        ],
      },
      {
        title: 'Personal Principles & Values',
        bullets: [
          'Think about your most meaningful moments and what stories inspire you.',
          'What situations upset you? What does your ideal world look like?',
          'Crafting a personal mission and code of ethics gives clarity and grounding.',
          'As an individual: What does success look like? What do I care about? How do I show up?',
        ],
      },
      {
        title: 'Team Vision, Mission & Values',
        bullets: [
          'Vision — The team\'s overarching aspirations of what it hopes to achieve or become.',
          'Mission — What the team needs to do NOW to achieve the vision.',
          'Values — What the team believes in and how people are expected to behave.',
          'Design Principles — Define what \'good\' looks like. Eliminate subjectivity. Drive decision-making. Create alignment.',
        ],
      },
      {
        title: 'Transition to Management',
        bullets: [
          'Make your aspiration known to your manager. Seek opportunities to elevate people around you.',
          'Do it for the right reason — Are you interested in people management? What energizes vs. depletes you?',
          'Energizers: Talking to people, helping grow careers, team-building, vision-setting.',
          'Depleters for some: Deep individual craft work, constant context-switching, business planning.',
        ],
      },
      {
        title: 'High-Performing Teams',
        bullets: [
          'Open and frequent communication.',
          'Thoughtful meetings. Respect and trust each other.',
          'Celebrate openly. Care about each other outside of being colleagues.',
          'Show up authentically. The role of a manager: create intelligence around them, not diminish it.',
        ],
      },
      {
        title: 'The Multiplier Effect',
        bullets: [
          'Multipliers amplify the intelligence and capability of everyone around them.',
          'Diminishers drain intelligence and motivation.',
          'What obstacles in your character might incline you to be a Diminisher?',
          'How do you make sure you don\'t take on "monkeys" that aren\'t yours?',
        ],
      },
      {
        title: 'Reflection Prompts',
        bullets: [
          'What are the ingredients you can leverage to set a team up for success?',
          'What considerations should you take when building a high-performing team?',
          'How can design help shape better, more equitable products?',
          'Do tradeoffs need to exist between speed and quality?',
        ],
      },
    ],
    resources: [
      {
        title: 'Multipliers (Liz Wiseman) — Chapter 1',
        url: 'https://thewisemangroup.com/multipliers/',
        type: 'book',
        description:
          'How the best leaders make everyone smarter. Read Ch 1, pp. 189-213 of Making of a Manager as companion.',
      },
      {
        title: 'The Anatomy of Design Strategy',
        url: 'https://www.nngroup.com/articles/strategy-study-guide/',
        type: 'article',
        description: 'How design strategy connects research, vision, and execution.',
      },
      {
        title: 'The Execution Trap',
        url: 'https://hbr.org/2010/07/the-execution-trap',
        type: 'article',
        description:
          'Why great strategy fails without great execution — and how to avoid the trap.',
      },
      {
        title: 'Building Products — Julie Zhuo',
        url: 'https://medium.com/@joulee',
        type: 'article',
        description:
          'The former VP of Design at Facebook on how products actually get built.',
      },
      {
        title: 'Atlassian Team Playbook',
        url: 'https://www.atlassian.com/team-playbook',
        type: 'tool',
        description:
          'A collection of team exercises for health checks, retrospectives, and decision-making.',
      },
      {
        title: 'Who\'s Got the Monkey?',
        url: 'https://hbr.org/1999/11/management-time-whos-got-the-monkey',
        type: 'article',
        description:
          'Classic HBR article on delegation and not taking on others\' problems.',
      },
      {
        title: 'Principles Design',
        url: 'https://principles.design/',
        type: 'tool',
        description:
          'A library of real-world design principles to help teams define what good looks like.',
      },
      {
        title: 'Building a Skills-Based Organization',
        url: 'https://joshbersin.com/2023/07/building-a-skills-based-organization-the-exciting-but-sober-reality/',
        type: 'article',
        description:
          'Why skills-based people strategy matters for modern team design and leadership decisions.',
      },
      {
        title: 'Designing Work That People Love',
        url: 'https://hbr.org/2022/05/designing-work-that-people-love',
        type: 'article',
        description:
          'Marcus Buckingham on redesigning work around strengths, motivation, and team effectiveness.',
      },
      {
        title: 'A Guide to 1-on-1 Meetings',
        url: 'https://www.cultureamp.com/resources/guides-and-toolkits/a-guide-to-1-on-1-meetings',
        type: 'tool',
        description:
          'Templates and best practices for more effective manager-report 1:1 conversations.',
      },
      {
        title: 'The Art of the Professional Pivot',
        url: 'https://www.figma.com/blog/the-art-of-the-professional-pivot/',
        type: 'article',
        description:
          'Career stories and practical advice for navigating leadership and role transitions.',
      },
    ],
    books: [
      {
        title: 'Multipliers',
        author: 'Liz Wiseman',
        url: 'https://thewisemangroup.com/multipliers/',
        thumbnailUrl: 'https://covers.openlibrary.org/b/title/Multipliers-M.jpg',
        note: 'Shows how strong leaders amplify team intelligence and autonomy.',
      },
      {
        title: 'The Manager\'s Path',
        author: 'Camille Fournier',
        url: 'https://www.oreilly.com/library/view/the-managers-path/9781491973883/',
        thumbnailUrl: 'https://covers.openlibrary.org/b/title/The%20Manager%27s%20Path-M.jpg',
        note: 'Roadmap for growing from individual contributor to organizational leader.',
      },
      {
        title: 'Radical Candor',
        author: 'Kim Scott',
        url: 'https://www.radicalcandor.com/',
        thumbnailUrl: 'https://covers.openlibrary.org/b/title/Radical%20Candor-M.jpg',
        note: 'Communication model for direct, caring leadership under pressure.',
      },
    ],
    practice: [
      {
        title: 'Mini Assignment 4: Team Ritual Playbook',
        description:
          'The difference between a good team and a great team often comes down to rituals — the recurring practices that build trust, alignment, and creative momentum. Design critiques, retrospectives, 1-on-1s, team norming sessions, and standups are not just meetings; they are leadership tools. A design leader who can design and facilitate great rituals multiplies the intelligence and output of everyone around them.\n\nYour task is to build an interactive Team Ritual Playbook as a web app. It must include at least 3 ritual templates drawn from the course content (e.g., design critique, retrospective, 1-on-1, team norming, coffee chat, quarterly planning). Each ritual template should include: purpose and when to use it, a suggested agenda with time estimates, facilitator tips and common pitfalls, and at least one interactive component (e.g., a retro board where users can add Rose/Bud/Thorn cards, a critique timer, a 1-on-1 agenda builder, a team norming exercise). The playbook should be something a designer could bring to their first day as a manager and actually use.',
        deliverable:
          'Submit live URLs only: (1) deployed app URL, (2) uploaded video URL (up to 3 minutes) of you facilitating one ritual from your playbook with at least 2 peers. No file attachments.',
        dueInfo: 'Due by Module 6',
        aiEncouraged: true,
      },
    ],
  },
  {
    id: 'wrapping-up',
    number: 6,
    title: 'Wrapping Up',
    subtitle: 'Leading in the Era of AI',
    description:
      'Synthesize your leadership journey and build an app that demonstrates your perspective on leading in the era of AI.',
    icon: 'bot',
    color: 'var(--of-magenta-600)',
    slides: [
      {
        title: 'Leading in the Era of AI',
        body: 'AI is reshaping every aspect of how we design, lead, and create value. As design leaders, how do we harness AI while staying human-centered?',
      },
      {
        title: 'AI & Design Leadership',
        bullets: [
          'AI as a collaborator, not a replacement.',
          'How AI changes the design process: research, ideation, prototyping, testing.',
          'Ethical considerations: bias, transparency, accountability.',
          'The designer\'s unique role: judgment, empathy, systems thinking.',
        ],
      },
      {
        title: 'Your Leadership Journey',
        bullets: [
          'Review your OKRs — how did you progress?',
          'What did you learn about yourself across the 4 pillars?',
          'Where are your strengths? Where are your growth edges?',
          'How will you continue developing after this course?',
        ],
      },
      {
        title: 'Final Project: Build an App',
        bullets: [
          'Create an application that demonstrates your leadership perspective in the era of AI.',
          'It could be: an AI-powered tool, a leadership dashboard, a decision framework, a team culture app.',
          'Use AI in your development process — this is encouraged and expected.',
          'Present your app and the thinking behind it.',
        ],
      },
      {
        title: 'Project Requirements',
        bullets: [
          'Working prototype or deployed application',
          'Clear connection to leadership themes from the course',
          'Thoughtful integration of AI capabilities',
          'A 5-minute presentation: your vision, your process, your leadership lens',
        ],
      },
      {
        title: 'The Required Story',
        bullets: [
          'Who are you as a leader, designer, and collaborator?',
          'What inspires you as a design leader?',
          'What are your superpowers and growth areas?',
          'How do you lead in the era of AI?',
          'Why would someone want you on their team?',
        ],
      },
      {
        title: 'What\'s Next?',
        bullets: [
          'Continue your Leadership Diary beyond this course.',
          'Apply your OKR practice to your career.',
          'Build your leadership network.',
          'Lead with intention, compassion, and courage.',
          'The workshop continues — stay connected.',
        ],
      },
    ],
    resources: [
      {
        title: 'Design Principles for Generative AI Applications',
        url: 'https://medium.com/design-ibm/',
        type: 'article',
        description: 'IBM Design on principles for building responsible AI experiences.',
      },
      {
        title: 'Humanity Centered Design',
        url: 'https://www.ideo.com/',
        type: 'framework',
        description:
          'IDEO\'s evolution of human-centered design toward broader humanity-centered approaches.',
      },
      {
        title: 'McKinsey Report on AI and Leadership',
        url: 'https://www.mckinsey.com/',
        type: 'article',
        description: 'How AI is changing what it means to lead organizations.',
      },
      {
        title: 'Radical Candor — Kim Scott',
        url: 'https://www.radicalcandor.com/',
        type: 'book',
        description:
          'Positioning communication to maintain humanity while getting your points across.',
      },
      {
        title: 'The Big Design Freak-Out',
        url: 'https://www.fastcompany.com/91027996/the-big-design-freak-out-a-generation-of-design-leaders-grapple-with-their-future',
        type: 'article',
        description:
          'A generation of design leaders grapple with their future. Essential context for your interview.',
      },
      {
        title: 'Why It Seems Like the Sky Is Falling for Digital Design',
        url: 'https://www.jantakacs.com/why-it-seems-like-the-sky-is-falling-for-digital-design-and-how-to-come-out-of-the-storm-stronger',
        type: 'article',
        description:
          'Jan Takacs on how to come out of the storm stronger. Recommended reading before your interview.',
      },
    ],
    books: [
      {
        title: 'The Creative Act',
        author: 'Rick Rubin',
        url: 'https://www.penguinrandomhouse.com/books/717356/the-creative-act-by-rick-rubin/',
        thumbnailUrl: 'https://covers.openlibrary.org/b/title/The%20Creative%20Act-M.jpg',
        note: 'A reflective close to the course on creative practice and perspective.',
      },
      {
        title: 'Change-Maker',
        author: 'Maria Giudice, Christopher Ireland',
        url: 'https://www.amazon.com/Change-Maker-Turn-Passion-Career-Change/dp/1933820330',
        thumbnailUrl:
          'https://books.google.com/books/content?id=3YpUzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        note: 'Design leadership stories for leading change in uncertain contexts.',
      },
      {
        title: 'Think Fast and Slow',
        author: 'Daniel Kahneman',
        url: 'https://www.penguinrandomhouse.com/books/306126/thinking-fast-and-slow-by-daniel-kahneman/',
        thumbnailUrl:
          'https://books.google.com/books/content?id=ZuKTvERuPG8C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        note: 'Decision-making lens to synthesize your leadership approach moving forward.',
      },
    ],
    practice: [
      {
        title: 'Interview a Design Leader',
        description:
          'Design leaders these days operate in a world of competing priorities, uncertainty, changing competitive landscapes, organizational restructures, and a lot of ambiguity. If you are going to be a creative leader, one of the best ways to prepare for the job is to ask existing leaders how they manage it all: What keeps them up at night? What motivates them out of bed in the morning? What skills and capabilities do they use and rely on? What skills AREN\'T they using that they used to deploy? What skills and capabilities do they wish they had? What skills and capabilities does their team and/or organization need?\n\nYour task is to choose a design leader to interview from a vetted list provided by your instructor, then schedule, design, and conduct a 30-minute to 60-minute interview with that person. (In person or virtual; if you need to record the session, be sure to get their consent.) Share your findings via a written report along with your reflections on the interview. Consider this a great networking opportunity as well as a learning opportunity: improving your interviewing techniques and your understanding of creative leadership and organizational decision-making.\n\nFor submissions, if you have a published article, a URL is ideal. Otherwise, doc/Google Doc is fine — please update the link in the submissions spreadsheet.',
        deliverable:
          'Submit live URLs only: (1) URL to your published interview report/article (or live doc URL), (2) optional uploaded video URL if you recorded the interview and have consent. No file attachments.',
        dueInfo: 'Due at end of course',
        aiEncouraged: true,
      },
      {
        title: 'Portfolio: Final Presentation',
        description:
          'By the end of this course, you should have a better sense of what kind of leader you are and/or aspire to be. The final presentation will be an opportunity for you to practice how to present yourself to future employers, clients, colleagues, collaborators, and other industry professionals through the lens of your work. This presentation will be part of the site visit experience.',
        deliverable:
          'Submit live URLs only: (1) URL to your presentation deck/page, and (2) optional uploaded video URL of your 3-5 minute presentation. No file attachments.',
        dueInfo: 'Presented during site visit',
      },
    ],
  },
];
