import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg10 from "../images/Goa.jpg";
import tourImg11 from "../images/TajMehal.png";
import tourImg12 from "../images/JaipurCity.png";
import tourImg13 from "../images/Kerala.png";
import tourImg14 from "../images/Rishikesh.png";
import tourImg15 from "../images/LehLadakh.png";
import tourImg16 from "../images/Mysore.png";
import tourImg17 from "../images/Varanasi.png";
import tourImg18 from "../images/Shimla&Manali.png";
import tourImg19 from "../images/Andeman.png";
import tourImg20 from "../images/Darziling.png";
import tourImg21 from "../images/Kashmir.png";

const tours = [
  {
    id: "01",
    title: "Westminster Bridge",
    city: "London",
    distance: 300,
    price: 4000,
    maxGroupSize: 10,
    desc: "Explore the historic Westminster Bridge and its stunning views of London's iconic landmarks.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
      {
        name: "Jane Smith",
        rating: 5,
      },
    ],
    avgRating: 4.8,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali Beaches",
    city: "Bali, Indonesia",
    distance: 400,
    price: 3500,
    maxGroupSize: 8,
    desc: "Relax on Bali's pristine beaches and soak in its vibrant culture.",
    reviews: [
      {
        name: "Alice Johnson",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains",
    city: "Thailand",
    distance: 500,
    price: 3100,
    maxGroupSize: 8,
    desc: "Experience the serene beauty of Thailand's snowy mountain landscapes.",
    reviews: [
      {
        name: "Mark Brown",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise",
    city: "Phuket",
    distance: 500,
    price: 5500,
    maxGroupSize: 8,
    desc: "Witness breathtaking sunrises in Thailand's tranquil surroundings.",
    reviews: [
      {
        name: "Emily Davis",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Penida",
    city: "Bali, Indonesia",
    distance: 500,
    price: 4699,
    maxGroupSize: 8,
    desc: "Discover the hidden gems of Nusa Penida with its crystal-clear waters.",
    reviews: [
      {
        name: "Sophia Wilson",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    price: 5100,
    maxGroupSize: 8,
    desc: "Marvel at Japan's iconic cherry blossoms in full bloom.",
    reviews: [
      {
        name: "Chris Taylor",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    price: 3999,
    maxGroupSize: 8,
    desc: "Explore the picturesque Holmen Lofoten and its charming countryside.",
    reviews: [],
    avgRating: 0,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Luxury Snow Retreat",
    city: "Thailand",
    distance: 500,
    price: 9900,
    maxGroupSize: 8,
    desc: "Indulge in a luxurious retreat amidst Thailand's snowy peaks.",
    reviews: [],
    avgRating: 0,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "09",
    title: "Goa Adventure",
    city: "Goa, India",
    distance: 500,
    price: 4200,
    maxGroupSize: 12,
    desc: "Dive into the vibrant culture and scenic beaches of Goa.",
    reviews: [
      {
        name: "Liam Carter",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg10,
    featured: false,
  },
  {
    id: "10",
    title: "Taj Mahal",
    city: "Agra, India",
    distance: 200,
    price: 5000,
    maxGroupSize: 10,
    desc: "Explore the breathtaking beauty of the Taj Mahal, a symbol of eternal love and one of the Seven Wonders of the World.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
      {
        name: "Jane Smith",
        rating: 5,
      },
    ],
    avgRating: 4.8,
    photo: tourImg11,
    featured: true,
  },
  {
    id: "11",
    title: "Jaipur City Tour",
    city: "Jaipur, India",
    distance: 300,
    price: 3500,
    maxGroupSize: 12,
    desc: "Experience the royal heritage of Jaipur with its magnificent forts, palaces, and vibrant bazaars.",
    reviews: [
      {
        name: "Alice Johnson",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg12,
    featured: true,
  },
  {
    id: "12",
    title: "Kerala Backwaters",
    city: "Alleppey, India",
    distance: 600,
    price: 8000,
    maxGroupSize: 6,
    desc: "Cruise through the serene backwaters of Kerala, surrounded by lush green landscapes and traditional Kerala villages.",
    reviews: [
      {
        name: "Mark Brown",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg13,
    featured: true,
  },
  {
    id: "13",
    title: "Rishikesh Adventure",
    city: "Rishikesh, India",
    distance: 300,
    price: 3500,
    maxGroupSize: 10,
    desc: "Indulge in the adventure activities like white-water rafting and trekking amidst the scenic beauty of the Himalayas.",
    reviews: [
      {
        name: "Emily Davis",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg14,
    featured: true,
  },
  {
    id: "14",
    title: "Leh Ladakh Road Trip",
    city: "Leh, India",
    distance: 1000,
    price: 15000,
    maxGroupSize: 8,
    desc: "Discover the majestic landscapes of Leh-Ladakh, known for its rugged terrain, monasteries, and pristine lakes.",
    reviews: [
      {
        name: "Sophia Wilson",
        rating: 5,
      },
    ],
    avgRating: 5,
    photo: tourImg15,
    featured: true,
  },
  {
    id: "15",
    title: "Mysore Palace",
    city: "Mysore, India",
    distance: 150,
    price: 2000,
    maxGroupSize: 15,
    desc: "Explore the grandeur of Mysore Palace, a stunning example of Indo-Saracenic architecture.",
    reviews: [
      {
        name: "Chris Taylor",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg16,
    featured: false,
  },
  {
    id: "16",
    title: "Varanasi Spiritual Tour",
    city: "Varanasi, India",
    distance: 100,
    price: 3500,
    maxGroupSize: 10,
    desc: "Experience the spirituality of Varanasi, one of the oldest cities in the world, known for its ghats and temples.",
    reviews: [],
    avgRating: 0,
    photo: tourImg17,
    featured: false,
  },
  {
    id: "17",
    title: "Andaman Islands Beach Tour",
    city: "Port Blair, India",
    distance: 1200,
    price: 12000,
    maxGroupSize: 10,
    desc: "Relax on the pristine beaches of the Andaman Islands and explore the rich marine life through snorkelling and diving.",
    reviews: [],
    avgRating: 0,
    photo: tourImg18,
    featured: false,
  },
  {
    id: "18",
    title: "Shimla & Manali",
    city: "Shimla, India",
    distance: 350,
    price: 8000,
    maxGroupSize: 12,
    desc: "Enjoy a peaceful retreat in the hills of Shimla and Manali, famous for their snow-capped peaks and scenic beauty.",
    reviews: [],
    avgRating: 0,
    photo: tourImg19,
    featured: false,
  },
  {
    id: "19",
    title: "Darjeeling Tea Tour",
    city: "Darjeeling, India",
    distance: 500,
    price: 6000,
    maxGroupSize: 10,
    desc: "Explore the lush tea estates of Darjeeling and learn about tea production while enjoying the breathtaking views of the Kanchenjunga.",
    reviews: [],
    avgRating: 0,
    photo: tourImg20,
    featured: false,
  },
  {
    id: "20",
    title: "Kashmir Tour",
    city: "J & K, India",
    distance: 350,
    price: 4000,
    maxGroupSize: 12,
    desc: "If there is ever a heaven on earth, it's here, it's here, it's here",
    reviews: [],
    avgRating: 0,
    photo: tourImg21,
    featured: false,
  },
];

export default tours;
