import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@appredux/store";
import { fetchFiveDayForcast } from "@api/accuWeather";
import Box from "@mui/material/Box";
import { DailyForecasts, WeatherState } from "@models/weather.models";
import DailyCardComponent from "@components/daily-card.component";
import { getLocationKeyFromPath, isObjectDefinedAndEmpty } from "@utils/helpers";
import styles from "@styles/Page.module.css";
import CircularProgress from "@mui/material/CircularProgress";

export default function Daily() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const daily = useSelector((state: WeatherState) => state.daily);
  const locationKey = getLocationKeyFromPath(router.asPath);
  const status = useSelector((state: WeatherState) => state.status);

  useEffect(() => {
      if (locationKey) {
        dispatch(fetchFiveDayForcast(locationKey as string));
      }
    // The Error boundary does not catch async calls
    if(status === 'failed'){
      throw Error('Something went wrong');
    }
  }, [locationKey]);
  return isObjectDefinedAndEmpty(daily) ? (
    <div className={styles.spinner}>
      <CircularProgress color="inherit" />
    </div>
  ) : (
    <Box className={styles.daily_container}>
      {daily?.DailyForecasts?.map((item: DailyForecasts, key: number) => (
        <DailyCardComponent {...item} key={key} />
      ))}
    </Box>
  );
}
