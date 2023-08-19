import { useState } from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import styles from "./Panel.module.css";

export function Panel() {
    const [data, setData] = useState([
        {
            id: 1,
            word: "cat",
            translation: "kot",
            category: "noun",
        },
        {
            word: "dog",
            translation: "pies",
            category: "noun",
            id: 2,
        },
        {
            word: "jump",
            translation: "skakać",
            category: "verb",
            id: 3,
        },
    ]);

    return (
        <>
            <Button>Załaduje dane</Button>
            <section className={styles.section}>
                <List data={data}></List>
            </section>
        </>
    );
}
