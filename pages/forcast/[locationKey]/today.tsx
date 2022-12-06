import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@appredux/store";
import { fetchCurrentForcast } from "@api/accuWeather";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import { format } from "date-fns";
import { WeatherState } from "@models/weather.models";
import {
  formatWeatherIconsForPathing,
  getLocationKeyFromPath,
} from "@utils/helpers";
import styles from "@styles/Page.module.css";

export default function Today() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const locationKey = getLocationKeyFromPath(router.asPath);
  const todayForcast = useSelector((state: WeatherState) => state.today);
  const status = useSelector((state: WeatherState) => state.status);

  useEffect(() => {
    // The Error boundary does not catch async calls
    if (locationKey) {
        dispatch(fetchCurrentForcast(locationKey));
    }
    // The Error boundary does not catch async calls
    if(status === 'failed'){
      throw Error();
    }

  }, [locationKey]);
  return todayForcast.length === 0 ? (
    <div className={styles.spinner}>
      <CircularProgress color="inherit" />
    </div>
  ) : (
    <Box className={styles.today_container}>
      <Typography variant="h1">
        {format(new Date(todayForcast[0].EpochTime), "eeee")}
      </Typography>
      <Image
        width={100}
        height={65}
        src={`https://developer.accuweather.com/sites/default/files/${formatWeatherIconsForPathing(
          todayForcast[0].WeatherIcon
        )}-s.png`}
        alt={todayForcast[0].WeatherText}
      />
      <Typography
        fontSize={12}
        textAlign="center"
        sx={{ mb: 1.5, width: "50%" }}
        color="text.secondary"
      >
        {todayForcast[0].WeatherText}
      </Typography>
      <Typography variant="h4">
        {todayForcast[0].Temperature.Imperial.Value}{" "}
        {todayForcast[0].Temperature.Imperial.Unit}
      </Typography>
    </Box>
  );
}
