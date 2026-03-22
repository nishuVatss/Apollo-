export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  experience: string;
  image: string;
  bio: string;
  expertise: string[];
  availability: string;
}

export const doctors: Doctor[] = [
  {
    id: "dr-nikhil-aggarwal",
    name: "Dr. Nikhil Aggarwal",
    specialty: "GI & HPB Surgical Oncologist",
    qualification: "MBBS, MS (General Surgery), MCh",
    experience: "15+ years",
    image: "https://res.cloudinary.com/dp6i0yxk2/image/upload/v1774188420/l4egpbxmzfa57d03mqs8.jpg",
    bio: "Dr. Nikhil Aggarwal is a distinguished GI and HPB Surgical Oncologist with over 15 years of experience treating complex gastrointestinal, hepatobiliary, and pancreatic cancers. His practice is dedicated to GI and HPB surgical oncology, with advanced expertise in laparoscopic and robotic cancer surgery. Trained at AIIMS New Delhi, SGPGI Lucknow, and Seoul National University Bundang Hospital, he is known for evidence-based treatment planning, compassionate care, and high ethical standards. He is also an active academician, researcher, conference faculty member, and contributor to national and international medical publications.",
    expertise: [
      "GI Cancer Surgery",
      "HPB Cancer Surgery",
      "Pancreatic Cancer Surgery",
      "Advanced Laparoscopic Surgery",
      "Robotic GI & HPB Surgery",
      "Evidence-Based Surgical Oncology"
    ],
    availability: "By appointment"
  },
  {
    id: "dr-asit-arora",
    name: "Dr. Asit Arora",
    specialty: "GI & HPB Surgical Oncologist",
    qualification: "M.B.B.S., M.S. in General Surgery, M.Ch. in Gastrointestinal Surgery",
    experience: "20+ years",
    image: "https://drupal-cdn-hfaeddcdbng5hfbg.a01.azurefd.net/sites/default/files/2026-02/dr-asit-arora-updated.jpg",
    bio: "Dr. Asit Arora is a globally recognised GI and HPB Surgical Oncologist and Clinical Lead at Apollo Hospitals, with over two decades of experience treating complex gastrointestinal and hepatobiliary cancers. He has managed thousands of patients with cancers of the liver, pancreas, gallbladder, esophagus, stomach, colon, and rectum, and is known for radical oncologic resections and complex abdominal surgery. A pioneer in robotic-assisted and advanced minimally invasive surgery, he also leads high-volume peritoneal surface malignancy programmes including HIPEC and PIPEC, with specialised expertise in neuroendocrine tumours and rare abdominal cancers. His work strengthens Athenaa's multidisciplinary oncology care through technology-driven, evidence-based, and compassionate treatment.",
    expertise: [
      "Complex GI & HPB Cancer Surgery",
      "Robotic Oncologic Surgery",
      "Advanced Minimally Invasive Surgery",
      "CRS, HIPEC & PIPEC",
      "Neuroendocrine Tumours",
      "Recurrent GI Cancer Management"
    ],
    availability: "Delhi: Mon - Sat, 09:00 - 17:00 | Athenaa: Wed, 09:00 - 11:00 & Sat, 15:00 - 17:00"
  },
  {
    id: "dr-anshul-verma",
    name: "Dr. Anshul Verma (Physiotherapist)",
    specialty: "Physiotherapist, Orthopedic Physiotherapist",
    qualification: "BPTh/BPT, MPTh/MPT - Orthopedic Physiotherapy",
    experience: "16 years overall",
    image: "https://imagesx.practo.com/providers/dr-anshul-verma-physiotherapist-gurgaon-fb9232a5-fc23-4004-b0bd-58d0e7634433.jpg?i_type=t_70x70",
    bio: "Dr. Anshul Verma is an experienced physiotherapist with 16 years of overall practice, including focused expertise in orthopedic physiotherapy. With more than 14 years of work across ortho, cardio, gynae, and general rehabilitation, she is known for evidence-based care, posture correction, and treatment plans designed to restore mobility, reduce pain, and support long-term recovery. Her background includes senior physiotherapy roles in India and international exposure at Shanghai East International Hospital, along with experience in OPD, ICU, ward care, rehabilitation workshops, and home exercise planning through her clinic PhysioEntrust.",
    expertise: [
      "Orthopedic Physiotherapy",
      "Cervical & Back Pain Rehabilitation",
      "Posture Correction",
      "Joint Pain & Arthritis Care",
      "Manual Lymphatic Drainage",
      "Pre and Post-Partum Rehabilitation"
    ],
    availability: "By appointment"
  },
  {
    id: "dr-mehta",
    name: "Dr. Kavita Mehta",
    specialty: "Pancreatic Surgery",
    qualification: "MBBS, MS, MCh (Surgical Oncology)",
    experience: "14+ years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    bio: "Dr. Mehta is a specialist in pancreatic and periampullary cancer surgery with exceptional outcomes.",
    expertise: ["Pancreatic Cancer", "Periampullary Cancer", "Whipple Procedure"],
    availability: "Mon, Wed, Fri: 9 AM - 3 PM"
  },
  {
    id: "dr-singh",
    name: "Dr. Vikram Singh",
    specialty: "Biliary Surgery",
    qualification: "MBBS, MS, FRCS",
    experience: "16+ years",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
    bio: "Dr. Singh has extensive experience in treating gall bladder and biliary cancer with advanced techniques.",
    expertise: ["Gall Bladder Cancer", "Biliary Cancer", "Laparoscopic Surgery"],
    availability: "Tue, Thu, Sat: 9 AM - 5 PM"
  },
  {
    id: "dr-reddy",
    name: "Dr. Anjali Reddy",
    specialty: "Medical Oncology",
    qualification: "MBBS, MD, DM (Medical Oncology)",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=400&fit=crop",
    bio: "Dr. Reddy focuses on comprehensive cancer care including chemotherapy and immunotherapy.",
    expertise: ["Chemotherapy", "Immunotherapy", "Targeted Therapy"],
    availability: "Mon - Fri: 10 AM - 6 PM"
  }
];
