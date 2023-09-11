import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('');
  const [firstNumber, setFirstNumber] = useState('010');
  const [middleNumber, setMiddleNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [treatment, setTreatment] = useState('');
  const [year, setYear] = useState('2023');
  const [month, setMonth] = useState('01');
  const [day, setDay] = useState('01');
  const [time, setTime] = useState('09:00');
  const [message, setMessage] = useState('');

  const clear = () => {
    setName('');
    setFirstNumber('010');
    setMiddleNumber('');
    setLastNumber('');
    setTreatment('진료 과목을 선택하세요.');
    setYear('2023');
    setMonth('01');
    setDay('01');
    setTime('09:00');
    setMessage('');
  };

  const isNumber = (number: string) => {
    const re = new RegExp('^[0-9]{0,4}$');

    return re.test(number);
  };

  const sendEmail = () => {
    const templateParams = {
      name: name,
      number: `${firstNumber}-${middleNumber}-${lastNumber}`,
      message: message,
      treatment: treatment,
      year: year,
      month: month,
      day: day,
      time: time,
    };

    if (treatment === '진료 과목을 선택하세요.') {
      alert('진료 과목을 선택해주세요.');
      return;
    }

    try {
      emailjs.send(
        'service_l6u6dpp',
        'template_wykf2qs',
        templateParams,
        'Mu9SzmMPQ8dC82KOV',
      );
      alert('문의가 전송되었습니다.');
      clear();
    } catch {
      alert('문의 전송에 실패하였습니다.');
    }
  };

  return (
    <>
      <div className="pt-[104px] pc:pt-[189px] w-full flex flex-col items-center font-notoSans">
        <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
          <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
            INTRODUCTION
          </div>
          <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
            병원장 소개
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative hidden pc:block w-[100vw] h-[52vw]">
            <Image
              src={`/images/MainPC.png`}
              fill
              alt="Main"
              quality={100}
              priority
            />
          </div>
          <div className="relative block pc:hidden w-[100vw] h-[215vw]">
            <Image
              src={`/images/Main.png`}
              fill
              alt="Main"
              quality={100}
              priority
            />
          </div>
        </div>
        <div className="relative w-[7.2px] pc:w-[11px] h-[85px] pc:h-[130px]">
          <Image src={`/images/LineBlue.png`} fill alt="Line" />
        </div>
        <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
          <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
            MEDIA
          </div>
          <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
            온라인 · 방송
          </div>
        </div>
        <div className="w-[100vw] pc:w-[72.917vw] flex flex-col items-center">
          <div className="w-[100vw] pc:w-[72.917vw] h-[50px] pc:h-[77px] bg-ym-blue flex justify-center items-center text-[18px] pc:text-[28px] gap-[10px]">
            <div className="text-white">매일 경제 TV</div>
            <div className="text-ym-green">건강백세</div>
          </div>
          <div className="grid grid-cols-2 pc:grid-cols-4 mb-[30px] pc:mb-[70px]">
            <div className="relative w-[50vw] pc:w-[18.23vw] h-[39.95vw] pc:h-[18.583vw]">
              <Image
                src={`/images/TV1.png`}
                fill
                alt="TV"
                quality={100}
                priority
              />
            </div>
            <div className="relative w-[50vw] pc:w-[18.23vw] h-[39.95vw] pc:h-[18.583vw]">
              <Image
                src={`/images/TV2.png`}
                fill
                alt="TV"
                quality={100}
                priority
              />
            </div>
            <div className="relative w-[50vw] pc:w-[18.23vw] h-[39.95vw] pc:h-[18.583vw]">
              <Image
                src={`/images/TV3.png`}
                fill
                alt="TV"
                quality={100}
                priority
              />
            </div>
            <div className="relative w-[50vw] pc:w-[18.23vw] h-[39.95vw] pc:h-[18.583vw]">
              <Image
                src={`/images/TV4.png`}
                fill
                alt="TV"
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="w-[100vw] pc:w-[72.917vw] h-[50px] pc:h-[77px] bg-ym-blue flex justify-center items-center text-[18px] pc:text-[28px] gap-[10px]">
            <div className="text-white">팟빵</div>
            <div className="text-ym-green">변춘애의 건강솔까말</div>
          </div>
          <div className="w-[100vw] pc:w-[72.917vw] h-[111.2vw] pc:h-[14.6vw] bg-white flex flex-col pc:flex-row justify-center items-center mb-[30px] pc:mb-[70px] gap-[30px] pc:gap-[70px]">
            <div className="relative w-[71.25vw] pc:w-[12.34vw] h-[71.25vw] pc:h-[12.34vw]">
              <Image
                className="pt-[15px] pc:pt-0"
                src={`/images/BC.png`}
                fill
                alt="변춘애"
                quality={100}
                priority
              />
            </div>
            <div className="flex text-black text-[16px] pc:text-[20px] gap-[10px] mr-[8vw] ml-[8.65vw] pc:mx-0">
              <div className="font-bold">·</div>
              <div>
                제62회 "포경 수술 할까말까? 최욱과 비뇨기과 전문의 김정민원장의
                솔직토크"
              </div>
            </div>
          </div>
          <div className="w-[100vw] pc:w-[72.917vw] h-[50px] pc:h-[77px] bg-ym-blue flex justify-center items-center text-[18px] pc:text-[28px] gap-[10px]">
            <div className="text-white">언론매체</div>
            <div className="text-ym-green">연재한 칼럼</div>
          </div>
          <div className="w-[100vw] pc:w-[72.917vw] h-[215vw] pc:h-[700px] bg-white pc:flex mb-[85px] pc:mb-[150px]">
            <div className="pc:w-[30vw] flex justify-center mb-[250px] pc:mb-0">
              <div className="absolute pc:mt-[2.6vw] pc:ml-[4vw] ml-[5vw] mt-[30px]">
                <div className="relative w-[188px] pc:w-[14.531vw] h-[63px] pc:h-[4.843vw] z-20">
                  <Image src={`/images/Column1.png`} fill alt="column" />
                </div>
              </div>
              <div className="absolute pc:mt-[8.6vw] pc:mr-[2vw] mr-[150px] mt-[100px]">
                <div className="relative w-[174px] pc:w-[13.437vw] h-[62px] pc:h-[4.792vw] z-10">
                  <Image src={`/images/Column2.png`} fill alt="column" />
                </div>
              </div>
              <div className="absolute pc:mt-[11.05vw] pc:ml-[8vw] ml-[150px] mt-[90px]">
                <div className="relative w-[130px] pc:w-[10.052vw] h-[130px] pc:h-[10.052vw]">
                  <Image src={`/images/Column3.png`} fill alt="column" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start w-full text-black text-[16px] pc:text-[20px] gap-[20px] font-normal mt-[60px] ml-[20px] pc:ml-0 pr-[30px] pc:pr-0">
              <div className="text-[18px] pc:text-[24px] font-bold text-ym-blue-3">
                서울파이낸스 및 언론 매체 다수 연재
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>솔직한性 당당한性</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>전립선염 탈출, 좌욕이나 반신욕으로</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>'정관수술' 성기능과는 아무런 관련 없어</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>
                  '의도적 부부생활' 남성호르몬 분비 증가로 성욕저하증에 효과
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>
                  전립선암, '암 조기발견시 10년 생존율이 80%' 조기발견과 예방이
                  중요
                </div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>확대효과 탁월하며 영구적인 음경확대술로 만족</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>[100세 청춘] 무기력한 당신 혹시 갱년기?</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>고환염, 방치하다 불임 가능성 키워</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>굵기나 길이보다 중요한 테크닉</div>
              </div>
              <div className="flex gap-[10px]">
                <div className="font-bold">·</div>
                <div>[性생활 이야기] 휘어진 음경</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-ym-blue h-[1050px] pc:h-[1500px] flex flex-col items-center text-white text-[16px] pc:text-[20px]">
          <div className="relative w-[7.2px] pc:w-[11px] h-[85px] pc:h-[130px]">
            <Image src={`/images/LineWhite.png`} fill alt="Line" />
          </div>
          <div className="mt-[10px] pc:mt-[24px] text-[10px] pc:text-[14px] text-ym-green tracking-[6px]">
            HISTORY
          </div>
          <div className="text-[28px] pc:text-[50px] font-bold">
            김정민 원장님
          </div>
          <div className="px-[13.74vw] pc:px-[150px]">
            <div className="pc:flex mt-[40px] pc:mt-[120px]">
              <div className="text-[18px] pc:text-[36px] pc:w-[250px] text-ym-green mb-[4px] pc:mb-0">
                1993
              </div>
              <div className="flex gap-[10px] items-center">
                <div className="font-bold">·</div>
                <div className="pc:w-[700px] flex items-center">
                  연세대학교 의과대학교 및 동 대학원
                </div>
              </div>
            </div>
            <div className="pc:flex mt-[40px] pc:mt-[60px]">
              <div className="text-[18px] pc:text-[36px] pc:w-[250px] text-ym-green mb-[4px] pc:mb-0">
                1994
              </div>
              <div className="pc:w-[700px] flex flex-col pc:py-[20px] gap-[9px] pc:gap-[20px]">
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>세브란스병원 전공의 수료/의학박사</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>비뇨기과 전문의</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>대한비뇨기과학회 정회원</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>미국비뇨기과학회 정회원</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>대한남성과학회 정회원</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>대한소아비뇨기과학회 정회원</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>대한전립선학회 정회원</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>
                    대한비뇨기종양학회 정회원 대한배뇨장애및요실금학회 정회원
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>요로생식기감염학회 정회원</div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="font-bold">·</div>
                  <div>APSIR (아시아태평양성기능학회) 준회원</div>
                </div>
              </div>
            </div>
            <div className="pc:flex mt-[40px] pc:mt-[60px]">
              <div className="text-[18px] pc:text-[36px] pc:w-[250px] text-ym-green mb-[4px] pc:mb-0">
                1994 ~ 2001
              </div>
              <div className="flex gap-[10px] items-center">
                <div className="font-bold">·</div>
                <div className="pc:w-[700px] flex items-center">
                  연세의대 비뇨기과 외래교수
                </div>
              </div>
            </div>
            <div className="pc:flex mt-[40px] pc:mt-[60px]">
              <div className="text-[18px] pc:text-[36px] pc:w-[250px] text-ym-green mb-[4px] pc:mb-0">
                2003
              </div>
              <div className="flex gap-[10px] items-center">
                <div className="font-bold">·</div>
                <div className="pc:w-[700px] flex items-center">
                  유로메디컬센터 비뇨기과 대표원장
                </div>
              </div>
            </div>
            <div className="pc:flex mt-[40px] pc:mt-[60px]">
              <div className="text-[18px] pc:text-[36px] pc:w-[250px] text-ym-green mb-[4px] pc:mb-0">
                2006
              </div>
              <div className="flex gap-[10px] items-center">
                <div className="font-bold">·</div>
                <div className="pc:w-[700px] flex items-center">
                  연세우노비뇨기과 대표원장
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-ym-gray-3 flex flex-col items-center justify-center">
          <div className="relative w-[7.2px] pc:w-[11px] h-[85px] pc:h-[130px]">
            <Image src={`/images/LineBlue.png`} fill alt="Line" />
          </div>
          <div className="mt-[20px] pc:mt-[24px] h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
            <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
              CONTACT
            </div>
            <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold mb-[25px] pc:mb-[50px]">
              온라인 상담
            </div>
          </div>
          <div className="flex mb-[10px] pc:mb-[20px]">
            <div className="flex items-center justify-between text-[14px] pc:text-[20px] mr-[10px] pc:mr-[30px] w-[85px] pc:w-[140px] tracking-widest">
              <nav>이</nav>
              <nav>름</nav>
            </div>
            <div className="w-[60vw] pc:w-[350px] h-[35px] pc:h-[40px] bg-white flex items-center justify-start px-[10px] border border-ym-border text-[14px] pc:text-[16px]">
              <input
                spellCheck={false}
                placeholder="이름"
                className="w-full bg-transparent outline-none"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
          </div>
          <div className="flex mb-[10px] pc:mb-[20px]">
            <div className="flex items-center justify-between text-[14px] pc:text-[20px] mr-[10px] pc:mr-[30px] w-[85px] pc:w-[140px]">
              <nav>연</nav>
              <nav>락</nav>
              <nav>처</nav>
            </div>
            <div className="flex gap-[3vw] pc:gap-[10px]">
              <div className="w-[18vw] pc:w-[110px] h-[35px] pc:h-[40px] bg-white flex items-center justify-start px-[10px] border border-ym-border text-[14px] pc:text-[16px]">
                <select
                  className="w-full"
                  value={firstNumber}
                  onChange={(e) => {
                    setFirstNumber(e.target.value);
                  }}
                >
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                </select>
              </div>
              <div className="w-[18vw] pc:w-[110px] h-[35px] pc:h-[40px] bg-white flex items-center justify-start px-[10px] border border-ym-border text-[14px] pc:text-[16px]">
                <input
                  spellCheck={false}
                  className="w-full bg-transparent outline-none"
                  onChange={(e) => {
                    isNumber(e.target.value)
                      ? setMiddleNumber(e.target.value)
                      : null;
                  }}
                  value={middleNumber}
                />
              </div>
              <div className="w-[18vw] pc:w-[110px] h-[35px] pc:h-[40px] bg-white flex items-center justify-start px-[10px] border border-ym-border text-[14px] pc:text-[16px]">
                <input
                  spellCheck={false}
                  className="w-full bg-transparent outline-none"
                  onChange={(e) => {
                    isNumber(e.target.value)
                      ? setLastNumber(e.target.value)
                      : null;
                  }}
                  value={lastNumber}
                />
              </div>
            </div>
          </div>
          <div className="flex mb-[10px] pc:mb-[20px]">
            <div className="flex items-center justify-between text-[14px] pc:text-[20px] mr-[10px] pc:mr-[30px] w-[85px] pc:w-[140px]">
              <nav>진</nav>
              <nav>료</nav>
              <nav>과</nav>
              <nav>목</nav>
            </div>
            <div className="w-[60vw] pc:w-[350px] h-[35px] pc:h-[40px] bg-white flex items-center justify-start px-[10px] border border-ym-border text-[14px] pc:text-[16px]">
              <select
                className="w-full"
                value={treatment}
                onChange={(e) => {
                  setTreatment(e.target.value);
                }}
              >
                <option value="진료 과목을 선택하세요.">
                  진료 과목을 선택하세요.
                </option>
                <option value="전립선">전립선</option>
                <option value="갑상선">갑상선</option>
              </select>
            </div>
          </div>
          <div className="flex mb-[5px] pc:mb-[10px]">
            <div className="flex items-center justify-between text-[14px] pc:text-[20px] mr-[10px] pc:mr-[30px] w-[85px] pc:w-[140px]">
              <nav>상담</nav>
              <nav>가능</nav>
              <nav>시간</nav>
            </div>
            <div className="flex gap-[3vw] pc:gap-[10px]">
              <div className="w-[18vw] pc:w-[110px] h-[35px] pc:h-[40px] bg-white flex items-center justify-start px-[5px] pc:px-[10px] border border-ym-border text-[14px] pc:text-[16px]">
                <select
                  className="w-full"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                  }}
                >
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                </select>
              </div>
              <div className="w-[18vw] pc:w-[110px] h-[35px] pc:h-[40px] bg-white flex items-center justify-start px-[10px] border border-ym-border text-[14px] pc:text-[16px]">
                <select
                  className="w-full"
                  value={month}
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                >
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <div className="w-[18vw] pc:w-[110px] h-[35px] pc:h-[40px] bg-white flex items-center justify-start px-[10px] border border-ym-border text-[14px] pc:text-[16px]">
                <select
                  className="w-full"
                  value={day}
                  onChange={(e) => {
                    setDay(e.target.value);
                  }}
                >
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex mb-[10px] pc:mb-[20px]">
            <div className="flex items-center text-[14px] pc:text-[20px] mr-[10px] pc:mr-[30px] w-[85px] pc:w-[140px]"></div>
            <div className="w-[60vw] pc:w-[350px] h-[35px] pc:h-[40px] bg-white flex items-center justify-start px-[10px] border border-ym-border text-[14px] pc:text-[16px]">
              <select
                className="w-full"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              >
                <option value="09:00">09:00</option>
                <option value="09:30">09:30</option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="14:30">14:30</option>
                <option value="15:00">15:00</option>
                <option value="15:30">15:30</option>
                <option value="16:00">16:00</option>
                <option value="16:30">16:30</option>
                <option value="17:00">17:00</option>
                <option value="17:30">17:30</option>
              </select>
            </div>
          </div>
          <div className="flex mb-[30px]">
            <div className="flex items-start justify-between text-[14px] pc:text-[20px] mr-[10px] pc:mr-[30px] w-[85px] pc:w-[140px] pt-[5px]">
              <nav>문</nav>
              <nav>의</nav>
              <nav>내</nav>
              <nav>용</nav>
            </div>
            <div className="w-[60vw] pc:w-[350px] h-[134px] pc:h-[140px] bg-white flex items-center justify-start px-[10px] border border-ym-border text-[14px] pc:text-[16px] pt-[5px]">
              <textarea
                spellCheck={false}
                className="h-full w-full bg-transparent outline-none resize-none"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
              />
            </div>
          </div>
          <div
            className="w-[84.5vw] pc:w-[520px] h-[50px] bg-ym-blue flex items-center justify-center text-white text-[16px] pc:text-[20px] mb-[50px] pc:mb-[100px] hover:cursor-pointer"
            onClick={() => {
              sendEmail();
            }}
          >
            신청하기
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
