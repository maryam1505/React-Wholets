import React from 'react'
import { Link } from 'react-router-dom'

const RefreshError = () => {
  return (
    <section class="py-24 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full flex-col justify-center items-center lg:gap-14 gap-10 inline-flex">
            <Link to={"/"}>
              <img src="/images/wholetsLogo.png" alt="Digital seller logo, wholets" />
            </Link>
            <div class="w-full flex-col justify-center items-center gap-5 flex">
                <div class="w-full flex-col justify-center items-center gap-6 flex">
                    <div class="w-full flex-col justify-start items-center gap-2.5 flex">
                        <h2 class="text-center text-gray-800 text-3xl font-bold font-manrope leading-normal">Please Refresh Something might wrong.</h2>
                        <p class="text-center text-gray-500 text-base font-normal leading-relaxed">It's going to take some time to fix the error. Please reload the page.</p>
                    </div>
                </div>
                <img src="https://pagedone.io/asset/uploads/1718004199.png" alt="under maintenance image"/>
            </div>
        </div>
    </div>
</section>

                                        
  )
}

export default RefreshError