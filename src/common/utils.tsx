import Const from "./const";

export function getChkBool(chkValue: number) {
    return (chkValue == 1);
}

export function getChkValue(chkBool: boolean) {
    return (chkBool ? 1 : 0);
}

export function createURL(url: string, prams?: { [key: string]: any; }) {
    let host: string = "";
    let opt: string = "";
    if (process.env.NODE_ENV === "production") {
        host = "https://localhost";
    } else {
        host = "https://localhost";
    }
    if (prams != undefined) {
        for (const key in prams) {
            if (prams[key] != null) {
                opt += (opt == "" ? "?" : "&");
                opt += key + "=" + prams[key];
            }
        }
    }
    return host + url + opt
}

export function getGAID(){
    if (process.env.NODE_ENV === "production") {
        return "";
    } else {
        return "";
    }
}

export function isEnptystr(str: string | null | undefined) {
    return (str == null || str == undefined || str == "")
}

export function isEnptynum(i: number | null | undefined) {
    return (i == null || i == undefined || i == 0)
}

export function dateNumToStr(i: number):string{
    return i +"";
}