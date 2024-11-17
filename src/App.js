import React from 'react';
import { LightbulbIcon, Brain, Heart, Scale } from 'lucide-react';
import profileImage from './assets/profile-image.jpg';
import bannerImage from './assets/fruits-banner.jpg';

const HealthProfessionalPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-900 p-4 relative z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-amber-600 font-bold text-xl">Balance Energy</div>
          <div className="space-x-4">
            <a href="#" className="text-gray-300 hover:text-amber-600">O mnie</a>
            <a href="#" className="text-gray-300 hover:text-amber-600">Oferta</a>
            <a href="#" className="text-gray-300 hover:text-amber-600">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col">
        {/* Hero Section */}
        <div className="h-80 relative">
          <img 
            src={bannerImage}
            alt="Świeże owoce i warzywa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Zdrowe Odżywianie</h2>
              <p className="text-xl">Twoja droga do lepszego samopoczucia</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-amber-600 text-sm uppercase tracking-wider">Psychodietetyk Paulina Matkowska</h2>
            <h1 className="text-3xl font-bold mt-2">
              Odzyskaj <span className="text-amber-600">balans</span> między ciałem a umysłem
            </h1>
          </div>

          {/* Profile Section */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src={profileImage}
                alt="Paulina Matkowska - Psychodietetyk" 
                className="w-64 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-4">
                  Witaj na stronie poświęconej psychodietetyce
                </h3>
                <p className="text-gray-300 mb-4">
                  To miejsce łączy dietetykę i psychologię, pomagając w przywróceniu równowagi między ciałem a umysłem.
                </p>
                <p className="text-gray-300">
                  Specjalizuję się w holistycznym podejściu do zdrowia, łącząc wiedzę z zakresu żywienia i psychologii.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <Brain className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold mb-2">Umysł i ciało</h3>
              <p className="text-sm text-gray-300">Całościowe spojrzenie na Twoje zdrowie</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <Heart className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold mb-2">Dietetyka emocji</h3>
              <p className="text-sm text-gray-300">Jak schematy życiowe wpływają na Twoje wybory</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <LightbulbIcon className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold mb-2">Jedz dla zdrowia</h3>
              <p className="text-sm text-gray-300">Poznaj zasady zdrowego odżywiania</p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <Scale className="w-12 h-12 mx-auto mb-4 text-amber-600" />
              <h3 className="font-semibold mb-2">Psychiczna równowaga</h3>
              <p className="text-sm text-gray-300">Osiągnij spokój wewnętrzny</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-amber-600 text-center p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-4">Sprawdź jak mogę Ci pomóc</h3>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Wypełnij ankietę
            </button>
          </div>

          {/* Statistics and Testimonials Section */}
          <div className="mb-16">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-amber-600">Pozwól sobie pomóc</h2>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">0.8-2%</div>
                <div className="text-sm uppercase tracking-wider text-gray-300">Chorych na anoreksję</div>
              </div>
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">10-20%</div>
                <div className="text-sm uppercase tracking-wider text-gray-300">Śmiertelności</div>
              </div>
              <div className="text-center p-6 bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">~60%</div>
                <div className="text-sm uppercase tracking-wider text-gray-300">Wyzdrowień</div>
              </div>
            </div>

            {/* Testimonials Header */}
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-amber-600 mb-2">Zmaksymalizuj swój potencjał i możliwości</p>
              <h3 className="text-2xl font-bold">
                Kilka opinii <span className="text-gray-400">od naszych klientów</span>
              </h3>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                    <img src="/api/placeholder/48/48" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-4">Sesje psychodietetyczne z Panią Pauliną zaowocowały kilka miesiącą temu. Po tym czasie mogę z wielką przyjemnością i pewnością stwierdzić powodzenie tej formy pomocy osobom, które zmagają się z zaburzeniami odżywiania. Dzięki Pani Paulinie wyszłam z kompulsywnego objadania się, nie wybucham w siebie jedzenia, umiem radzić sobie ze stresem w inny sposób niż jedzenie i z przyjemnością prowadzę i kontroluję moją redukcję.</p>
                    <p className="font-semibold text-amber-600">MONIKA</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                    <img src="/api/placeholder/48/48" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-gray-300 mb-4">Paulina to naprawdę wspaniała kobieta. Ma bardzo indywidualne podejście do każdego i nie podchodzi się kiedy my sami upadamy. Bo jak każdy kto to przechodzi, wie, że układanie relacji z jedzeniem nie jest proste. Mogę z ręką na sercu powiedzieć, że dzięki Paulinie pozbyłem się napadów objadania i uwolniłem się od liczenia kcal.</p>
                    <p className="font-semibold text-amber-600">TOMEK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#1C1917]">
          <div className="container mx-auto px-4 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
              {/* Address Column */}
              <div className="lg:col-span-4">
                <h4 className="text-orange-500 font-semibold mb-4">Adres:</h4>
                <div className="space-y-2">
                  <p className="text-gray-400">ul. Wojska Polskiego 24/2, 70-471, Szczecin</p>
                  <p className="text-gray-400">(+48) 665 775 566 (9:00 - 17:00 - Od poniedziałku do piątku)</p>
                  <a href="mailto:biuro@kalorieemocji.pl" className="text-blue-400 hover:text-blue-300 transition-colors">
                    biuro@kalorieemocji.pl
                  </a>
                </div>
              </div>

              {/* Spacer */}
              <div className="lg:col-span-4"></div>

              {/* Information Column */}
              <div className="lg:col-span-4">
                <h4 className="text-orange-500 font-semibold mb-4">Informacje</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                      Przewodnik zakupowy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                      Polityka prywatności
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                      Regulamin
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-800 pt-8">
              <div className="text-center text-gray-500 space-y-2">
                <p>© 2024 Kalorie Emocji. All Rights Reserved</p>
                <p>
                  <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">PMWeb</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HealthProfessionalPage;