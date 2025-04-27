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
    </div>
  );
} 