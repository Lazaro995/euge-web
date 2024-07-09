import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./style.css"

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <AnimatePresence
    mode="wait"
    >
      <button
        onClick={() => {
          setIsVisible((prev) => !prev);
        }}
      >
        BOTON
      </button>
      {isVisible && (
        <motion.div
        key={"asd"}
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 2 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        />
      )}
    </AnimatePresence>
  );
}


export default App
