
import React from "react";
//list componenti
import List from "./list";
//contentFooter componenti
import ContentFooter from "./contentFooter";

function Content() {
    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <List />

            </section>

            <ContentFooter />
        </>
    )
}

export default Content;