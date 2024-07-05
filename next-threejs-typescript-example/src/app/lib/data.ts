import { Company } from './types';
import Image from "next/image";

const companies: Company[] = [
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
    method: ['NodeJS','Vault','AWS','Docker','Lambda','Cognito','EC2','RESTful API'],
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
    method: ['FastAPI','Spicy.stats','Scikit-Learn','Dataiku'],
    display: ['mlops', 'data_quality','alert'],
    proj_img: ['/mlops.jpg','/datamlops.jpg']
  },
  {
    name: 'TUM Asia',
    role: 'Student Assistance',
    proj_name: 'bkajbfk',
    details: 'Project details for Company C',
    image: '/tum.png',
    method: ['AWS','NodeJS'],
    display: ['AWS.js', 'Vault.hehe'],
    proj_img: ['/comm.png','/girl.png']
  },
   {
    name: 'NTU@SG',
    role: 'Lab Assistant',
    proj_name: 'bkajbfk',
    details: 'Project details for Company C',
    image: '/ntu.jpeg',
    method: ['AWS','NodeJS'],
    display: ['AWS.js', 'Vault.hehe'],
    proj_img: ['/comm.png','/girl.png']
  },
  // Add more companies as needed
];

export default companies;