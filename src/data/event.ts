/**
 * ALL EDITABLE CONTENT LIVES HERE.
 * Replace strings, add/remove array items, no layout changes needed.
 */

export const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd8CsZOmB4NaSIV-z3EVunxwN1ktaYgHa0y4ukMn8kMz2jD9A/viewform";

import gvantsaImg from "@/assets/gvantsa.jpg";
import rodinaImg from "@/assets/rodina.jpg";
import nitaImg from "@/assets/nita.jpeg";
import bacsardiImg from "@/assets/LaszloBacsardi.jpg";
import peskoImg from "@/assets/Zoltan Pesko.jpg";
import joczikImg from "@/assets/Szabolcs Jóczik.jpeg";
import balintImg from "@/assets/Farádi Bálint.png";
import asbothImg from "@/assets/Janos Asboth.jpg";
import danielImg from "@/assets/daniel.jpg";
import bmeLogo from "@/assets/BME LOGO 2_2025_horizontal_black_eng.png";
import departmentLogo from "@/assets/department logo.png";
import qiskitLogo from "@/assets/qiskit_black.png";
import ibmLogo from "@/assets/IBM_Quantum_logotype_pos_RGB.png";
import qnexusLogo from "@/assets/qnexus.png";
import qcrLogo from "@/assets/qcr.svg";

export const event = {
  title: "Qiskit Fall Fest 2026",
  city: "Budapest",
  host: "Budapest University of Technology and Economics (BME)",
  hostShort: "BME",
  dates: "Friday, October 30, 2026",
  datesShort: "30 OCT 2026",
  year: "2026",
  doorsOpenTime: "13:45",
  startTime: "14:30",
  endTime: "19:00",
  timezone: "Europe/Budapest",
  theme: "A decade of quantum on the cloud",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Venue", href: "#venue" },
  { label: "Speakers", href: "#speakers" },
  { label: "Team", href: "#team" },
  { label: "Partners", href: "#partners" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export type ProfessionalLink = { label: string; url: string };

export type Session = {
  id: string;
  startTime: string | null;
  endTime: string | null;
  title: string;
  type: string | null;
  description: string[];
  speakerIds: string[];
  location: string | null;
  prerequisites: string | null;
  topics: string[];
  resources: ProfessionalLink[];
};

// Speaker associations are shared by the timeline and profile dialogs.
// The 15:00 algorithm session start remains subject to organizer confirmation.
export const sessions: Session[] = [
  {
    id: "registration",
    startTime: event.doorsOpenTime,
    endTime: event.startTime,
    title: "Doors Open & Registration",
    type: "Registration",
    description: ["Attendee check-in."],
    speakerIds: [],
    location: null,
    prerequisites: null,
    topics: [],
    resources: [],
  },
  {
    id: "welcome",
    startTime: event.startTime,
    endTime: "15:00",
    title: "Welcome & Introduction to Quantum Computing",
    type: "Opening",
    description: [
      "Welcoming remarks from the vice dean, followed by an introduction to quantum computing from Dr. László Bacsárdi.",
    ],
    speakerIds: ["laszlo-bacsardi"],
    location: null,
    prerequisites: null,
    topics: [],
    resources: [],
  },
  {
    id: "quantum-algorithm",
    startTime: "15:00",
    endTime: "15:25",
    title: "Building a Quantum Algorithm and Running It on Real Hardware",
    type: "Talk",
    description: [
      "Most of the tooling for quantum computing is open source and free to use. This session uses those tools to build a quantum algorithm from scratch and run it interactively in simulation. We then run the same algorithm on a real quantum computer, and comparing the two results is a direct introduction to what quantum software development involves today.",
    ],
    speakerIds: ["szabolcs-joczik"],
    location: null,
    prerequisites: null,
    topics: [],
    resources: [],
  },
  {
    id: "quiz-round-1",
    startTime: "15:25",
    endTime: "15:40",
    title: "Quantum Challenge - Round 1",
    type: "Challenge",
    description: ["Interactive challenge and awards."],
    speakerIds: [],
    location: null,
    prerequisites: null,
    topics: [],
    resources: [],
  },
  {
    id: "coffee-break",
    startTime: "15:40",
    endTime: "16:00",
    title: "Coffee Break",
    type: "Break",
    description: [],
    speakerIds: [],
    location: null,
    prerequisites: null,
    topics: [],
    resources: [],
  },
  {
    id: "ibm-quantum",
    startTime: "16:00",
    endTime: "16:30",
    title: "IBM Quantum: From Fundamentals to Real-World Possibilities",
    type: "Talk",
    description: [
      "What can quantum computing offer, and how can we start exploring it today?",
      "This talk introduces the fundamentals of quantum computing, IBM's approach, and potential applications across industry and research.",
      "It also introduces Qiskit, IBM's open-source framework for quantum computing, and discusses how students, researchers and organizations can begin building practical skills.",
    ],
    speakerIds: ["zoltan-pesko"],
    location: null,
    prerequisites: null,
    topics: [],
    resources: [],
  },
  {
    id: "panel",
    startTime: "16:30",
    endTime: "17:00",
    title: "Quantum Computing Panel Discussion",
    type: "Panel",
    description: [
      "A discussion bringing together perspectives from quantum research, software, hardware, and industry.",
    ],
    speakerIds: ["zoltan-pesko", "szabolcs-joczik", "faradi-balint", "janos-asboth"],
    location: null,
    prerequisites: null,
    topics: [],
    resources: [],
  },
  {
    id: "break",
    startTime: "17:00",
    endTime: "17:20",
    title: "Break",
    type: "Break",
    description: [],
    speakerIds: [],
    location: null,
    prerequisites: null,
    topics: [],
    resources: [],
  },
  {
    id: "quantum-applications",
    startTime: "17:20",
    endTime: "17:40",
    title: "Quantum Computing: Where Can It Make a Difference?",
    type: "Talk",
    description: [
      "Quantum computing has the potential to transform various industries and scientific disciplines.",
      "This talk will explore its practical applications and relevance to computer engineering, electrical engineering, chemical engineering, physics, and other fields.",
      "It will also highlight the role different disciplines play in advancing quantum technologies and how students and professionals can use their knowledge and skills to contribute to the future of quantum computing.",
    ],
    speakerIds: ["faradi-balint"],
    location: null,
    prerequisites: null,
    topics: [],
    resources: [],
  },
  {
    id: "quiz-final",
    startTime: "17:40",
    endTime: "18:00",
    title: "Quantum Challenge - Round 2",
    type: "Challenge",
    description: ["Challenge and awards."],
    speakerIds: [],
    location: null,
    prerequisites: null,
    topics: [],
    resources: [],
  },
  {
    id: "scaling-hardware",
    startTime: "18:00",
    endTime: "18:30",
    title: "Scaling Quantum Computers: Hardware Challenges and Limitations",
    type: "Talk",
    description: [
      "Scaling quantum computers requires solving several hardware challenges.",
      "This session looks at what makes building larger quantum processors difficult, including qubit control, wiring complexity, noise, and errors.",
      "Dániel will explain these challenges using superconducting quantum hardware and discuss how researchers and engineers are working to make quantum processors more scalable and reliable.",
    ],
    speakerIds: ["daniel-szombati"],
    location: null,
    prerequisites: null,
    topics: [],
    resources: [],
  },
  {
    id: "networking",
    startTime: "18:30",
    endTime: event.endTime,
    title: "Networking",
    type: "Networking",
    description: ["Connect with speakers, organizers, and fellow quantum computing enthusiasts."],
    speakerIds: [],
    location: null,
    prerequisites: null,
    topics: [],
    resources: [],
  },
];

export type Speaker = {
  id: string;
  displayOrder: number;
  name: string;
  eventRole: "Speaker" | "Speaker & Panelist" | "Panelist";
  role: string;
  organization: string;
  shortBio: string;
  fullBio: string[];
  photo?: string;
  linkedin: string | null;
  website: string | null;
  links: ProfessionalLink[];
};

// Profiles derive session associations from sessions[].speakerIds.
export const speakers: Speaker[] = [
  {
    id: "laszlo-bacsardi",
    displayOrder: 1,
    name: "Dr. László Bacsárdi",
    eventRole: "Speaker",
    role: "Head of the Department of Networked Systems and Services",
    organization: "Budapest University of Technology and Economics (BME)",
    shortBio:
      "Department head at BME, researching quantum computing, quantum communication, and quantum-based space communications.",
    fullBio: [
      "Dr. László Bacsárdi serves as Head of the Department of Networked Systems and Services at the Faculty of Electrical Engineering and Informatics of the Budapest University of Technology and Economics (BME). He is a member of the International Academy of Astronautics (IAA).",
      "He received his MSc degree in Computer Engineering from BME in 2006 and his PhD degree in 2012.",
      "Since 2004, his research has focused on quantum computing, quantum communication and quantum-based space communications. He has more than 100 publications. His contributions have been recognized with numerous awards, including the International Astronautical Federation's (IAF) Young Space Leadership Award in 2017 and the Hungarian Gold Cross of Merit, awarded by the President of Hungary in 2025.",
    ],
    photo: bacsardiImg,
    linkedin: "https://www.linkedin.com/in/laszlo-bacsardi/",
    website: null,
    links: [],
  },
  {
    id: "zoltan-pesko",
    displayOrder: 2,
    name: "Zoltán Peskó",
    eventRole: "Speaker & Panelist",
    role: "IBM Quantum Ambassador and Asset Lifecycle Management Subject Matter Expert",
    organization: "IBM",
    shortBio:
      "Connecting quantum computing education and emerging technologies with practical business needs at IBM.",
    fullBio: [
      "Zoltán Peskó is an IBM Quantum Ambassador and an Asset Lifecycle Management Subject Matter Expert at IBM, supporting clients across Northern, Central and Eastern Europe. He actively promotes quantum computing education and awareness, helping business and academic audiences understand its principles, potential applications, and opportunities. In his work, he connects emerging technologies with practical business needs.",
    ],
    photo: peskoImg,
    linkedin: "https://www.linkedin.com/in/zoltanpesko/",
    website: null,
    links: [],
  },
  {
    id: "szabolcs-joczik",
    displayOrder: 3,
    name: "Szabolcs Jóczik",
    eventRole: "Speaker & Panelist",
    role: "Senior Software Engineer; Co-founder of QCR MTÜ; Lecturer at ELTE",
    organization: "Air France-KLM · QCR MTÜ · ELTE",
    shortBio:
      "Software engineer, educator, and co-founder of open-access quantum computing platforms QCanvas and QCR.",
    fullBio: [
      "Szabolcs Jóczik is a senior software engineer at Air France-KLM and co-founder of QCR MTÜ, a non-profit association behind QCanvas and QCR, two open-access platforms for quantum computing education and research used by universities and high schools. He previously led the web platform for Piquasso, a photonic quantum simulator developed at the Quantum National Laboratory. He studied computer science at ELTE, where he also teaches cloud infrastructure and software architecture.",
    ],
    photo: joczikImg,
    linkedin: "https://www.linkedin.com/in/szabolcs-j%C3%B3czik-80b029168/",
    website: null,
    links: [],
  },
  {
    id: "faradi-balint",
    displayOrder: 4,
    name: "Farádi Bálint",
    eventRole: "Speaker & Panelist",
    role: "Vice President of QNexus Association; Founder and CTO of Quantum Nexus Kft.",
    organization: "QNexus Association / Quantum Nexus Kft.",
    shortBio:
      "Strengthening Hungary’s quantum ecosystem and bringing quantum software and algorithms to industry.",
    fullBio: [
      "Farádi Bálint is the Vice President of QNexus Association, where he works to strengthen Hungary's quantum ecosystem by connecting research, industry, and education. He is also the founder and CTO of Quantum Nexus Kft., Hungary's first startup dedicated to quantum software and algorithm development. Through industrial partnerships and research projects, he aims to bring practical quantum computing solutions to market.",
    ],
    photo: balintImg,
    linkedin: "https://www.linkedin.com/in/balint-faradi/",
    website: null,
    links: [],
  },
  {
    id: "daniel-szombati",
    displayOrder: 5,
    name: "Dániel Szombati",
    eventRole: "Speaker",
    role: "Head of Hardware",
    organization: "Planckian",
    shortBio:
      "Leading a team of physicists and engineers building quantum processors based on global control at Planckian.",
    fullBio: [
      "Daniel Szombati is Head of Hardware at Planckian, an Italian quantum computing company, where he leads a team of physicists and engineers building quantum processors based on global control. He has spent a decade on superconducting and flux qubits, designing them, fabricating them, and measuring them, and has built qubit fabrication and measurement laboratories from the ground up at four institutions across Europe and Australia.",
      "Before Planckian he was Lead Hardware Engineer at Qilimanjaro in Barcelona, where he delivered the company’s first generation of adiabatic flux-qubit processors. He previously held postdoctoral positions at ENS de Lyon and the University of Queensland, and completed his PhD at TU Delft, pioneering the experimental observation of the Josephson φ₀ effect.",
    ],
    photo: danielImg,
    linkedin: "https://www.linkedin.com/in/daniel-szombati-672a3aa4/",
    website: null,
    links: [],
  },
  {
    id: "janos-asboth",
    displayOrder: 6,
    name: "János Asbóth",
    eventRole: "Panelist",
    role: "Assistant Professor, Department of Theoretical Physics, BME; Senior Research Fellow, Wigner Research Centre for Physics",
    organization: "BME / Wigner Research Centre for Physics",
    shortBio:
      "Theoretical physicist working on quantum error correction, quantum optics, and quantum topological phases.",
    fullBio: [
      "János Asbóth is a theoretical physicist working on quantum error correction, quantum optics, and quantum topological phases.",
      "He received his MSc in Physics from ELTE Budapest (2003) and PhD from Innsbruck University (2008).",
      "He held a postdoctoral position at Leiden University (2008–2010), followed by research positions at Wigner Research Centre for Physics in Budapest, and joined BME in 2019.",
      "He has taught compact courses on topological phases of quantum condensed matter at Geneva, Bonn, ELTE, and BME.",
      "He served as Scientific Secretary of the HunQuTech national project and Principal Investigator of BME's participation in the OpenSuperQPlus100 EU project.",
      "He has over 40 publications in international journals and an H-index of 28.",
    ],
    photo: asbothImg,
    linkedin: "https://www.linkedin.com/in/janos-asboth-9988b060/",
    website: null,
    links: [],
  },
];

export type TeamMember = { name: string; role: string; linkedin: string; photo?: string };

export const team: TeamMember[] = [
  {
    name: "Gvantsa Kapanadze",
    role: "Lead Organizer",
    linkedin: "https://www.linkedin.com/in/gvantsakapanadze/",
    photo: gvantsaImg,
  },
  {
    name: "Rodina Osman",
    role: "Organizer",
    linkedin: "https://www.linkedin.com/in/rodina-osman/",
    photo: rodinaImg,
  },
  {
    name: "Arbenite Canaj",
    role: "Organizer",
    linkedin: "https://www.linkedin.com/in/arbenite-canaj/",
    photo: nitaImg,
  },
];

export const venue = {
  university: "Budapest University of Technology and Economics (BME)",
  building: "Building I",
  room: "IB023",
  address: "BME, Building I, Room IB023, Budapest, Hungary",
  mapUrl: "https://maps.app.goo.gl/RMiv2CjJ1ZHTwSGGA",
  transport: ["Tram 4 / 6", "Stop: Petőfi híd"],
};

export const faq = [
  {
    q: "When does the programme start?",
    a: "Qiskit Fall Fest takes place on Friday, October 30, 2026. The programme runs from 14:30 to 19:00 (Budapest local time).",
  },
  { q: "Is the event free?", a: "Yes. Qiskit Fall Fest is free for all registered participants." },
  {
    q: "Who can participate?",
    a: "Students of any university, plus anyone curious about quantum computing. No affiliation with BME required.",
  },
  {
    q: "Do I need previous quantum computing experience?",
    a: "No previous quantum computing experience is required. Join us for talks and learning sessions on October 30.",
  },
  {
    q: "Do I need previous Qiskit experience?",
    a: "No previous Qiskit experience is required. Join the introduction and explore how quantum algorithms run in simulation and on real hardware.",
  },
  {
    q: "Do I need to bring a laptop?",
    a: "A laptop isn't required, but you're welcome to bring one! Some sessions will include simulations you can follow along with if you'd like to try things out yourself. If you'd rather just listen and enjoy the talks, that's completely fine too.",
  },
  {
    q: "Is registration required?",
    a: "Yes. Seats are limited, so register in advance through the registration form.",
  },
  {
    q: "Where will the event take place?",
    a: "The event will take place at BME, Building I, Room IB023.",
  },
  { q: "What language will the event be held in?", a: "English." },
];

export type Partner = {
  id: string;
  name: string;
  logo: string | null;
  website: string | null;
  category: string | null;
  altText: string;
};

// Place official logos in public/partners/ and set logo to /partners/filename.png.
export const partners: Partner[] = [
  {
    id: "ibm",
    name: "IBM Quantum",
    logo: ibmLogo,
    website: null,
    category: "Global programme supporter",
    altText: "IBM Quantum",
  },
  {
    id: "bme",
    name: "Budapest University of Technology and Economics (BME)",
    logo: bmeLogo,
    website: null,
    category: "Host institution",
    altText: "Budapest University of Technology and Economics (BME)",
  },
  {
    id: "department",
    name: "Department of Networked Systems and Services",
    logo: departmentLogo,
    website: null,
    category: null,
    altText: "Department of Networked Systems and Services",
  },
  { id: "comp1", name: "QCR", logo: qcrLogo, website: null, category: null, altText: "QCR" },
  {
    id: "comp2",
    name: "QNexus",
    logo: qnexusLogo,
    website: null,
    category: null,
    altText: "QNexus",
  },
  {
    id: "qiskit",
    name: "Qiskit Program",
    logo: qiskitLogo,
    website: null,
    category: null,
    altText: "Qiskit Program logo",
  },
];

export const contact = {
  email: "quantum.ibmbme@gmail.com",
  instagram: { label: "@ibm.fallfestbme", url: "https://www.instagram.com/ibm.fallfestbme/" },
};
