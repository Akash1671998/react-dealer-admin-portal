
import { useState, useMemo } from "react";
import { debounce } from "lodash";

export default function useSearch(data = [], keys = ["name", "location"]) {
  const [query, setQuery] = useState("");
  const setDebouncedQuery = debounce((q, setter) => setter(q), 250);

  function onChange(e) {
    const v = e.target.value;
    setDebouncedQuery(v, setQuery);
  }

  const filtered = useMemo(() => {
    if (!query) return data;
    const q = query.toLowerCase();
    return data.filter((item) =>
      keys.some((k) => String(item[k] || "").toLowerCase().includes(q))
    );
  }, [data, query, keys]);

  return {
    query,
    setQuery,
    onChange,
    results: filtered,
  };
}
