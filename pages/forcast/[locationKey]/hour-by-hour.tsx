import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@appredux/store";
import { fetchTwelveHourlyForcast } from "@api/accuWeather";
import Box from "@mui/material/Box";
import HourCardComponent from "@components/hour-card.component";
import { WeatherState } from "@models/weather.models";
import { getLocationKeyFromPath } from "@utils/helpers";
import styles from "@styles/Page.module.css";
import CircularProgress from "@mui/material/CircularProgress";

export default function Hourly() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const hourly = useSelector((state: WeatherState) => state.hourly);
  const locationKey = getLocationKeyFromPath(router.asPath);
  const status = useSelector((state: WeatherState) => state.status);

  useEffect(() => {
    if (hourly.length === 0) {
      if (locationKey) {
        dispatch(fetchTwelveHourlyForcast(locationKey as string));
      }
    }
    // The Error boundary does not catch async calls
    if(status === 'failed'){
      throw Error();
    }
  }, [dispatch, hourly.length, locationKey, status]);
  return hourly.length === 0 ? (
    <div className={styles.spinner}>
      <CircularProgress color="inherit" />
    </div>
  ) : (
    <Box className={styles.hour_container}>
      {hourly?.map((item, key) => (
        <HourCardComponent {...item} key={key} />
      ))}
    </Box>
  );
}
