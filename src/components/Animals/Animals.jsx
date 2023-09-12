import { useEffect, useState } from "react"
import Animal from "../Animal/Animal"
const Animals = () => {
    const [animalPhotos, setAnimalPhotos] = useState([])
    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search?limit=10")
            .then(res => res.json())
            .then(data => setAnimalPhotos(data))
    }, [])

    return (
        <div>
            <section className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-20 bg-indigo-300 my-10 rounded-md">
                <h2 className="text-2xl font-bold text-center py-2">Animals</h2>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl mx-auto  border-2 border-red-500">
            {
                animalPhotos.map(item=><Animal key={item.id}  data={item} />)
            }
            </div>
        </div>
    )
}
export default Animals