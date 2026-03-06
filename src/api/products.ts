interface ResponseSupabase {
  id: number;
  Title: string;
  user_id: string;
  created_at: Timestamp;
}

import { supabase } from "@/src/lib/supabase";
import { Timestamp } from "react-native-reanimated/lib/typescript/commonTypes";

export const fetchTask = async (
  userId: string,
): Promise<ResponseSupabase[]> => {
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
