import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export type Data = { id: number; title: string };

const datas: Record<string, Data> = {
  "1": {
    id: 1,
    title: "Resource 1",
  },
  "2": {
    id: 2,
    title: "Resource 2",
  },
  "3": {
    id: 3,
    title: "Resource 3",
  },
  "4": {
    id: 4,
    title: "Resource 4",
  },
  "5": {
    id: 5,
    title: "Resource 5",
  },
  "6": {
    id: 6,
    title: "Resource 6",
  },
  "7": {
    id: 7,
    title: "Resource 7",
  },
  "8": {
    id: 8,
    title: "Resource 8",
  },
  "9": {
    id: 9,
    title: "Resource 9",
  },
  "10": {
    id: 10,
    title: "Resource 10",
  },
};

export type ResourceLoaderData = typeof loader;

export async function loader({ params }: LoaderArgs) {
  const { id } = params;

  if (!id) throw new Error("No id provided");

  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );

  return json(datas[id]);
}
