import React from "react";
import styles from "./Home.module.css";
import DiaryForm from "./DiaryForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import DiaryList from "./DiaryList";

function Home() {
    const { user } = useAuthContext();
    const { documents, err } = useCollection("diary", ["uid", "==", user.uid]);

    return (
        <div className="container">
            <main className={styles["diary-main"]}>
                <h2 className="heart">2023.02.27의 비밀일기</h2>
                <DiaryForm uid={user.uid}></DiaryForm>
            </main>
            <section>
                <h2 className="a11y-hidden">일기 목록</h2>
                <ul>
                    {err && <strong>{err}</strong>}
                    {documents && <DiaryList diaries={documents} />}
                </ul>
            </section>
        </div>
    );
}

export default Home;
