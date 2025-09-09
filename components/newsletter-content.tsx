"use client"

import type { Newsletter } from "@/lib/newsletter-data"

interface NewsletterContentProps {
  newsletter: Newsletter
}

export function NewsletterContent({ newsletter }: NewsletterContentProps) {
  const content = newsletter.content.id

  // Mock content for demonstration - in a real app this would come from a CMS or markdown
  const mockContent = `
    <p class="lead">${content.excerpt}</p>
    
    <h2>Latar Belakang Kebijakan</h2>
    <p>Pemerintah Indonesia terus berupaya meningkatkan investasi di sektor energi terbarukan sebagai bagian dari komitmen global untuk mengurangi emisi karbon. Regulasi terbaru yang dikeluarkan pada awal tahun 2025 ini diharapkan dapat mempercepat adopsi teknologi solar panel di berbagai sektor.</p>
    
    <p>Kebijakan ini mencakup beberapa aspek penting:</p>
    <ul>
      <li>Insentif pajak untuk investor energi terbarukan</li>
      <li>Kemudahan perizinan untuk proyek solar panel</li>
      <li>Target kapasitas energi terbarukan nasional</li>
      <li>Standar kualitas dan keamanan instalasi</li>
    </ul>
    
    <h2>Dampak Terhadap Investasi</h2>
    <p>Analisis awal menunjukkan bahwa regulasi ini akan memberikan dampak positif yang signifikan terhadap iklim investasi di sektor energi terbarukan. Beberapa poin penting yang perlu diperhatikan:</p>
    
    <blockquote>
      "Regulasi ini memberikan kepastian hukum yang selama ini ditunggu-tunggu oleh para investor. Dengan adanya insentif yang jelas, kami optimis investasi di sektor ini akan meningkat drastis dalam 2-3 tahun ke depan." - Direktur Asosiasi Energi Terbarukan Indonesia
    </blockquote>
    
    <h2>Tantangan Implementasi</h2>
    <p>Meskipun regulasi ini memberikan angin segar bagi industri energi terbarukan, masih ada beberapa tantangan yang perlu diatasi:</p>
    
    <ol>
      <li><strong>Infrastruktur Grid:</strong> Kapasitas jaringan listrik nasional perlu ditingkatkan untuk mengakomodasi input energi dari berbagai sumber terbarukan.</li>
      <li><strong>Sumber Daya Manusia:</strong> Kebutuhan akan tenaga ahli di bidang energi terbarukan masih tinggi, sementara supply masih terbatas.</li>
      <li><strong>Koordinasi Antar Lembaga:</strong> Implementasi kebijakan memerlukan koordinasi yang baik antara kementerian, BUMN, dan pemerintah daerah.</li>
    </ol>
    
    <h2>Rekomendasi</h2>
    <p>Berdasarkan analisis mendalam terhadap regulasi ini, ForPublic.id merekomendasikan beberapa langkah strategis:</p>
    
    <p>Pertama, pemerintah perlu mempercepat pembangunan infrastruktur pendukung, terutama smart grid yang dapat mengintegrasikan berbagai sumber energi terbarukan. Kedua, investasi dalam pendidikan dan pelatihan SDM di bidang energi terbarukan harus ditingkatkan melalui kerjasama dengan universitas dan lembaga pelatihan.</p>
    
    <p>Ketiga, transparansi dalam proses perizinan dan monitoring implementasi kebijakan perlu dijaga untuk memastikan efektivitas regulasi ini dalam jangka panjang.</p>
  `

  return (
    <div className="prose prose-lg max-w-none mb-8 md:mb-12">
      <div className="newsletter-content" dangerouslySetInnerHTML={{ __html: mockContent }} />

      <style jsx>{`
        .newsletter-content {
          line-height: 1.7;
        }
        
        .newsletter-content .lead {
          font-size: 1.25rem;
          font-weight: 400;
          color: rgb(107 114 128);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .newsletter-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1rem;
          color: rgb(55 65 81);
        }
        
        .newsletter-content p {
          margin-bottom: 1.5rem;
          color: rgb(75 85 99);
        }
        
        .newsletter-content ul, .newsletter-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .newsletter-content li {
          margin-bottom: 0.5rem;
          color: rgb(75 85 99);
        }
        
        .newsletter-content blockquote {
          border-left: 4px solid rgb(59 130 246);
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: rgb(107 114 128);
          background: rgb(249 250 251);
          padding: 1.5rem;
          border-radius: 0.5rem;
        }
        
        .newsletter-content strong {
          font-weight: 600;
          color: rgb(55 65 81);
        }
      `}</style>
    </div>
  )
}
