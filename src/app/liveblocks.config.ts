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

type Storage = {
 // animals: LiveList<string>,
 // ...
};

export const {
 RoomProvider,
 useMyPresence,
 useStorage,
 /* ...all the other hooks you’re using... */
} = createRoomContext<
 Presence,
 Storage
 /* UserMeta, RoomEvent, ThreadMetadata */
>(client);