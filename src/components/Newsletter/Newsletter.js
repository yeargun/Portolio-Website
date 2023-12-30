"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./Newsletter.module.scss";
import useRefWithCallback from "@hooks/useRefWithCallback";

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const disableSubmitButtonCallbackOnMount = (ref) => {
  ref.disabled = true;
};

const doNone = () => {};

export default function NewsLetter() {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const submitButtonRef = useRef(null);
  const setSubmitButtonRef = useRefWithCallback(
    disableSubmitButtonCallbackOnMount,
    doNone
  );

  const [ReactConfetti, setReactConfetti] = useState(null);

  const [showCongratulations, setShowCongratulations] = useState(false);
  const [isSubscribedAlready, setIsSubscribedAlready] = useState(false);
  const [isWaitingSubsRes, setIsWaitingSubsRes] = useState(false);
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => {
    import("react-confetti").then((module) => {
      setReactConfetti(() => module.default);
    });
  }, []);

  const handleSubscription = async () => {
    try {
      setIsWaitingSubsRes(true);

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef?.current.value,
          name: nameRef?.current?.value,
        }),
      });
      if (typeof navigator?.vibrate === "function")
        navigator?.vibrate([200, 100, 200]);
      const datas = await response.json();

      setIsWaitingSubsRes(false);
      setIsSubscribedAlready(true);
      setShowAnim(true);
      setShowCongratulations(true);
      setTimeout(() => {
        setShowCongratulations(false);
      }, 6300);
      setTimeout(() => {
        setShowAnim(false);
      }, 3500);
    } catch (error) {
      setShowCongratulations(false);
      setIsWaitingSubsRes(false);
    }
  };

  const handleEmailChange = (e) => {
    submitButtonRef.current.disabled = !emailPattern.test(e.target.value);
  };

  if (isSubscribedAlready)
    return (
      <>
        {showCongratulations && (
          <h3 className={styles.congratsMessage}>
            Congrats! Successfully subscribed
          </h3>
        )}
        {ReactConfetti && showCongratulations && (
          <ReactConfetti
            width={window?.innerWidth}
            height={window?.innerHeight}
            numberOfPieces={550}
            run={true}
            recycle={false}
          />
        )}
      </>
    );
  return (
    <>
      <div className={styles.theWrapper}>
        <p>
          Receive notifications from <b>high&nbsp;quality</b> opinions of mine.
          Lifestyle, computer science related.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubscription();
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                marginBottom: "3px",
                alignItems: "center",
              }}
            >
              <label htmlFor="email" style={{ width: "4rem" }}>
                email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={styles.inputs}
                ref={emailRef}
                required
                onChange={handleEmailChange}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label htmlFor="name" style={{ width: "4rem" }}>
                name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.inputs}
                ref={nameRef}
              />
            </div>
          </div>

          <button
            className={styles.subscribeButton}
            type="submit"
            disabled={isSubscribedAlready || isWaitingSubsRes}
            ref={(ref) => {
              submitButtonRef.current = ref;
              setSubmitButtonRef(ref);
            }}
          >
            {"Subscribe"}
          </button>
        </form>
      </div>
    </>
  );
}
