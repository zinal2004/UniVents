import React, {useState} from 'react'
import { HiMiniBanknotes } from "react-icons/hi2";
import { TbNotesOff } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";

const CreateEventTicket = () => {
    const [isTicketed, setIsTicketed] = useState(false);
    const [tickets, setTickets] = useState([{name:"", price:""}]);
    
    const handleAddTicket = () =>{
        setTickets([...tickets,{name:"",price:""}])
    };
    const handleTicketChange = (index,fields,value)=>{
        const updatedTickets = [...tickets];
        updatedTickets[index][fields] = value;
        setTickets(updatedTickets);
    }
    const handleDeleteTicket = (index) =>{
        if(tickets.length > 1){
            setTickets(tickets.filter((_,i)=>i!==index));
        }
    }
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
    <h2 className="text-2xl font-semibold text-gray-700 text-left ml-50 mt-10">Event Details</h2>
    <div className="flex items-center w-full max-w-5xl mx-auto mt-10  ">
      <div className="flex-1">
        <div className="flex-1 flex items-center">
        {/* Step 1 - Active */}
        <div className="flex-1 flex items-center">
          <div className="w-full h-1 bg-gray-300"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
        <div className="w-full h-1 bg-gray-300"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
        <div className="w-full h-1 bg-gray-300"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div className="w-full h-1 bg-gray-600"></div>
          <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        </div>
        
        <div className="flex-1 flex items-center justify-between">
        <span className="text-gray-900 font-semibold ml-35">Edit</span>
        <span className="text-gray-400 ml-33">Banner</span>
        <span className="text-gray-400 ml-30">Ticketing</span>
        <span className="text-gray-400 ml-30">Review</span>
        </div>
    </div>
</div>
<div>
    {/* Event Form */}
    <h2 className="text-2xl font-semibold text-amber-400 text-left ml-50 mt-10">What type of Event are you running?</h2>
    <div className='flex items-center space-x-4 space-y-4'>
    <button className={`flex-col items-center justify-between border-2 border-white p-5 ml-84 mt-12 hover:bg-gray-100 cursor-pointer 
    ${isTicketed ?"":""}`} onClick={()=>setIsTicketed(true)}>
    <div className='ml-23 text-white'>
    <HiMiniBanknotes size={40} />
    </div>
    <h2 className='ml-1 text-white'>Ticketed Event</h2>
    <p className='text-white'>My Event requires ticket for entry.</p>
    </button>
    <div className='flex items-center space-x-4 space-y-4'>
    <button className={`flex-col items-center justify-between border-2 border-white p-5 ml-75 mt-7 hover:bg-gray-100 cursor-pointer ${
        !isTicketed ?"" : ""}`} onClick={()=>setIsTicketed(false)}>
    <div className='ml-17 text-white'>
    <TbNotesOff size={40} />
    </div>
    <h2 className='ml-1 text-white'>Free Event</h2>
    <p className='text-white'>I'm running a free event.</p>
    </button>
    </div>
    </div>
    
    {isTicketed && (
        <>
          <h2 className="text-2xl font-semibold text-gray-700 text-left mt-10 mb-5 ml-50">What tickets are you selling?</h2>
          <div>
            <label className="text-lg text-gray-700 font-semibold ml-60">Ticket Name</label>
            <label className="text-lg text-gray-700 font-semibold ml-80">Ticket Price</label>
          </div>
          <div className="mt-5 space-y-4">
            {tickets.map((ticket, index) => (
              <div key={index} className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Ticket name e.g. General Admission"
                  className="w-75 h-10 px-3 ml-60 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={ticket.name}
                  onChange={(e) => handleTicketChange(index, "name", e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Ticket Price"
                  className="w-75 h-10 px-3 ml-27 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  value={ticket.price}
                  onChange={(e) => handleTicketChange(index, "price", e.target.value)}
                />
                {/* Delete Ticket Button */}
                <button
                  className="px-3 py-2 ml-10 text-white bg-gray-600 rounded-md hover:bg-gray-500 transition-all"
                  onClick={() => handleDeleteTicket(index)}
                  disabled={tickets.length === 1}
                >
                  <MdDelete size={23}/>
                </button>
                <button 
                className="px-3 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500 transition-all"
                onClick={()=>handleAddTicket()}
                >
                   <IoAddOutline size={23} />
                </button>
              </div>
            ))}
            
          </div>
        </>
    )}
    </div>
    <div className='flex mt-10 gap-3 justify-end mr-10'>
        <button className='px-3 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500 transition-all'>
            Go Back
        </button>
        <button className='px-3 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-500 transition-all'>
            Save and Continue
        </button>
    </div>
    </div>
  )
}

export default CreateEventTicket