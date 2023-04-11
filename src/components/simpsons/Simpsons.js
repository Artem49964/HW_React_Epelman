import SimpsonDOM from "../simpson/Simpson";


const SimpsonsMap = () => {
    const simpsonsArray = [
        {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
        },
        {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
        },

        {
            id: 3,
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
        },

        {
            id: 4,
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
        },

        {
            id: 5,
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"

        },


        {
            id: 6,
            name: "Abadango Cluster Princess",
            status: "Alive",
            species: "Alien",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
        }

    ];

    return (
        <>

            {
                simpsonsArray.map((value, index) => <SimpsonDOM key={value.id} arg={value}/>)
            }
        </>

    )



}
export default SimpsonsMap




