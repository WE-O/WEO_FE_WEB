import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useGetWeather } from '../../../Logics/mainLeftLogic';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import {
  SET_weatherData,
  SET_location,
} from '../../../../../store/modules/UserSlice';
import {
  MainLeftDeafultItemWrapper,
  MainLeftDeafultItemTitle,
} from './MainLefCss';

const MainLeftWeather = () => {


  const dispatch = useAppDispatch();
  const weatherData = useAppSelector((state) => state.user.weatherData);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    initLocation();
  }, []);

  const initLocation = useCallback(async () => {
    const default_lat = Number(process.env.NEXT_PUBLIC_DEFAULT_LAT);
    const default_lng = Number(process.env.NEXT_PUBLIC_DEFAULT_LNG)
    const getWeatherData = await useGetWeather(
      default_lat,
      default_lng,
    );
    dispatch(SET_location({ lat: default_lat, lng: default_lng }));
    dispatch(SET_weatherData(getWeatherData));
  }, [])

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const getWeatherData = await useGetWeather(
            position.coords.latitude,
            position.coords.longitude,
          );
          dispatch(SET_location({ lat: lat, lng: lng }));
          dispatch(SET_weatherData(getWeatherData));
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      );
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  }, []);

  const onHandleClick = useCallback(() => {
    timer.current && clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      getLocation();
    }, 150);
  }, [getLocation]);

  return (
    <MainLeftDeafultItemWrapper>
      <MainLeftDeafultItemTitle>
        <span>위치</span>
      </MainLeftDeafultItemTitle>
      <MainLeftWeatherContents>
        <MainLeftWeatherItem>
          {weatherData?.mWeather ? <Image src={weatherData.mWeather} /> : 'ㅡ'}
          <MainLeftWeatherSpan type="text">오전</MainLeftWeatherSpan>
        </MainLeftWeatherItem>
        {weatherData?.mWeather && weatherData.aWeather && <span>|</span>}
        <MainLeftWeatherItem>
          {weatherData?.aWeather ? <Image src={weatherData.aWeather} /> : 'ㅡ'}
          <MainLeftWeatherSpan type="text">오후</MainLeftWeatherSpan>
        </MainLeftWeatherItem>
        <MainLeftWeatherItem>
          {weatherData?.mTmp ? `${weatherData.mTmp}° ` : ' ㅡ '}/
          {weatherData?.aTmp ? ` ${weatherData.aTmp}°` : ' ㅡ '}
        </MainLeftWeatherItem>
        <MainLeftWeatherItem>
          <MainLeftWeatherBtn onClick={() => onHandleClick()}>
            현재위치 인증
          </MainLeftWeatherBtn>
        </MainLeftWeatherItem>
      </MainLeftWeatherContents>
    </MainLeftDeafultItemWrapper>
  );
};

export default MainLeftWeather;

const MainLeftWeatherContents = styled.div`
  border-bottom: ${(props) => `1px solid ${props.theme.lightGrey1}`};
  height: 130px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MainLeftWeatherItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const MainLeftWeatherSpan = styled.span<{ type: string }>`
  font-weight: 400;

  ${(Props) =>
    Props.type === 'text' &&
    css`
      font-size: 14px;
      color: #999999;
    `}

  ${(Props) =>
    Props.type === 'number' &&
    css`
      font-size: 16px;
      font-weight: 400;
    `}
`;

const MainLeftWeatherBtn = styled.button`
  width: 110px;
  height: 30px;
  font-size: 14px;
  color: #999999;
  border: 1px solid #999999;
  border-radius: 10px;
  background: white;
  cursor: pointer;
`;
