const Animal=({data})=>{
    const {id,url,width,height}=data
    return (
        <div>
           <div>
            <img className="w-96 h-96" src={url} />
           </div>
        </div>
    )
}
export default Animal