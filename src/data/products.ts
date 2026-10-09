export interface Product {
  id: number | string;
  name: string;
  motif: string;
  price: number;
  priceUsd?: number;
  category: 'Blouses' | 'Sarees' | 'Underskirt';
  collection?: 'The Occasion Edit' | 'The Café Collection';
  personality: string[];
  keywords: string[];
  story: string;
  wearFor: string;
  description?: string[];
  details?: string[];
  fabric?: string;
  washingInstructions?: string;
  modelSize?: string;
  sizes?: string[];
  image: string;
  images: string[];
  color: string;
  shopifyVariantId?: string;
}

export const products: Product[] = [
  {
    id: 7,
    name: 'SAPPHIRE MOGRA',
    motif: 'Cage',
    price: 9500,
    priceUsd: 200,
    category: 'Sarees',
    collection: 'The Occasion Edit',
    sizes: ['One Size'],
    personality: ['Independent', 'Bold', 'Contemporary'],
    keywords: ['Silk', 'Cage Motif', 'Deep Blue', 'Statement'],
    story:
      'The cage motif was my little way of playing with the idea of freedom — because what’s more fun than putting a cage on a saree and then wearing it exactly how you want?',
    wearFor: 'I see this one on the woman who likes her classics with a little bit of edge. Dinner dates, cocktails, gallery evenings — basically anywhere you want someone to stop and ask, “Wait, is that a cage on your saree?”',
    image: 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/sm1.webp',
    images: ['https://res.cloudinary.com/xtrw55ut/video/upload/q_auto,f_auto,w_800/smmodelposing.webm', 'https://res.cloudinary.com/xtrw55ut/video/upload/q_auto,f_auto,w_800/smmodelwall.webm', 'https://res.cloudinary.com/xtrw55ut/video/upload/q_auto,f_auto,w_800/smsareefall.webm', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/sm1.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/sm3.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/sm4_2.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/sm5.webp'],
    color: '#8898B8',
    shopifyVariantId: '48988074541305', // SAPPHIRE MOGRA
  },
  {
    id: 6,
    name: 'BUTTER MOGRA',
    motif: 'Pineapple',
    price: 9500,
    priceUsd: 200,
    category: 'Sarees',
    collection: 'The Occasion Edit',
    sizes: ['One Size'],
    personality: ['Sunny', 'Fresh', 'Effortless'],
    keywords: ['Silk', 'Pineapple Motif', 'Butter Yellow', 'Contemporary'],
    story:
      'Can we talk about how butter yellow is having such a moment right now? Gen Z, millennials — everyone seems to be obsessed with it. And then there’s the pineapple. Somehow, the two together just made perfect sense to me. It gives this saree that fresh, playful energy without making it feel too young.',
    wearFor: 'Haldi? Absolutely. Brunch date? Of course. Day wedding? Take her. She’s basically made for happy occasions.',
    image: 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/bm1.webp',
    images: ['https://res.cloudinary.com/xtrw55ut/video/upload/q_auto,f_auto,w_800/bmmodelmehendi.webm', 'https://res.cloudinary.com/xtrw55ut/video/upload/q_auto,f_auto,w_800/bmmodeltwirl.webm', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/bm1.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/bm2.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/bm3.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/bm4.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/bm5_2.webp'],
    color: '#D4C08A',
    shopifyVariantId: '48991334367481', // BUTTER MOGRA
  },
  {
    id: 5,
    name: 'RUBY DOE',
    motif: 'Deer',
    price: 9500,
    priceUsd: 200,
    category: 'Sarees',
    collection: 'The Occasion Edit',
    sizes: ['One Size'],
    personality: ['Soft', 'Romantic', 'Graceful'],
    keywords: ['Silk', 'Deer Motif', 'Ruby Tones', 'Romantic'],
    story:
      'I imagined Ruby Doe on the girl who has just become a bride — not in a heavy bridal saree, but in that beautiful new-bride phase where you want to wear colour, dress up and still feel like yourself. The little deer motif makes the red feel softer and more playful.',
    wearFor: 'Wear her to a wedding, a bridesmaid moment, an intimate dinner or that first wedding season after you say “I do.”',
    image: 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rd1.webp',
    images: ['https://res.cloudinary.com/xtrw55ut/video/upload/q_auto,f_auto,w_800/rdmodel.webm', 'https://res.cloudinary.com/xtrw55ut/video/upload/q_auto,f_auto,w_800/rdmodelopeningscene.webm', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rd1.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rd2.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rd3.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rd4.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rd5_2.webp'],
    color: '#B89090',
    shopifyVariantId: '48991348293881', // RUBY DOE
  },
  {
    id: 1,
    name: 'JALPARIÉ',
    motif: 'Seahorse',
    price: 9500,
    priceUsd: 200,
    category: 'Sarees',
    collection: 'The Occasion Edit',
    sizes: ['One Size'],
    personality: ['Elegant', 'Refined', 'Quiet Luxury'],
    keywords: ['Silk', 'Seahorse Motif', 'Artisan Embroidery', 'Premium'],
    story:
      'Think destination wedding by the sea. Barely-there breeze, cocktails at sunset, your hair doing its own thing — and a silk saree with tiny seahorses. This is exactly why I wanted the seahorse on it. It’s unexpected, but somehow feels completely at home.',
    wearFor: 'And honestly? This is the one I’d wear if I wanted people to ask me, “Where is that saree from?”',
    image: 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/jp1.webp',
    images: ['https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/jp1.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/jp2.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/jp3.webp'],
    color: '#D4C5B0',
    shopifyVariantId: '48991392628985', // JALPARIE
  },
  {
    id: 2,
    name: 'ROSÉ MOGRA',
    motif: 'Owl',
    price: 9500,
    priceUsd: 200,
    category: 'Sarees',
    collection: 'The Occasion Edit',
    sizes: ['One Size'],
    personality: ['Confident', 'Intelligent', 'Playful'],
    keywords: ['Silk', 'Owl Motif', 'Rose Tones', 'Artisan Embroidery'],
    story:
      'I wanted something soft and feminine, but then I thought — why should pretty always mean predictable? So came the owl. A little unusual, a little mysterious and definitely not the motif you expect to find on a saree.',
    wearFor: 'I see this one at intimate dinners, date nights, sundowners and those occasions where you want to look pretty but still have something interesting going on.',
    image: 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rm1.webp',
    images: ['https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rm1.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rm2.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rm3_2.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rm4.webp'],
    color: '#C9B5A8',
    shopifyVariantId: '48991405605113', // ROSÉ MOGRA
  },
  {
    id: 3,
    name: 'RIWAAYAT',
    motif: 'Elephant',
    price: 9500,
    priceUsd: 200,
    category: 'Sarees',
    collection: 'The Occasion Edit',
    sizes: ['One Size'],
    personality: ['Heritage', 'Regal', 'Timeless'],
    keywords: ['Silk', 'Elephant Motif', 'Heritage', 'Regal'],
    story:
      'This one is very close to my heart. The elephant felt like the perfect place to start — deeply Indian, instantly recognisable, but playful enough to become something completely new through our patchwork. And you clearly agreed. Riwayaat is our best-seller. The saree that made people stop, ask questions and discover Mocha & Mogra for the first time.',
    wearFor: 'A little bit of our riwayaat, with a lot of our personality.',
    image: 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/ri1.webp',
    images: ['https://res.cloudinary.com/xtrw55ut/video/upload/a_-90,q_auto,f_auto,w_800/coverreel3.webm', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/ri1.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/ri2.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/ri3.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/ri4.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/ri5_2.webp'],
    color: '#B8A898',
    shopifyVariantId: '48996869701881', // RIWAAYAT
  },
  {
    id: 4,
    name: 'SUNDOWNER SILK',
    motif: 'Fish',
    price: 9500,
    priceUsd: 200,
    category: 'Sarees',
    collection: 'The Occasion Edit',
    sizes: ['One Size'],
    personality: ['Playful', 'Artistic', 'Free-Spirited'],
    keywords: ['Silk', 'Fish Motif', 'Warm Tones', 'Artisan'],
    story:
      'Two little fish swimming across a silk saree. I don’t know — I just loved the idea. There’s something about this one that feels like holiday energy. A sunset dinner, a beachside celebration, a long evening with nowhere to be.',
    wearFor: 'Basically, the saree equivalent of saying, “Let’s stay for one more drink.”',
    image: 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/ss1.webp',
    images: ['https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/ss1.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/ss2.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/ss3.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/ss4_2.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/ss5.webp'],
    color: '#C4A882',
    shopifyVariantId: '48996873732345', // SUNDOWNER SILK
  },
  {
    id: 8,
    name: 'Chandini',
    motif: 'Designer Underskirt',
    price: 3500,
    priceUsd: 120,
    category: 'Underskirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    personality: ['Regal', 'Elegant'],
    keywords: ['Underskirt', 'Silk Lining', 'Petticoat', 'Essential'],
    story:
      'I wanted the saree to move. So I made the underskirt ridiculously flared. The kind that gives your saree that gorgeous swish when you walk, sit, twirl — basically whenever you feel like being a little dramatic.',
    wearFor: 'You won’t necessarily see Chaandini. But you’ll definitely notice what she does.',
    image: 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rm4.webp',
    images: ['https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rm4.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rm1.webp', 'https://res.cloudinary.com/xtrw55ut/image/upload/q_auto,f_auto,w_800/rm2.webp'],
    color: '#D8D0C4',
    shopifyVariantId: '48996875534585', // CHAANDINI
  },
  {
    id: 'chandi',
    name: 'Chandi — Silver',
    motif: 'Metallic',
    price: 2100,
    priceUsd: 100,
    category: 'Blouses',
    personality: ['Versatile', 'Easy to style', 'Polished'],
    keywords: ['Metallic finish', 'Silver', 'Versatile', 'Easy to style'],
    story:
      'A versatile metallic blouse designed to work with almost any saree. The silver finish adds just the right amount of shine without overpowering the saree, making it easy to dress up or down.',
    wearFor:
      'Pair it with silk, prints, solids or even your everyday sarees. Wear it for weddings, cocktails, festive celebrations or simply when you want to give an old saree a completely new look.',
    description: [
      'A versatile metallic blouse designed to work with almost any saree. The silver finish adds just the right amount of shine without overpowering the saree, making it easy to dress up or down.',
      'Pair it with silk, prints, solids or even your everyday sarees. Wear it for weddings, cocktails, festive celebrations or simply when you want to give an old saree a completely new look.',
    ],
    details: ['Metallic finish', 'Versatile', 'Easy to style', 'Pairs with multiple sarees'],
    fabric: 'Metallic gota v',
    washingInstructions: 'Dry Clean Only',
    modelSize: 'Small',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image: '',
    images: [],
    color: '#C4904E',
  },
  {
    id: 'tamara',
    name: 'Tamara — Copper',
    motif: 'Metallic',
    price: 2100,
    priceUsd: 100,
    category: 'Blouses',
    personality: ['Warm', 'Versatile', 'Effortless'],
    keywords: ['Metallic finish', 'Copper', 'Versatile', 'Easy to style'],
    story:
      'A warm metallic copper blouse that brings an effortless richness to any saree. Designed as a versatile wardrobe piece, Tamara works beautifully with both traditional and contemporary sarees.',
    wearFor:
      'From weddings and cocktails to Garba, Dandiya and evening celebrations, it is the kind of blouse you can keep coming back to — simply change the saree and create an entirely new look each time.',
    description: [
      'A warm metallic copper blouse that brings an effortless richness to any saree. Designed as a versatile wardrobe piece, Tamara works beautifully with both traditional and contemporary sarees.',
      'From weddings and cocktails to Garba, Dandiya and evening celebrations, it is the kind of blouse you can keep coming back to — simply change the saree and create an entirely new look each time.',
    ],
    details: ['Metallic finish', 'Versatile', 'Easy to style', 'Pairs with multiple sarees'],
    fabric: 'Metallic gota v',
    washingInstructions: 'Dry Clean Only',
    modelSize: 'Small',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image: '',
    images: [],
    color: '#A67340',
  },
  {
    id: 'pistachio',
    name: 'Pistachio',
    motif: 'Polka dot',
    price: 2500,
    priceUsd: 200,
    category: 'Sarees',
    collection: 'The Café Collection',
    sizes: ['One Size'],
    personality: ['Playful', 'Easy-going', 'Daytime'],
    keywords: ['Polka dot', 'Daytime', 'Soft fabric', 'Delicate detailing'],
    story:
      'A soft, playful polka-dot saree made for the daytime.',
    wearFor:
      'Its comfortable fabric and delicate detailing make it easy to wear from work to brunch, lunch dates and daytime events. Pair it with a statement blouse for a more contemporary look or keep it classic and understated.',
    description: [
      'A soft, playful polka-dot saree made for the daytime.',
      'Its comfortable fabric and delicate detailing make it easy to wear from work to brunch, lunch dates and daytime events. Pair it with a statement blouse for a more contemporary look or keep it classic and understated.',
      'A saree you can actually reach for often — not just save for special occasions.',
    ],
    image: '',
    images: [],
    color: '#B9C6A0',
  },
  {
    id: 'strawberry-latte',
    name: 'Strawberry Latte',
    motif: 'Polka dot',
    price: 2500,
    priceUsd: 200,
    category: 'Sarees',
    collection: 'The Café Collection',
    sizes: ['One Size'],
    personality: ['Feminine', 'Playful', 'Effortless'],
    keywords: ['Pink polka dot', 'Daytime', 'Soft fabric', 'Easy-going'],
    story:
      'Our pink polka-dot saree — feminine, playful and effortlessly easy to style.',
    wearFor:
      'Made for coffee dates, brunches, work days and daytime celebrations, it combines a soft fabric with delicate detailing and an easy-going silhouette.',
    description: [
      'Our pink polka-dot saree — feminine, playful and effortlessly easy to style.',
      'Made for coffee dates, brunches, work days and daytime celebrations, it combines a soft fabric with delicate detailing and an easy-going silhouette.',
      'Pair it with a statement blouse, a metallic blouse or your favourite classic blouse to create a completely different look each time.',
    ],
    image: '',
    images: [],
    color: '#D5A6A7',
  },
];
