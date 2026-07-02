import type { TeamMember, Vacancy, Service } from '@/lib/definitions';
import { Brain, Puzzle, Accessibility, HeartHandshake, HandHeart } from 'lucide-react';

export const SERVICES: Service[] = [
  {
    title: "Autism Support",
    imageId: "service-autism",
    icon: HandHeart,
    description: "We provide high-quality supported living services for autistic adults, enabling people to live independently in their own homes while receiving support that is safe, effective, caring, responsive, and well-led.",
    detailsHeader: "Our approach to Autism is underpinned by the following:",
    details: [
      {
        title: "The Service",
        content: "Our service is built around a person-centred approach. We work in partnership with individuals to understand their needs, preferences, abilities, and aspirations. Support is tailored to each person and regularly reviewed to ensure it remains appropriate, meaningful, and outcomes-focused."
      },
      {
        title: "Our Commitment",
        content: "We are committed to promoting choice, control, and independence. Individuals are actively involved in decisions about their care and support, including how, when, and by whom support is delivered. We respect individual rights, privacy, dignity, and cultural needs at all times."
      },
      {
        title: "The Staff",
        content: "Our staff are trained to support autistic people in a respectful, consistent, and compassionate manner. We focus on positive communication, emotional wellbeing, and enabling people to develop daily living skills, access the community, and maintain relationships that matter to them."
      },
      {
        title: "Extended Collaboration",
        content: "We work closely with families, commissioners, and other professionals to ensure coordinated and effective support. Safeguarding is central to our practice, and we are committed to maintaining safe environments where individuals feel secure, valued, and listened to."
      }
    ],
    closingText: "Through continuous learning, reflection, and quality monitoring, we strive to improve outcomes and provide support that helps people live fulfilling and meaningful lives."
  },
  {
    title: "Learning Disabilities",
    imageId: "service-learning-disability",
    icon: Puzzle,
    description: "We offer tailored support for adults with learning disabilities, including Autism and Asperger's Syndrome, to help them live fulfilling and independent lives.",
    details: [
      {
        title: "Life Skills Development",
        content: "Support with daily living activities such as cooking, budgeting, and household management to foster independence."
      },
      {
        title: "Community Integration",
        content: "Assistance with accessing community resources, education, employment, and social activities."
      },
      {
        title: "Communication Support",
        content: "Utilizing various communication methods and technologies to help individuals express themselves and connect with others."
      }
    ]
  },
  {
    title: "Mental Health Support",
    imageId: "service-mental-health",
    icon: Brain,
    description: "Our mental health services provide compassionate, person-centered support for individuals facing challenges such as depression, anxiety, schizophrenia, and personality disorders.",
    details: [
      {
        title: "Personalized Support Plans",
        content: "We work with each individual to create a support plan that addresses their unique needs, promoting recovery and well-being."
      },
      {
        title: "Therapeutic Activities",
        content: "Engaging in structured activities designed to build coping skills, improve social interaction, and enhance self-esteem."
      },
      {
        title: "24/7 On-Call Support",
        content: "Peace of mind with around-the-clock access to support for crises and emergencies."
      }
    ]
  },  
  {
    title: "Physical Disabilities",
    imageId: "service-physical-disability",
    icon: Accessibility,
    description: "Our services for individuals with physical disabilities are designed to maximize independence, comfort, and participation in all aspects of life.",
    details: [
      {
        title: "Personal Care",
        content: "Dignified and respectful assistance with personal hygiene, dressing, and mobility."
      },
      {
        title: "Home Adaptations",
        content: "Consultation and support for adapting the living environment to be more accessible and safe."
      },
      {
        title: "Mobility and Transportation",
        content: "Assistance with mobility and arranging accessible transportation for appointments and community outings."
      }
    ]
  },
  {
    title: "Positive Behaviour Support (PBS) Specialist",
    imageId: "service-pbs",
    icon: HeartHandshake,
    description: "All our services are supported by a qualified Positive Behaviour Support (PBS) Specialist who works closely with the people we support, their families, and our staff team.",
    descriptionExtended: [
      {
        index: 0,
        content: "The PBS Specialist focuses on understanding the reasons behind behaviours that may be challenging and developing person-centred, proactive support strategies."
      },
      {
        index: 1,
        content: "These strategies aim to improve quality of life, increase independence, and reduce the need for restrictive practices."
      }
    ],
    detailsHeader: "Our PBS approach is underpinned by the following principles:",
    details: [
      {
        title: "Person-centred",
        content: "Tailored to each individual’s needs, strengths, and goals."
      },
      {
        title: "Evidence-based",
        content: "Grounded in best practice and current research."
      },
      {
        title: "Collaborative",
        content: "involving families, professionals, and support staff."
      },
      {
        title: "Preventative",
        content: "Promoting positive environments and meaningful engagement."
      }
    ],
    closingText: "The PBS Specialist also provides training, guidance, and ongoing support to our staff, ensuring consistent, compassionate, and effective support within our supported living services."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { 
    name: 'Vicky Hall RGN', 
    role: 'Chief Executive Officer', 
    imageId: 'team-member-1', 
    bio: 'A Chief Executive with 30 years career experience supporting clients with complex needs in residential care and supported living. sSecialising in forensic mental health, learning disabilities and autism.',
    socials: {  },
    qualifications: [
      
    ]
  },
  { 
    name: 'Craton Machimbidza RMN', 
    role: 'Human Resources Director', 
    imageId: 'team-member-2',
    bio: 'Joint Clinical Lead with a wealth of clinical experience in the NHS and private sector, gained in secure, semi secure and community based provider groups focused throughout on person centred care and rehabilitation.',
    socials: {  },
    qualifications: [
      
    ]
  },
  { 
    name: 'Elias Machimbidza RMN', 
    role: 'Finance Director', 
    imageId: 'team-member-3',
    bio: 'A Chief Joint Clinical Lead with Wealth Financial Management and Clinical Governance Negotiations and business development providing value for money. Fostering strong relationships with stakeholders and commissioning bodies.',
    socials: {  },
    qualifications: [
      'NVQ Level 5 in Leadership and Management in Care'
    ]
  },
  { 
    name: 'TINA WELCH', 
    role: 'Registered Manager', 
    imageId: 'team-member-4',
    bio: 'An experienced Registered Manager specialising in supported living services for individuals with autism, learning disabilities and complex needs. Skilled in Positive Behaviour Support, safeguarding, service development and compliance, with a commitment to delivering high quality, person centred care and positive outcomes through effective partnership working with families, professionals and commissioners.',
    socials: {  },
    qualifications: [
      'Level 5 Diploma in Health and Social Care Management'
    ]
  },
];

export const VACANCIES: Vacancy[] = [
  // {
  //   id: '1',
  //   title: 'Support Worker - Mental Health',
  //   location: 'Manchester',
  //   type: 'Full-time',
  //   description: ['We are seeking a compassionate and dedicated Support Worker to join our mental health team. You will play a crucial role in providing person-centered care and support to individuals with a range of mental health conditions.'],
  //   responsibilities: [
  //       'Providing emotional and practical support to clients.',
  //       'Assisting with daily living tasks and promoting independence.',
  //       'Implementing and reviewing support plans.',
  //       'Working collaboratively with a multidisciplinary team.'
  //   ],
  //   qualifications: [
  //       'NVQ Level 2/3 in Health and Social Care (or equivalent).',
  //       'Experience working with individuals with mental health conditions.',
  //       'Excellent communication and interpersonal skills.',
  //       'A commitment to promoting recovery and well-being.'
  //   ]
  // },
  // {
  //   id: '2',
  //   title: 'Care Coordinator - Learning Disabilities',
  //   location: 'Liverpool',
  //   type: 'Full-time',
  //   description: ['An exciting opportunity for an experienced Care Coordinator to oversee the delivery of our learning disability services. You will be responsible for managing support packages, leading a team of support workers, and ensuring the highest quality of care.'],
  //   responsibilities: [
  //       'Conducting assessments and creating care plans.',
  //       'Supervising and mentoring a team of support staff.',
  //       'Liaising with families, social workers, and other professionals.',
  //       'Ensuring compliance with CQC regulations.'
  //   ],
  //   qualifications: [
  //       'NVQ Level 3/4 in Health and Social Care (or equivalent).',
  //       'Proven experience in a care coordination or senior support role.',
  //       'In-depth knowledge of supporting individuals with learning disabilities.',
  //       'Strong leadership and organizational skills.'
  //   ]
  // },
  // {
  //   id: '3',
  //   title: 'Night Support Worker - Physical Disabilities',
  //   location: 'Birmingham',
  //   type: 'Part-time',
  //   description: ['We are looking for a reliable and caring Night Support Worker to provide overnight support to individuals with physical disabilities in their own homes. This role is vital for ensuring the safety and comfort of our clients throughout the night.'],
  //   responsibilities: [
  //       'Providing personal care and support during the night.',
  //       'Assisting with mobility and repositioning.',
  //       'Responding to any needs or emergencies that may arise.',
  //       'Maintaining accurate records of care provided.'
  //   ],
  //   qualifications: [
  //       'Experience in a similar role, preferably in a domiciliary care setting.',
  //       'A compassionate and patient demeanor.',
  //       'Ability to work independently and remain alert during night shifts.',
  //       'Training in manual handling and first aid is desirable.'
  //   ]
  // },
];
