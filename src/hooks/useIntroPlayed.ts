"use client";

import { useSyncExternalStore } from "react";

let introPlayed = false;

const subscribe = () => () => {};
const getSnapshot = () => introPlayed;
const getServerSnapshot = () => false;

// Ocorre apenas client-side. Servidor recebe falso.
export const useIntroPlayed = () => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

export const markIntroPlayed = () => {
  introPlayed = true;
};
