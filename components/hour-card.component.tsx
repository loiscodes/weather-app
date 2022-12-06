import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import format from "date-fns/format";
import Image from "next/image";
import { HourlyCardComponentProps } from "@models/weather.models";
import styles from "@styles/HourCard.module.css";
import { formatWeatherIconsForPathing, getLocationKeyFromPath } from "@utils/helpers";

export default function HourCardComponent(props: HourlyCardComponentProps) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.content}>
        <Typography variant="h3" color="text.primary" gutterBottom>
          {format(new Date(props.DateTime), "h:mm bb")}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {format(new Date(props.DateTime), "eeee")}
        </Typography>
        <Image
          width={100}
          height={100}
          src={`https://developer.accuweather.com/sites/default/files/${formatWeatherIconsForPathing(props.WeatherIcon)}-s.png`}
          alt={props.IconPhrase}
        />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.IconPhrase}
        </Typography>
        <Typography variant="h4">
          {props.Temperature.Value} {props.Temperature.Unit}
        </Typography>
      </CardContent>
    </Card>
  );
}
