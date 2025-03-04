import { Dispatch, SetStateAction } from "react";
type WeatherCardProps = {
  handleSubmit: (event: React.FormEvent) => void;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  thereIsWeather: boolean;
  name: string;
  description: string;
  tempMax: number;
  tempMin: number;
  feelsLike: number;
  icon: string;
  main: string;
};

export const WeatherCard = ({
  handleSubmit,
  city,
  setCity,
  thereIsWeather,
  name,
  description,
  tempMax,
  tempMin,
  feelsLike,
  icon,
  main,
}: WeatherCardProps) => {
  return (
    <div className="bg-[#1E1E1E] p-8 rounded-2xl flex flex-col justify-between gap-4 ">
      <form
        onSubmit={handleSubmit}
        className="bg-[#363636] flex flex-row justify-between rounded-2xl p-2"
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button className=" p-2  rounded-4xl" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>

      {thereIsWeather && (
        <div className="flex flex-row">
          <div>
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="opacity-50">
              {new Date(Date.now()).toLocaleDateString()}
            </p>
          </div>
          <div className="p-9">
            <img
              className="w-[100px]"
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
            />
          </div>
          <div className="flex flex-col gap-8 mt-14 ml-4">
            <div>
              <h1 className="text-3xl font-bold">{tempMax}°C</h1>
              <p className="opacity-50">/{tempMin}°C</p>
            </div>
            <div>
              <p className="font-bold">{main}</p>
              <p className="text-[0.8rem]">Feels Like: {feelsLike}°C</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
