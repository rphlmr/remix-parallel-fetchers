import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import type { DeepResourceLoaderData } from "./resources.$id.subs.$subId";

export default function Index() {
  const ids = [
    { id: "1", subId: "1a" },
    { id: "1", subId: "1b" },
    { id: "2", subId: "2a" },
    { id: "2", subId: "2b" },
    { id: "3", subId: "3a" },
    { id: "3", subId: "3b" },
    { id: "4", subId: "4a" },
    { id: "4", subId: "4b" },
    { id: "5", subId: "5a" },
    { id: "5", subId: "5b" },
  ];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Fetch All</h1>
      <ul>
        {ids.map(({ id, subId }) => (
          <li key={`${id}-${subId}`}>
            <ComponentThatFetch id={id} subId={subId} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComponentThatFetch({ id, subId }: { id: string; subId: string }) {
  const { load, data } = useFetcher<DeepResourceLoaderData>();

  useEffect(() => {
    return () => load(`/resources/${id}/subs/${subId}`);
  }, [id, subId, load]);

  return !data ? (
    <span>
      loading {id}-{subId}
    </span>
  ) : (
    <span>
      {data.title}-{data.subId}
    </span>
  );
}
