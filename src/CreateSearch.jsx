import { useState } from "react";
import { useEffect } from "react";
import useBreedList from "./useBreedList";
// import Pet from "./Pet";
import Results from "./Results";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const CreateSearch = () => {
    // const location = "Seattle , WA";
    const [location,setLocation] = useState(""); //THIS IS A USAGE OG HOOK
    const [animal,updateAlimal] = useState("");
    const [breed,setBreed] = useState("");
    const [breeds] = useBreedList(animal);
    const [pets,setPets] = useState([]);

    useEffect( () => {
        requestList();
    },[]);     // eslint-disable-line react-hooks/exhaustive-deps

    async function requestList(){
        const res = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
        const json = await res.json();
        setPets(json.pets);

    }
     return (
        <div className="search-params">
            <form onSubmit={(e) => { e.preventDefault();
                                     requestList();               
                                   }}>
                
                <label htmlFor="location">
                    location
                
                <input type="text"  placeholder = "location" value={location}  id="loc" onChange={(e) => {setLocation(e.target.value)}}/>
                </label>
                <label htmlFor="animal">
                    animal
                </label>
                <select 
                id="animal" 
                value={animal} 
                placeholder="animal" 
                onChange={ (e) => {updateAlimal(e.target.value);
                                   setBreed("");}}
                >
                    <option />
                    {ANIMALS.map((animal) => 
                            <option key={animal}>{animal}</option>
                            )
                    }
                </select>        

                <label htmlFor="breed">
                    breed
                </label>
                <select 
                id="breed" 
                value={breed} 
                placeholder="breed"
                disabled = {breeds.length === 0} 
                onChange={ (e) => {setBreed(e.target.value);}}
                >
                    <option />
                    {breeds.map((breed) => 
                            <option key={breed}>{breed}</option>
                            )
                    }
                </select>    
            
            <button type="submit">SUBMIT</button>
            </form>
            {/* {
                pets.map((pet) => 
                    <Pet name = {pet.name} animal = {pet.animal} breed = {pet.breed} key = {pet.id}/>
                )
            }*/}

            <Results pets={pets}/>
        
        </div>
    );
};

export default CreateSearch;
