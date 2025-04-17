import React from 'react'
import { userAppContext } from '../context/AppContext'
import { userParams } from 'react-router-dom'

const ProductCategory = () => {
    const {prducts} = userContext()
    const {category} = userParams()

    const searchCategory = category.find((item)=> item.path.toLowerCase()=== category)

    const filteredProducts = Products.filter((Product)=>Product.category.toLowerCase() === category)




  return (
    <div className='mt-16'>
        {searchCategory && (
            <div className='flex flex-col items-end w-max'>
                <p>{searchCategory.text.toUpperCase()}</p>
                <div className="w-16 h-0.5 bg-primary rounded-full"></div>
            </div>
        )}
        {filteredProducts.length > 0 ?(
            <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4lg:grid-cols5 gap-3 md:gap-6 mt-6'>
                {filteredProducts.map((product)=>(
                    <Productcard key={product._id} product={product}/>
                ))}
            </div>
        ): (
            <div className='flex items justify-center h-[60vh'>
                <p className='text-2xl font-medium text-primary'>No products found in this category. </p>
            </div>
        )}
    
    </div>
  )
}

export default ProductCategory