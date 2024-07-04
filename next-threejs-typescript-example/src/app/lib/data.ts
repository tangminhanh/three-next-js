import { Company } from './types';
import Image from "next/image";

const companies: Company[] = [
  {
    name: 'KMC Solutions',
    role: 'Fullstack Development',
    proj_name: 'ML Ticket',
    details: 'A comprehensive customer support solution with features such as dynamic fields and blocks, customizable workflows, SLA management, ticket templates, scheduled tickets, email templates, and email-to-ticket functionality.',
    image: '/kmcc.png',
    method: ['Tailwind','Typescript'],
    display: ['Kedro.py', 'TextClassification.py'],
    proj_img: ['/kmc.png','/girl.png']
  },
  {
    name: 'Mediacorp',
    role: 'Business Analyst',
    proj_name: 'Blbla',
    details: 'Project details for Company B',
    image: '/mediacorp.jpeg',
    method: ['AWS','NodeJS'],
    display: ['AWS.js', 'Vault.hehe'],
    proj_img: ['/comm.png','/girl.png']
 // Replace with the actual image URL
  },
  {
    name: 'STMicroelectronics',
    role: 'Data Engineer',
    proj_name: 'Blbla',
    details: 'Project details for Company C',
    image: '/st.png',
    method: ['AWS','NodeJS'],
    display: ['AWS.js', 'Vault.hehe'],
    proj_img: ['/comm.png','/girl.png']
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
  // Add more companies as needed
];

export default companies;