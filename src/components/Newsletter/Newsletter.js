"use client";
import React, {useState, useRef, useEffect} from "react";
import styles from './Newsletter.module.scss'
export default function NewsLetter() {
    const inputRef = useRef(null);
    const [ReactConfetti, setReactConfetti] = useState(null);
    const [showConfettis, setShowConfettis] = useState(false);
    const [isSubscribedAlready, setIsSubscribedAlready] = useState(false);
    const [showAnim, setShowAnim] = useState(false);
    useEffect(() => {
        import("react-confetti").then(module => {
            setReactConfetti(() => module.default)
        })
    }, []);

    const handleSubscription = async () => {

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: inputRef?.current.value,
                }),
            });
            debugger;
            const datas = await response.json();
            setIsSubscribedAlready(true);
            setShowConfettis(true)
            setShowAnim(true)
            setShowConfettis(true);
            setTimeout(() => {
                setShowConfettis(false);

            }, 9000);
            setTimeout(() => {
                setShowAnim(false);

            }, 5500);
        } catch (error) {
            setShowConfettis(false)
                console.log('error sbuscribing')
        }
    }

    return (
        <>
            { ReactConfetti && showConfettis &&(
                <ReactConfetti
                    width={window?.innerWidth}
                    height={window?.innerHeight}
                    numberOfPieces={550}
                    run={true}
                    recycle={showAnim}
                />
            )}
            <div className={styles.theWrapper}>
                <div className={styles.description}>
                    <h1>
                        Subscribe to the newsletter!
                    </h1>
                    <p>
                        Receive notifications of <b>high-quality</b> opinions of mine. Lifestyle, computer science
                        related.
                    </p>
                </div>
                <form
                    onSubmit={ (e) => {
                        e.preventDefault()
                        handleSubscription().then(r => console.log('asda'))
                    }}>

                    <input
                        type="email"
                        name="email"
                        className={styles.emailInput}
                        placeholder="Enter your email"
                        ref={inputRef}
                        required
                    />
                    <button
                        className={styles.subscribeButton}
                        type="submit"
                        disabled={isSubscribedAlready}
                    >
                        {"Subscribe"}
                    </button>

                    {/*{message && (*/}
                    {/*    <p*/}
                    {/*        className={`${*/}
                    {/*            status !== 201 ? "text-red-500" : "text-green-500"*/}
                    {/*        } pt-4 font-black `}*/}
                    {/*    >*/}
                    {/*        {message}*/}
                    {/*    </p>*/}
                    {/*)}*/}
                </form>
            </div>
        </>
    );
}