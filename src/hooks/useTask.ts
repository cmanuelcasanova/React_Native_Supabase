import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTask, deleteTask, fetchTask } from "../api/products";
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
  const userId = useAuthStore((state) => state.user?.id);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (Title: string) => {
      if (!userId) throw new Error("No hay usuario autenticado");
      return await createTask(Title, userId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products", userId] });
    },

    onError: (error) => {
      console.error("Error al crear tarea:", error.message);
    },
  });
};

export const useDeleteTask = () => {
  const userId = useAuthStore((state) => state.user?.id);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (task_id: number) => {
      if (!userId) throw new Error("No hay usuario autenticado");
      return await deleteTask(task_id);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products", userId] });
    },

    onError: (error) => {
      console.error("Error al Borrar tarea:", error.message);
    },
  });
};
