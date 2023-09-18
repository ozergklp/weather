import React from 'react';
import {
    WiDaySunny,
    WiNightClear,
    WiDayCloudy,
    WiNightCloudy,
    WiCloud,
    WiCloudy,
    WiDayShowers,
    WiNightShowers,
    WiDayRain,
    WiNightAltRain,
    WiDayThunderstorm,
    WiNightThunderstorm,
    WiDaySnow,
    WiNightSnow,
    WiDayFog,
    WiNightFog,
} from 'react-icons/wi';

export default function WeatherIconS({ weatherCode }) {
    const iconMap = {
        '01d': <WiDaySunny className="text-small  fill-slate-900" />,
        '01n': <WiNightClear className="text-small  fill-slate-900" />,
        '02d': <WiDayCloudy className="text-small  fill-slate-900 " />,
        '02n': <WiNightCloudy className="text-small  fill-slate-900 " />,
        '03d': <WiCloud className="text-small  fill-slate-900" />,
        '03n': <WiCloud className="text-small  fill-slate-900" />,
        '04d': <WiCloudy className="text-small  fill-slate-900" />,
        '04n': <WiCloudy className="text-small  fill-slate-900" />,
        '09d': <WiDayShowers className="text-small  fill-slate-900" />,
        '09n': <WiNightShowers className="text-small  fill-slate-900" />,
        '10d': <WiDayRain className="text-small  fill-slate-900" />,
        '10n': <WiNightAltRain className="text-small  fill-slate-900" />,
        '11d': <WiDayThunderstorm className="text-small  fill-slate-900" />,
        '11n': <WiNightThunderstorm className="text-small  fill-slate-900" />,
        '13d': <WiDaySnow className="text-small  fill-slate-900" />,
        '13n': <WiNightSnow className="text-small  fill-slate-900" />,
        '50d': <WiDayFog className="text-small  fill-slate9400" />,
        '50n': <WiNightFog className="text-small  fill-slate-900" />,
        
    };

    return iconMap[weatherCode] || 'unknown';
}
