import React from 'react';
import AppSpan from "../common/AppSpan";
import SilaiiCard from "../common/silaiiCard";
// @ts-ignore
import salaiLaunch from '../images/salaiLaunch.jpeg'
// @ts-ignore
import salaiLaunch2 from '../images/salaiLaunch2.jpeg'
// @ts-ignore
import salaiLaunch3 from '../images/salaiLaunch3.jpeg'
// @ts-ignore
import salaiLaunch4 from '../images/salaiLaunch4.jpeg'
// @ts-ignore
import kgfImage from "../images/kgfImage.png"
// @ts-ignore
import kyfPic from "../images/kgfPic.jpeg"
// @ts-ignore
import ashokaImage from "../images/ashokaImage.png"
// @ts-ignore
import customers from "../images/customers.png"
// @ts-ignore
import shipping from "../images/shippingIcon.png"
// @ts-ignore
import secure from "../images/lock.png"
// @ts-ignore
import message from "../images/message.png"
// @ts-ignore
import clients from "../images/clients.jpeg"
// @ts-ignore
import G26 from "../images/G26.jpeg";
// @ts-ignore
import greetingImage from '../images/greetingCard1.jpeg'
// @ts-ignore
import greetingImage2 from '../images/greetingCard2.jpeg'
import KeyPoints from "../common/keyPoints";
import SalaiAdvertisement from "../common/salaiAdvertisement";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// @ts-ignore
import bannerImage from '../images/bannerHeader.jpeg'
// @ts-ignore
import imageForMobile from '../images/BuddhaPic.jpeg'
// @ts-ignore
import KalaignarPic from '../images/KalaignarPic.jpeg'

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <div className={"homeHeader"}>
                <AppSpan className={"headerHeading"} dataItem={"WORLDWIDE SHIPPING"}/>
                <AppSpan className={"headerHeadingTwo"} dataItem={"ILLAM THORUM VALLUVAR"}/>
                <AppSpan className={"headerHeadingThree"} dataItem={"FREE SHIPPING WITHIN UTTAR PRADESH"}/>
            </div>
            {isMobile && <div style={{display: "flex", width: "100%"}}>
                <img src={bannerImage} alt={"banner"} style={{width: "100%"}}/>
            </div>}
            <div className={"newLaunch"}>
                <AppSpan className={"newLaunchHeading"} dataItem={"New Launches !!"}/>
                <div className={"newLaunchSection"}>
                    <SilaiiCard data={salaiLaunch}/>
                    <SilaiiCard data={salaiLaunch2}/>
                    <SilaiiCard data={salaiLaunch3}/>
                    <SilaiiCard data={salaiLaunch4} index={3}/>
                </div>
            </div>
            <div className={"advertisementSection"}>
                <div className={"firstMovie"}>
                    <img src={isMobile ? kyfPic : kgfImage} alt={"firstMovie"} className={"firstMovieCollectibles"}/>
                </div>
            </div>
            <div className={"advertisementSection"}>
                <div className={"firstMovie"}>
                    <SalaiAdvertisement image={greetingImage} buttonTitle={"BUY NOW"} imageForMobile={imageForMobile}/>
                </div>
            </div>
            <div className={"advertisementSection"}>
                <div className={"firstMovie"}>
                    <SalaiAdvertisement image={greetingImage2} buttonTitle={"BUY NOW"} imageForMobile={KalaignarPic}/>
                </div>
            </div>
            <div className={"customersSection"}>
                <div className={"firstMovie"}>
                    <img src={customers} alt={"customers"} className={"customersImage"}/>
                </div>
            </div>
            <div className={"newLaunch"}>
                <img src={clients} alt={"customers"} className={"customersImage"}/>
            </div>
            <div className={"keyPointsData"}>
                <KeyPoints icon={shipping} title={"Free Shipping within TN*"}/>
                <KeyPoints icon={secure} title={"100% Secure Transaction"}/>
                <KeyPoints icon={message} title={"+91 6393199037"}/>
            </div>
        </>
    )
}
export default Home