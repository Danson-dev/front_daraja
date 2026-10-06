import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import axios from "axios";
import { useState } from "react";

export function AlertDialogDemo() {
  const[isLoading,setIsLoading]=useState(false)
  const[error,setError]=useState('')
  const[amount,setAmount]=useState(0)
  const[phone,setPhone]=useState(254)

  async function handlePrompt(e){
 e.preventDefault()
 try {
  setIsLoading(true)
  setError('')
  const response= await axios.post("http://localhost:4000/api/v1/stkpush",{
    amount,
   phone
 
  })
  console.log(response);
  
 } catch (error) {
  console.error(error);
  setError(error.message)
 }
  }
  return (
 

       <AlertDialog >
      <AlertDialogTrigger asChild className="">
        <Button variant="outline" className="bg-green-500 h-40 w-79 text-2xl text-white">PROMPT USING MPESA</Button>
      </AlertDialogTrigger>
      <AlertDialogContent  className="h-90 w-90">
        <AlertDialogHeader>
          <AlertDialogTitle>Enter PhoneNumber & Amount</AlertDialogTitle>
          <AlertDialogDescription> 
              
            <input className="border rounded-2xl mt-4 h-9" type="number" placeholder="phoneNumber" value={phone} onChange={(e)=>{setPhone(e.target.value)}}  />
            <input className="border rounded-2xl mt-4 h-9" type="number" placeholder="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />
           
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:cursor-pointer">Cancel</AlertDialogCancel>
 
          
               <AlertDialogAction className="hover:cursor-pointer" onClick={handlePrompt} > {!isLoading?"PROMPT":"PROMPTING..."}</AlertDialogAction>
                     

          
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  
   
  )
}
