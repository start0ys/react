import React, { useState, useEffect } from 'react';


const Clock = () => {
    let timer: any = null;
    const [time, setTime] = useState({   dateStr : '', timeStr : ''});
    useEffect(() => {
      timer = setInterval(() => {
        setTime(clock());
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }, []);

    let day:any = {
        0 : '일요일'
        ,1: '월요일'
        ,2: '화요일'
        ,3: '수요일'
        ,4: '목요일'
        ,5: '금요일'
        ,6: '토요일'
    }
    
    /**
     * 시간 및 날짜 세팅
     */
    function clock() {
        let now = new Date();

        let dateStr = `${now.getFullYear()}년 ${getTimeNumber(now.getMonth() + 1)}월 ${getTimeNumber(now.getDate())}일 ${day[now.getDay()]}`;
        let timeStr = `${getTimeNumber(now.getHours())}:${getTimeNumber(now.getMinutes())}:${getTimeNumber(now.getSeconds())}`;

        return {
            dateStr : dateStr,
            timeStr : timeStr
        };
    }

    /**
     * 한 자리수의 시간 앞에 '0' 추가
     * @param {number} time : 시간
     * @returns 
     */
    function getTimeNumber(time:number):string|number {
        return time < 10 ? `0${time}` : time;
    }


    return (
        <div className="timeZone text-center">
            <div id="date" className="f18">{time.dateStr}</div>
            <div id="clock" className="f32 bold">{time.timeStr}</div>
        </div>
    )
};

export default Clock;