import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { onOpen, onClose } from "./redux/registerModalSlice";
import { RootState } from "@/app/lib/store";

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal: () => RegisterModalStore = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(
    (state: RootState) => state.registermodal.isOpen
  );

  const openModal = () => dispatch(onOpen());
  const closeModal = () => dispatch(onClose());

  return { isOpen, onOpen: openModal, onClose: closeModal };
};

export default useRegisterModal;
