import { Company } from './types';
import {TimelineSection} from './types'
import Image from "next/image";

export const companies: Company[] = [
  {
    name: 'KMC Solutions',
    role: 'Fullstack Development Intern',
    proj_name: 'AI for Auto-Ticket Categorization',
    details: 'A comprehensive customer support solution with features such as dynamic fields and blocks, customizable workflows, SLA management, ticket templates, scheduled tickets, email templates, and email-to-ticket functionality.',
    image: '/kmcc.png',
    method: ['Python','PyTorch'],
    display: ['Kedro.py', 'TextClassification.py'],
    proj_img: ['/kedro-pipeline (1).png','/girl.png']
  },
  {
    name: 'Mediacorp',
    role: 'Business Analyst Intern',
    proj_name: 'CNA News Ingestion Dashboard Enhancement',
    details: "Built MFA Login, Key Vault storing Secrets, Search & Filter Feature, and Integrated AI Video Detection Model. Implemented a seamless workflow to trigger AI model processing upon user interaction with each video, enhancing the dashboard's analytical capabilities and providing real-time insights",
    image: '/mediacorp.jpeg',
    method: ['NodeJS','Vault','AWS','Docker','ExpressJS','Cognito','EC2','REST APIs'],
    display: ['dashboard.hbs', 'vault.ssh','CNA Fast'],
    proj_img: ['/dashboard.png','/vault.png','/fast.png']
 // Replace with the actual image URL
  },
  {
    name: 'STMicroelectronics',
    role: 'Data Engineer Intern',
    proj_name: 'MLOPs',
    details: 'Developed the backend of generalised monitoring software for machine learning models classifying wire bond integrity in semiconductor chips. Collaborated with a multidisciplinary team of data scientists and engineers to design testing solution architecture.',
    image: '/st.jpeg',
    method: ['FastAPI','Spicy.stats','Tensorflow','Scikit-Learn','numpy','Dataiku'],
    display: ['mlops', 'data_quality','alert'],
    proj_img: ['/mlops.jpg','/datamlops.jpg']
  },
  {
    name: 'TUM Asia',
    role: 'Data Laboratory Assistant',
    proj_name: 'Future Mobility in Singapore',
    details: 'Sharpened data preparation, summarization, and analytics using Excel and Python. Optimized tracking processes and reached goal 2 months before forecast',
    image: '/tum.png',
    method: ['Computer Vision','Python','OpenCV','FFmpeg','Excel'],
    display: ['vehicles', 'stat'],
    proj_img: ['/tum.jpeg','/stats.png']
  },
   {
    name: 'NTU@SG',
    role: 'Tutor & Teaching Assistant',
    proj_name: '',
    details: 'Managed three classes: Design – System Thinking, Venture Capital Practice, and Technology Commercialization. Assist tutors prepare slides, check class attendance, and review students’ assignment. Acquired knowledge in Business, Problem Solving, and AI Technology',
    image: '/ntu.jpeg',
    method: ['System Design','Management'],
    display: ['class', 'electrical'],
    proj_img: ['/comm.png','/girl.png']
  },
  // Add more companies as needed
];

export const TimelineData: TimelineSection[] = [
  {
    title: '.    C O D I N G  .',
    items: ['Workshop CV', 'Workshop Database', 'AWS Collaboration'],
    img: ['hehe', 'hihi','hoho']
  },
  {
    title: '.    C O M M U N I T Y  .',
    items: ['Maincom Community', 'GL Viet Camp', 'Programmer Chief Enitio Camp'],
    img: ['hehe', 'hihi','hoho']

  },
  {
    title: '.  C R E A T O R  .',
    items: ['Vlog', 'TikTok', 'Blog'],
    img: ['hehe', 'hihi','hoho']

  },
  {
    title: 'C O N T I N U E  S T U D Y  .',
    items: [
      'AWS Certification',
      'Google Business Certification',
      'Database Specialization Certification',
      'Machine Learning for Data Science Certification',
      'Web Development Certification',
    ],
    img: ['hehe', 'hihi','hoho']

  },
];
