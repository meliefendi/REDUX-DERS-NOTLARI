
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from "../../redux/quotesSlice";
//error
import Error from "../../components/error";
//loading
import Loading from "../../components/loading";
//item.js dosyası
import Item from "./item";

function Quotes() {

    const dispatch = useDispatch();
    //bu işlemler quotesSlice sayfasında yapılıp buraya export edildi.
    const data = useSelector(quotesSelector);
    const status = useSelector(statusSelector);
    const error = useSelector(errorSelector);
    console.log(data)

    useEffect(() => {
        //burası sadece idle iken tekrar yükle demek. yani sayfalar arası dolaşıp tekrar buraya gelince bilgileri tekrar tekrar yüklemiyor. bunun önüne bu şekilde geçtik.
        // aynısını character görüntüleme sayfasında da gerçekleştirdik.
        if(status === "idle"){
     dispatch(fetchAllQuotes()) 
    }  
    }, [dispatch, status])

    if(error) {
        return <Error message={error} />
    }

    return (
        <div style={{padding: "10px"}} >
            <h1>Quotes</h1>

          {  status === "loading" && <Loading />  }

          {  status === "succeeded" && data.map((item) =>  <Item key={item.quote_id} item={item} /> )  }

          {  status === "succeeded" && <div className="quotes_info" > {data.length} quotes </div>   }
        </div>
    )
}

export default Quotes;