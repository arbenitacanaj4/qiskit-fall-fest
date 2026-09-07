/**
 * ALL EDITABLE CONTENT LIVES HERE.
 * Replace strings, add/remove array items, no layout changes needed.
 */

export const REGISTER_URL = "https://forms.gle/REPLACE-WITH-GOOGLE-FORM";

export const event = {
  title: "Qiskit Fall Fest 2026",
  city: "Budapest",
  host: "Budapest University of Technology and Economics (BME)",
  hostShort: "BME",
  dates: "October 29 to 30, 2026",
  datesShort: "29 / 30 OCT 2026",
  year: "2026",
  theme: "A decade of quantum on the cloud",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Venue", href: "#venue" },
  { label: "Speakers", href: "#speakers" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export type ScheduleItem = {
  time: string;
  title: string;
  host: string;
  kind?: "break" | "talk" | "lab" | "milestone";
};

export const schedule: { id: string; day: string; date: string; weekday: string; items: ScheduleItem[] }[] = [
  {
    id: "day-01",
    day: "Day 01",
    date: "Oct 29",
    weekday: "Thursday",
    items: [
      { time: "15:00", title: "Session 01", host: "TBA", kind: "talk" },
      { time: "15:45", title: "Session 02", host: "TBA", kind: "talk" },
      { time: "16:30", title: "Break / refreshments", host: "TBA", kind: "break" },
      { time: "17:15", title: "Session 03", host: "TBA", kind: "talk" },
      { time: "18:00", title: "Session 04", host: "TBA", kind: "talk" },
      { time: "18:45", title: "Networking", host: "Everyone", kind: "milestone" },
    ],
  },
  {
    id: "day-02",
    day: "Day 02",
    date: "Oct 30",
    weekday: "Friday",
    items: [
      { time: "10:00", title: "Hackathon begins", host: "", kind: "lab" },
      { time: "13:30", title: "Lunch break", host: "", kind: "break" },
      { time: "14:15", title: "Hackathon continues", host: "", kind: "lab" },
      { time: "16:00", title: "Hackathon ends", host: "", kind: "milestone" },
      { time: "16:15", title: "Award ceremony", host: "", kind: "milestone" },
    ],
  },
];

export type Speaker = {
  name: string;
  role: string;
  org: string;
  bio: string;
  talk: string;
  linkedin: string;
  photo?: string; // drop a real image URL/import here later
};

export const speakers: Speaker[] = [
  {
    name: "Speaker 01",
    role: "To be announced",
    org: "Speaker line-up TBC",
    bio: "Speaker details and session descriptions will be announced once the programme is confirmed.",
    talk: "Session 01",
    linkedin: "https://linkedin.com/in/REPLACE-ME",
  },
  {
    name: "Speaker 02",
    role: "To be announced",
    org: "Speaker line-up TBC",
    bio: "Speaker details and session descriptions will be announced once the programme is confirmed.",
    talk: "Session 02",
    linkedin: "https://linkedin.com/in/REPLACE-ME",
  },
  {
    name: "Speaker 03",
    role: "To be announced",
    org: "Speaker line-up TBC",
    bio: "Speaker details and session descriptions will be announced once the programme is confirmed.",
    talk: "Session 03",
    linkedin: "https://linkedin.com/in/REPLACE-ME",
  },
  {
    name: "Speaker 04",
    role: "To be announced",
    org: "Speaker line-up TBC",
    bio: "Speaker details and session descriptions will be announced once the programme is confirmed.",
    talk: "Session 04",
    linkedin: "https://linkedin.com/in/REPLACE-ME",
  },
];

export type TeamMember = { name: string; role: string; linkedin: string; photo?: string };

export const team: TeamMember[] = [
  { name: "Gvantsa Kapanadze", role: "Lead Organizer", linkedin: "https://www.linkedin.com/in/gvantsakapanadze/" },
  { name: "Rodina Osman", role: "Organizer", linkedin: "https://www.linkedin.com/in/rodina-osman/" },
  { name: "Arbenite Canaj", role: "Organizer", linkedin: "https://www.linkedin.com/in/arbenite-canaj/" },
];

export const venue = {
  university: "Budapest University of Technology and Economics (BME)",
  building: "Building I",
  room: "IB023",
  address: "BME, Building I, Room IB023, Budapest, Hungary",
  mapUrl: "https://maps.app.goo.gl/RMiv2CjJ1ZHTwSGGA",
  transport: [
    "Tram 4 / 6",
    "Stop: Petőfi híd",
  ],
};

export const faq = [
  { q: "Is the event free?", a: "Yes. Qiskit Fall Fest is free for all registered participants." },
  { q: "Who can participate?", a: "Students of any university, plus anyone curious about quantum computing. No affiliation with BME required." },
  { q: "Do I need previous quantum computing experience?", a: "No. Sessions start from the basics and mentors are available throughout both days." },
  { q: "Do I need previous Qiskit experience?", a: "No. The introduction session covers everything you need to start writing circuits." },
  { q: "Do I need to bring a laptop?", a: "Yes, please bring a laptop for the workshop and hackathon." },
  { q: "Do I need a team?", a: "No team is needed for the first day, you can attend all talks and sessions individually. For the hackathon on October 30, you'll work in a team. Don't have one yet? No worries, we'll help match you with other participants." },
  { q: "Is registration required?", a: "Yes. Seats are limited, so register in advance through the registration form." },
  { q: "Where will the event take place?", a: "The event will take place at BME, Building I, Room IB023." },
  { q: "What language will the event be held in?", a: "English." },
];

export const partners = [
  { name: "Qiskit", note: "Programme supporter" },
  { name: "IBM Quantum", note: "Programme supporter" },
  { name: "Budapest University of Technology and Economics (BME)", note: "Host institution" },
  { name: "Sponsor / Partner TBC", note: "Future sponsor placeholder" },
];

export const contact = {
  email: "quantum.ibmbme@gmail.com",
  instagram: { label: "@ibm.fallfestbme", url: "https://www.instagram.com/ibm.fallfestbme/" },
};
