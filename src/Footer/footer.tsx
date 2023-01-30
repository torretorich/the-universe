import React from "react";
import AppSpan from "../common/AppSpan";
import FormControlInput from "../common/formControlInput";
import AppContinueButton from "../common/AppContinueButton";
// @ts-ignore
import TwitterIcon from '@mui/icons-material/Twitter';
// @ts-ignore
import FacebookIcon from '@mui/icons-material/Facebook';
// @ts-ignore
import YouTubeIcon from '@mui/icons-material/YouTube';
// @ts-ignore
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className={"footerBox"}>
            <div className={"footerInnerSection"}>
                <div className={"footerSingleColumn"}>

                </div>
                <div className={"footerSingleColumn"}>
                    <div className={"footerHeadings"}>Quick Links</div>
                    <a className={"linkFooterHeading"} href="/">CONTACT US</a>
                    <a className={"linkFooterHeading"} href="/">ABOUT US</a>
                    <a className={"linkFooterHeading"} href="/">YOUR ACCOUNT</a>
                    <a className={"linkFooterHeading"} href="/">CAREERS</a>
                    <a className={"linkFooterHeading"} href="/">TESTIMONIAL</a>
                    <a className={"linkFooterHeading"} href="/">RETURN AND REFUND</a>
                    <a className={"linkFooterHeading"} href="/">TERMS OF USE</a>
                </div>
                <div className={"footerSingleColumn"}>
                    <div className={"footerHeadings"}>Shop</div>
                    <a className={"linkFooterHeading"} href="/">CUSTOM SCULPTURES</a>
                    <a className={"linkFooterHeading"} href="/">MASTER OFFICIAL MERCHANDISE</a>
                    <a className={"linkFooterHeading"} href="/">KGF OFFICIAL MERCHANDISE</a>
                    <a className={"linkFooterHeading"} href="/">LIFE SIZE SCULPTURES</a>
                </div>
                <div className={"footerSocialLinksColumn"}>
                    <div className={"footerHeadings"}>Newsletter</div>
                    <AppSpan className={"signUpMessage"} dataItem={"Sign up for exclusive offers, stories and more."}/>
                    <div style={{marginTop: '20px'}}>
                        <FormControlInput label={"Enter Email"} mode={"text"} placeholder={"Enter Email"}/>
                    </div>
                    <AppContinueButton className={"signUpButton"} disableBtn={false} title={"SIGN UP"}/>
                    <div className={"linkSection"}>
                        <TwitterIcon style={{color: "/676869"}}/>
                        <FacebookIcon style={{color: "/676869", marginLeft: '10px'}}/>
                        <YouTubeIcon style={{color: "/676869", marginLeft: '10px'}}/>
                        <InstagramIcon style={{color: "/676869", marginLeft: '10px'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer