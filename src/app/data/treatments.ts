export interface TreatmentFAQ {
  question: string;
  answer: string;
}

export interface TreatmentSubcategory {
  id: string;
  name: string;
  summary: string;
  overview: string;
  keyPoints: string[];
  careFocus: string[];
  commonSymptoms?: string[];
  warningSigns?: string[];
  diagnosticWorkup?: string[];
  treatmentApproach?: string[];
  surgeryOptions?: string[];
  supportiveCare?: string[];
  recoveryAndFollowUp?: string[];
  faqs?: TreatmentFAQ[];
  recommendedDoctorIds?: string[];
  doctorRecommendation?: string;
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
    shortDescription:
      "Comprehensive treatment for cancers of the colon and rectum with advanced surgical techniques.",
    fullDescription:
      "Colorectal cancer care at Apollo Athena combines precise staging, expert surgical planning, systemic therapy when needed, and coordinated recovery support. Our team builds treatment plans around tumor location, stage, and the patient's overall health goals.",
    symptoms: [
      "Changes in bowel habits",
      "Blood in stool",
      "Abdominal pain or cramping",
      "Unexplained weight loss",
      "Fatigue and weakness",
    ],
    diagnosis: ["Colonoscopy", "CT Scan", "MRI", "Biopsy", "CEA blood test"],
    treatmentOptions: [
      "Surgical Resection",
      "Laparoscopic Surgery",
      "Robotic Surgery",
      "Chemotherapy",
      "Radiation Therapy",
      "Targeted Therapy",
    ],
    specialists: ["Dr. Nikhil Aggarwal", "Dr. Asit Arora"],
    icon: "GI",
    subcategories: [
      {
        id: "colon-cancer",
        name: "Colon Cancer",
        summary:
          "Tumors arising in the large intestine with treatment planned by stage, spread, and the exact bowel segment involved.",
        overview:
          "Colon cancer usually begins from a polyp that becomes malignant over time. Treatment depends on whether the disease is confined to the bowel wall, has reached lymph nodes, or has spread to organs such as the liver or lungs. Curative treatment commonly starts with oncologic colon resection, where the affected segment of colon and its draining lymph nodes are removed together. Chemotherapy is added in higher-risk or node-positive disease, and selected patients with limited metastases may still be treated with curative intent through carefully sequenced surgery and systemic therapy.",
        keyPoints: [
          "Stage-based surgery remains the main curative treatment for localized disease.",
          "Lymph node assessment is essential because it guides the need for chemotherapy.",
          "Some patients with liver or lung spread may still benefit from multidisciplinary treatment.",
        ],
        careFocus: [
          "Colon resection planning with adequate margins and lymph node clearance",
          "Selection of adjuvant chemotherapy for higher-risk tumors",
          "Structured surveillance with colonoscopy, scans, and tumor marker follow-up",
        ],
        commonSymptoms: [
          "Persistent change in bowel habits",
          "Blood mixed with stool or black stools",
          "Iron deficiency anemia",
          "Abdominal bloating or cramping",
          "Unexplained weight loss or fatigue",
        ],
        warningSigns: [
          "Bowel obstruction with vomiting, severe distension, or inability to pass stool",
          "Ongoing bleeding leading to dizziness or weakness",
          "Rapid weight loss or worsening abdominal pain",
        ],
        diagnosticWorkup: [
          "Colonoscopy with biopsy confirms the diagnosis and site",
          "Contrast CT chest, abdomen, and pelvis helps stage spread",
          "CEA blood test supports baseline assessment and surveillance",
          "Pathology review determines subtype, grade, and mismatch repair status when relevant",
        ],
        treatmentApproach: [
          "Early-stage disease is typically treated with segmental colectomy and lymph node dissection",
          "Stage III and selected high-risk Stage II tumors often need chemotherapy after surgery",
          "Metastatic disease is assessed for resectability, local ablation, or systemic treatment sequencing",
          "Robotic or laparoscopic surgery may be used when oncologically appropriate",
        ],
        surgeryOptions: [
          "Right hemicolectomy, left hemicolectomy, or sigmoid colectomy depending on tumor location",
          "Extended colectomy in selected multifocal or hereditary-risk settings",
          "Combined colon and liver surgery in carefully selected metastatic disease",
        ],
        supportiveCare: [
          "Nutrition optimization before and after bowel surgery",
          "Stoma counselling when diversion is required",
          "Early mobilization and pain control to reduce post-operative complications",
        ],
        recoveryAndFollowUp: [
          "Pathology results usually define whether further chemotherapy is advised",
          "Follow-up commonly includes CEA testing, CT imaging, and interval colonoscopy",
          "Long-term bowel habit changes and nutritional issues are monitored during recovery",
        ],
        faqs: [
          {
            question: "Is colon cancer always treated with chemotherapy?",
            answer:
              "No. Many early-stage tumors are treated with surgery alone. Chemotherapy is mainly recommended when recurrence risk is high or lymph nodes are involved.",
          },
        ],
        recommendedDoctorIds: ["dr-nikhil-aggarwal", "dr-asit-arora"],
        doctorRecommendation:
          "Dr. Nikhil Aggarwal is the lead recommendation for colon cancer surgery because his practice is focused on GI and HPB surgical oncology with strong minimally invasive expertise. Dr. Asit Arora is also highly relevant for complex, recurrent, or multi-organ colorectal disease.",
      },
      {
        id: "rectal-cancer",
        name: "Rectal Cancer",
        summary:
          "Care plans built around tumor distance from the anal canal, pelvic anatomy, and the goal of cancer control with function preservation.",
        overview:
          "Rectal cancer needs more detailed local planning than colon cancer because the rectum sits deep in the pelvis and close to the bladder, nerves, and sphincter muscles. MRI staging is central to deciding whether treatment should begin with chemotherapy, radiation, or total neoadjuvant therapy before surgery. The main surgical objective is complete tumor removal with clear circumferential margins while preserving bowel continuity and continence whenever safely possible.",
        keyPoints: [
          "Pelvic MRI is critical for determining local stage and the safest treatment sequence.",
          "Many tumors are treated with chemotherapy and radiation before surgery to shrink the disease.",
          "Sphincter preservation is pursued when oncologically safe and technically feasible.",
        ],
        careFocus: [
          "Tumor downstaging before surgery",
          "High-precision pelvic surgery and margin clearance",
          "Recovery plans addressing bowel, urinary, and sexual function",
        ],
        commonSymptoms: [
          "Bleeding per rectum",
          "Sense of incomplete evacuation",
          "Change in stool caliber",
          "Pelvic discomfort or rectal pain",
          "Weight loss or fatigue",
        ],
        warningSigns: [
          "Inability to pass stool or gas suggesting obstruction",
          "Severe pelvic pain or bleeding",
          "New urinary symptoms with locally advanced disease",
        ],
        diagnosticWorkup: [
          "Colonoscopy with biopsy confirms the tumor",
          "MRI pelvis defines depth of spread, margin risk, and nodal disease",
          "CT chest and abdomen evaluates distant spread",
          "CEA blood test helps with baseline assessment and surveillance",
        ],
        treatmentApproach: [
          "Early rectal cancers may be treated with surgery first when margin risk is low",
          "Locally advanced tumors often receive total neoadjuvant therapy with chemotherapy and radiation before surgery",
          "Surgery is tailored to tumor height and may involve low anterior resection or abdominoperineal resection",
          "Selected complete responders may enter strict non-operative surveillance in expert pathways",
        ],
        surgeryOptions: [
          "Low anterior resection with total mesorectal excision",
          "Abdominoperineal resection when sphincter preservation is unsafe",
          "Temporary stoma creation to protect a low bowel join in selected patients",
        ],
        supportiveCare: [
          "Prehabilitation before combined therapy and surgery",
          "Stoma education and continence counselling",
          "Radiation-related symptom management and nutritional support",
        ],
        recoveryAndFollowUp: [
          "Recovery includes monitoring bowel frequency, urgency, and low anterior resection syndrome symptoms",
          "MRI, endoscopy, CEA, and CT-based surveillance may be advised depending on stage and treatment path",
          "Long-term follow-up also tracks pelvic function and recurrence risk",
        ],
        recommendedDoctorIds: ["dr-asit-arora", "dr-aditi-aggarwal"],
        doctorRecommendation:
          "Dr. Asit Arora is the strongest surgical recommendation for rectal cancer because of his depth in complex GI cancer surgery and advanced minimally invasive techniques. Dr. Aditi Aggarwal is an important co-recommendation when pelvic radiation is part of the treatment plan.",
      },
      {
        id: "polyps-and-high-risk-lesions",
        name: "Polyps and High-Risk Lesions",
        summary:
          "Evaluation and treatment for advanced polyps and early lesions before invasive disease develops.",
        overview:
          "Not all lesions are invasive cancer. Some patients present with advanced polyps or high-risk dysplasia that still need specialist removal and careful surveillance to prevent future progression.",
        keyPoints: [
          "Early lesion assessment",
          "Endoscopic or surgical removal",
          "Long-term surveillance scheduling",
        ],
        careFocus: ["Risk reduction", "Repeat colonoscopy planning", "Family history review"],
      },
    ],
  },
  {
    id: "esophageal-gastric-cancer",
    name: "Esophageal and Gastric Cancer",
    shortDescription:
      "Expert care for cancers of the esophagus and stomach with cutting-edge treatment protocols.",
    fullDescription:
      "Esophageal and gastric cancer treatment requires careful staging, nutrition support, and coordination between endoscopy, surgery, and medical oncology. Our teams focus on safe treatment sequencing and symptom control from diagnosis onward.",
    symptoms: [
      "Difficulty swallowing",
      "Persistent heartburn",
      "Unintended weight loss",
      "Chest pain or pressure",
      "Nausea and vomiting",
      "Loss of appetite",
    ],
    diagnosis: ["Endoscopy", "Biopsy", "CT Scan", "PET Scan", "Endoscopic Ultrasound"],
    treatmentOptions: [
      "Esophagectomy",
      "Gastrectomy",
      "Endoscopic Mucosal Resection",
      "Chemotherapy",
      "Radiation Therapy",
      "Immunotherapy",
    ],
    specialists: ["Dr. Asit Arora", "Dr. Aditi Aggarwal"],
    icon: "UGI",
    subcategories: [
      {
        id: "esophageal-cancer",
        name: "Esophageal Cancer",
        summary:
          "Treatment for cancers affecting swallowing and upper digestive function, often requiring multimodality care.",
        overview:
          "Esophageal cancer often presents late because early disease may cause very few symptoms. Once swallowing becomes difficult or weight loss begins, careful staging is needed to determine whether the disease is superficial, locally advanced, or metastatic. Treatment may involve endoscopic therapy for very early lesions, chemoradiation before surgery for resectable locally advanced tumors, or systemic therapy and symptom-directed interventions for advanced disease. Nutrition support is a major part of care because patients frequently struggle to maintain intake during treatment.",
        keyPoints: [
          "The treatment sequence depends heavily on stage and exact tumor level.",
          "Many resectable cancers are treated with combined chemotherapy and radiation before surgery.",
          "Maintaining nutrition and swallowing safety is central throughout treatment.",
        ],
        careFocus: [
          "Accurate staging with endoscopy and imaging",
          "Safe sequencing of chemoradiation and surgery",
          "Rehabilitation after major upper GI surgery",
        ],
        commonSymptoms: [
          "Difficulty swallowing solids, then liquids",
          "Painful swallowing",
          "Unexplained weight loss",
          "Persistent reflux or chest discomfort",
          "Food sticking sensation",
        ],
        warningSigns: [
          "Progressive inability to swallow",
          "Dehydration or malnutrition due to poor intake",
          "Bleeding or vomiting blood",
        ],
        diagnosticWorkup: [
          "Upper GI endoscopy with biopsy confirms the cancer",
          "Endoscopic ultrasound helps assess wall depth and nearby nodes when feasible",
          "CT and PET-CT help define local and distant spread",
          "Nutritional and anesthesia assessment prepare the patient for major therapy",
        ],
        treatmentApproach: [
          "Very early lesions may be suitable for endoscopic resection in selected patients",
          "Locally advanced disease often needs neoadjuvant chemoradiation followed by esophagectomy",
          "Some patients are treated with definitive chemoradiation when surgery is not appropriate",
          "Advanced disease is managed with systemic therapy, stenting, feeding support, and symptom control",
        ],
        surgeryOptions: [
          "Minimally invasive or open esophagectomy depending on anatomy and disease extent",
          "Lymph node dissection as part of oncologic resection",
          "Reconstruction using the stomach or other conduit when needed",
        ],
        supportiveCare: [
          "Dietitian-guided calorie and protein planning",
          "Swallowing support and feeding access when necessary",
          "Pulmonary prehabilitation before chest and abdominal surgery",
        ],
        recoveryAndFollowUp: [
          "Follow-up watches for anastomotic narrowing, reflux, nutritional issues, and recurrence",
          "Patients often need smaller frequent meals and structured dietary progression after surgery",
          "Imaging and clinical review continue for long-term recurrence surveillance",
        ],
        recommendedDoctorIds: ["dr-asit-arora", "dr-aditi-aggarwal"],
        doctorRecommendation:
          "Dr. Asit Arora is the best-fit lead surgeon for esophageal cancer because of his extensive experience with complex GI oncologic resections. Dr. Aditi Aggarwal is the right radiation oncology partner when chemoradiation is part of the treatment pathway.",
      },
      {
        id: "stomach-cancer",
        name: "Stomach Cancer",
        summary:
          "Comprehensive stomach cancer care from diagnosis to gastrectomy planning, systemic therapy, and nutritional recovery.",
        overview:
          "Stomach cancer can present with vague symptoms such as fullness, poor appetite, anemia, or weight loss, which is why diagnosis is sometimes delayed. Management depends on the site within the stomach, depth of wall invasion, nodal spread, and whether the disease is localized or metastatic. For many resectable cancers, treatment includes chemotherapy before and after surgery or in a perioperative sequence. Surgery aims for complete tumor removal with adequate margins and formal lymph node dissection, while preserving nutrition and quality of life as much as possible.",
        keyPoints: [
          "Perioperative chemotherapy is common in resectable gastric cancer.",
          "The extent of surgery depends on whether the tumor is proximal, distal, diffuse, or junctional.",
          "Nutritional planning is a major part of recovery after partial or total gastrectomy.",
        ],
        careFocus: [
          "Precise pre-operative staging",
          "Gastrectomy planning with oncologic lymphadenectomy",
          "Dietitian-led long-term recovery support",
        ],
        commonSymptoms: [
          "Loss of appetite or early satiety",
          "Unexplained weight loss",
          "Upper abdominal discomfort",
          "Vomiting or nausea",
          "Anemia or fatigue from occult bleeding",
        ],
        warningSigns: [
          "Persistent vomiting or inability to eat",
          "Bleeding causing black stools or weakness",
          "Rapid decline in nutrition or weight",
        ],
        diagnosticWorkup: [
          "Upper GI endoscopy with multiple biopsies establishes diagnosis",
          "CT scan and often PET-CT evaluate spread",
          "Endoscopic ultrasound may help stage selected tumors",
          "Diagnostic laparoscopy can be useful in locally advanced disease to detect occult spread",
        ],
        treatmentApproach: [
          "Early cancers may be treated with endoscopic resection or surgery depending on depth and pathology",
          "Most resectable locally advanced tumors are treated with perioperative chemotherapy and surgery",
          "Metastatic disease is treated with systemic therapy, biomarker-guided therapy, and symptom control",
          "HER2, MSI, and other molecular markers may influence treatment in advanced disease",
        ],
        surgeryOptions: [
          "Subtotal gastrectomy for distal tumors when adequate margins are possible",
          "Total gastrectomy for proximal, diffuse, or extensive tumors",
          "D2 lymph node dissection in appropriate oncologic surgery",
        ],
        supportiveCare: [
          "Nutrition counselling before and after surgery",
          "Vitamin supplementation and long-term dietary adaptation after gastrectomy",
          "Management of dumping syndrome, reflux, or delayed intake tolerance",
        ],
        recoveryAndFollowUp: [
          "Recovery involves a gradual transition from liquids to small frequent meals",
          "Long-term monitoring may include weight, micronutrient levels, scans, and symptom review",
          "Surveillance intensity depends on pathology, treatment sequence, and recurrence risk",
        ],
        recommendedDoctorIds: ["dr-asit-arora", "dr-shefali-sardana"],
        doctorRecommendation:
          "Dr. Asit Arora is the lead recommendation for stomach cancer because gastric cancer treatment frequently depends on specialist GI cancer surgery. Dr. Shefali Sardana is a good medical oncology match when chemotherapy is central to the treatment sequence.",
      },
      {
        id: "gastrointestinal-stromal-tumour",
        name: "Gastrointestinal Stromal Tumour",
        summary:
          "Specialized care for GIST, a rare soft tissue tumor of the digestive tract managed through surgery and targeted therapy planning.",
        overview:
          "Gastrointestinal stromal tumours, or GISTs, are uncommon tumors that arise from the wall of the digestive tract, most often in the stomach or small intestine. Their behavior ranges from low-risk localized disease to aggressive tumors with spread to the liver or peritoneum. Diagnosis often relies on imaging, endoscopy, biopsy in selected cases, and pathology with immunohistochemistry such as KIT or DOG1 markers. Treatment is different from standard GI adenocarcinomas because many GISTs respond to targeted therapy such as imatinib, and surgery is planned to remove the tumor intact without rupture.",
        keyPoints: [
          "GIST is biologically different from common stomach or bowel cancers.",
          "Targeted therapy can shrink tumors before surgery or control advanced disease.",
          "Avoiding tumor rupture during surgery is a major oncologic principle.",
        ],
        careFocus: [
          "Correct diagnosis with mutation-aware pathology review",
          "Decision-making around neoadjuvant or adjuvant targeted therapy",
          "Long-term imaging surveillance after treatment",
        ],
        commonSymptoms: [
          "Abdominal pain or fullness",
          "Bleeding leading to anemia or black stools",
          "Incidental mass found on scans",
          "Early satiety",
          "Fatigue due to chronic blood loss",
        ],
        warningSigns: ["Acute bleeding", "Rapid abdominal enlargement", "Pain suggesting rupture or obstruction"],
        diagnosticWorkup: [
          "CT scan helps define tumor size, relation to nearby organs, and spread",
          "Endoscopy or endoscopic ultrasound may visualize upper GI lesions",
          "Biopsy is considered when it will change sequencing, especially before targeted therapy",
          "Mutation testing supports treatment planning in advanced or higher-risk disease",
        ],
        treatmentApproach: [
          "Small low-risk tumors may be managed with surgery alone in selected cases",
          "Large or anatomically difficult tumors may receive imatinib first to improve operability",
          "High-risk tumors often need adjuvant targeted therapy after surgery",
          "Metastatic GIST is usually managed with targeted systemic therapy and selected surgery in responders",
        ],
        surgeryOptions: [
          "Wedge or segmental resection when feasible without tumor rupture",
          "Organ-preserving surgery where oncologically appropriate",
          "Selective combined organ resection for locally advanced disease",
        ],
        supportiveCare: [
          "Monitoring tolerance to targeted therapy",
          "Nutrition and anemia management",
          "Serial imaging to assess response and recurrence",
        ],
        recoveryAndFollowUp: [
          "Follow-up is driven by tumor size, mitotic rate, rupture status, and mutation profile",
          "CT-based surveillance is common for several years after treatment",
          "Patients on targeted therapy need monitoring for side effects and disease control",
        ],
        recommendedDoctorIds: ["dr-asit-arora", "dr-shefali-sardana"],
        doctorRecommendation:
          "Dr. Asit Arora is the best surgical recommendation for GIST because these tumors often need experienced GI oncologic resection planning. Dr. Shefali Sardana is relevant when targeted systemic therapy or long-term oncology follow-up is required.",
      },
      {
        id: "junction-tumors",
        name: "GE Junction Tumors",
        summary: "Focused care for tumors at the meeting point of the esophagus and stomach.",
        overview:
          "Gastroesophageal junction tumors sit in a complex area and may follow either esophageal or gastric treatment pathways. Planning depends on the exact location, depth, and nearby spread.",
        keyPoints: ["Location-specific staging", "Combined specialty review", "Tailored surgical access"],
        careFocus: ["Cross-specialty planning", "Multimodal sequencing", "Post-treatment swallowing support"],
      },
    ],
  },
  {
    id: "liver-cancer",
    name: "Liver Cancer and Hepatic Tumors",
    shortDescription:
      "Advanced treatment for liver cancer and hepatic tumors with world-class expertise.",
    fullDescription:
      "Liver cancer management is shaped by liver function, tumor burden, and whether disease is primary or secondary. Apollo Athena combines surgery, liver-directed therapies, systemic treatment, and close multidisciplinary review for complex cases.",
    symptoms: [
      "Upper abdominal pain",
      "Swelling in the abdomen",
      "Jaundice (yellowing of skin and eyes)",
      "Unexplained weight loss",
      "Loss of appetite",
      "Nausea",
    ],
    diagnosis: [
      "CT Scan",
      "MRI",
      "Ultrasound",
      "Liver Biopsy",
      "AFP blood test",
      "Liver Function Tests",
    ],
    treatmentOptions: [
      "Hepatectomy (Liver Resection)",
      "Liver Transplantation",
      "Radiofrequency Ablation",
      "Transarterial Chemoembolization (TACE)",
      "Targeted Therapy",
      "Immunotherapy",
    ],
    specialists: ["Dr. Asit Arora", "Dr. Dipanjan Panda"],
    icon: "LIV",
    subcategories: [
      {
        id: "liver-cancer",
        name: "Liver Cancer",
        summary:
          "Management of primary liver cancer requires balancing tumor control with preservation of liver function.",
        overview:
          "Liver cancer treatment is more complex than simply removing a mass because the background liver may already be damaged by hepatitis, fatty liver disease, or cirrhosis. The most common primary liver cancer is hepatocellular carcinoma, but treatment planning also considers vascular involvement, number of lesions, and whether transplant criteria are met. Curative options include resection, ablation, and transplant in selected patients, while others may need embolization, targeted therapy, immunotherapy, or combination treatment. Decisions are guided by both cancer stage and liver reserve.",
        keyPoints: [
          "Liver function and portal hypertension strongly affect treatment choices.",
          "Some patients are best treated with resection, others with ablation or transplant pathways.",
          "Advanced disease may still benefit from systemic therapy and liver-directed treatment.",
        ],
        careFocus: [
          "Preserving liver reserve while treating the tumor effectively",
          "Determining resectability, transplant eligibility, or ablation suitability",
          "Close imaging-based surveillance after treatment",
        ],
        commonSymptoms: [
          "Right upper abdominal pain or heaviness",
          "Weight loss and poor appetite",
          "Jaundice in advanced disease",
          "Abdominal swelling due to fluid",
          "Fatigue or worsening chronic liver disease symptoms",
        ],
        warningSigns: [
          "Rapid abdominal distension",
          "Jaundice or confusion related to liver failure",
          "Bleeding risk in advanced cirrhosis",
        ],
        diagnosticWorkup: [
          "Triphasic CT or liver MRI characterizes the lesion and vascular anatomy",
          "Liver function tests, clotting profile, and viral hepatitis status guide treatment fitness",
          "AFP may support diagnosis and follow-up in selected patients",
          "Biopsy is not always required when imaging features are classic",
        ],
        treatmentApproach: [
          "Resection is considered when the tumor is removable and the liver can safely tolerate surgery",
          "Ablation may be suitable for smaller lesions in selected patients",
          "TACE, TARE, targeted therapy, and immunotherapy are used in unresectable or advanced disease",
          "Transplant evaluation may be relevant in selected cases with cirrhosis and limited tumor burden",
        ],
        surgeryOptions: [
          "Segmentectomy or major hepatectomy depending on tumor location",
          "Combined vascular planning for anatomically complex tumors",
          "Selected minimally invasive liver surgery in expert hands",
        ],
        supportiveCare: [
          "Management of cirrhosis-related issues such as ascites or nutrition deficits",
          "Monitoring of liver enzymes and clotting after treatment",
          "Coordination with hepatology and medical oncology when needed",
        ],
        recoveryAndFollowUp: [
          "Follow-up relies on serial imaging and liver function monitoring",
          "Recurrence surveillance is especially important because chronic liver disease can lead to new lesions",
          "Long-term recovery also involves preventing liver decompensation",
        ],
        recommendedDoctorIds: ["dr-asit-arora", "dr-dipanjan-panda"],
        doctorRecommendation:
          "Dr. Asit Arora is the best surgical recommendation for liver cancer because of his advanced HPB oncologic experience. Dr. Dipanjan Panda is the strongest medical oncology partner for liver and biliary cancers when systemic therapy is needed.",
      },
      {
        id: "hepatocellular-carcinoma",
        name: "Hepatocellular Carcinoma",
        summary: "Primary liver cancer often linked with chronic liver disease and cirrhosis.",
        overview:
          "Treatment decisions for hepatocellular carcinoma depend on liver reserve, tumor number, vascular involvement, and overall performance status. Plans may include resection, ablation, embolization, or systemic therapy.",
        keyPoints: ["Liver function matters as much as tumor size", "Imaging-led staging", "Multiple local and systemic options"],
        careFocus: ["Tumor control with liver preservation", "Portal hypertension review", "Long-term imaging follow-up"],
      },
      {
        id: "cholangiocarcinoma",
        name: "Cholangiocarcinoma",
        summary: "Bile duct-related liver tumors requiring careful imaging and surgery planning.",
        overview:
          "Cholangiocarcinoma can arise within or near the liver and often needs detailed mapping of bile ducts and vessels. Treatment may include complex surgery, drainage procedures, and systemic therapy.",
        keyPoints: ["Detailed biliary mapping", "Assessment of resectability", "Management of jaundice and obstruction"],
        careFocus: ["Biliary drainage", "Surgical planning", "Coordination with oncology"],
      },
      {
        id: "secondary-liver-tumors",
        name: "Secondary Liver Tumors",
        summary:
          "Management of cancer that has spread to the liver from another primary site.",
        overview:
          "Not all liver tumors start in the liver. Secondary liver lesions are managed according to the original cancer type, number of lesions, and the possibility of surgery or local ablation.",
        keyPoints: ["Primary cancer origin matters", "Local and systemic therapy integration", "Case-by-case resectability review"],
        careFocus: ["Metastatic disease planning", "Combined treatment sequencing", "Ongoing response monitoring"],
      },
    ],
  },
  {
    id: "gallbladder-biliary-cancer",
    name: "Gall Bladder and Biliary Cancer",
    shortDescription:
      "Specialized treatment for cancers affecting the gall bladder and bile ducts.",
    fullDescription:
      "Gall bladder and biliary cancer care depends on disease location, jaundice control, and technical surgical planning. Our team supports patients through diagnosis, drainage if needed, surgery, and systemic treatment pathways.",
    symptoms: [
      "Abdominal pain (right upper quadrant)",
      "Jaundice",
      "Nausea and vomiting",
      "Fever",
      "Unexplained weight loss",
      "Dark urine",
    ],
    diagnosis: [
      "Ultrasound",
      "CT Scan",
      "MRI/MRCP",
      "ERCP",
      "CA 19-9 blood test",
      "Biopsy",
    ],
    treatmentOptions: [
      "Cholecystectomy",
      "Bile Duct Resection",
      "Whipple Procedure",
      "Chemotherapy",
      "Radiation Therapy",
      "Palliative Care",
    ],
    specialists: ["Dr. Nikhil Aggarwal", "Dr. Dipanjan Panda"],
    icon: "GB",
    subcategories: [
      {
        id: "gallbladder-cancer",
        name: "Gallbladder Cancer",
        summary:
          "Treatment for tumors arising in the gallbladder, often discovered during imaging or after gallbladder surgery.",
        overview:
          "Gallbladder cancer may be detected incidentally after a routine cholecystectomy or may present later with pain, jaundice, weight loss, or a liver-adjacent mass. Management depends on depth of invasion, liver involvement, lymph node spread, and whether the disease is localized or advanced. Early incidental cancers may need a second operation to remove part of the liver and regional lymph nodes so that oncologic clearance is not compromised. More advanced disease may require systemic therapy or palliative biliary drainage in addition to symptom control.",
        keyPoints: [
          "Incidental gallbladder cancer after routine surgery needs expert re-staging.",
          "The extent of surgery depends on invasion depth and nearby liver involvement.",
          "Advanced disease often requires combined surgical and medical oncology planning.",
        ],
        careFocus: [
          "Pathology review after gallbladder removal",
          "Liver-adjacent resection planning when required",
          "Jaundice management and staging in advanced disease",
        ],
        commonSymptoms: [
          "Right upper abdominal pain",
          "Jaundice",
          "Loss of appetite or weight loss",
          "Nausea or vomiting",
          "Incidental diagnosis after gallbladder surgery",
        ],
        warningSigns: ["Worsening jaundice", "Fever with biliary obstruction", "Uncontrolled pain or rapid functional decline"],
        diagnosticWorkup: [
          "Contrast CT or MRI helps define liver involvement and nodal disease",
          "MRCP or ERCP may be used when biliary obstruction is present",
          "Histopathology review is essential in incidental cancers",
          "Tumor markers and staging imaging help guide resectability decisions",
        ],
        treatmentApproach: [
          "Very early tumors may be adequately treated by cholecystectomy alone in selected cases",
          "More advanced localized disease often needs radical re-resection with liver wedge or segment resection and nodal dissection",
          "Advanced or metastatic disease is managed with chemotherapy and supportive care",
          "Biliary drainage may be necessary when jaundice affects treatment readiness or symptoms",
        ],
        surgeryOptions: [
          "Radical cholecystectomy",
          "Liver wedge or segment IVb/V resection in appropriate cases",
          "Regional lymph node dissection for staging and clearance",
        ],
        supportiveCare: [
          "Relief of jaundice and cholangitis when present",
          "Nutritional support during recovery or chemotherapy",
          "Pain and symptom management in advanced disease",
        ],
        recoveryAndFollowUp: [
          "Follow-up depends on pathology stage, margin status, and whether further chemotherapy is advised",
          "Imaging and blood tests help detect recurrence after surgery",
          "Patients treated palliatively require ongoing monitoring of stents, liver function, and symptoms",
        ],
        recommendedDoctorIds: ["dr-nikhil-aggarwal", "dr-dipanjan-panda"],
        doctorRecommendation:
          "Dr. Nikhil Aggarwal is the lead recommendation for gallbladder cancer because the disease often requires technically precise GI and HPB cancer surgery. Dr. Dipanjan Panda is the most relevant medical oncology partner for advanced biliary and hepatopancreatobiliary malignancies.",
      },
      {
        id: "gallbladder-polyp",
        name: "Gallbladder Polyp",
        summary:
          "Evaluation of gallbladder polyps focuses on identifying which lesions are benign and which need surgery because of cancer risk.",
        overview:
          "Most gallbladder polyps are benign and may represent cholesterol deposits or inflammatory changes rather than cancer. The key clinical question is whether the polyp has features that increase the risk of malignancy, such as larger size, rapid growth, age-related risk, associated gallstones, or a broad sessile base. Small stable polyps are often followed with ultrasound, while larger or suspicious lesions usually need laparoscopic cholecystectomy. This page is important because early intervention in the right patient can prevent overlooked gallbladder cancer.",
        keyPoints: [
          "Not every gallbladder polyp needs surgery.",
          "Size, growth pattern, symptoms, and imaging features determine risk.",
          "Large or suspicious polyps are often removed before cancer develops.",
        ],
        careFocus: [
          "Risk stratification based on ultrasound findings",
          "Selection between surveillance and surgery",
          "Pathology review after gallbladder removal",
        ],
        commonSymptoms: ["Often no symptoms at all", "Right upper abdominal discomfort", "Symptoms may overlap with gallstones", "Incidental finding on ultrasound"],
        warningSigns: ["Increase in size on serial scans", "Sessile or irregular appearance", "Associated jaundice or suspicious wall thickening"],
        diagnosticWorkup: [
          "Ultrasound is the main initial test and helps measure size and morphology",
          "CT or MRI may be used if the lesion is suspicious or difficult to characterize",
          "Clinical review includes age, symptoms, stone disease, and growth over time",
        ],
        treatmentApproach: [
          "Very small low-risk polyps are usually observed with interval ultrasound",
          "Polyps of concerning size or morphology are generally treated with cholecystectomy",
          "Further treatment is guided by final histopathology if malignancy is unexpectedly found",
        ],
        surgeryOptions: [
          "Laparoscopic cholecystectomy in suitable cases",
          "Further radical surgery only if pathology reveals invasive cancer",
        ],
        supportiveCare: [
          "Clear follow-up plans for surveillance patients",
          "Routine post-cholecystectomy recovery support for surgical patients",
        ],
        recoveryAndFollowUp: [
          "Most patients recover quickly after laparoscopic surgery",
          "If pathology is benign, no major oncology treatment is needed",
          "Unexpected cancer on pathology triggers re-staging and specialist review",
        ],
        recommendedDoctorIds: ["dr-nikhil-aggarwal"],
        doctorRecommendation:
          "Dr. Nikhil Aggarwal is the strongest recommendation for gallbladder polyp management because he can guide both surveillance decisions and timely minimally invasive surgery when a polyp appears high risk.",
      },
      {
        id: "bile-duct-cancer",
        name: "Bile Duct Cancer",
        summary: "Focused care for tumors involving the biliary tree and drainage pathways.",
        overview:
          "Bile duct cancers often require detailed imaging, drainage procedures, and discussion of resectability. Tumor position in the bile ducts strongly influences treatment strategy.",
        keyPoints: ["Location changes the treatment plan", "Drainage may be needed before major treatment", "Cross-specialty planning is essential"],
        careFocus: ["MRCP and ERCP planning", "Relief of obstruction", "Specialist surgery review"],
      },
      {
        id: "benign-biliary-strictures",
        name: "Complex Biliary Strictures",
        summary:
          "Evaluation of difficult non-cancerous biliary narrowing that can mimic tumor disease.",
        overview:
          "Some patients present with biliary strictures that need specialist workup to distinguish benign from malignant disease. Endoscopy, imaging, and repeated assessment may be needed before final treatment decisions.",
        keyPoints: ["Cancer mimic evaluation", "Careful tissue diagnosis", "Drainage and symptom relief"],
        careFocus: ["Diagnostic clarification", "Biliary decompression", "Longitudinal review"],
      },
    ],
  },
  {
    id: "pancreatic-periampullary-cancer",
    name: "Pancreatic and Periampullary Cancer",
    shortDescription:
      "Expert management of pancreatic and periampullary cancers with multidisciplinary approach.",
    fullDescription:
      "Pancreatic and periampullary cancers require timely staging, surgical review, and coordinated medical oncology care. Treatment planning often balances tumor operability, jaundice control, nutritional status, and systemic therapy timing.",
    symptoms: [
      "Jaundice",
      "Abdominal or back pain",
      "Unexplained weight loss",
      "Loss of appetite",
      "New-onset diabetes",
      "Digestive problems",
    ],
    diagnosis: [
      "CT Scan",
      "MRI/MRCP",
      "Endoscopic Ultrasound",
      "ERCP",
      "CA 19-9 blood test",
      "Biopsy",
    ],
    treatmentOptions: [
      "Whipple Procedure (Pancreaticoduodenectomy)",
      "Distal Pancreatectomy",
      "Chemotherapy",
      "Radiation Therapy",
      "Targeted Therapy",
      "Palliative Care",
    ],
    specialists: ["Dr. Nikhil Aggarwal", "Dr. Shefali Sardana"],
    icon: "PAN",
    subcategories: [
      {
        id: "pancreatic-cancer",
        name: "Pancreatic Cancer",
        summary:
          "Pancreatic cancer care requires fast staging, careful resectability review, and coordinated surgery plus oncology planning.",
        overview:
          "Pancreatic cancer is often biologically aggressive and may spread early, which makes timely, high-quality staging essential. Treatment planning usually begins by deciding whether the disease is resectable, borderline resectable, locally advanced, or metastatic. Many patients with resectable or borderline tumors benefit from chemotherapy before surgery to select biology, shrink the disease, and improve the chance of clear margins. Surgery can be curative in selected patients, but recovery, nutrition, enzyme replacement, diabetes care, and ongoing oncology follow-up are equally important.",
        keyPoints: [
          "Resectability is determined by scan findings, especially vessel involvement.",
          "Many patients are treated with chemotherapy before surgery.",
          "Supportive care around jaundice, pain, and nutrition is a major part of management.",
        ],
        careFocus: [
          "Fast diagnosis and surgical candidacy review",
          "Whipple or distal pancreatectomy planning where appropriate",
          "Medical oncology sequencing and supportive symptom control",
        ],
        commonSymptoms: [
          "Jaundice",
          "Upper abdominal pain radiating to the back",
          "Weight loss and poor appetite",
          "New-onset diabetes",
          "Greasy stools or digestive intolerance",
        ],
        warningSigns: [
          "Rapidly worsening jaundice",
          "Severe pain, vomiting, or dehydration",
          "Marked weight loss and declining intake",
        ],
        diagnosticWorkup: [
          "Pancreas-protocol CT scan is the foundation for staging and resectability assessment",
          "MRI or MRCP further evaluates ducts and liver lesions in selected cases",
          "Endoscopic ultrasound with biopsy often confirms diagnosis",
          "CA 19-9 and bilirubin support baseline assessment but are interpreted with caution",
        ],
        treatmentApproach: [
          "Resectable disease may be treated with neoadjuvant chemotherapy or surgery-first depending on case selection",
          "Borderline resectable disease often benefits from pre-operative systemic therapy",
          "Locally advanced or metastatic disease is usually managed with systemic therapy and symptom-directed procedures",
          "Biliary stenting may be required before chemotherapy or surgery in jaundiced patients",
        ],
        surgeryOptions: [
          "Whipple procedure for head or periampullary region tumors",
          "Distal pancreatectomy for body and tail lesions",
          "Vascular resection and reconstruction in selected high-complexity cases",
        ],
        supportiveCare: [
          "Pancreatic enzyme supplementation and diabetes support",
          "Nutrition planning and cachexia prevention",
          "Pain control, biliary drainage, and palliative support when needed",
        ],
        recoveryAndFollowUp: [
          "Post-operative monitoring includes leaks, delayed gastric emptying, glucose changes, and nutrition tolerance",
          "Patients often continue chemotherapy after recovery based on pathology and response",
          "Imaging and CA 19-9 surveillance are used to monitor recurrence or progression",
        ],
        recommendedDoctorIds: ["dr-nikhil-aggarwal", "dr-dipanjan-panda"],
        doctorRecommendation:
          "Dr. Nikhil Aggarwal is the lead recommendation for pancreatic cancer because pancreatic surgery requires a focused GI and HPB surgical oncologist. Dr. Dipanjan Panda is the strongest medical oncology recommendation for pancreatic and HPB cancer systemic treatment.",
      },
      {
        id: "neuroendocrine-tumours",
        name: "Neuroendocrine Tumours",
        summary:
          "Neuroendocrine tumours need individualized treatment because behavior can range from slow-growing disease to aggressive high-grade cancer.",
        overview:
          "Neuroendocrine tumours, or NETs, can arise in the pancreas, small bowel, stomach, rectum, or other parts of the digestive tract. Some grow slowly for years, while others behave aggressively and need intensive treatment. They may produce hormones that cause flushing, diarrhea, low blood sugar, or ulcer symptoms, but many are discovered incidentally on scans. Treatment depends on grade, site of origin, hormone activity, stage, and whether the disease can be removed surgically. Management may include surgery, somatostatin analogues, targeted therapy, peptide receptor-based treatment in selected contexts, liver-directed therapy, or systemic chemotherapy for high-grade disease.",
        keyPoints: [
          "NETs are not all the same; grade and biology strongly affect treatment.",
          "Functional tumors may cause hormone-related symptoms that also need treatment.",
          "Surgery is important for localized disease and selected metastatic cases.",
        ],
        careFocus: [
          "Correct grading and pathology review",
          "Hormone symptom control when functional tumors are present",
          "Long-term multidisciplinary surveillance",
        ],
        commonSymptoms: [
          "Abdominal pain or incidental mass",
          "Flushing or diarrhea in functional tumors",
          "Hypoglycemia with insulin-producing tumors",
          "Ulcer symptoms or recurrent vomiting in gastrinoma-type disease",
          "Weight loss or liver-related symptoms in advanced disease",
        ],
        warningSigns: [
          "Severe hormone-related symptoms",
          "Rapid growth suggesting high-grade disease",
          "Liver involvement causing pain, jaundice, or functional decline",
        ],
        diagnosticWorkup: [
          "Cross-sectional imaging defines tumor burden and spread",
          "Biopsy with grade assessment and Ki-67 index is central to treatment planning",
          "Hormone-related blood tests are used when symptoms suggest a functional tumor",
          "Specialized receptor imaging may be considered depending on the clinical setting",
        ],
        treatmentApproach: [
          "Localized low- or intermediate-grade NETs are often treated surgically",
          "Functional tumors may need hormone control with somatostatin analogues or related therapies",
          "Metastatic disease can be treated with liver-directed procedures, targeted therapy, receptor-based therapy, or chemotherapy depending on grade",
          "High-grade neuroendocrine carcinoma usually follows a more aggressive systemic oncology pathway",
        ],
        surgeryOptions: [
          "Site-specific GI or pancreatic resection for localized disease",
          "Debulking surgery in carefully selected metastatic patients",
          "Liver resection or ablation in selected liver-dominant disease",
        ],
        supportiveCare: ["Hormone symptom management", "Nutrition and diarrhea control", "Serial imaging and biochemical follow-up over many years"],
        recoveryAndFollowUp: [
          "Follow-up is often prolonged because some NETs recur slowly over time",
          "Monitoring includes scans, symptom review, and hormone markers where applicable",
          "Treatment may change over time as tumor grade, burden, or symptoms evolve",
        ],
        recommendedDoctorIds: ["dr-asit-arora", "dr-dipanjan-panda"],
        doctorRecommendation:
          "Dr. Asit Arora is the clearest lead recommendation for neuroendocrine tumours because his profile specifically highlights expertise in these tumors and complex GI oncologic surgery. Dr. Dipanjan Panda is a strong medical oncology partner when systemic therapy becomes necessary.",
      },
      {
        id: "pancreatic-head-tumors",
        name: "Pancreatic Head Tumors",
        summary: "Tumors near the bile duct that commonly cause jaundice and need early staging.",
        overview:
          "Pancreatic head tumors often present with jaundice and may require biliary decompression before definitive therapy. Surgical candidacy, vascular involvement, and nutrition are major planning factors.",
        keyPoints: ["Early jaundice management", "Resectability review", "Whipple planning when appropriate"],
        careFocus: ["Biliary stenting", "Surgical staging", "Neoadjuvant treatment decisions"],
      },
      {
        id: "body-tail-pancreatic-tumors",
        name: "Body and Tail Pancreatic Tumors",
        summary:
          "Tumors in the distal pancreas with different symptom patterns and surgical options.",
        overview:
          "Body and tail pancreatic tumors may present later because jaundice is less common. Management often centers on imaging, metastatic review, and distal pancreatectomy planning when feasible.",
        keyPoints: ["Often less obvious early symptoms", "Distal resection strategy", "Systemic therapy integration"],
        careFocus: ["Imaging-led planning", "Pain and nutrition support", "Surveillance after treatment"],
      },
      {
        id: "periampullary-tumors",
        name: "Periampullary Tumors",
        summary:
          "Tumors around the ampulla where bile and pancreatic ducts meet the intestine.",
        overview:
          "Periampullary tumors can share features with pancreatic and bile duct cancers but may behave differently. Care depends on exact location, pathology, and operability.",
        keyPoints: ["Pathology matters greatly", "Shared symptoms with jaundice", "Specialized surgical review"],
        careFocus: ["Whipple candidacy", "Tissue diagnosis", "Recovery and follow-up"],
      },
    ],
  },
  {
    id: "robotic-surgery",
    name: "Robotic Surgery",
    shortDescription:
      "Advanced robotic-assisted procedures designed for greater precision, smaller incisions, and faster recovery.",
    fullDescription:
      "Robotic surgery combines surgeon expertise with technology that supports precise movement, visibility, and minimally invasive access. It is used selectively, based on the condition, anatomy, and goals of surgery.",
    symptoms: [
      "Tumors needing precise surgical removal",
      "Conditions suitable for minimally invasive surgery",
      "Persistent abdominal pain requiring surgical evaluation",
      "Complex gastrointestinal disorders",
      "Cancer cases needing advanced surgical planning",
    ],
    diagnosis: [
      "Specialist surgical consultation",
      "CT Scan",
      "MRI",
      "Biopsy review",
      "Pre-operative fitness assessment",
    ],
    treatmentOptions: [
      "Robotic-assisted tumor resection",
      "Minimally invasive gastrointestinal surgery",
      "Robotic colorectal procedures",
      "Robotic hepatobiliary procedures",
      "Post-operative recovery planning",
    ],
    specialists: ["Dr. Nikhil Aggarwal", "Dr. Asit Arora"],
    icon: "ROB",
    subcategories: [
      {
        id: "robotic-colorectal",
        name: "Robotic Colorectal Procedures",
        summary:
          "Minimally invasive colorectal operations with enhanced pelvic precision.",
        overview:
          "Robotic colorectal procedures can help in selected colon and rectal surgeries where precision in confined spaces improves dissection and reconstruction planning.",
        keyPoints: ["Useful in selected rectal cases", "Supports minimally invasive recovery", "Requires specialist case selection"],
        careFocus: ["Pelvic precision", "Reduced incision burden", "Post-operative recovery planning"],
      },
      {
        id: "robotic-upper-gi",
        name: "Robotic Upper GI Procedures",
        summary:
          "Robotic support for complex stomach and upper digestive tract operations.",
        overview:
          "Upper GI robotic surgery may be used for carefully selected gastric and junction procedures where fine dissection and controlled reconstruction are needed.",
        keyPoints: ["Selected gastric procedures", "Careful reconstruction planning", "High-detail surgical visualization"],
        careFocus: ["Upper GI resection", "Recovery progression", "Nutrition after surgery"],
      },
      {
        id: "robotic-hepatobiliary",
        name: "Robotic Hepatobiliary Procedures",
        summary:
          "Focused robotic procedures for liver, gallbladder, and biliary conditions in selected cases.",
        overview:
          "Robotic hepatobiliary surgery is used selectively for cases where minimally invasive access can be achieved safely without compromising oncologic goals.",
        keyPoints: ["Strict patient selection", "Advanced operative planning", "Goal of faster recovery where feasible"],
        careFocus: ["Liver and biliary precision", "Safety-first case selection", "Enhanced recovery"],
      },
    ],
  },
];
