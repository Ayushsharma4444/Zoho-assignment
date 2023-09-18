import React from 'react'

const Footer = () => {
  return (
    <div>

        
<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Zoho</span> */}
            </a>

            <span className='flex flex-wrap items-end  text-lg font-bold text-gray-500 sm:mb-0 dark:text-gray-400 text-blue-400'>sales@zohocorp.com</span>
            {/* <hr/> */}
            {/* <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul> */}
        </div>
        {/* <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <div className='flex text-sm justify-center gap-4 text-black'>
            <div>
                <span> ZOHO Home |</span>
            </div>
            <div>
                <span> Contact Us |</span>
            </div>
            <div>
                <span> Security |</span>
            </div>
            <div>
                <span> Compalience |</span>
            </div>
            <div>
                <span> Term of Service |</span>
            </div>
            <div>
                <span> Privacy abd Policy |</span>
            </div>
            <div>
                <span> Cookie Policy |</span>
            </div>
            <div>
                <span> Abuse Policy |</span>
            </div>
            <div>
                <span> Sitemap </span>
            </div>
        </div><br/>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline"></a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer