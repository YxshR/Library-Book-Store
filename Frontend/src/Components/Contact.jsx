import React from 'react'
import { Link } from 'react-router-dom'

import { useForm } from "react-hook-form"

const Contact = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)

  return (
    <>
    <div>
    <div id="my_modal_2" className="items-center justify-center h-screen flex">
        <div className=" modal-box ">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          <div className='text-center'>
          <h3 className="font-bold text-lg ">Contact</h3>
          </div>
            <div className='mt-4 space-y-2'>
              <span>
                Name
              </span>
              <br />
              <input type='Text' 
              placeholder='Enter Your FullName'
              className='w-80 px-3 border py-1 rounded-md outline-none'  {...register("name", { required: true })}/>
              <br />
              {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>
                Email
              </span>
              <br />
              <input type='email' 
              placeholder='Enter Your Email'
              className='w-80 px-3 border py-1 rounded-md outline-none'  {...register("email", { required: true })}/>
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>
                Message
              </span>
              <br />
              <textarea 
                placeholder='Enter Your Message'
                className='w-96 h-28 px-3 border py-1 rounded-md outline-none' 
                {...register("message", { required: true })} 
              />
              <br />
              {errors.message && <span className='text-sm text-red-500'>This field is required</span>}

            </div>
            <div className='flex  mt-4 '>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
