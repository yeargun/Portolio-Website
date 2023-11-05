import {setLocalStorage, useGetLocalStorage} from "@hooks/useLocalStorage";

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
    setLocalStorage("b", obj?.brightness)
    setLocalStorage("c", obj?.contrast)
    setLocalStorage("s", obj?.sepia)
};

const useGetBCS = () => {
    const b =   useGetLocalStorage("b")
    const c =  useGetLocalStorage("c")
    const s = useGetLocalStorage("s")
    if (b && c && s) return { brightness: b, contrast: c, sepia: s };
    setBCS({ brightness: 45, contrast: 95, sepia: 20 });
    return { brightness: 45, contrast: 95, sepia: 25 };
};

const useGetSliderValue = () => {
    const c = useGetLocalStorage("c")
    if (c) return (c - 70) / 5;
    return 5;
};

export { valueToBCS, setBCS, useGetBCS, useGetSliderValue };
