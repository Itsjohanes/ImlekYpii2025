import React from 'react';
import { Hexagon as Dragon, Network as Firework, Calendar, Clock, MapPin, Phone, Trophy } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-700 to-red-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div 
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582501921120-78c242da6b83?auto=format&fit=crop&q=80')`
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="text-white max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
               
                <span className="block text-4xl md:text-5xl mt-4">
                  Perayaan Tahun Baru Imlek 2025
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Yayasan Penyelenggaraan Ilahi Kantor Cabang Bandung
              </p>
              <a
                href="https://ppdb.ypiibandung.or.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all transform hover:scale-105 inline-block text-center"
              >
                Bergabunglah Bersama Kami
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="bg-red-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-800 text-center mb-16">
            Informasi Acara
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Calendar className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tanggal</h3>
              <p className="text-gray-600">Sabtu, 15 Februari 2025</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Lokasi</h3>
              <p className="text-gray-600">Jalan Kebon Jati 209 Bandung</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <Trophy className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Perlombaan</h3>
              <p className="text-gray-600">Berbagai Kategori Lomba</p>
            </div>
          </div>
        </div>
      </div>

      {/* Competition Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-red-800 text-center mb-16">
            Kategori Perlombaan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-red-800 mb-4">Lomba Fotogenik</h3>
              <p className="text-gray-700 mb-4">Untuk usia 2-4 tahun</p>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <a 
                    href="https://wa.me/6285320592523" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Maria: 085320592523
                  </a>

              </div>
            </div>
            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-red-800 mb-4">Lomba E-Sport</h3>
              <p className="text-gray-700 mb-4">Tingkat SD & SMP</p>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <a 
                    href="https://wa.me/62817613849" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Nining: 0817613849
                  </a>
              </div>
            </div>
            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-red-800 mb-4">Lomba Cosplay Karakter</h3>
              <p className="text-gray-700 mb-4">Tingkat SD & SMP</p>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2" />

                <a 
                    href="https://wa.me/6281322717800" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Ono: 081322717800
                  </a>
          
              </div>
            </div>
            <div className="bg-red-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-red-800 mb-4">Lomba Fashion Show Keluarga</h3>
              <p className="text-gray-700 mb-4">TK & SD kelas 1-2</p>
              <div className="flex flex-col space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a 
                    href="https://wa.me/6281395027557" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Woro: 081395027557
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Dragon className="w-16 h-16 text-red-600 mb-6" />
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Sambut Tahun Naga 2025
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Mari bergabung dalam perayaan Tahun Baru Imlek 2025 bersama Yayasan Penyelenggaraan Ilahi 
                Kantor Cabang Bandung. Nikmati berbagai perlombaan menarik dan rayakan kebersamaan dalam 
                suasana yang meriah dan penuh kebahagiaan.
              </p>
              <ul className="space-y-4">
                {[
                  'Gratis',
                  'Perlombaan untuk Berbagai Usia',
                  'Hadiah Menarik',
                  'Suasana Meriah',
                  'Kebersamaan Keluarga',
                  'Dimeriahkan dengan Barongsai'
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <Firework className="w-5 h-5 text-red-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/poster.png"
                alt="Perayaan Tahun Baru Imlek"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-900 text-red-100 py-12">
        <div className="container mx-auto px-4 text-center">
          {/*Logo Image ambil dari folder public*/}
          <img 
            src="/YPII.png"
            alt="YPI Bandung"
            className="w-24 mx-auto mb-4"
          />
          
          <p className="text-lg mb-4">Perayaan Tahun Baru Imlek 2025</p>
          <p className="text-sm opacity-75">
            Yayasan Penyelenggaraan Ilahi Kantor Cabang Bandung
          </p>
          <p className="text-sm opacity-75 mt-2">
            Jalan Kebon Jati 209 Bandung
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;