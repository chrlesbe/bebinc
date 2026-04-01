"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

/** Clarity project ID from https://clarity.microsoft.com → Project → Settings → Overview */
export const CLARITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "";

export default function MicrosoftClarity() {
  useEffect(() => {
    if (!CLARITY_PROJECT_ID) return;
    Clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return null;
}
