import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { WeatherState } from "@models/weather.models";
import styles from "@styles/Navbar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { getLocationKeyFromPath } from "@utils/helpers";

export default function NavbarComponent() {
  const router = useRouter();
  const locationKey = getLocationKeyFromPath(router.asPath);
  return (
    <Box className={styles.navbar}>
      <Link href={"/"}>
        <HomeIcon />
      </Link>
      <Link
        href={`/forcast/${locationKey}/today`}
      >
        <Typography>Today Weather</Typography>
      </Link>
      <Link
        href={`/forcast/${locationKey}/hour-by-hour`}
      >
        <Typography>12-hour Forcast</Typography>
      </Link>
      <Link
        href={`/forcast/${locationKey}/five-day`}
      >
        Five Day Forcast
      </Link>
    </Box>
  );
}
