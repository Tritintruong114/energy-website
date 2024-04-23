import { useEffect, useLayoutEffect } from "react";

export const useSafeLayout =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
