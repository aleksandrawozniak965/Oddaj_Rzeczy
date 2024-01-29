import HomeNavHeader from "./HomeNavHeader.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import HomeSimpleSteps from "./HomeSimpleSteps.jsx";
import HomeAboutUs from "./HomeAboutUs.jsx";
import HomeWhoWeHelp from "./HomeWhoWeHelp.jsx";
import HomeBanner from "./HomeBanner.jsx";
import HomeContact from "./HomeContact.jsx";


export default function Home() {
    return (
        <>
            <HomeNavHeader />
            <HomeBanner />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
        </>
    )
}