import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import type { ResourceLoaderData } from "./resources.$id";

export default function Index() {
  const ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Fetch All</h1>
      <ul>
        {ids.map((id) => (
          <li key={id}>
            <ComponentThatFetch id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComponentThatFetch({ id }: { id: string }) {
  const { load, data } = useFetcher<ResourceLoaderData>();

  useEffect(() => {
    load(`/resources/${id}`);
  }, [id, load]);

  return !data ? <span>loading {id}</span> : <span>{data.title}</span>;
}
