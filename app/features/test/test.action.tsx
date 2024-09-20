import { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/react";

// Define your action function
export const action: ActionFunction = async () => {
  return json({ success: true });
};
