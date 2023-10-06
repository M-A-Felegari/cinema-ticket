import React from 'react';
import {motion} from "framer-motion";
function HistoryScreen() {
    return (
        <motion.main
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: "100%",opacity:0 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
        >
            history
        </motion.main>
    );
}

export default HistoryScreen;