import { FC, ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainLayout from "../components/layout/MainLayout";
import Body from "../components/layout/Body";
import { SideMenu } from "../menu/SideMenu";
import WelcomeWidget from "../components/widget/WelcomeWidget";
import Header from "../components/layout/Header";
import ResponsiveBarChart from "../components/chart/BarChart";
import { Grid } from "@material-ui/core";
import WeeklySummary from "../components/widget/WeeklySummary";
import ActivityFeed from "../components/widget/ActivityFeed";
import Schedule from "../components/widget/Schedule";

const useStyles = makeStyles((theme) => ({
  dashboardContent: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(2),
  },
  dashboardRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
    [theme.breakpoints.down("xs")]: {
      // Additional breakpoint for smaller screens
      gridTemplateColumns: "1fr",
    },
  },
}));

const Dashboard: FC<any> = (): ReactElement => {
  const classes = useStyles();

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
      <SideMenu />
      <Body>
        <Header>
          <WelcomeWidget />
        </Header>
        <div className={classes.dashboardContent}>
          <div className={classes.dashboardRow}>
            {/* First row starts here */}
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <WeeklySummary />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <ResponsiveBarChart data={data} />
              </Grid>
            </Grid>
            {/* First row ends here */}
          </div>
          <div className={classes.dashboardRow}>
            {/* Second row starts here */}
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={7}>
                <ActivityFeed />
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <Schedule />
              </Grid>
            </Grid>
            {/* Second row ends here */}
          </div>
        </div>
      </Body>
    </MainLayout>
  );
};

export default Dashboard;