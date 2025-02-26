import Image1 from "../assets/images/Image1.jpg";
import Image2 from "../assets/images/Image2.jpg";
import Image3 from "../assets/images/MOP.jpg";
import Bshp from "../assets/images/Bshp.jpg";
import album from "../assets/images/Image1.jpg"
import LoveBasketImage from "../assets/images/lovebasket.jpg";
import Audio1 from "/music/amenitafuta.mp3"
import Audio2 from "/music/kaaNami.mp3"
import Audio3 from "/music/Song_of_consolottion.mp3"
import Audio4 from "/music/Finger of God - Dunsin Oyekan.mp3"


const audioFiles = [
  {
    audioUrl: Audio1,
    id: 1,
    description: "John CW",
    date: "Aug 20, 2023",
    duration: "06:44",
    name: "Amenitafuta Official Video By John CW",
    image: album
  },
  {
    audioUrl: Audio2,
    id: 2,
    description: "Angela Chibalonza",
    date: "Aug 20, 2023",
    duration: "05:01",
    name: "Angela Chibalonza - Kaa Nami (Official Video)",
    image: album
  },
  {
    audioUrl: Audio3,
    id: 3,
    description: "Apostle Arome",
    date: "Aug 20, 2023",
    duration: "06:55",
    name: "Apostle Arome Osayi - Song Of Consolation( We Wait)",
    image: album
  },
  {
    audioUrl: Audio4,
    id: 4,
    description: "Dunsin Oyekan",
    date: "Aug 20, 2023",
    duration: "10:31",
    name: "Finger of God - Dunsin Oyekan",
    image: album
  },
  {
    audioUrl: "https://www.dropbox.com/scl/fi/2jqckdrbnq60hr8mq3std/Natamani-Kutembea-Nawe-Teacher-John-CW.mp3?rlkey=1eepmp9jz6wc155inir5hfhl2&st=c3qqlpmk&raw=1",
    id: 5,
    description: "John CW",
    date: "Aug 20, 2023",
    duration: "62:04",
    name: "Kutembea nawe",
    image: album
  },
  {
    audioUrl: "https://www.dropbox.com/scl/fi/r9zhcks1aarqi2551orey/MACHO-YANGU-YAMEKUONA-YESU-KRISTO-MILELE-MY-EYES-HAVE-SEEN-YOU-FOREVER-NEW-SOUND-BY-TR.JOHN-CW.mp3?rlkey=kg5ub13tv174af3rlx4g2h84b&st=wytcbt2n&raw=1",
    id: 6,
    description: "John CW",
    date: "Aug 20, 2023",
    duration: "04:22",
    name: "Macho Yangu Yamekuona",
    image: album
  },
  {
    audioUrl: "https://www.dropbox.com/scl/fi/sn1am1jf7k9x834fjhu3t/NIKUJUE-KABISA-THAT-I-MAY-KNOW-YOU-INDEED-A-NEW-SONG-BY-TR.-JOHN-CW.mp3?rlkey=5ip6q4xxw6u4dx073mfx1r2d9&st=m8r234j4&raw=1",
    id: 7,
    description: "Dunsin Oyekan",
    date: "Aug 20, 2023",
    duration: "14:45",
    name: "Nikujue Kabisa",
    image: album
  },
]

const images = [
  {
    url: Image1,
    title: "STLC",
    description: "Welcome to Share The Love Center (STLC)",
    button: "Learn More",
    date: "2023-10-15",
  },
  {
    url: Image2,
    title: "Spirit TV",
    description: "Home to Spirit TV",
    button: "Watch Live",
    date: "2023-10-16",
  },
  {
    url: "https://wolap.co.ke/wp-content/uploads/2023/07/ministry.jpg",
    title: "Wolap",
    description: "Home to Women of Love and Prayer (WOLAP)",
    button: "Learn More",
    date: "2023-10-17",
  },
  {
    url: Image3,
    title: "Men of the presence",
    description: "Home to Men of The Presence (MOP)",
    button: "Learn More",
    date: "2023-10-18",
  },
];

const cardDetails = [
  {
    title: "Bishop's Itenerary",
    imageUrl: Bshp,
    description: "Know where the MOG is",
    link: "/itinerary",
    detail:
      "Gather my saints together unto me; those that have made a covenant with me by sacrifice. And the heavens shall declare his righteousness: for God is judge himself.",
  },
  {
    title: "WOLAP and MOP",
    imageUrl: "https://wolap.co.ke/wp-content/uploads/2023/05/PURSUITAILA-17-1024x578.jpg",
    description: "Women of Love and Prayer & Men of Prayer",
    link: "wolap&mop",
    detail:
      "Women of Love and Prayer (WOLAP) and Men of Prayer (MOP) are powerful ministries dedicated to fostering deep spiritual growth through prayer and fellowship. Be a part of the next gathering and experience a spiritual revival.",
  },
  {
    title: "Youth and Children Department",
    imageUrl: Bshp,
    description: "Empowering the next generation for Christ",
    link: "departments",
    detail:
      "The Youth and Children Department focuses on nurturing and guiding young minds in the teachings of Christ. Our mission is to cultivate strong Christian values and leadership in the next generation.",
  },
];

const projectDetails = [
  {
    title: "Love Basket Foundation",
    imageUrl: LoveBasketImage,
    description: "Helping hands, changing lives",
    link: "/love-basket",
    detail:
      "Providing food, clothing, education, and emotional support to the less fortunate, ensuring no one in the community is left behind.",
  },
  {
    title: "Shosh's Housing Project",
    imageUrl: LoveBasketImage,
    description: "Building homes for the elderly",
    link: "/shosh-housing",
    detail:
      "A project dedicated to building safe and comfortable homes for senior citizens, ensuring they live with dignity and peace.",
  },
  {
    title: "Comrades Comeback Initiative",
    imageUrl: LoveBasketImage,
    description: "Empowering youth, restoring hope",
    link: "/comrades-comeback",
    detail:
      "An initiative that focuses on empowering young people who have faced challenges, helping them return to school and build their futures.",
  },
  {
    title: "Local Development Projects",
    imageUrl: LoveBasketImage,
    description: "Growing our communities, together",
    link: "/local-development",
    detail:
      "Supporting local infrastructure, business development, and skills training to uplift communities and create sustainable growth.",
  },
  {
    title: "Educational Sponsorship",
    imageUrl: LoveBasketImage,
    description: "Unlocking education potential",
    link: "/education-sponsorship",
    detail:
      "Providing financial support and mentorship for underprivileged students, ensuring they have access to quality education and brighter futures.",
  },
  {
    title: "Clean Water Initiative",
    imageUrl: LoveBasketImage,
    description: "Bringing clean water to communities",
    link: "/clean-water",
    detail:
      "A project that focuses on building clean water infrastructure in rural areas, ensuring every household has access to safe drinking water.",
  },
];

const departments = [
  {
    title: "Ushering Department",
    imageUrl: Bshp,
    description: "Welcoming and guiding our congregation",
    link: "/ushering",
    detail:
      "The Ushering Department plays a crucial role in creating a welcoming atmosphere for church services. They assist with seating, manage service flow, and provide support to ensure a smooth and organized worship experience.",
  },
  {
    title: "Protocol Department",
    imageUrl: Bshp,
    description: "Maintaining order and respect during services",
    link: "/protocol",
    detail:
      "The Protocol Department is responsible for maintaining order and decorum during church services and events. They handle the scheduling of VIPs, manage ceremonial aspects, and ensure that all protocols are followed with respect and professionalism.",
  },
  {
    title: "Hospitality Department",
    imageUrl: Bshp,
    description: "Creating a warm and inviting environment",
    link: "/hospitality",
    detail:
      "Focused on making every visitor feel welcome, the Hospitality Department provides refreshments, manages guest services, and organizes social gatherings to foster a sense of community and belonging within the church.",
  },
  {
    title: "Media Department",
    imageUrl: Bshp,
    description: "Capturing and sharing our message",
    link: "/media",
    detail:
      "The Media Department is dedicated to capturing and broadcasting church services and events. They manage audio-visual equipment, handle social media updates, and ensure that the church's message reaches both in-person and online audiences effectively.",
  },
  {
    title: "Praise and Worship Department",
    imageUrl: Bshp,
    description: "Leading our congregation in worship",
    link: "/praise-worship",
    detail:
      "This department leads the congregation in praise and worship through music and singing. They organize rehearsals, plan worship sets, and strive to create an atmosphere where the congregation can connect deeply with their faith.",
  },
];
const albums = [
  {
    id: 1,
    image: album,
    name: "Morning Worship: Praise and Joy",
    speaker: "Pastor John Smith",
    description: "A morning worship service filled with uplifting praise and joy.",
    category: "Worship",
  },
  {
    id: 2,
    image: album,
    name: "Evening Worship: Songs of Renewal",
    speaker: "Pastor John Smith",
    description: "An evening service celebrating renewal through powerful songs.",
    category: "Worship",
  },
  {
    id: 3,
    image: album,
    name: "Sermon: Walking in Faith",
    speaker: "Rev. Sarah Johnson",
    description: "A powerful sermon focusing on the importance of living by faith.",
    category: "Sermon",
  },
  {
    id: 4,
    image: album,
    name: "Podcast: Conversations on Faith",
    speaker: "Bishop Michael Lee",
    description: "Engaging discussions on faith and its relevance in modern life.",
    category: "Podcast",
  },
  {
    id: 5,
    image: album,
    name: "Live Worship: Gathering of Hearts",
    speaker: "Worship Leader Anna Marie",
    description: "A live session filled with worship, teaching, and community spirit.",
    category: "Live Worship",
  },
  {
    id: 6,
    image: album,
    name: "Sermon Series: The Road to Redemption",
    speaker: "Rev. Sarah Johnson",
    description: "Explore the journey of redemption and its impact on our lives.",
    category: "Sermon",
  },
  {
    id: 7,
    image: album,
    name: "Worship Moments Reels",
    speaker: "Worship Team",
    description: "Short, impactful reels sharing moments of worship and inspiration.",
    category: "Reels",
  },
];

const albumsData = [
  {
    bgColor: '#FF5733',  // Bright Orange
    desc: 'A heartfelt collection of worship songs that uplift and inspire faith.',
    id: 1,
    image: album,
    name: 'Worship Essentials',
  },
  {
    bgColor: '#33A1FF',  // Bright Blue
    desc: 'A compilation of powerful sermons to deepen your understanding of faith.',
    id: 2,
    image: album,
    name: 'Faith Foundations',
  },
  {
    bgColor: '#28B463',  // Vibrant Green
    desc: 'Engaging podcasts featuring meaningful discussions about faith and life.',
    id: 3,
    image: album,
    name: 'Faith Talks Podcast',
  },
  {
    bgColor: '#8E44AD',  // Rich Purple
    desc: 'Live worship gatherings filled with community and spiritual engagement.',
    id: 4,
    image: album,
    name: 'Live Worship Gatherings',
  },
  {
    bgColor: '#FF33A8',  // Hot Pink
    desc: 'Impactful reels showcasing moments of worship and inspiration.',
    id: 5,
    image: album,
    name: 'Worship Moments Reels',
  },
  {
    bgColor: '#FFC300',  // Vibrant Yellow
    desc: 'A series of uplifting worship sessions designed for spiritual rejuvenation.',
    id: 6,
    image: album,
    name: 'Worship Retreat Highlights',
  },
  {
    bgColor: '#34495E',
    desc: 'Deep dives into the power of prayer through our latest sermons.',
    id: 7,
    image: album,
    name: 'Sermon Series: The Power of Prayer',
  }
];



export { images, cardDetails, projectDetails, departments, audioFiles, albums, albumsData };
