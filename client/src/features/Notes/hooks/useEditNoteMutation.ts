import { useMutation } from "@tanstack/react-query";
import { editNote, type APINote, type EditNoteProps } from "../api";
import { toast } from "sonner";
import { QUERY_KEYS } from "@/api";

export function useEditNoteMutation() {
  const { mutate } = useMutation<APINote, Error, EditNoteProps>({
    mutationKey: [QUERY_KEYS.EDIT_NOTE],
    mutationFn: editNote,
    onError: (error) => toast.error(error.message),
  });

  return { mutate };
}
