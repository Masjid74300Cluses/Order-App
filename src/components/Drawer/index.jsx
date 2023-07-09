"use client";

import { useEffect } from "react";
import { useDrawer } from "@/providers/DrawerProvider";
import { Drawer as MaterialDrawer } from "@mui/material";

const Drawer = ({ tableId }) => {
  const { isOpen, closeDrawer, drawerContent } = useDrawer();

  // to block the scroll when the drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up function
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <MaterialDrawer
      anchor="bottom"
      open={isOpen}
      onClose={closeDrawer}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <div>
        <button
          className="absolute top-2 right-2 text-2xl bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => closeDrawer()}
        >
          X
        </button>
        {drawerContent}
      </div>
    </MaterialDrawer>
  );
};

// const Drawer = () => {
//   const { isOpen, closeDrawer, drawerContent } = useDrawer();

//   // to block the scroll when the drawer is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }

//     // Clean up function
//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, [isOpen]);

//   const transitions = useTransition(isOpen, {
//     from: {
//       transform: "translateY(100%)",
//       opacity: 0,
//       position: "absolute",
//       left: 0,
//       bottom: 0,
//       width: "100%",
//     },
//     enter: { transform: "translateY(0)", opacity: 1, position: "absolute" },
//     leave: { transform: "translateY(100%)", opacity: 0, position: "absolute" },
//   });

//   const overlayTransitions = useTransition(isOpen, {
//     from: { opacity: 0 },
//     enter: { opacity: 0.5 },
//     leave: { opacity: 0 },
//   });

//   return (
//     <>
//       {transitions(
//         (styles, item) =>
//           item && (
//             <animated.div
//               style={{ ...styles, zIndex: 50 }}
//               className="fixed left-0 right-0 bottom-0 mx-auto w-full max-w-xs bg-white"
//             >
//               {children}
//               <button
//                 onClick={closeDrawer}
//                 className="mt-4 px-2 py-1 bg-blue-500 text-white rounded"
//               >
//                 Close
//               </button>
//             </animated.div>
//           )
//       )}
//       {overlayTransitions(
//         (styles, item) =>
//           item && (
//             <animated.div
//               style={{ ...styles, zIndex: 40 }}
//               className="fixed top-0 left-0 w-full h-full bg-black"
//               onClick={closeDrawer}
//             />
//           )
//       )}
//     </>
//   );
// };

export default Drawer;
