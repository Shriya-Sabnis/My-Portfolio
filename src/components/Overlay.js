// src/components/Overlay.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Overlay = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(10px)",
            zIndex: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 40, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.97 }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              width: "min(780px, 100%)",
              maxHeight: "min(520px, 100%)",
              background:
                "linear-gradient(135deg, rgba(24,24,27,0.96), rgba(15,23,42,0.98))",
              borderRadius: "20px",
              border: "1px solid rgba(39,39,47,0.9)",
              boxShadow:
                "0 22px 80px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.02)",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;