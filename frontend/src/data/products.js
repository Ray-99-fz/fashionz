export const products = [
  // =========================
  // MENS
  // =========================
  {
    id: 1,
    category: "mens",
    name: "Oversized Linen Shirt",
    brand: "MODA",
    price: 45,
    oldPrice: 60,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    rating: 4.8,
    reviews: 124,
    stock: 18,
    featured: true,
    colors: [
             { 
              id:1,
              name:"White", 
              bgColor:'bg-white'
            }, 
            {
              id:2,
              name:"Black", 
              bgColor:'bg-black'
            }, 
            { 
               id:3,
               name:"Beige", 
               bgColor:'bg-stone-500'
            }
          ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Premium breathable linen shirt designed for modern everyday wear.",
  },

  {
    id: 2,
    category: "mens",
    name: "Tailored Cargo Pants",
    brand: "MODA",
    price: 55,
    oldPrice: 75,
    image:
      "https://i.pinimg.com/736x/99/01/83/990183c802d4dc202d33c63df7e3a3ac.jpg",
    rating: 4.6,
    reviews: 88,
    stock: 12,
    featured: false,
    colors: [
             { 
              id:1,
              name:"Olive", 
              bgColor:'bg-white'
            }, 
            {
              id:2,
              name:"Black", 
              bgColor:'bg-black'
            },  
          ],
    sizes: ["30", "32", "34", "36"],
    description:
      "Relaxed tailored cargo pants combining utility and luxury streetwear.",
  },

  {
    id: 3,
    category: "mens",
    name: "Classic Denim Jacket",
    brand: "MODA",
    price: 70,
    oldPrice: 90,
    image:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1200&auto=format&fit=crop",
    rating: 4.9,
    reviews: 203,
    stock: 10,
    featured: true,
    colors: [
             { 
              id:1,
              name:"Blue", 
              bgColor:'bg-blue-600'
            }, 
          ],
    sizes: ["M", "L", "XL"],
    description:
      "A timeless denim jacket crafted with durable premium cotton.",
  },

  {
    id: 4,
    category: "mens",
    name: "Urban Fit Hoodie",
    brand: "MODA",
    price: 50,
    oldPrice: 65,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop",
    rating: 4.7,
    reviews: 150,
    stock: 25,
    featured: false,
    colors: [
             { 
              id:1,
              name:"Gray", 
              bgColor:'bg-gray-500'
            }, 
            {
              id:2,
              name:"Black", 
              bgColor:'bg-black'
            }, 
          ],
    sizes: ["S", "M", "L"],
    description:
      "Heavyweight premium hoodie with minimalist branding.",
  },

  {
    id: 5,
    category: "mens",
    name: "Slim Fit Trousers",
    brand: "MODA",
    price: 58,
    oldPrice: 72,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    rating: 4.5,
    reviews: 67,
    stock: 20,
    featured: false,
    colors: [ 
            {
              id:1,
              name:"Black", 
              bgColor:'bg-black'
            }, 
            { 
               id:2,
               name:"Charcoal", 
               bgColor:'bg-gray-900'
            }
          ],
    sizes: ["30", "32", "34"],
    description:
      "Versatile smart-casual trousers for office and lifestyle wear.",
  },

  {
    id: 6,
    category: "mens",
    name: "Luxury Knit Sweater",
    brand: "MODA",
    price: 64,
    oldPrice: 80,
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop",
    rating: 4.9,
    reviews: 112,
    stock: 14,
    featured: true,
    colors: [
             { 
              id:1,
              name:"Cream", 
              bgColor:'bg-yellow-100'
            }, 
            {
              id:2,
              name:"Brown", 
              bgColor:'bg-amber-900'
            }, 
          ],
    sizes: ["M", "L", "XL"],
    description:
      "Soft textured knit sweater with premium comfort fit.",
  },

  {
    id: 7,
    category: "mens",
    name: "Streetwear Bomber Jacket",
    brand: "MODA",
    price: 90,
    oldPrice: 120,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    rating: 4.8,
    reviews: 175,
    stock: 9,
    featured: true,
    colors: [
            {
              id:1,
              name:"Black", 
              bgColor:'bg-black'
            }, 
            { 
               id:2,
               name:"Navy", 
               bgColor:'bg-blue-800'
            }
          ],
    sizes: ["M", "L"],
    description:
      "Contemporary bomber jacket inspired by luxury street fashion.",
  },

  {
    id: 8,
    category: "mens",
    name: "Minimal Graphic Tee",
    brand: "MODA",
    price: 28,
    oldPrice: 40,
    image:
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=1200&auto=format&fit=crop",
    rating: 4.4,
    reviews: 95,
    stock: 40,
    featured: false,
    colors: [
             { 
              id:1,
              name:"White", 
              bgColor:'bg-white'
            }, 
            {
              id:2,
              name:"Black", 
              bgColor:'bg-black'
            }, 
          ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Soft cotton t-shirt with subtle contemporary graphic print.",
  },

  {
    id: 9,
    category: "mens",
    name: "Premium Polo Shirt",
    brand: "MODA",
    price: 42,
    oldPrice: 55,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    rating: 4.7,
    reviews: 104,
    stock: 22,
    featured: false,
    colors: [
             { 
              id:1,
              name:"White", 
              bgColor:'bg-white'
            }, 
            {
              id:2,
              name:"Navy", 
              bgColor:'bg-blue-900'
            }, 
          ],
    sizes: ["M", "L", "XL"],
    description:
      "Modern slim-fit polo shirt for elevated everyday dressing.",
  },

  {
    id: 10,
    category: "mens",
    name: "Relaxed Fit Shorts",
    brand: "MODA",
    price: 35,
    oldPrice: 48,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    rating: 4.5,
    reviews: 54,
    stock: 30,
    featured: false,
    colors: [
             { 
              id:1,
              name:"Khaki", 
              bgColor:'bg-orange-200'
            }, 
            {
              id:2,
              name:"Black", 
              bgColor:'bg-black'
            }, 
          ],
    sizes: ["S", "M", "L"],
    description:
      "Comfort-focused relaxed shorts with premium tailoring finish.",
  },

  // =========================
  // WOMENS
  // =========================

  {
    id: 11,
    category: "womens",
    name: "Elegant Satin Dress",
    brand: "MODA",
    price: 78,
    oldPrice: 95,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    rating: 4.9,
    reviews: 214,
    stock: 8,
    featured: true,
    colors: [
             { 
              id:1,
              name:"champagne", 
              bgColor:'bg-red-950'
            }, 
            {
              id:2,
              name:"Black", 
              bgColor:'bg-black'
            }, 
          ],
    sizes: ["S", "M", "L"],
    description:
      "Flowing satin dress crafted for sophisticated evening occasions.",
  },

  {
    id: 12,
    category: "womens",
    name: "Minimal Blazer Set",
    brand: "MODA",
    price: 110,
    oldPrice: 140,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    rating: 4.8,
    reviews: 133,
    stock: 7,
    featured: true,
    colors: [
             { 
              id:1,
              name:"White", 
              bgColor:'bg-white'
            }, 
            {
              id:2,
              name:"Biege", 
              bgColor:'bg-gray-800'
            }, 
          ],
    sizes: ["S", "M", "L"],
    description:
      "Modern power-dressing blazer set with tailored silhouette.",
  },

  {
    id: 13,
    category: "womens",
    name: "Luxury Knit Cardigan",
    brand: "MODA",
    price: 68,
    oldPrice: 84,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    rating: 4.7,
    reviews: 96,
    stock: 15,
    featured: false,
    colors: [
             { 
              id:1,
              name:"Cream", 
              bgColor:'bg-zinc-100'
            }, 
            {
              id:2,
              name:"Gray", 
              bgColor:'bg-gray-500'
            }, 
          ],
    sizes: ["S", "M", "L"],
    description:
      "Soft oversized cardigan designed for comfort and elegance.",
  },

  {
    id: 14,
    category: "womens",
    name: "Wide Leg Trousers",
    brand: "MODA",
    price: 60,
    oldPrice: 78,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    rating: 4.6,
    reviews: 85,
    stock: 18,
    featured: false,
       colors: [
            {
              id:1,
              name:"Black", 
              bgColor:'bg-black'
            }, 
            { 
               id:2,
               name:"Camel", 
               bgColor:'bg-red-950'
            }
          ],
    sizes: ["S", "M", "L"],
    description:
      "Elegant high-waisted trousers with relaxed luxury silhouette.",
  },

  {
    id: 15,
    category: "womens",
    name: "Classic White Blouse",
    brand: "MODA",
    price: 44,
    oldPrice: 56,
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop",
    rating: 4.8,
    reviews: 124,
    stock: 20,
    featured: true,
       colors: [
             { 
              id:1,
              name:"White", 
              bgColor:'bg-white'
            }, 
          ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Timeless white blouse for smart casual and office styling.",
  },

  {
    id: 16,
    category: "womens",
    name: "Ribbed Bodycon Dress",
    brand: "MODA",
    price: 52,
    oldPrice: 70,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    rating: 4.7,
    reviews: 102,
    stock: 16,
    featured: false,
       colors: [
            {
              id:1,
              name:"Black", 
              bgColor:'bg-black'
            }, 
            { 
               id:2,
               name:"Brown", 
               bgColor:'bg-gray-700'
            }
          ],
    sizes: ["S", "M", "L"],
    description:
      "Stretch-fit bodycon dress with elevated modern styling.",
  },

  {
    id: 17,
    category: "womens",
    name: "Oversized Denim Jacket",
    brand: "MODA",
    price: 82,
    oldPrice: 99,
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1200&auto=format&fit=crop",
    rating: 4.9,
    reviews: 187,
    stock: 10,
    featured: true,
    colors: [
            {
              id:2,
              name:"Blue", 
              bgColor:'bg-blue-600'
            }, 
          ],
    sizes: ["M", "L"],
    description:
      "Vintage-inspired oversized denim jacket with premium wash.",
  },

  {
    id: 18,
    category: "womens",
    name: "Soft Lounge Set",
    brand: "MODA",
    price: 74,
    oldPrice: 92,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    rating: 4.8,
    reviews: 111,
    stock: 14,
    featured: false,
    colors: [
             { 
              id:1,
              name:"Stone", 
              bgColor:'bg-stone-500'
            }, 
            {
              id:2,
              name:"Bray", 
              bgColor:'bg-gray-500'
            }, 
          ],
    sizes: ["S", "M", "L"],
    description:
      "Premium lounge set combining comfort and modern aesthetics.",
  },

  {
    id: 19,
    category: "womens",
    name: "Pleated Midi Skirt",
    brand: "MODA",
    price: 48,
    oldPrice: 64,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    rating: 4.5,
    reviews: 79,
    stock: 19,
    featured: false,
    colors: [
            {
              id:1,
              name:"Black", 
              bgColor:'bg-black'
            }, 
            { 
               id:2,
               name:"Cream", 
               bgColor:'bg-red-50'
            }
          ],
    sizes: ["S", "M", "L"],
    description:
      "Elegant pleated midi skirt with fluid movement and structure.",
  },

  {
    id: 20,
    category: "womens",
    name: "Modern Crop Jacket",
    brand: "MODA",
    price: 88,
    oldPrice: 110,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    rating: 4.7,
    reviews: 120,
    stock: 11,
    featured: true,
    colors: [
             {
              id:1,
              name:"Black", 
              bgColor:'bg-black'
            },
             { 
              id:2,
              name:"White", 
              bgColor:'bg-white'
            }, 
             
          ],
    sizes: ["S", "M", "L"],
    description:
      "Structured cropped jacket designed for elevated streetwear looks.",
  },

  // =========================
  // ACCESSORIES
  // =========================

  {
    id: 21,
    category: "accessories",
    name: "Luxury Leather Tote",
    brand: "MODA",
    price: 120,
    oldPrice: 150,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    rating: 4.9,
    reviews: 230,
    stock: 9,
    featured: true,
    colors: [
             {
              id:1,
              name:"Black", 
              bgColor:'bg-black'
            },
             { 
              id:2,
              name:"Brown", 
              bgColor:'bg-amber-950'
            }, 
             
          ],
    description:
      "Premium genuine leather tote designed for modern professionals.",
  },

  {
    id: 22,
    category: "accessories",
    name: "Minimalist Wrist Watch",
    brand: "MODA",
    price: 95,
    oldPrice: 120,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
    rating: 4.8,
    reviews: 180,
    stock: 14,
    featured: true,
     colors: [
              { 
              id:1,
              name:"Silver", 
              bgColor:'bg-zinc-400'
            }, 
             {
              id:2,
              name:"Black", 
              bgColor:'bg-black'
            },
             
          ],
    description:
      "Elegant stainless steel wrist watch with minimalist design.",
  },

  {
    id: 23,
    category: "accessories",
    name: "Urban Crossbody Bag",
    brand: "MODA",
    price: 72,
    oldPrice: 90,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    rating: 4.7,
    reviews: 88,
    stock: 20,
    featured: false,
    colors: [
             {
              id:1,
              name:"Black", 
              bgColor:'bg-black'
            },
             { 
              id:2,
              name:"Olive", 
              bgColor:'bg-pink-400'
            }, 
             
          ],
    description:
      "Compact crossbody bag for everyday fashion and utility.",
  },

  {
    id: 24,
    category: "accessories",
    name: "Premium Sunglasses",
    brand: "MODA",
    price: 58,
    oldPrice: 74,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
    rating: 4.6,
    reviews: 91,
    stock: 24,
    featured: false,
     colors: [
             {
              id:1,
              name:"Black", 
              bgColor:'bg-black'
            }, 
             
          ],
    description:
      "UV-protected designer sunglasses with contemporary styling.",
  },

  {
    id: 25,
    category: "accessories",
    name: "Luxury Leather Belt",
    brand: "MODA",
    price: 35,
    oldPrice: 48,
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1200&auto=format&fit=crop",
    rating: 4.5,
    reviews: 57,
    stock: 28,
    featured: false,
     colors: [
              { 
              id:1,
              name:"Yellow", 
              bgColor:'bg-yellow-00'
             }, 
             {
              id:2,
              name:"Black", 
              bgColor:'bg-black'
            },
           
             
          ],
    description:
      "Premium leather belt with polished metallic buckle.",
  },

  {
    id: 26,
    category: "accessories",
    name: "Classic Beanie",
    brand: "MODA",
    price: 22,
    oldPrice: 30,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200&auto=format&fit=crop",
    rating: 4.4,
    reviews: 43,
    stock: 40,
    featured: false,
    colors: [
              { 
              id:1,
              name:"Gray", 
              bgColor:'bg-gray-500'
            }, 
             {
              id:2,
              name:"Black", 
              bgColor:'bg-black'
            },
             
          ],
    description:
      "Soft ribbed beanie crafted for warmth and everyday styling.",
  },

  {
    id: 27,
    category: "accessories",
    name: "Designer Backpack",
    brand: "MODA",
    price: 98,
    oldPrice: 125,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
    rating: 4.8,
    reviews: 130,
    stock: 12,
    featured: true,
     colors: [
             {
              id:1,
              name:"Black", 
              bgColor:'bg-black'
            },

             
          ],
    description:
      "Modern backpack with premium storage and clean aesthetics.",
  },

  {
    id: 28,
    category: "accessories",
    name: "Chunky Silver Necklace",
    brand: "MODA",
    price: 40,
    oldPrice: 52,
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
    rating: 4.6,
    reviews: 66,
    stock: 18,
    featured: false,
     colors: [
             {
              id:1,
              name:"Silver", 
              bgColor:'bg-zinc-500'
            },    
          ],
    description:
      "Statement necklace designed for elevated fashion layering.",
  },

  {
    id: 29,
    category: "accessories",
    name: "Premium Wallet",
    brand: "MODA",
    price: 48,
    oldPrice: 60,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200&auto=format&fit=crop",
    rating: 4.7,
    reviews: 85,
    stock: 26,
    featured: false,
    colors: [
              { 
              id:1,
              name:"Brown", 
              bgColor:'bg-amber-950'
            }, 
            {
              id:2,
              name:"Black", 
              bgColor:'bg-black'
            },
          ],
    description:
      "Slim luxury wallet crafted from textured genuine leather.",
  },

  {
    id: 30,
    category: "accessories",
    name: "Modern Fashion Cap",
    brand: "MODA",
    price: 28,
    oldPrice: 38,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200&auto=format&fit=crop",
    rating: 4.5,
    reviews: 50,
    stock: 35,
    featured: false,
    colors: [
             {
              id:1,
              name:"Black", 
              bgColor:'bg-black'
            },
             { 
              id:2,
              name:"White", 
              bgColor:'bg-white'
            }, 
             
          ],
    description:
      "Structured fashion cap with minimal embroidered detailing.",
  },
];