export default function SubmitButton({title}:{title:string}){
    return(
        <button type="submit" className='w-[400px] bg-[#d9d9d9] rounded-lg h-[60px] hover:text-white '>{title}</button>
    )
}