import { supabase } from "@/src/lib/supabase";
import { Products } from "./typeSupabase";

export const fetchTask = async (userId: string): Promise<Products[]> => {
  const { data, error } = await supabase
    .from("Task")
    .select("*")
    .eq("user_id", userId);
  if (error) throw error;
  return data;
};

export const createTask = async (taskName: string, userId: string) => {
  const { data, error } = await supabase
    .from("Task")
    .insert([
      {
        Title: taskName,
        user_id: userId,
      },
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteTask = async (task_id: number) => {
  const { data, error } = await supabase
    .from("Task")
    .delete()
    .eq("id", task_id);

  if (error) throw error;
  return data;
};
