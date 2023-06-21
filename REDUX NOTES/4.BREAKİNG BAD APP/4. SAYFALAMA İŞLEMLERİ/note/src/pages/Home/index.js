
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import { Link } from "react-router-dom";
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
    const nextPage = useSelector((state) => state.characters.page);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);
    const status = useSelector((state) => state.characters.status);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch])

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error message={error} />
    }
    console.log(characters)

    return (
        <div>
            <h1>breaking bad characters</h1>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {React.Children.toArray(
                    characters.map((character) => (
                        <div>
                            <Link to={`/char/${character.char_id}`}>
                                <img
                                    src={character.img.split("").slice(43).join("").toString()}
                                    alt={character.name}
                                    className="character-img"
                                />
                                <div className="char_name">{character.name}  - <b>{character.nickname}</b></div>
                            </Link>
                        </div>
                    ))
                )}
            </Masonry>

            <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
                {status === "loading" && <Loading />}
{/* BURDA DA EĞER LOADİNG YOKSA BUYON GÖSTER DİYORUZ VARSA LOADİNG ÇIKIYOR YOKSA BUTON */}
                {hasNextPage && status !== "loading" && (
                    <button className="btn"
                        onClick={() => dispatch(fetchCharacters(nextPage))} >Load More {`(${nextPage})`}
                    </button>
                )}
                {/* çekilen api eğer bittiyse gösterilcek birşey yok yazısı çıkarıyoruz. */}
                {!hasNextPage && (<div style={{ color: "black" }}>There is nothing to be shown.</div>)}
            </div>
        </div>
    )
};

export default Home;
