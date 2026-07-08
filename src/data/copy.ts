export const brand = {
  name: '4DA Cathering',
  tagline: 'Aroma Bakar Otentik, Warisan Tradisi',
  description: 'Nikmati kelezatan ayam bakar bumbu rahasia dengan teknik pemanggangan tradisional yang meresap hingga ke tulang. Gurih, manis, dan smokey!',
} as const;

export const meta = {
  title: '4DA Cathering \u2014 Aroma Bakar Otentik, Warisan Tradisi',
  description: 'Nikmati kelezatan ayam bakar bumbu rahasia 4DA Cathering dengan teknik pemanggangan tradisional. Spesialis catering ayam bakar di Jepara. Pesan sekarang via WhatsApp!',
  image: '/Thumbnail-4dacathering.png',
  imageAlt: '4DA Cathering - Spesialis Ayam Bakar Jepara',
} as const;

export interface MenuItem {
  id: string;
  name: string;
  label: string;
  description: string;
  price: string;
  priceNote: string;
  imagePath: string;
  waMessage: string;
}

export const heroProduct = {
  name: 'Ayam Bakar 1 Ekor Spesial',
  price: 'Rp 80rb',
  priceNote: 'Per Ekor',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-Pj3XC2FtCBVoRfn99Q8-LG19dDbLd15TcAqO1AFsYzoI4S7niVsKiHD_MqEaFKF3x3gWl-Bq4pE3JzWzJx5pu6JmRpsZcBoGX4-YSAiVYl84hgIousIIU5HMBcYF3WLPejvYppNWgFVEI6F14HNBpYzCTxhp9NClodSbAmGunZkgeMe-uJ4aTjXC-NiO8vqwdw2GTVCi5WELKaB_um1TfrgvovVnXCRmfnZp3Esub8OAKBWSzpUPN6QcYKoXVw4Ic-L3E51uVLw',
} as const;

export const menuItems: MenuItem[] = [
  {
    id: 'nasi-ayam-bakar-besar-dus',
    name: 'Nasi Ayam Bakar Besar (Per Dus)',
    label: 'Favorit Kantor',
    description: 'Paket lengkap eksklusif dengan nasi pulen, sambal korek, dan lalapan segar. Dikemas rapi dengan kotak dus premium.',
    price: 'Rp 22.000',
    priceNote: 'Porsi Premium',
    imagePath: '/src/assets/Nasi-ayam-bakar-besar-per-dus-22000.jpeg',
    waMessage: 'Halo 4DA Cathering, saya tertarik dengan Nasi Ayam Bakar Besar (Per Dus). Boleh info harga dan cara order?',
  },
  {
    id: 'nasi-ayam-bakar-besar-styrofoam',
    name: 'Nasi Ayam Bakar Besar (Styrofoam)',
    label: 'Porsi Kenyang',
    description: 'Ayam bakar bumbu rahasia porsi besar dengan nasi pulen dan lalapan segar dalam kemasan styrofoam praktis.',
    price: 'Rp 20.000',
    priceNote: 'Porsi Kenyang',
    imagePath: '/src/assets/Nasi-ayam-bakar-besar-styrofoam-20000.jpeg',
    waMessage: 'Halo 4DA Cathering, saya tertarik dengan Nasi Ayam Bakar Besar (Styrofoam). Boleh info harga dan cara order?',
  },
  {
    id: 'nasi-ayam-bakar-kecil-styrofoam',
    name: 'Nasi Ayam Bakar Kecil (Styrofoam)',
    label: 'Hemat Nikmat',
    description: 'Porsi hemat ayam bakar dengan nasi dan lalapan. Pilihan terbaik untuk makan siang cepat dan terjangkau.',
    price: 'Rp 12.000',
    priceNote: 'Hemat Nikmat',
    imagePath: '/src/assets/Nasi-ayam-bakar-kecil-styrofoam-12000.jpeg',
    waMessage: 'Halo 4DA Cathering, saya tertarik dengan Nasi Ayam Bakar Kecil (Styrofoam). Boleh info harga dan cara order?',
  },
];

export const location = {
  address: 'Kuwasen RT07 RW02 Jepara',
  region: 'Jawa Tengah, Indonesia',
  hours: 'Setiap Hari',
  hourDetail: '10:00 - Sampai Habis',
  mapsUrl: 'https://maps.app.goo.gl/xCY1cqAbcH99KFTJ8',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3963.5847689266952!2d110.6959444!3d-6.5739722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzQnMjYuMyJTIDExMMKwNDEnNDUuNCJF!5e0!3m2!1sen!2sid!4v1783486501712!5m2!1sen!2sid',
  testimonial: '"Pelayanan cepat, rasa mantap. Ayam bakarnya juara di daerah Jepara!"',
  testimonialAuthor: '\u2014 Pelanggan Setia',
} as const;

export const nav = {
  ctaLabel: 'Pesan Sekarang',
  waMessage: 'Halo 4DA Cathering, saya tertarik dengan menu yang ditawarkan. Boleh info lebih lanjut?',
} as const;

export const hero = {
  badge: 'Spesialis Ayam Bakar',
  headline: 'Aroma Bakar Otentik,',
  headlineAccent: 'Warisan Tradisi',
  subtitle: 'Nikmati kelezatan ayam bakar bumbu rahasia dengan teknik pemanggangan tradisional yang meresap hingga ke tulang. Gurih, manis, dan smokey!',
  ctaLabel: 'Pesan via WhatsApp',
  ctaMessage: 'Halo 4DA Cathering, saya tertarik dengan menu yang ditawarkan. Boleh info lebih lanjut?',
  secondaryCta: 'Lihat Menu',
} as const;

export const stickyWA = {
  label: 'Chat WhatsApp',
  ariaLabel: 'Hubungi kami via WhatsApp',
  waMessage: 'Halo 4DA Cathering, saya tertarik dengan menu yang ditawarkan. Boleh info lebih lanjut?',
} as const;

export const ctaBanner = {
  headline: 'Lapar? Pesan Sekarang!',
  subtitle: 'Jangan tunggu lama untuk merasakan sensasi smokey ayam bakar 4DA. Pesan via WhatsApp dan kami antar ke depan pintu rumah Anda.',
  ctaLabel: 'Pesan via WhatsApp',
  ctaMessage: 'Halo 4DA Cathering, saya tertarik dengan menu yang ditawarkan. Boleh info lebih lanjut?',
} as const;

export const footer = {
  tagline: '4DA Cathering \u2014 Aroma Bakar Otentik, Warisan Tradisi',
  copyright: `\u00a9 ${new Date().getFullYear()} 4DA Cathering. Aroma Bakar Otentik, Warisan Tradisi.`,
} as const;
