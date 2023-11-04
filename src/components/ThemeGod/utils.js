const valueToBCS = (value) => {
    if (value < 5)
        return {
            brightness: value * -1 + 50,
            contrast: value * 5 + 70,
            sepia: 25,
        };

    return {
        brightness: value * -5 + 70,
        contrast: value * 5 + 70,
        sepia: value * 8 + 25,
    };
};

const setBCS = (obj) => {
    localStorage.setItem("b", obj?.brightness);
    localStorage.setItem("c", obj?.contrast);
    localStorage.setItem("s", obj?.sepia);
};

const getBCS = () => {
    const b = localStorage.getItem("b");
    const c = localStorage.getItem("c");
    const s = localStorage.getItem("s");
    if (b && c && s) return { brightness: b, contrast: c, sepia: s };
    setBCS({ brightness: 45, contrast: 95, sepia: 20 });
    return { brightness: 45, contrast: 95, sepia: 25 };
};

const getSliderValue = () => {
    const c = localStorage.getItem("c");
    if (c) return (c - 70) / 5;
    return 5;
};

export { valueToBCS, setBCS, getBCS, getSliderValue };
