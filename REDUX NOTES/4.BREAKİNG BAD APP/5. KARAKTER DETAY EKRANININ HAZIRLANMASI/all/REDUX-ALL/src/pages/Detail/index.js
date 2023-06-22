
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCharacters } from '../../redux/charactersSlice'

function Detail() {
    const characters = useSelector((state) => state.characters.items)

    const dispatch = useDispatch()

    const { char_id } = useParams()

    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch]);

    const character_id = characters.map((character) => (
        character
    ))
    const searh_id = character_id.find(id => id.char_id == char_id);
    
     //EN SON EKLENMİŞTİR!!!
    // BURASI DAHA ÖNCESİNDE SAYFA YENİLEME ESNASINDA HATA VERİP KİTLENMEYE YOL AÇIYORDU. FAKAT BU İŞLEMLE BUNUN ÖNÜNE GEÇTİK. ŞİMDİ SAYFA YENİLENİNCE ARAYIP BULAMADIĞI ELEMAN 
    // OLURSA HOME SAYFASINA YÖNLENDİRME SAĞLANDI.
     if (!searh_id) {
        return <Navigate to="/" />
    };
    
    return (
        <div>
            Detail

            <div>
                <h2>{searh_id.name} - {searh_id.nickname}</h2>
                <img alt={searh_id.name} src={searh_id.img} style={{ width: '25%' }} />
            </div>

            <pre>{JSON.stringify(searh_id, null, 2)}</pre>
        </div>
    )
}

export default Detail;


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Loading from "../../components/loading";

// function Detail() {
//     const [char, setChar] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { char_id } = useParams(); //id çağırma

//     useEffect(() => {
//         axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
//             .then((res) => res.data)
//             .then((data) => setChar(data[0]))
//             .finally(() => setLoading(false));
//     }, [char_id]);


//     return (
//         <div>
//             <h1> detail page</h1>
//             {loading && <Loading />}
//             {char && (
//                 <div>
//                     <h1> {char.name} </h1>
//                     <img src={char.img} alt="" style={{ width: "50%" }} />
//                 </div>
//             )}
//             {char && <code> {JSON.stringify(char)} </code>}
//         </div>
//     )
// }

// export default Detail;
