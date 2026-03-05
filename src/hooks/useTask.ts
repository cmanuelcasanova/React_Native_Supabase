import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTask, fetchTask } from "../api/products";
import { useAuthStore } from "../store/useAuthStore";

export const useTask = () => {
  const userId = useAuthStore((store) => store.user?.id);
  return useQuery({
    queryKey: ["products", userId],
    queryFn: () => fetchTask(userId!),
    staleTime: 1000 * 60 * 5,
    enabled: !!userId,
  });
};

export const useCreateTask = () => {
  const user = useAuthStore((state) => state.user?.id);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (Title: string) => {
      if (!user) throw new Error("No hay usuario autenticado");
      return createTask(Title, user);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products", user] });
    },

    onError: (error) => {
      console.error("Error al crear tarea:", error.message);
    },
  });
};
