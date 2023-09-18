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

export default function WeatherIconL({ weatherCode }) {
    const iconMap = {
        '01d': <WiDaySunny className="text-large fill-slate-900" />,
        '01n': <WiNightClear className="text-large fill-slate-900" />,
        '02d': <WiDayCloudy className="text-large fill-slate-900" />,
        '02n': <WiNightCloudy className="text-large fill-slate-900" />,
        '03d': <WiCloud className="text-large fill-slate-900" />,
        '03n': <WiCloud className="text-large fill-slate-900" />,
        '04d': <WiCloudy className="text-large fill-slate-900" />,
        '04n': <WiCloudy className="text-large fill-slate-900" />,
        '09d': <WiDayShowers className="text-large fill-slate-900" />,
        '09n': <WiNightShowers className="text-large fill-slate-900" />,
        '10d': <WiDayRain className="text-large fill-slate-900" />,
        '10n': <WiNightAltRain className="text-large fill-slate-900" />,
        '11d': <WiDayThunderstorm className="text-large fill-slate-900" />,
        '11n': <WiNightThunderstorm className="text-large fill-slate-900" />,
        '13d': <WiDaySnow className="text-large fill-slate-900" />,
        '13n': <WiNightSnow className="text-large fill-slate-900" />,
        '50d': <WiDayFog className="text-large fill-slate-900" />,
        '50n': <WiNightFog className="text-large fill-slate-900" />,  
    };

    return iconMap[weatherCode] || 'unknown';
}
