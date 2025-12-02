export declare const baseUrl = "https://acc-landing.vercel.app/locale/";
export declare const loadJson: (url: string) => Promise<any>;
export type Translation = {
    translation: string;
};
export type Resources = Record<string, Translation>;
export declare const languageArray: {
    lang: string;
    name: string;
}[];
export declare const getLanguagePromises: () => Promise<any>[];
export declare const languages: string[];
export declare const rtlLanguages: string[];
