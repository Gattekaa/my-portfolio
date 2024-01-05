import { motion } from "framer-motion";

interface IDropdownProps {
  children: React.ReactNode;
}

export default function Dropdown({ children }: IDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="absolute  top-[120%] flex flex-col items-center z-[100]"
    >
      <div className="w-5 h-5 rotate-45 rounded-tl-lg bg-background-light border-l-2 border-t-2 border-border-light pointer-events-none" />
      <div className="bg-background-light -mt-[10px] border-2 border-border-light rounded-lg z-10">
        {children}
      </div>
    </motion.div>
  );
}
