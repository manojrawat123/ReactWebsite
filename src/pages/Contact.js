import React from "react";
import "../my.css"

const Contact = ()=>{
    return (
    <>
       <div class="col-span-9 flex flex-col">
            <div class="mt-5 mx-10 border-b-2">
                <h1 class="text-3xl">Contact Us</h1>
            </div>
            <div id="phoneform">
              <form action="#" id="form" className="">
                  <label for="name">Name: <br/>
                      <input class="shadow appearance-none border rounded py-2 w-[57vw] h-[2rem] px-3 text-gray-700 leading-tight outline-2 outline-green-500" id="username" type="text" />

                  </label><br/>
                  <label for="eamil">Email: <br/>
                      <input class="shadow appearance-none border rounded py-2 w-[57vw] h-[2rem] px-3 text-gray-700 leading-tight outline-2 outline-green-500" id="username" type="text" />

                  </label><br/>
                  <label for="subject">Subject: <br/>
                      <input class="shadow appearance-none border rounded py-2 w-[57vw] h-[2rem] px-3 text-gray-700 leading-tight outline-2 outline-green-500" id="username" type="text" />

                  </label><br/>
                  <label for="contact">Contact: <br/>
                      <input class="shadow appearance-none border rounded py-2 w-[57vw] h-[2rem] px-3 text-gray-700 leading-tight outline-2 outline-green-500" id="username" type="text" />

                  </label><br/>
                  <label for="name">Address: <br/>
                      <textarea name="message" id="message" cols="60" rows="2" class="w-[57vw] border rounded outline-2 outline-green-500 mt-4 wtext" ></textarea>

                  </label><br/>
                  <label for="name">Message: <br/>
                      <textarea name="message" id="message" cols="60" rows="2" class="w-[57vw] border rounded outline-2 outline-green-500 mt-4 wtext"></textarea>

                  </label>
                  <div class="rbutton">

                      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                          Send
                      </button>
                  </div>


              </form> 
        </div>
          <div class="formtwo mx-auto">
            <div class=" sm:block pb-[1rem] h-[40rem] w-[40rem]  mt-[1rem] border-2 border-solid border-black rounded-xl ">
                <form class=" mx-10 mt-10">
                    <div class="mb-4">
                        <label class="text-xl font-bold mb-2" for="username">
                          Name: <br/>
                        </label>
                        <input class="shadow appearance-none border border-solid border-gray-800 rounded py-2 w-[35.5rem] h-[2rem] px-3 text-gray-700 leading-tight outline-2 outline-green-500" id="username" type="text" />
                      </div>
                      <div class="mb-4">
                        <label class=" text-xl font-bold mb-2" for="username">
                          Email: <br/>
                        </label>
                        <input class="shadow appearance-none border border-solid border-gray-800 rounded py-2 w-[35.5rem] h-[2rem] px-3 text-gray-700 leading-tight outline-2 outline-green-500" id="username" type="email" />
                      </div>
                      <div class="mb-4">
                        <label class=" text-xl font-bold mb-2" for="username">
                          Subject: <br/>
                        </label>
                        <input class="shadow appearance-none  border border-solid border-gray-800 rounded py-2 w-[35.5rem] h-[2rem] px-3 text-gray-700 leading-tight outline-2 outline-green-500" id="username" type="text" />
                      </div>
                      <div class="mb-4">
                        <label class="text-xl font-bold mb-2" for="phone">
                          Contact: <br/>
                        </label>
                        <input class="shadow appearance-none border border-solid border-gray-800 rounded py-2 w-[35.5rem] h-[2rem] px-3 text-gray-700 leading-tight outline-2 outline-green-500" id="username" type="text" />

                      </div>

                      <div class="mb-4">
                        <label class="text-xl font-bold " for="msg">
                          Adress: <br/>
                          <textarea id="w3review" name="w3review" rows="2" cols="50" class="border border-solid border-gray-800 rounded outline-2 outline-green-500 mt-4"></textarea>
                        </label>
                      </div>
                      <div class="mb-4">
                        <label class="text-xl font-bold " for="msg">
                          Message: <br/>
                          <textarea id="w3review" name="w3review" rows="2" cols="50" class="border border-solid border-gray-800 rounded outline-2 outline-green-500 mt-4"></textarea>
                        </label>
                      </div>

                      <div class="text-center">
                          

                          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                            Send
                          </button>
                       </div>
                </form>
                <br/>
                <br/>
                <br/>
            </div>

        </div>
        </div>

    </>
    )
}

export default Contact