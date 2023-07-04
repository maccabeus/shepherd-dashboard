import { FC, ReactElement } from "react";
import MainLayout from "../components/layout/MainLayout";
import SideNavigation from "../components/layout/SideNavigation";
import Body from "../components/layout/Body";
import { SideMenu } from "../menu/SideMenu";
import WelcomeWidget from "../components/widget/WelcomeWidget";
import Header from "../components/layout/Header";
import ResponsiveBarChart from "../components/chart/BarChart";
import { Grid } from "@material-ui/core";
import WeeklySummary from "../components/card/WeeklySummary";
import ActivityFeed from "../components/card/ActivityFeed";

const Dashboard: FC<any> = (): ReactElement => {

    const data = [
        { name: 'Bio', value: 25 },
        { name: 'Phy', value: 40 },
        { name: 'Chem', value: 35 },
        { name: 'Eco', value: 35 },
        { name: 'Eng', value: 35 },
        { name: 'Bus', value: 35 },
        { name: 'Sci', value: 35 },
        { name: 'Lit', value: 35 },
    ];
    return (
        <MainLayout>
            <SideNavigation>
                <SideMenu />
            </SideNavigation>
            <Body>
                <Header>
                    <WelcomeWidget />
                </Header>
                <div>
                    {/* ===============First rows stars here ============== */}
                    <Grid container spacing={4}>
                        <Grid item xs={6} md={5}>
                            <WeeklySummary />
                        </Grid>
                        <Grid item xs={6} md={7}>
                            <ResponsiveBarChart data={data} />
                        </Grid>
                    </Grid>
                    {/* ===============First row ends here ============== */}
                    <Grid container spacing={4}>
                        <Grid item xs={6} md={8}>
                            <ActivityFeed />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <ResponsiveBarChart data={data} />
                        </Grid>
                    </Grid>
                    {/* ===============Second  row ends here ============== */}
                </div>
            </Body>
        </MainLayout>
    )
}
export default Dashboard;
