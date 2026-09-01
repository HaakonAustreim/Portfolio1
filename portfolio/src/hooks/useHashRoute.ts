import { useCallback, useEffect, useState } from "react";

/**
 * Tracks which section is "open" using the URL hash (e.g. #projects).
 * This gives free browser back/forward support and makes each section
 * linkable, without pulling in a full router for a single-page site.
 */
export function useHashRoute(validIds: string[], defaultId: string) {
  const readHash = useCallback((): string => {
    const id = window.location.hash.replace("#", "");
    return validIds.includes(id) ? id : defaultId;
  }, [validIds, defaultId]);

  const [activeId, setActiveId] = useState<string>(readHash);

  useEffect(() => {
    const onHashChange = () => setActiveId(readHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [readHash]);

  const navigate = useCallback((id: string) => {
    window.location.hash = id;
    setActiveId(id);
  }, []);

  return { activeId, navigate };
}
