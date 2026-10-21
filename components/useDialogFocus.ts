"use client";

import { useEffect, useRef } from "react";

const FOCUSABLE = "button, a[href]";

// Moves focus into an open dialog, keeps Tab inside it, and hands focus back on close.
export function useDialogFocus<T extends HTMLElement>(open: boolean) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const dialog = ref.current;
    dialog?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const trapTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !dialog) return;
      const items = dialog.querySelectorAll<HTMLElement>(FOCUSABLE);
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", trapTab);
    return () => {
      document.removeEventListener("keydown", trapTab);
      previous?.focus({ preventScroll: true });
    };
  }, [open]);

  return ref;
}
