import { createClient } from "@liveblocks/client";
import {LiveList, LiveObject} from "@liveblocks/core";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  authEndpoint: "/api/liveblocks-auth",
  throttle: 100,
});