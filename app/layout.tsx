import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://abhaygaurdas.com'),
  title: 'HG Abhay Gaur Das | Monk, Preacher, Youth Mentor & Financial Administrator | ISKCON Delhi',
  description: 'Official portal of HG Abhay Gaur Das, monk at ISKCON Sri Sri Radha Parthasarathi Mandir, Delhi. Devotional leadership, youth empowerment, Bhishma Donor Care, and spiritual financial administration.',
  keywords: [
    'HG Abhay Gaur Das',
    'Abhay Gaur Prabhuji',
    'ISKCON Delhi',
    'HH Gopal Krishna Goswami Maharaj',
    'Udgaar Youth Festival',
    'Bhaktivedanta Gurukula Vrindavan',
    'Bhishma Donor Care',
    'Bhagavad Gita Preaching',
    'Kurukshetra Temple ISKCON',
    'Vaishnava Monk',
    'Youth Mentor Delhi'
  ],
  authors: [{ name: 'HG Abhay Gaur Das' }],
  openGraph: {
    title: 'HG Abhay Gaur Das | Monk, Preacher & Administrator | ISKCON Delhi',
    description: 'Devotion with discipline: Combining monastic spiritual integrity with modern institutional leadership.',
    url: 'https://abhaygaurdas.com',
    siteName: 'HG Abhay Gaur Das',
    images: [
      {
        url: '/images/abhay_gaur_prabhuji_hero.jpg',
        width: 1200,
        height: 630,
        alt: 'HG Abhay Gaur Das - ISKCON Delhi'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://abhaygaurdas.com/#person',
        'name': 'HG Abhay Gaur Das',
        'alternateName': ['Abhay Gaur Das', 'Abhay Gaur Prabhuji'],
        'jobTitle': ['Monk', 'Preacher', 'Chief Financial Officer', 'Head of Bhishma Donor Care'],
        'worksFor': {
          '@type': 'Organization',
          'name': 'ISKCON Sri Sri Radha Parthasarathi Mandir, New Delhi',
          'url': 'https://delhiiskcon.com'
        },
        'alumniOf': [
          {
            '@type': 'EducationalOrganization',
            'name': 'Bhaktivedanta Gurukula and International School, Vrindavan'
          },
          {
            '@type': 'EducationalOrganization',
            'name': 'University of Delhi'
          }
        ],
        'image': 'https://abhaygaurdas.com/images/1000170724.jpeg',
        'description': 'Monk, spiritual mentor, youth leader, and financial administrator serving at ISKCON Delhi.'
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Manrope:wght@300;400;500;600;700&family=Noto+Serif+Devanagari:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFF9EF] text-[#473429] antialiased">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
