import React from 'react';
import {headerNavigation} from "../utils/headerNavigation";
// @ts-ignore
import Link from 'next/link'
import AppSpan from "../common/AppSpan";
// @ts-ignore
import Hamburger from '../images/hamburger.png'
// @ts-ignore
import cart from '../images/cart.png'
// @ts-ignore
import crossIcon from '../images/goldCross.png'
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {router} from "next/client";
import routes from "../config/routes";


const WebNavigation = (params: any) => {
    const {showNavbar, setShowNavbar} = params
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const handleCartRoute = async () => {
        setShowNavbar(false)
        await router.replace({
            pathname: routes.CART
        })

    }

    return (
        <>
            {isMobile && <div className={showNavbar ? `menuIconDisplayNone` : `menu-icon`} onClick={handleShowNavbar}>
                <img src={Hamburger} alt={"hamburger"} width={30} style={{paddingLeft: 6}}/>
                <img src={cart} alt={"hamburger"} width={30} style={{paddingRight: 6}}/>
            </div>}
            <div className={`nav-elements  ${showNavbar ? "active" : "disable"}`}>
                {isMobile && <div className={"crossIcon"} onClick={() => setShowNavbar(false)}>
                    <img src={crossIcon} alt={"crossIcon"} width={20} style={{margin: '5px 5px 5px 0'}}/>
                </div>}
                <div className={"headerItems"}>
                    {headerNavigation.li.map((item: any, index: number) => {
                            return (
                                <div className="dropdown" key={index}>
                                    <div className="dropbtn">
                                        <Link href={item.a._href}>
                                            <div className='tabDiv'>
                                                <AppSpan className={'navTabText'} dataItem={item.a["#text"]}/>
                                            </div>
                                        </Link>
                                    </div>
                                    <div
                                        className={(item.a["#text"] === 'Coins And Bars') ? "coinsDropdown-content dropdown-content" : "dropdown-content"}>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
                {!isMobile && <div className={"crossIcon"} onClick={handleCartRoute}>
                    <img src={cart} alt={"hamburger"} width={30} style={{paddingRight: 6}}/>
                </div>}
            </div>
        </>
    )
}

export default WebNavigation;