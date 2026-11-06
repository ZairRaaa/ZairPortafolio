import { useSyncExternalStore } from 'react';

function subscribe(listener) {
  return window.portfolioAppearance?.subscribe(listener) ?? (() => {});
}

const getSnapshot = () => window.portfolioAppearance?.getSnapshot() ?? null;
const getServerSnapshot = () => null;

export function useAppearance() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
