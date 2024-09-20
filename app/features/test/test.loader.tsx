import { json, LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  // Add your loader logic here
  console.log(request);

  return json({ message: "Hello, world!" });
};
