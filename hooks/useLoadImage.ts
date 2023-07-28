import { useSupabaseClient } from "@supabase/auth-helpers-react";
import type { Song } from "@/types/types";

const useLoadImage = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  const { data: imageData } = supabaseClient.storage
    .from("images")
    .getPublicUrl(song.image_path);

  return imageData.publicUrl;
};

export default useLoadImage;
