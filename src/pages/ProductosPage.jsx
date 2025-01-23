import React from 'react'

const ProductosPage = () => {
  return (
    <div className='py-6'>
      <h1 className='text-center text-3xl font-extrabold mb-4'>
        CATALOGO DE PRODUCTOS
      </h1>
      <section className='w-full max-w-[1300px] mx-auto ring-2 ring-slate-500 rounded-xl P-8 bg-gradient-to-r from-[#0077B6] to-[#A28ED9]'>
        <div className=''>
          <form className="max-w-md mx-auto">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg 
                  className="w-4 h-4 text-gray-500 dark:text-gray-400" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 20 20">
                  <path 
                    stroke="currentColor" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>
        </div>
        <div className='py-6'>
          <h1 className='text-xl text-center font-bold'>
            PINTURAS DECORATIVAS
          </h1>
          <div className='bg-white p-4'>
            <div>
              <img src="" alt="Foto Producto" />
              <div>
                <p>Nombre Producto</p>
                <p>Marca:</p><span>Tekno</span>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductosPage