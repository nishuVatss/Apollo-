export interface TreatmentSubcategory {
  id: string;
  name: string;
  summary: string;
  overview: string;
  keyPoints: string[];
  careFocus: string[];
}

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
  subcategories: TreatmentSubcategory[];
}

export const treatments: Treatment[] = [
  {
    id: "colorectal-cancer",
    name: "Colorectal Cancer",
    shortDescription: "Comprehensive treatment for cancers of the colon and rectum with advanced surgical techniques.",
    fullDescription: "Colorectal cancer care at Apollo Athena combines precise staging, expert surgical planning, systemic therapy when needed, and coordinated recovery support. Our team builds treatment plans around tumor location, stage, and the patient's overall health goals.",
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
    icon: "🎗️",
    subcategories: [
      {
        id: "colon-cancer",
        name: "Colon Cancer",
        summary: "Tumors arising in the large intestine with treatment planned by stage and spread.",
        overview: "Colon cancer management often centers on surgery, lymph node assessment, and staging-guided decisions about chemotherapy. The care pathway is tailored to tumor size, location, and whether nearby or distant organs are involved.",
        keyPoints: ["Stage-based surgical planning", "Lymph node evaluation", "Structured follow-up after treatment"],
        careFocus: ["Colon resection planning", "Nutrition and recovery support", "Post-treatment surveillance"]
      },
      {
        id: "rectal-cancer",
        name: "Rectal Cancer",
        summary: "Care plans built around tumor distance from the anal canal and pelvic anatomy.",
        overview: "Rectal cancer often requires more detailed local planning than colon cancer. MRI staging, neoadjuvant therapy, and sphincter-preserving techniques may be considered depending on the position and depth of the tumor.",
        keyPoints: ["Pelvic MRI staging", "Combined radiation and chemotherapy planning", "Sphincter preservation when feasible"],
        careFocus: ["Tumor downstaging", "Pelvic surgery strategy", "Recovery and bowel function support"]
      },
      {
        id: "polyps-and-high-risk-lesions",
        name: "Polyps and High-Risk Lesions",
        summary: "Evaluation and treatment for advanced polyps and early lesions before invasive disease develops.",
        overview: "Not all lesions are invasive cancer. Some patients present with advanced polyps or high-risk dysplasia that still need specialist removal and careful surveillance to prevent future progression.",
        keyPoints: ["Early lesion assessment", "Endoscopic or surgical removal", "Long-term surveillance scheduling"],
        careFocus: ["Risk reduction", "Repeat colonoscopy planning", "Family history review"]
      }
    ]
  },
  {
    id: "esophageal-gastric-cancer",
    name: "Esophageal and Gastric Cancer",
    shortDescription: "Expert care for cancers of the esophagus and stomach with cutting-edge treatment protocols.",
    fullDescription: "Esophageal and gastric cancer treatment requires careful staging, nutrition support, and coordination between endoscopy, surgery, and medical oncology. Our teams focus on safe treatment sequencing and symptom control from diagnosis onward.",
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
    icon: "🫀",
    subcategories: [
      {
        id: "esophageal-cancer",
        name: "Esophageal Cancer",
        summary: "Treatment for cancers affecting swallowing and upper digestive function.",
        overview: "Esophageal cancer care often involves endoscopic evaluation, nutritional planning, and combined therapy before surgery in selected cases. Symptom control for swallowing difficulty remains a major part of care.",
        keyPoints: ["Swallowing-focused assessment", "Nutrition support during treatment", "Staged multimodal planning"],
        careFocus: ["Endoscopic staging", "Prehabilitation", "Recovery after esophageal surgery"]
      },
      {
        id: "gastric-cancer",
        name: "Gastric Cancer",
        summary: "Comprehensive stomach cancer care from diagnosis to surgical recovery.",
        overview: "Gastric cancer planning includes endoscopy, biopsy review, imaging, and decisions around partial or total gastrectomy. Supportive care around nutrition and weight maintenance is often essential.",
        keyPoints: ["Detailed staging before surgery", "Nutrition-led recovery planning", "Systemic therapy integration"],
        careFocus: ["Gastrectomy planning", "Dietitian support", "Ongoing surveillance"]
      },
      {
        id: "junction-tumors",
        name: "GE Junction Tumors",
        summary: "Focused care for tumors at the meeting point of the esophagus and stomach.",
        overview: "Gastroesophageal junction tumors sit in a complex area and may follow either esophageal or gastric treatment pathways. Planning depends on the exact location, depth, and nearby spread.",
        keyPoints: ["Location-specific staging", "Combined specialty review", "Tailored surgical access"],
        careFocus: ["Cross-specialty planning", "Multimodal sequencing", "Post-treatment swallowing support"]
      }
    ]
  },
  {
    id: "liver-cancer",
    name: "Liver Cancer and Hepatic Tumors",
    shortDescription: "Advanced treatment for liver cancer and hepatic tumors with world-class expertise.",
    fullDescription: "Liver cancer management is shaped by liver function, tumor burden, and whether disease is primary or secondary. Apollo Athena combines surgery, liver-directed therapies, systemic treatment, and close multidisciplinary review for complex cases.",
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
    icon: "🫁",
    subcategories: [
      {
        id: "hepatocellular-carcinoma",
        name: "Hepatocellular Carcinoma",
        summary: "Primary liver cancer often linked with chronic liver disease and cirrhosis.",
        overview: "Treatment decisions for hepatocellular carcinoma depend on liver reserve, tumor number, vascular involvement, and overall performance status. Plans may include resection, ablation, embolization, or systemic therapy.",
        keyPoints: ["Liver function matters as much as tumor size", "Imaging-led staging", "Multiple local and systemic options"],
        careFocus: ["Tumor control with liver preservation", "Portal hypertension review", "Long-term imaging follow-up"]
      },
      {
        id: "cholangiocarcinoma",
        name: "Cholangiocarcinoma",
        summary: "Bile duct-related liver tumors requiring careful imaging and surgery planning.",
        overview: "Cholangiocarcinoma can arise within or near the liver and often needs detailed mapping of bile ducts and vessels. Treatment may include complex surgery, drainage procedures, and systemic therapy.",
        keyPoints: ["Detailed biliary mapping", "Assessment of resectability", "Management of jaundice and obstruction"],
        careFocus: ["Biliary drainage", "Surgical planning", "Coordination with oncology"]
      },
      {
        id: "secondary-liver-tumors",
        name: "Secondary Liver Tumors",
        summary: "Management of cancer that has spread to the liver from another primary site.",
        overview: "Not all liver tumors start in the liver. Secondary liver lesions are managed according to the original cancer type, number of lesions, and the possibility of surgery or local ablation.",
        keyPoints: ["Primary cancer origin matters", "Local and systemic therapy integration", "Case-by-case resectability review"],
        careFocus: ["Metastatic disease planning", "Combined treatment sequencing", "Ongoing response monitoring"]
      }
    ]
  },
  {
    id: "gallbladder-biliary-cancer",
    name: "Gall Bladder and Biliary Cancer",
    shortDescription: "Specialized treatment for cancers affecting the gall bladder and bile ducts.",
    fullDescription: "Gall bladder and biliary cancer care depends on disease location, jaundice control, and technical surgical planning. Our team supports patients through diagnosis, drainage if needed, surgery, and systemic treatment pathways.",
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
    icon: "💚",
    subcategories: [
      {
        id: "gallbladder-cancer",
        name: "Gallbladder Cancer",
        summary: "Treatment for tumors arising in the gallbladder, often discovered during imaging or surgery.",
        overview: "Gallbladder cancer may be found incidentally or after symptoms such as pain and jaundice. Treatment ranges from extended surgery in localized disease to chemotherapy and supportive care in advanced stages.",
        keyPoints: ["Stage determines surgical extent", "Incidental cancers need careful review", "Jaundice and pain control are important"],
        careFocus: ["Resection planning", "Pathology review", "Recovery and follow-up"]
      },
      {
        id: "bile-duct-cancer",
        name: "Bile Duct Cancer",
        summary: "Focused care for tumors involving the biliary tree and drainage pathways.",
        overview: "Bile duct cancers often require detailed imaging, drainage procedures, and discussion of resectability. Tumor position in the bile ducts strongly influences treatment strategy.",
        keyPoints: ["Location changes the treatment plan", "Drainage may be needed before major treatment", "Cross-specialty planning is essential"],
        careFocus: ["MRCP and ERCP planning", "Relief of obstruction", "Specialist surgery review"]
      },
      {
        id: "benign-biliary-strictures",
        name: "Complex Biliary Strictures",
        summary: "Evaluation of difficult non-cancerous biliary narrowing that can mimic tumor disease.",
        overview: "Some patients present with biliary strictures that need specialist workup to distinguish benign from malignant disease. Endoscopy, imaging, and repeated assessment may be needed before final treatment decisions.",
        keyPoints: ["Cancer mimic evaluation", "Careful tissue diagnosis", "Drainage and symptom relief"],
        careFocus: ["Diagnostic clarification", "Biliary decompression", "Longitudinal review"]
      }
    ]
  },
  {
    id: "pancreatic-periampullary-cancer",
    name: "Pancreatic and Periampullary Cancer",
    shortDescription: "Expert management of pancreatic and periampullary cancers with multidisciplinary approach.",
    fullDescription: "Pancreatic and periampullary cancers require timely staging, surgical review, and coordinated medical oncology care. Treatment planning often balances tumor operability, jaundice control, nutritional status, and systemic therapy timing.",
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
    icon: "🩺",
    subcategories: [
      {
        id: "pancreatic-head-tumors",
        name: "Pancreatic Head Tumors",
        summary: "Tumors near the bile duct that commonly cause jaundice and need early staging.",
        overview: "Pancreatic head tumors often present with jaundice and may require biliary decompression before definitive therapy. Surgical candidacy, vascular involvement, and nutrition are major planning factors.",
        keyPoints: ["Early jaundice management", "Resectability review", "Whipple planning when appropriate"],
        careFocus: ["Biliary stenting", "Surgical staging", "Neoadjuvant treatment decisions"]
      },
      {
        id: "body-tail-pancreatic-tumors",
        name: "Body and Tail Pancreatic Tumors",
        summary: "Tumors in the distal pancreas with different symptom patterns and surgical options.",
        overview: "Body and tail pancreatic tumors may present later because jaundice is less common. Management often centers on imaging, metastatic review, and distal pancreatectomy planning when feasible.",
        keyPoints: ["Often less obvious early symptoms", "Distal resection strategy", "Systemic therapy integration"],
        careFocus: ["Imaging-led planning", "Pain and nutrition support", "Surveillance after treatment"]
      },
      {
        id: "periampullary-tumors",
        name: "Periampullary Tumors",
        summary: "Tumors around the ampulla where bile and pancreatic ducts meet the intestine.",
        overview: "Periampullary tumors can share features with pancreatic and bile duct cancers but may behave differently. Care depends on exact location, pathology, and operability.",
        keyPoints: ["Pathology matters greatly", "Shared symptoms with jaundice", "Specialized surgical review"],
        careFocus: ["Whipple candidacy", "Tissue diagnosis", "Recovery and follow-up"]
      }
    ]
  },
  {
    id: "robotic-surgery",
    name: "Robotic Surgery",
    shortDescription: "Advanced robotic-assisted procedures designed for greater precision, smaller incisions, and faster recovery.",
    fullDescription: "Robotic surgery combines surgeon expertise with technology that supports precise movement, visibility, and minimally invasive access. It is used selectively, based on the condition, anatomy, and goals of surgery.",
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
    icon: "🤖",
    subcategories: [
      {
        id: "robotic-colorectal",
        name: "Robotic Colorectal Procedures",
        summary: "Minimally invasive colorectal operations with enhanced pelvic precision.",
        overview: "Robotic colorectal procedures can help in selected colon and rectal surgeries where precision in confined spaces improves dissection and reconstruction planning.",
        keyPoints: ["Useful in selected rectal cases", "Supports minimally invasive recovery", "Requires specialist case selection"],
        careFocus: ["Pelvic precision", "Reduced incision burden", "Post-operative recovery planning"]
      },
      {
        id: "robotic-upper-gi",
        name: "Robotic Upper GI Procedures",
        summary: "Robotic support for complex stomach and upper digestive tract operations.",
        overview: "Upper GI robotic surgery may be used for carefully selected gastric and junction procedures where fine dissection and controlled reconstruction are needed.",
        keyPoints: ["Selected gastric procedures", "Careful reconstruction planning", "High-detail surgical visualization"],
        careFocus: ["Upper GI resection", "Recovery progression", "Nutrition after surgery"]
      },
      {
        id: "robotic-hepatobiliary",
        name: "Robotic Hepatobiliary Procedures",
        summary: "Focused robotic procedures for liver, gallbladder, and biliary conditions in selected cases.",
        overview: "Robotic hepatobiliary surgery is used selectively for cases where minimally invasive access can be achieved safely without compromising oncologic goals.",
        keyPoints: ["Strict patient selection", "Advanced operative planning", "Goal of faster recovery where feasible"],
        careFocus: ["Liver and biliary precision", "Safety-first case selection", "Enhanced recovery"]
      }
    ]
  }
];
