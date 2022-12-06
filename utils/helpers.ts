import { Suggestions } from "@models/weather.models";

export const formatLocationSuggestions = (suggestions: Suggestions) =>
  `${suggestions.LocalizedName}, ${suggestions.AdministrativeArea.ID} ${suggestions.Country.LocalizedName}`;

export const formatWeatherIconsForPathing = (icon: number) => icon < 10 ? "0" + icon : icon

export const getLocationKeyFromPath = (path:string) => path.match(/\d+/)?.shift()

export const isObjectDefinedAndEmpty = (obj: Object | any) => obj && Object.keys(obj).length === 0
