import { useMutation } from "@tanstack/react-query";

type User = {
  id: string;
  email: string;
  currency: string;
};

export const useUpdateUserCurrency = () => {
  return useMutation({
    mutationFn: async (currency: string) => {
      const response = await fetch("/api/user/update-currency", {
        method: "POST",
        body: JSON.stringify({ currency }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to update currency");
      }
      return response.json() as Promise<User>;
    },
  });
};
