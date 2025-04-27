"use client";

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test slika</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lokalna slika - direktni pristup */}
        <div className="border p-4 rounded shadow-md">
          <h2 className="font-semibold mb-2">1. Lokalna slika (direktni pristup)</h2>
          <img src="/images/logo.png" alt="Logo" className="w-full h-48 object-cover rounded" />
        </div>
        
        {/* Google slika - direktni pristup */}
        <div className="border p-4 rounded shadow-md">
          <h2 className="font-semibold mb-2">2. Google slika (direktni pristup)</h2>
          <img 
            src="https://lh3.googleusercontent.com/p/AF1QipOv_UmbnvAmhmhJoSJU7NtTCPyacnp-PcMYW2qG=w800-h500-k-no" 
            alt="Google slika" 
            className="w-full h-48 object-cover rounded"
          />
        </div>

        {/* Street View slika - direktni pristup */}
        <div className="border p-4 rounded shadow-md">
          <h2 className="font-semibold mb-2">3. Street View slika (direktni pristup)</h2>
          <img 
            src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=UfVVctiwq54-ZxheefXX8w&cb_client=search.gws-prod.gps&w=800&h=500&yaw=36.811245&pitch=0&thumbfov=100" 
            alt="Street View slika" 
            className="w-full h-48 object-cover rounded"
          />
        </div>

        {/* Unsplash slika - direktni pristup */}
        <div className="border p-4 rounded shadow-md">
          <h2 className="font-semibold mb-2">4. Unsplash slika (direktni pristup)</h2>
          <img 
            src="https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Unsplash slika" 
            className="w-full h-48 object-cover rounded"
          />
        </div>
      </div>

      {/* Featured Pet Businesses Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Najbolje ocenjeni biznisi</h2>
        <p className="text-gray-600 text-center mb-8">Pogledajte najbolje ocenjene biznise za kućne ljubimce u Beogradu</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1 */}
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1583511655826-05700a52f0d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Pet Centar" 
                className="w-full h-44 object-cover bg-blue-100" 
              />
              <div className="absolute top-2 left-2 bg-purple-700 text-white py-1 px-2 text-xs rounded">Popularno</div>
              <div className="absolute top-2 right-2 bg-gray-800 text-white py-1 px-2 text-xs rounded flex items-center">
                <span>4.7 (27)</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Pet Centar</h3>
              <p className="text-gray-600 text-sm">Omladinskih brigada 86, Novi Beograd</p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-semibold">+381 11 2167 123</span>
              </p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="bg-purple-700 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Website</a>
                <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Pregled</a>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Veterinarska stanica Filipović" 
                className="w-full h-44 object-cover bg-blue-100" 
              />
              <div className="absolute top-2 left-2 bg-purple-700 text-white py-1 px-2 text-xs rounded">Popularno</div>
              <div className="absolute top-2 right-2 bg-gray-800 text-white py-1 px-2 text-xs rounded flex items-center">
                <span>4.8 (31)</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Veterinarska stanica Filipović</h3>
              <p className="text-gray-600 text-sm">Patrisa Lulumbe 18, Stari Grad</p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-semibold">+381 11 3230 333</span>
              </p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="bg-purple-700 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Website</a>
                <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Pregled</a>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Pet Beauty Salon" 
                className="w-full h-44 object-cover bg-blue-100" 
              />
              <div className="absolute top-2 left-2 bg-purple-700 text-white py-1 px-2 text-xs rounded">Popularno</div>
              <div className="absolute top-2 right-2 bg-gray-800 text-white py-1 px-2 text-xs rounded flex items-center">
                <span>4.9 (42)</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Pet Beauty Salon</h3>
              <p className="text-gray-600 text-sm">Bulevar Zorana Đinđića 125, Novi Beograd</p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-semibold">+381 63 123 4567</span>
              </p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="bg-purple-700 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Website</a>
                <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Pregled</a>
              </div>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Urban Pets" 
                className="w-full h-44 object-cover bg-blue-100" 
              />
              <div className="absolute top-2 left-2 bg-purple-700 text-white py-1 px-2 text-xs rounded">Popularno</div>
              <div className="absolute top-2 right-2 bg-gray-800 text-white py-1 px-2 text-xs rounded flex items-center">
                <span>4.6 (19)</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Urban Pets</h3>
              <p className="text-gray-600 text-sm">Knez Mihailova 21, Stari Grad</p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-semibold">+381 11 3365 252</span>
              </p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="bg-purple-700 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Website</a>
                <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Pregled</a>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Petshop Beograd" 
                className="w-full h-44 object-cover bg-blue-100" 
              />
              <div className="absolute top-2 left-2 bg-purple-700 text-white py-1 px-2 text-xs rounded">Popularno</div>
              <div className="absolute top-2 right-2 bg-gray-800 text-white py-1 px-2 text-xs rounded flex items-center">
                <span>4.5 (23)</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Petshop Beograd</h3>
              <p className="text-gray-600 text-sm">Bulevar kralja Aleksandra 142, Zvezdara</p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-semibold">+381 64 555 6879</span>
              </p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="bg-purple-700 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Website</a>
                <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Pregled</a>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Pet Hotel Royal" 
                className="w-full h-44 object-cover bg-blue-100" 
              />
              <div className="absolute top-2 left-2 bg-purple-700 text-white py-1 px-2 text-xs rounded">Popularno</div>
              <div className="absolute top-2 right-2 bg-gray-800 text-white py-1 px-2 text-xs rounded flex items-center">
                <span>4.7 (38)</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Pet Hotel Royal</h3>
              <p className="text-gray-600 text-sm">Braće 57, Rakovica</p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-semibold">+381 61 3784 902</span>
              </p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="bg-purple-700 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Website</a>
                <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Pregled</a>
              </div>
            </div>
          </div>
          
          {/* Row 3 */}
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Dog Training Academy" 
                className="w-full h-44 object-cover bg-blue-100" 
              />
              <div className="absolute top-2 left-2 bg-purple-700 text-white py-1 px-2 text-xs rounded">Popularno</div>
              <div className="absolute top-2 right-2 bg-gray-800 text-white py-1 px-2 text-xs rounded flex items-center">
                <span>4.9 (27)</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Dog Training Academy</h3>
              <p className="text-gray-600 text-sm">Cara Dušana 42, Zemun, Beograd</p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-semibold">+381 66 123 0976</span>
              </p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="bg-purple-700 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Website</a>
                <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Pregled</a>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Pet Memorial" 
                className="w-full h-44 object-cover bg-blue-100" 
              />
              <div className="absolute top-2 left-2 bg-purple-700 text-white py-1 px-2 text-xs rounded">Popularno</div>
              <div className="absolute top-2 right-2 bg-gray-800 text-white py-1 px-2 text-xs rounded flex items-center">
                <span>4.8 (14)</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Pet Memorial</h3>
              <p className="text-gray-600 text-sm">Dragoslava Srejovića 1, Palilula, Beograd</p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-semibold">+381 11 616 6732</span>
              </p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="bg-purple-700 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Website</a>
                <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Pregled</a>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Veterinarska ambulanta Banovo brdo" 
                className="w-full h-44 object-cover bg-blue-100" 
              />
              <div className="absolute top-2 left-2 bg-purple-700 text-white py-1 px-2 text-xs rounded">Popularno</div>
              <div className="absolute top-2 right-2 bg-gray-800 text-white py-1 px-2 text-xs rounded flex items-center">
                <span>4.6 (21)</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">Veterinarska ambulanta Banovo brdo</h3>
              <p className="text-gray-600 text-sm">Požeška 64, Čukarica, Beograd</p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-semibold">+381 11 3546 785</span>
              </p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="bg-purple-700 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Website</a>
                <a href="#" className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm flex-1 text-center">Pregled</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}