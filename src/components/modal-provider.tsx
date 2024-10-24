import MarkUpEditModal from "@/features/markups/components/markup-edit-modal";
import { useMountedState } from "react-use";
export default function ModalProvider() {
  const isMounted = useMountedState();

  if (!isMounted) return null;
  return (
    <>
      <MarkUpEditModal />
    </>
  );
}
