
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
//css masonary
import Masonry from 'react-masonry-css'
//css
import "./styles.css"
//components
import Loading from "../../components/loading";
import Error from "../../components/error";

function Home() {
    const characters = useSelector((state) => state.characters.items);
    const isLoading = useSelector((state) => state.characters.isLoading);
    const error = useSelector((state) => state.characters.error);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch])

    if(isLoading) {
        return <Loading/>
    }

    if(error) {
        return <Error message={error}/>
    }
    console.log(characters)

    return (
        <div>
            <h1>breaking bad characters</h1>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {
                    characters.map((character) => (
                        <div key={character.char_id}>
                            <img alt={character.name} src={character.img} className="character" />
                       <div className="char_name" >{character.name}</div>
                        </div>
                    ))
                }
            </Masonry>

        </div>
    )
};

export default Home;