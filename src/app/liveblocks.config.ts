import { createClient } from "@liveblocks/client";
import {LiveList, LiveObject} from "@liveblocks/core";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  authEndpoint: "/api/liveblocks-auth",
  throttle: 100,
});

type Presence = {
 // cursor: { x: number, y: number } | null,
 // ...
};

export type Column = {
  name: string;
  id: string;
  index: number;
};

export type Card = {
  name: string;
  id: string;
  index: number;
  columnId: string;
};

type Storage = {
  columns: LiveList<LiveObject<Column>>;
  cards: LiveList<LiveObject<Card>>;
};

export const {
 RoomProvider,
 useMyPresence,
 useStorage,
 useMutation
 /* ...all the other hooks you’re using... */
} = createRoomContext<
 Presence,
 Storage
 /* UserMeta, RoomEvent, ThreadMetadata */
>(client);