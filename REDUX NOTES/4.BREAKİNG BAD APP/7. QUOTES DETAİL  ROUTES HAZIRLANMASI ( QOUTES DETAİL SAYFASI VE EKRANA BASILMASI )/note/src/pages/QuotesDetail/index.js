
import React from "react";
// useParams detaya gidilmesi gerekli olduğu için
import { useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { quotesSelector } from "../../redux/quotesSlice";


function QuotesDetail() {
    const { quote_id } = useParams();

    const items = useSelector(quotesSelector);

    const quote = items.find((item) => item.quote_id === Number(quote_id));
    // const quote = useSelector((state) => state.quotes.items.find((item) => item.quote_id === Number(quote_id)))
   
    if (!quote) {
        return <Navigate to="/quotes" />
    }

    return (
        <div>
            <h1>Quote Details</h1>
            <pre> {JSON.stringify(quote, null, 2)} </pre>

        </div>
    )
}

export default QuotesDetail;