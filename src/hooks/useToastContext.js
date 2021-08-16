import { useContext } from "react";
import ToastContext from "../contexts/ToastContext";
import LinkContext from "../contexts/LinkContext";

export default function useToastContext() {
  return useContext(ToastContext);
}

export const useLinkContext = () => useContext(LinkContext)
