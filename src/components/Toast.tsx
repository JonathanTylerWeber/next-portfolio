import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className={`fixed top-5 inset-x-0 mx-auto px-4 py-3 max-w-md rounded-lg shadow-lg flex items-center justify-between z-50
          ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-white text-lg">{message}</span>
        <button onClick={onClose} className="text-white ml-4">
          <FaTimes />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
