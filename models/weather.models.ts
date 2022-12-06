import React from "react";

export interface Suggestions {
    Name?: string,
    label: string,
    Version: number,
    Key: number,
    Type: string,
    Rank: number,
    LocalizedName: string,
    Country: {
        ID: string,
        LocalizedName: string
    },
    AdministrativeArea: {
        ID: string,
        LocalizedName: string
    }
}
export interface HourlyCardComponentProps {
  DateTime: Date;
  EpochDateTime: number;
  WeatherIcon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  PrecipitationIntensity: string;
  IsDaylight: boolean;
  Temperature: {
    Value: number;
    Unit: string;
    UnitType: number;
  };
  PrecipitationProbability: number;
  MobileLink: string;
  Link: string;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

export interface AutoCompleteOptions {
  value: string;
  id: string;
}

export interface ComponentChildrenProps {
  children: React.ReactNode;
}

export interface CurrentConditionProps {
  LocalObservationDateTime: Date;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  IsDayTime: boolean;
  Temperature: {
    Metric: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
  MobileLink: string;
  Link: string;
}

export interface DailyForecasts {
  Date: Date;
  EpochDateTime: number;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Maximum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
  };
  Night: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
  };
}
export interface DailyCardComponentProps {
  Headline: {
    EffectiveDate: Date;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: Date;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
  };
  DailyForecasts: Array<DailyForecasts>;
}

export type status = "idle" | "loading" | "succeeded" | "failed";

export interface WeatherState {
  search: string;
  suggestions: Array<Suggestions>;
  status: status;
  error: string;
  today: Array<CurrentConditionProps>;
  hourly: Array<HourlyCardComponentProps>;
  daily: DailyCardComponentProps | null;
}
