import {Box, Divider, Drawer} from "@mui/material";
//
//
// const RenderMainMobileMenu = (location) => {
//
//     return (
//         <>
//             <Drawer className={TabClasses.main}
//                 //from which side the drawer slides in
//                     anchor="right"
//                 //if open is true --> drawer is shown
//                     open={open}
//                 //function that is called when the drawer should close
//                     onClose={handleClose}
//                 //function that is called when the drawer should open
//                     onOpen={Boolean(anchorEl)}
//             >
//                 {/* The inside of the drawer */}
//                 <Box className={TabClasses.box}>
//                     {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
//                     <div className={TabClasses.icons}>
//                         <img src={cross} className={TabClasses.icon} onClick={handleClose}/>
//                     </div>
//                     <Box className={TabClasses.innerBox}>
//                         <div className={TabClasses.items} onClick={() => handleClick(ROUTES.HOME)}>
//                                 <span onClick={handleClose}
//                                       className={location == '/' ? TabClasses.isActiveText : TabClasses.text}>Home</span>
//                         </div>
//                         <Divider/>
//                         <div className={TabClasses.items} onClick={() => handleClick(ROUTES.BE_A_TINKERER)}>
//                                 <span
//                                     onClick={handleClose}
//                                     className={location == '/beatinkerer' ? TabClasses.isActiveText : TabClasses.text}>Be a Tinkerer</span>
//                         </div>
//                         <Divider/>
//                         <div className={TabClasses.items} onClick={() => handleClick(ROUTES.FRS)}>
//                                 <span
//                                     onClick={handleClose}
//                                     className={location == '/https://frs.itinker.io' ? TabClasses.isActiveText : TabClasses.text}>FRS</span>
//                         </div>
//                         <Divider/>
//                         <div className={TabClasses.items} onClick={() => handleClick(ROUTES.ABOUT)}>
//                                 <span
//                                     onClick={handleClose}
//                                     className={location == '/about' ? TabClasses.isActiveText : TabClasses.text}>About Us</span>
//                         </div>
//                         <Divider/>
//                         <div className={TabClasses.items} onClick={() => handleClick(ROUTES.CONTACT_US)}>
//                                 <span
//                                     onClick={handleClose}
//                                     className={location == '/contact' ? TabClasses.isActiveText : TabClasses.text}>CONTACT US</span>
//                         </div>
//                     </Box>
//                 </Box>
//             </Drawer>
//         </>
//     );
// };
// export default RenderMainMobileMenu