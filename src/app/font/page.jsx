import React from 'react'

export default function Font() {
  return ( 
     
   <div className="min-h-screen bg-gray-50 p-8">
     <div className="max-w-4xl mx-auto">
       <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
         Gilroy Font Family Test
       </h1>
       
       <div className="space-y-6">
         <div className="bg-white p-6 rounded-lg shadow-sm">
           <h2 className="text-2xl font-thin mb-4">Gilroy Thin (100)</h2>
           <p className="text-lg font-thin text-gray-600">
             This is Gilroy Thin - perfect for elegant, lightweight text
           </p>
         </div>
         
         <div className="bg-white p-6 rounded-lg shadow-sm">
           <h2 className="text-2xl font-light mb-4">Gilroy Light (300)</h2>
           <p className="text-lg font-light text-gray-600">
             This is Gilroy Light - great for body text and descriptions
           </p>
         </div>
         
         <div className="bg-white p-6 rounded-lg shadow-sm">
           <h2 className="text-2xl font-normal mb-4">Gilroy Regular (400)</h2>
           <p className="text-lg font-normal text-gray-600">
             This is Gilroy Regular - the standard weight for most content
           </p>
         </div>
         
         <div className="bg-white p-6 rounded-lg shadow-sm">
           <h2 className="text-2xl font-medium mb-4">Gilroy Medium (500)</h2>
           <p className="text-lg font-medium text-gray-600">
             This is Gilroy Medium - slightly bolder for emphasis
           </p>
         </div>
         
         <div className="bg-white p-6 rounded-lg shadow-sm">
           <h2 className="text-2xl font-semibold mb-4">Gilroy SemiBold (600)</h2>
           <p className="text-lg font-semibold text-gray-600">
             This is Gilroy SemiBold - perfect for headings and important text
           </p>
         </div>
         
         <div className="bg-white p-6 rounded-lg shadow-sm">
           <h2 className="text-2xl font-bold mb-4">Gilroy Bold (700)</h2>
           <p className="text-lg font-bold text-gray-600">
             This is Gilroy Bold - strong and impactful for titles
           </p>
         </div>
         
         <div className="bg-white p-6 rounded-lg shadow-sm">
           <h2 className="text-2xl font-extrabold mb-4">Gilroy ExtraBold (800)</h2>
           <p className="text-lg font-extrabold text-gray-600">
             This is Gilroy ExtraBold - very strong for special emphasis
           </p>
         </div>
         
         <div className="bg-white p-6 rounded-lg shadow-sm">
           <h2 className="text-2xl font-black mb-4">Gilroy Black (950)</h2>
           <p className="text-lg font-black text-gray-600">
             This is Gilroy Black - the heaviest weight for maximum impact
           </p>
         </div>
       </div>
       
       <div className="mt-12 bg-blue-50 p-6 rounded-lg">
         <h3 className="text-xl font-semibold mb-4 text-blue-800">Usage in Tailwind CSS:</h3>
         <div className="space-y-2 text-sm font-mono bg-white p-4 rounded">
           <p><span className="text-blue-600">font-thin</span> - font-weight: 100</p>
           <p><span className="text-blue-600">font-light</span> - font-weight: 300</p>
           <p><span className="text-blue-600">font-normal</span> - font-weight: 400</p>
           <p><span className="text-blue-600">font-medium</span> - font-weight: 500</p>
           <p><span className="text-blue-600">font-semibold</span> - font-weight: 600</p>
           <p><span className="text-blue-600">font-bold</span> - font-weight: 700</p>
           <p><span className="text-blue-600">font-extrabold</span> - font-weight: 800</p>
           <p><span className="text-blue-600">font-black</span> - font-weight: 950</p>
         </div>
       </div>
     </div>
   </div>
  )
}
