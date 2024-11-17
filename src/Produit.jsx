export default (props)=>{
    return(
        <>
        <div className="flex flex-col p-7 shadow-2xl border gap-4">
            <img className="w-full h-full object-cover" src= {props.img} />
            <h1 className="font-bold text-2xl"> {props.tittle} </h1>
            <h2 className="underline font-semibold"> {props.price}$ </h2>
        </div>
        
        
        </>
    )
}