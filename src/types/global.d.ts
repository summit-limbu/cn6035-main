interface WeatherData {
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

interface SeismicData{
  id: null;
  magnitude: number;
  latitude: number;
  longitude: number,
}

interface IssLocation {
  timestamp: number;
  iss_position: {
      latitude: string;
      longitude: string;
  };
  message: string;
}

interface ApodData {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  title: string;
}

interface AstroInfo {
  message: string;
  people: { name: string; craft: string }[];
  number: number;
}