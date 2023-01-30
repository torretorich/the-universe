import AppContinueButton from "./AppContinueButton";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SalaiAdvertisement = (params: any) => {
    const {image, buttonTitle, imageForMobile} = params
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div className={"advertisementSingleSection"}
             style={{backgroundImage: isMobile ? `url(${imageForMobile})` : `url(${image})`}}>
            <div className={"buyMoreButtonSection"}>
                <AppContinueButton className={"buttonBuyMore"} title={buttonTitle} disableBtn={false}/>
            </div>
        </div>
    )
}
export default SalaiAdvertisement