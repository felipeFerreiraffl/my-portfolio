"use client";

import { useSyncExternalStore } from "react";

const INTRO_SEEN_KEY = "portfolio:intro-seen";

const subscribe = () => () => {};
const getSnapshot = () => sessionStorage.getItem(INTRO_SEEN_KEY) === "1";
const getServerSnapshot = () => false;

/**
 * `true` quando a intro já rodou nesta aba. Trocar de idioma remonta a tela,
 * então sem isso o visitante veria a animação (e a trava de scroll) de novo.
 *
 * Usa `useSyncExternalStore` para que o render do servidor e o da hidratação
 * concordem — ler sessionStorage direto no render causaria mismatch.
 */
export const useIntroSeen = () => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

export const markIntroSeen = () => sessionStorage.setItem(INTRO_SEEN_KEY, "1");
