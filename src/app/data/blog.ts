export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "early-detection-saves-lives",
    title: "Early Detection Saves Lives: The Importance of Cancer Screening",
    excerpt: "Learn why regular cancer screenings are crucial for early detection and successful treatment outcomes.",
    content: "Early detection through regular screening can significantly improve cancer treatment outcomes. At Apollo Athena, we recommend age-appropriate screening protocols for all our patients...",
    author: "Dr. Rajesh Sharma",
    date: "March 15, 2026",
    category: "Prevention",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=400&fit=crop",
    readTime: "5 min read"
  },
  {
    id: "robotic-surgery-advances",
    title: "Advances in Robotic Surgery for Cancer Treatment",
    excerpt: "Discover how robotic surgery is revolutionizing cancer treatment with minimal invasiveness.",
    content: "Robotic surgery represents a significant advancement in surgical oncology, offering precision, minimal invasiveness, and faster recovery times...",
    author: "Dr. Priya Patel",
    date: "March 10, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=400&fit=crop",
    readTime: "7 min read"
  },
  {
    id: "nutrition-during-cancer",
    title: "Nutrition Guidelines for Cancer Patients",
    excerpt: "Expert advice on maintaining proper nutrition during cancer treatment for better outcomes.",
    content: "Proper nutrition plays a vital role in cancer treatment and recovery. Our nutritionists work closely with oncologists to create personalized diet plans...",
    author: "Dr. Anjali Reddy",
    date: "March 5, 2026",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop",
    readTime: "6 min read"
  },
  {
    id: "immunotherapy-breakthrough",
    title: "Immunotherapy: A New Hope in Cancer Treatment",
    excerpt: "Understanding how immunotherapy harnesses your body's immune system to fight cancer.",
    content: "Immunotherapy has emerged as a groundbreaking treatment option for various cancers. By boosting the body's natural defenses, we can achieve remarkable results...",
    author: "Dr. Anil Kumar",
    date: "February 28, 2026",
    category: "Treatment",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop",
    readTime: "8 min read"
  },
  {
    id: "patient-success-story",
    title: "Patient Success Story: Overcoming Pancreatic Cancer",
    excerpt: "Read an inspiring story of hope and recovery from one of our pancreatic cancer survivors.",
    content: "Meet Mrs. Sharma, a pancreatic cancer survivor who underwent successful treatment at Apollo Athena. Her journey of courage and determination...",
    author: "Dr. Kavita Mehta",
    date: "February 20, 2026",
    category: "Patient Stories",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop",
    readTime: "10 min read"
  },
  {
    id: "liver-health-tips",
    title: "10 Tips for Maintaining a Healthy Liver",
    excerpt: "Simple lifestyle changes that can help protect your liver and reduce cancer risk.",
    content: "Your liver is one of the most vital organs in your body. Here are ten evidence-based tips to keep it healthy and functioning optimally...",
    author: "Dr. Vikram Singh",
    date: "February 15, 2026",
    category: "Prevention",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=400&fit=crop",
    readTime: "5 min read"
  }
];
