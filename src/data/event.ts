/**
 * ALL EDITABLE CONTENT LIVES HERE.
 * Replace strings, add/remove array items — no layout changes needed.
 */

export const REGISTER_URL = "https://forms.gle/REPLACE-WITH-GOOGLE-FORM";

export const event = {
  title: "Qiskit Fall Fest 2026",
  city: "Budapest",
  host: "Budapest University of Technology and Economics (BME)",
  hostShort: "BME",
  dates: "October 29—30, 2026",
  datesShort: "29—30 OCT 2026",
  year: "2026",
  theme: "A decade of quantum on the cloud",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Speakers", href: "#speakers" },
  { label: "Venue", href: "#venue" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export type ScheduleItem = {
  time: string;
  title: string;
  host: string;
  location: string;
  kind?: "break" | "talk" | "lab" | "milestone";
};

export const schedule: { id: string; day: string; date: string; weekday: string; items: ScheduleItem[] }[] = [
  {
    id: "day-01",
    day: "Day 01",
    date: "Oct 29",
    weekday: "Thursday",
    items: [
      { time: "09:00", title: "Doors open / check-in", host: "Organizing team", location: "Building Q — Foyer", kind: "milestone" },
      { time: "09:45", title: "Opening: ten years of quantum on the cloud", host: "TBA — Organizer", location: "Room QA-101", kind: "milestone" },
      { time: "10:30", title: "Introduction to Qiskit", host: "TBA — Speaker 01", location: "Room QA-101", kind: "talk" },
      { time: "12:00", title: "Lunch / networking", host: "—", location: "Building Q — Foyer", kind: "break" },
      { time: "13:00", title: "Quantum computing workshop", host: "TBA — Speaker 02", location: "Computer lab QB-207", kind: "lab" },
      { time: "15:30", title: "Guest talk: research in Hungary", host: "TBA — Guest", location: "Room QA-101", kind: "talk" },
      { time: "17:00", title: "Coding challenge launch", host: "Organizing team", location: "Computer lab QB-207", kind: "milestone" },
    ],
  },
  {
    id: "day-02",
    day: "Day 02",
    date: "Oct 30",
    weekday: "Friday",
    items: [
      { time: "09:30", title: "Morning check-in", host: "Organizing team", location: "Building Q — Foyer", kind: "milestone" },
      { time: "10:00", title: "Industry talk: quantum in practice", host: "TBA — Speaker 03", location: "Room QA-101", kind: "talk" },
      { time: "11:00", title: "Hackathon working block", host: "Mentors", location: "Computer lab QB-207", kind: "lab" },
      { time: "13:00", title: "Lunch / networking", host: "—", location: "Building Q — Foyer", kind: "break" },
      { time: "14:00", title: "Mentoring & project sprint", host: "Mentors", location: "Computer lab QB-207", kind: "lab" },
      { time: "16:30", title: "Project showcase", host: "Participants", location: "Room QA-101", kind: "talk" },
      { time: "18:00", title: "Closing session & awards", host: "Organizing team", location: "Room QA-101", kind: "milestone" },
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
    role: "Quantum Researcher",
    org: "Organization TBA",
    bio: "Placeholder biography. Two or three sentences about the speaker's work, research area and why participants should care.",
    talk: "Introduction to Qiskit",
    linkedin: "https://linkedin.com/in/REPLACE-ME",
  },
  {
    name: "Speaker 02",
    role: "Qiskit Advocate",
    org: "Organization TBA",
    bio: "Placeholder biography. Mention community work, teaching experience, or the workshop this person will lead.",
    talk: "Quantum computing workshop",
    linkedin: "https://linkedin.com/in/REPLACE-ME",
  },
  {
    name: "Speaker 03",
    role: "Industry Engineer",
    org: "Organization TBA",
    bio: "Placeholder biography. Short, human, and specific — what they build and what they will share on stage.",
    talk: "Industry talk: quantum in practice",
    linkedin: "https://linkedin.com/in/REPLACE-ME",
  },
  {
    name: "Speaker 04",
    role: "PhD Candidate",
    org: "BME — Department TBA",
    bio: "Placeholder biography. Research focus, publications, and the local angle of their session.",
    talk: "Guest talk: research in Hungary",
    linkedin: "https://linkedin.com/in/REPLACE-ME",
  },
];

export type TeamMember = { name: string; role: string; linkedin: string; photo?: string };

export const team: TeamMember[] = [
  { name: "Organizer 01", role: "Lead organizer", linkedin: "https://linkedin.com/in/REPLACE-ME" },
  { name: "Organizer 02", role: "Programme", linkedin: "https://linkedin.com/in/REPLACE-ME" },
  { name: "Organizer 03", role: "Technical", linkedin: "https://linkedin.com/in/REPLACE-ME" },
  { name: "Organizer 04", role: "Design", linkedin: "https://linkedin.com/in/REPLACE-ME" },
  { name: "Organizer 05", role: "Partnerships", linkedin: "https://linkedin.com/in/REPLACE-ME" },
  { name: "Organizer 06", role: "Communications", linkedin: "https://linkedin.com/in/REPLACE-ME" },
];

export const venue = {
  university: "Budapest University of Technology and Economics",
  building: "Building — TBA",
  room: "Room — TBA",
  address: "Address TBA, Budapest, Hungary",
  mapUrl: "https://maps.google.com/?q=Budapest+University+of+Technology+and+Economics",
  transport: [
    "Metro — line and stop TBA",
    "Tram — line and stop TBA",
    "Bus — line and stop TBA",
  ],
};

export const faq = [
  { q: "Is the event free?", a: "Yes. Qiskit Fall Fest Budapest is free for all registered participants." },
  { q: "Who can participate?", a: "Students of any university, plus anyone curious about quantum computing. No affiliation with BME required." },
  { q: "Do I need previous quantum computing experience?", a: "No. Sessions start from the basics and mentors are available throughout both days." },
  { q: "Do I need previous Qiskit experience?", a: "No. The introduction session covers everything you need to start writing circuits." },
  { q: "Do I need to bring a laptop?", a: "Yes, please bring a laptop for the workshop and coding challenge. Everything runs in the browser or in Python." },
  { q: "Do I need a team?", a: "No. You can join solo and form a team on site during the challenge." },
  { q: "Is registration required?", a: "Yes. Seats are limited, so register in advance through the registration form." },
  { q: "Where will the event take place?", a: "At BME in Budapest. Exact building and room will be published here before the event." },
  { q: "What language will the event be held in?", a: "English." },
];

export const partners = [
  { name: "Qiskit / IBM Quantum", note: "Programme supporter", official: true },
  { name: "Budapest University of Technology and Economics", note: "Host institution" },
  { name: "Sponsor / Partner 01", note: "Logo to be provided" },
  { name: "Sponsor / Partner 02", note: "Logo to be provided" },
];

export const contact = {
  email: "hello@qiskitfallfest.bme",
  instagram: { label: "@qiskitfallfestbudapest", url: "https://instagram.com/REPLACE-ME" },
  organizer: "Organizer contact — name & email TBA",
};
