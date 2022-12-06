import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import format from "date-fns/format";
import Image from "next/image";
import { DailyForecasts } from "@models/weather.models";
import styles from "@styles/DailyCard.module.css";
import { formatWeatherIconsForPathing } from "@utils/helpers";

export default function DailyCardComponent(props: DailyForecasts) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.content}>
        <Typography variant="h4" color="text.primary" gutterBottom>
          {format(new Date(props.Date), "eeee")}
        </Typography>
        <Typography variant="h5" color="text.primary" gutterBottom>
          DAY
        </Typography>
        <Image
          width={100}
          height={65}
          src={`https://developer.accuweather.com/sites/default/files/${
            formatWeatherIconsForPathing(props.Day.Icon)
          }-s.png`}
          alt={props.Day.IconPhrase}
        />
        <Typography
          fontSize={12}
          textAlign="center"
          sx={{ mb: 1.5, borderBottom: "gray 1px solid", width: "50%" }}
          color="text.secondary"
        >
          {props.Day.IconPhrase}
        </Typography>
        <Typography variant="h5" color="text.primary" gutterBottom>
          NIGHT
        </Typography>
        <Image
          width={100}
          height={65}
          src={`https://developer.accuweather.com/sites/default/files/${
            formatWeatherIconsForPathing(props.Night.Icon)
          }-s.png`}
          alt={props.Night.IconPhrase}
        />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.Night.IconPhrase}
        </Typography>
        <Typography variant="body2">
          High {props.Temperature.Maximum.Value}{" "}
          {props.Temperature.Maximum.Unit}
        </Typography>
        <Typography variant="body2">
          Low {props.Temperature.Minimum.Value} {props.Temperature.Minimum.Unit}
        </Typography>
      </CardContent>
    </Card>
  );
}
