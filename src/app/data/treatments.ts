export interface Treatment {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  symptoms: string[];
  diagnosis: string[];
  treatmentOptions: string[];
  specialists: string[];
  icon: string;
}

export const treatments: Treatment[] = [
  {
    id: "colorectal-cancer",
    name: "Colorectal Cancer",
    shortDescription: "Comprehensive treatment for cancers of the colon and rectum with advanced surgical techniques.",
    fullDescription: "Colorectal cancer is one of the most common cancers worldwide. At Apollo Athena, we provide state-of-the-art treatment options including minimally invasive surgery, robotic surgery, and comprehensive oncological care. Our multidisciplinary team works together to provide personalized treatment plans for each patient.",
    symptoms: [
      "Changes in bowel habits",
      "Blood in stool",
      "Abdominal pain or cramping",
      "Unexplained weight loss",
      "Fatigue and weakness"
    ],
    diagnosis: [
      "Colonoscopy",
      "CT Scan",
      "MRI",
      "Biopsy",
      "CEA blood test"
    ],
    treatmentOptions: [
      "Surgical Resection",
      "Laparoscopic Surgery",
      "Robotic Surgery",
      "Chemotherapy",
      "Radiation Therapy",
      "Targeted Therapy"
    ],
    specialists: ["Dr. Nikhil Aggarwal", "Dr. Asit Arora"],
    icon: "🎗️"
  },
  {
    id: "esophageal-gastric-cancer",
    name: "Esophageal and Gastric Cancer",
    shortDescription: "Expert care for cancers of the esophagus and stomach with cutting-edge treatment protocols.",
    fullDescription: "Esophageal and gastric cancers require specialized care and treatment. Our team at Apollo Athena offers comprehensive diagnostic services and advanced treatment options including endoscopic procedures, surgery, and systemic therapy. We focus on early detection and personalized treatment plans to achieve the best outcomes.",
    symptoms: [
      "Difficulty swallowing",
      "Persistent heartburn",
      "Unintended weight loss",
      "Chest pain or pressure",
      "Nausea and vomiting",
      "Loss of appetite"
    ],
    diagnosis: [
      "Endoscopy",
      "Biopsy",
      "CT Scan",
      "PET Scan",
      "Endoscopic Ultrasound"
    ],
    treatmentOptions: [
      "Esophagectomy",
      "Gastrectomy",
      "Endoscopic Mucosal Resection",
      "Chemotherapy",
      "Radiation Therapy",
      "Immunotherapy"
    ],
    specialists: ["Dr. Asit Arora", "Dr. Aditi Aggarwal"],
    icon: "🫀"
  },
  {
    id: "liver-cancer",
    name: "Liver Cancer and Hepatic Tumors",
    shortDescription: "Advanced treatment for liver cancer and hepatic tumors with world-class expertise.",
    fullDescription: "Liver cancer and hepatic tumors require sophisticated treatment approaches. Apollo Athena offers comprehensive liver cancer care including liver resection, transplantation, ablation therapies, and systemic treatments. Our hepatobiliary specialists have extensive experience in managing complex liver conditions.",
    symptoms: [
      "Upper abdominal pain",
      "Swelling in the abdomen",
      "Jaundice (yellowing of skin and eyes)",
      "Unexplained weight loss",
      "Loss of appetite",
      "Nausea"
    ],
    diagnosis: [
      "CT Scan",
      "MRI",
      "Ultrasound",
      "Liver Biopsy",
      "AFP blood test",
      "Liver Function Tests"
    ],
    treatmentOptions: [
      "Hepatectomy (Liver Resection)",
      "Liver Transplantation",
      "Radiofrequency Ablation",
      "Transarterial Chemoembolization (TACE)",
      "Targeted Therapy",
      "Immunotherapy"
    ],
    specialists: ["Dr. Asit Arora", "Dr. Dipanjan Panda"],
    icon: "🫁"
  },
  {
    id: "gallbladder-biliary-cancer",
    name: "Gall Bladder and Biliary Cancer",
    shortDescription: "Specialized treatment for cancers affecting the gall bladder and bile ducts.",
    fullDescription: "Gall bladder and biliary cancers are rare but serious conditions that require expert care. At Apollo Athena, we provide comprehensive diagnostic and treatment services including advanced surgical techniques, chemotherapy, and radiation therapy. Our team specializes in complex biliary surgeries with excellent outcomes.",
    symptoms: [
      "Abdominal pain (right upper quadrant)",
      "Jaundice",
      "Nausea and vomiting",
      "Fever",
      "Unexplained weight loss",
      "Dark urine"
    ],
    diagnosis: [
      "Ultrasound",
      "CT Scan",
      "MRI/MRCP",
      "ERCP",
      "CA 19-9 blood test",
      "Biopsy"
    ],
    treatmentOptions: [
      "Cholecystectomy",
      "Bile Duct Resection",
      "Whipple Procedure",
      "Chemotherapy",
      "Radiation Therapy",
      "Palliative Care"
    ],
    specialists: ["Dr. Nikhil Aggarwal", "Dr. Dipanjan Panda"],
    icon: "💚"
  },
  {
    id: "pancreatic-periampullary-cancer",
    name: "Pancreatic and Periampullary Cancer",
    shortDescription: "Expert management of pancreatic and periampullary cancers with multidisciplinary approach.",
    fullDescription: "Pancreatic and periampullary cancers are among the most challenging cancers to treat. Apollo Athena offers cutting-edge diagnostic and treatment options including the Whipple procedure, chemotherapy, radiation therapy, and supportive care. Our multidisciplinary team ensures comprehensive care throughout the treatment journey.",
    symptoms: [
      "Jaundice",
      "Abdominal or back pain",
      "Unexplained weight loss",
      "Loss of appetite",
      "New-onset diabetes",
      "Digestive problems"
    ],
    diagnosis: [
      "CT Scan",
      "MRI/MRCP",
      "Endoscopic Ultrasound",
      "ERCP",
      "CA 19-9 blood test",
      "Biopsy"
    ],
    treatmentOptions: [
      "Whipple Procedure (Pancreaticoduodenectomy)",
      "Distal Pancreatectomy",
      "Chemotherapy",
      "Radiation Therapy",
      "Targeted Therapy",
      "Palliative Care"
    ],
    specialists: ["Dr. Nikhil Aggarwal", "Dr. Shefali Sardana"],
    icon: "🩺"
  },
  {
    id: "robotic-surgery",
    name: "Robotic Surgery",
    shortDescription: "Advanced robotic-assisted procedures designed for greater precision, smaller incisions, and faster recovery.",
    fullDescription: "Robotic surgery at Apollo Athena combines surgical expertise with advanced robotic technology to perform complex procedures with enhanced precision and control. This approach can support smaller incisions, reduced blood loss, shorter hospital stays, and a smoother recovery for eligible patients across gastrointestinal and oncologic care pathways.",
    symptoms: [
      "Tumors needing precise surgical removal",
      "Conditions suitable for minimally invasive surgery",
      "Persistent abdominal pain requiring surgical evaluation",
      "Complex gastrointestinal disorders",
      "Cancer cases needing advanced surgical planning"
    ],
    diagnosis: [
      "Specialist surgical consultation",
      "CT Scan",
      "MRI",
      "Biopsy review",
      "Pre-operative fitness assessment"
    ],
    treatmentOptions: [
      "Robotic-assisted tumor resection",
      "Minimally invasive gastrointestinal surgery",
      "Robotic colorectal procedures",
      "Robotic hepatobiliary procedures",
      "Post-operative recovery planning"
    ],
    specialists: ["Dr. Nikhil Aggarwal", "Dr. Asit Arora"],
    icon: "🤖"
  }
];
