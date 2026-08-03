"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * `false` no servidor e no primeiro render do cliente, `true` depois da
 * hidratação. Use para valores que só existem no navegador (tema resolvido,
 * media queries) sem provocar hydration mismatch.
 */
export const useIsHydrated = () => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
