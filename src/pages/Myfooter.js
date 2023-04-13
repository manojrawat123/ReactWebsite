import React from 'react'

export default function Footer() {
  return (
    <>
     <footer class="bg-gray-900 text-white">
      <div class="grid md:grid-cols-3 grid-cols-1">
        <div class="text-center my-[1rem]">
          <i class="fa-solid fa-phone"></i> <br />
          <h1>
            <b> Contact us:</b> <br />
            7078177495
          </h1>
        </div>
        <div class="text-center  my-[1rem]">
          <i class="fa-regular fa-envelope"></i><br />
          <b> My EmailId:</b> <br />
          positive.mind123456789@gmail.com
        </div>
        <div class="text-center my-[1rem]">
          <i class="fa-solid fa-location-dot"></i> <br />
          <b>Adress</b> <br />
          New Delhi(Meerabag)
        </div>
        <br />
        <br /><br />
       
      </div>
    </footer>
   
    </>
  )
}
