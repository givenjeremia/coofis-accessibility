import { FC, useEffect, useRef, useState } from "react";
// import Select, { SingleValue } from "react-select";
// import { SingleValue } from "react-select";

import { AccessibilikState, ChangeAccDraftHander } from "../../../../types";
import AccButton from "../../AccButton/AccButton";
import TextToSpeachIcon from "./../../../../assets/icons/textToSpeach.svg?react";
import styled from "./TextToSpeech.module.scss";

const NOT_SUPPORT_MSG = "Sorry, your browser does not support text-to-speech!";
const DEFAULT_LANG = "id-ID";

interface TextToSpeechProps {
  accState: AccessibilikState;
  onChangeAccState: (fn: ChangeAccDraftHander) => void;
}

type SpeechSynthesisVoiceMap = Record<string, SpeechSynthesisVoice>;

const TextToSpeech: FC<TextToSpeechProps> = ({
  accState,
  onChangeAccState,
}) => {
  const { activateTextToSpeech } = accState;

  const [browserHasSupport, setBrowserHasSupport] = useState(false);
  const [gettingLanguages, setGettingLanguages] = useState(true);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  const voices = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (!activateTextToSpeech) return;

    if (!window.speechSynthesis) {
      alert(NOT_SUPPORT_MSG);
      return;
    }

    const loadVoices = () => {
      const rawVoices = window.speechSynthesis.getVoices();
      if (!rawVoices.length) return;

      const map = rawVoices.reduce((acc, v) => {
        acc[v.lang + v.name] = v;
        return acc;
      }, {} as SpeechSynthesisVoiceMap);

      voices.current = Object.values(map);

      const selectedVoice =
        voices.current.find((v) => v.lang === "id-ID") ||
        voices.current.find((v) => v.lang.startsWith("id")) ||
        voices.current.find((v) => !v.lang.startsWith("en")) ||
        voices.current[0];

      setVoice(selectedVoice);
      setBrowserHasSupport(true);
      setGettingLanguages(false);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [activateTextToSpeech]);

  useEffect(() => {
    if (!activateTextToSpeech) return;
    if (!browserHasSupport || gettingLanguages) return;

    const speakText = (text: string) => {
      const utterance = new SpeechSynthesisUtterance(text);
      if (voice) utterance.voice = voice;

      utterance.lang = DEFAULT_LANG;
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    };

    const handleSelection = () => {
      const text = window.getSelection()?.toString().trim();
      if (text) speakText(text);
    };

    document.addEventListener("mouseup", handleSelection);
    return () => document.removeEventListener("mouseup", handleSelection);
  }, [activateTextToSpeech, browserHasSupport, gettingLanguages, voice]);

  useEffect(() => {
    if (!activateTextToSpeech) return;
    if (!browserHasSupport || gettingLanguages) return;

    const handleHoverLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target instanceof HTMLAnchorElement && target.href) {
        const text = target.innerText.trim();
        if (text.length > 1) {
          const utterance = new SpeechSynthesisUtterance(text);

          if (voice) utterance.voice = voice;
          utterance.lang = DEFAULT_LANG;

          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(utterance);
        }
      }
    };

    document.addEventListener("mouseover", handleHoverLink);
    return () => document.removeEventListener("mouseover", handleHoverLink);
  }, [activateTextToSpeech, browserHasSupport, gettingLanguages, voice]);


  useEffect(() => {
    if (!activateTextToSpeech) return;
    if (!browserHasSupport || gettingLanguages) return;

    const alreadyWelcomed = localStorage.getItem("tts_welcome_done");

    if (!alreadyWelcomed) {
      const message = "Mode suara telah aktif. Silakan arahkan kursor atau pilih teks untuk mendengarkan.";

      const utterance = new SpeechSynthesisUtterance(message);
      if (voice) utterance.voice = voice;

      utterance.lang = DEFAULT_LANG;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);

      localStorage.setItem("tts_welcome_done", "true");
    }
  }, [activateTextToSpeech, browserHasSupport, gettingLanguages, voice]);

  // const selectVoiceHandler = (v: SingleValue<SpeechSynthesisVoice>) => {
  //   if (v) setVoice(v);
  // };

  const toggleTextToSpeechHandler = () => {
    onChangeAccState((draft) => {
      draft.activateTextToSpeech = !draft.activateTextToSpeech;
    });
  };

  const renderLangVoices = () => {
    if (!activateTextToSpeech) return null;
    if (gettingLanguages) {
      return <p className={styled.loading}>Loading voices…</p>;
    }
    if (!browserHasSupport || !voices.current.length) {
      return <p className={styled.error}>{NOT_SUPPORT_MSG}</p>;
    }

    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className={styled.accSelectWrapper}
      >
        {/* <Select<SpeechSynthesisVoice>
          className={styled.accSelectVoicesContainer}
          classNamePrefix="accSelectVoices"
          options={voices.current}
          value={voice}
          onChange={selectVoiceHandler}
          isClearable={false}
          getOptionLabel={(v: SpeechSynthesisVoice) => `${v.lang}`}
          getOptionValue={(v: SpeechSynthesisVoice) => `${v.lang}-${v.name}`}
          menuPlacement="auto"
        /> */}
      </div>
    );
  };

  return (
    <AccButton
      Icon={TextToSpeachIcon}
      isToggled={activateTextToSpeech}
      onToggle={toggleTextToSpeechHandler}
      titleTranslationKey="tools.textToSpeach"
      title="Text To Speech"
      tooltipTranslationKey="tools.textToSpeachTooltip"
    >
      {renderLangVoices()}
    </AccButton>
  );
};

export default TextToSpeech;
