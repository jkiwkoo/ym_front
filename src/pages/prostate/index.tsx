import Image from 'next/image';

const Prostate = () => {
  return (
    <>
      <div className="pt-[104px] pc:pt-[189px] w-full flex flex-col items-center font-notoSans">
        <div className="relative w-[100vw] h-[73.79vw] pc:h-[29.69vw] border border-transparent">
          <Image
            className="block pc:hidden"
            src={`/images/Prostate.png`}
            fill
            alt="Prostate"
            quality={100}
            priority
          />
          <Image
            className="hidden pc:block"
            src={`/images/ProstatePC.png`}
            fill
            alt="Prostate"
            quality={100}
            priority
          />
          <div className="absolute text-white flex flex-col items-center justify-center w-full h-full">
            <div className="text-[20px] pc:text-[50px] font-semibold mb-[30px] pc:mb-[3.125vw]">
              전립선 비대증이란?
            </div>
            <div className="text-[14px] pc:text-[24px] pc:mb-[0.5vw]">
              전립선 비대증은 40대 이후부터 서서히 나타날 수 있으며
            </div>
            <div className="text-[14px] pc:text-[24px] pc:mb-[0.5vw]">
              60대 남성은 60~70%가 겪는 흔한 질병으로
            </div>
            <div className="text-[14px] pc:text-[24px] pc:mb-[0.5vw]">
              배뇨장애를 동반하는 것이 일반적인데,
            </div>
            <div className="text-[14px] pc:text-[24px]">
              이를 노화 현상으로 착각하여 치료를 미루는 경우가 많습니다.
            </div>
          </div>
        </div>
        <div className="h-[465px] pc:h-[881px] text-black">
          <div className="relative flex justify-center mt-[50px] pc:mt-[118px] w-[304px] pc:w-[788px] h-[161px] pc:h-[417px]">
            <Image src={`/images/Hyperplasia.png`} fill alt="Hyperplasia" />
          </div>
          <div className="flex gap-[54px] pc:gap-[130px] text-[18px] pc:text-[24px] font-bold mt-[20px] pc:mt-[26px] mb-[33px] pc:mb-[56px]">
            <div className="flex justify-center w-[125px] pc:w-[329px] h-[36px]">
              [정상]
            </div>
            <div className="flex justify-center w-[125px] pc:w-[329px] h-[36px]">
              [전립선비대증]
            </div>
          </div>
          <div className="flex justify-center text-[14px] pc:text-[24px]">
            <div className="block pc:hidden">
              <div className="flex justify-center">
                전립선이 비대해지며 요도를 누르면서
              </div>
              <div className="flex justify-center">
                소변의 배출을 방해하는 질병입니다.
              </div>
              <div className="flex justify-center">
                소변을 보더라도 시원하게 보지 못하게 되며
              </div>
              <div className="flex justify-center">
                심한경우 소변이 역류하여 신장에 악영향을
              </div>
              <div className="flex justify-center">미칠 수 있습니다.</div>
            </div>
            <div className="hidden pc:block">
              <div className="flex justify-center">
                전립선이 비대해지며 요도를 누르면서 소변의 배출을 방해하는
                질병입니다.
              </div>
              <div className="flex justify-center">
                소변을 보더라도 시원하게 보지 못하게 되며
              </div>
              <div className="flex justify-center">
                심한경우 소변이 역류하여 신장에 악영향을 미칠 수 있습니다.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white flex flex-col items-center">
          <div className="relative w-[7.2px] pc:w-[11px] h-[85px] pc:h-[130px]">
            <Image src={`/images/LineBlue.png`} fill alt="Line" />
          </div>
          <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
            <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
              CAUSE
            </div>
            <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
              전립선 비대증 원인
            </div>
          </div>
          <div className="text-ym-blue-3 text-[14px] pc:text-[24px] mb-[20px] flex flex-col font-bold">
            <div className="hidden pc:block">
              <div className="flex justify-center">
                전립선비대증의 원인은 노화, 유전, 체질, 식생활 , 호르몬 , 인종
                간의 차이 등
              </div>
              <div className="flex justify-center">
                여러가지 이론이 있지만 명확하게 규정되지 않고 있습니다.
              </div>
            </div>
            <div className="block pc:hidden">
              <div className="flex justify-center">
                전립선비대증의 원인은 노화, 유전, 체질,
              </div>
              <div className="flex justify-center">
                식생활 , 호르몬 , 인종 간의 차이 등
              </div>
              <div className="flex justify-center">
                여러가지 이론이 있지만 명확하게 규정되지
              </div>
              <div className="flex justify-center">않고 있습니다.</div>
            </div>
          </div>
          <div className="text-black text-[14px] pc:text-[22px] flex flex-col mb-[15px] pc:mb-[90px]">
            <div className="hidden pc:block">
              <div className="flex justify-center">
                다만, 주로 50대 ~ 70대 연령대가 높은 분들에게 주로 발생하고 있는
                점을 비추어 보아
              </div>
              <div className="flex justify-center">
                남성 호르몬이나 노화가 밀접한 관계가 있다는 것이 유력한 학설로
                보고 있습니다.
              </div>
              <div className="flex justify-center">
                동반 질환으로 당뇨병, 고혈압 또는 심질환자에서 빈도가 높고
                간경화증에서는 낮은 편입니다.
              </div>
            </div>
            <div className="block pc:hidden">
              <div className="flex justify-center">
                다만, 주로 50대 ~ 70대 연령대가 높은 분들에게
              </div>
              <div className="flex justify-center">
                주로 발생하고 있는 점을 비추어 보아
              </div>
              <div className="flex justify-center">
                남성 호르몬이나 노화가 밀접한 관계가 있다는 것이
              </div>
              <div className="flex justify-center">
                유력한 학설로 보고 있습니다.
              </div>
              <div className="flex justify-center">
                동반 질환으로 당뇨병, 고혈압 또는 심질환자에서
              </div>
              <div className="flex justify-center">
                빈도가 높고 간경화증에서는 낮은 편입니다.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white flex justify-center">
          <div className="grid grid-cols-2 pc:grid-cols-4 mb-[75px] pc:mb-[150px] gap-[1.27vw] pc:gap-[1.3vw] w-[82.15vw] pc:w-[72.66vw] text-white font-bold">
            <div className="relative w-[40.71vw] pc:w-[17.19vw] h-[40.71vw] pc:h-[17.19vw] flex justify-center items-center">
              <Image src={`/images/Cause1.png`} fill alt="Cause" />
              <div className="absolute text-[18px] pc:text-[26px]">노화</div>
            </div>
            <div className="relative w-[40.71vw] pc:w-[17.19vw] h-[40.71vw] pc:h-[17.19vw] flex justify-center items-center">
              <Image src={`/images/Cause2.png`} fill alt="Cause" />
              <div className="absolute text-[18px] pc:text-[26px]">호르몬</div>
            </div>
            <div className="relative w-[40.71vw] pc:w-[17.19vw] h-[40.71vw] pc:h-[17.19vw] flex justify-center items-center">
              <Image src={`/images/Cause3.png`} fill alt="Cause" />
              <div className="absolute text-[18px] pc:text-[26px]">
                유전적 영향
              </div>
            </div>
            <div className="relative w-[40.71vw] pc:w-[17.19vw] h-[40.71vw] pc:h-[17.19vw] flex justify-center items-center">
              <Image src={`/images/Cause4.png`} fill alt="Cause" />
              <div className="absolute text-[18px] pc:text-[26px]">기타</div>
            </div>
          </div>
        </div>
        <div className="relative w-[7.2px] pc:w-[11px] h-[85px] pc:h-[130px]">
          <Image src={`/images/LineBlue.png`} fill alt="Line" />
        </div>
        <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
          <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
            SYMPTOM
          </div>
          <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
            전립선 비대증 증상
          </div>
        </div>
        <div className="bg-white w-[73vw] pc:w-[976px] shadow-xl mb-[100px] flex flex-col items-center justify-center py-[60px]">
          <div className="flex flex-col items-start justify-start mb-[50px] px-[30px] pc:px-[100px] w-full">
            <div className="border-b border-dashed w-full pc:py-[20px] flex flex-col pc:flex-row items-center justify-center pc:justify-start gap-[10px] pc:gap-[20px]">
              <div className="hidden pc:block">
                <Image
                  src={`/images/Check.png`}
                  width={32}
                  height={28}
                  alt="Check"
                />
              </div>
              <div className="text-ym-blue-3 text-[14px] pc:text-[22px] flex items-center font-bold mt-[30px] pc:mt-[0px] pc:w-[70px]">
                야간뇨
              </div>
              <div className="text-black text-[14px] pc:text-[18px] flex items-center pc:mt-[5px] mb-[20px] pc:mb-[0px]">
                <div className="hidden pc:block">
                  자다가 소변이 마려워서 자주깸 잠을 잘수가 없음
                </div>
                <div className="block pc:hidden">
                  <div>자다가 소변이 마려워서</div>
                  <div>자주깸 잠을 잘수가 없음</div>
                </div>
              </div>
            </div>
            <div className="border-b border-dashed w-full pc:py-[20px] flex flex-col pc:flex-row items-center justify-center pc:justify-start gap-[10px] pc:gap-[20px]">
              <div className="hidden pc:block">
                <Image
                  src={`/images/Check.png`}
                  width={32}
                  height={28}
                  alt="Check"
                />
              </div>
              <div className="text-ym-blue-3 text-[14px] pc:text-[22px] flex items-center font-bold mt-[30px] pc:mt-[0px] pc:w-[70px]">
                잔뇨
              </div>
              <div className="text-black text-[14px] pc:text-[18px] flex items-center pc:mt-[5px] mb-[20px] pc:mb-[0px]">
                <div className="hidden pc:block">
                  소변후 방광에 소변이남아있어 잔뇨감이 계속 있음 소변을 봐도
                  시원하지 않음
                </div>
                <div className="block pc:hidden">
                  <div>소변후 방광에 소변이남아있어 잔뇨감이</div>
                  <div>계속 있음 소변을 봐도 시원하지 않음</div>
                </div>
              </div>
            </div>
            <div className="border-b border-dashed w-full pc:py-[20px] flex flex-col pc:flex-row items-center justify-center pc:justify-start gap-[10px] pc:gap-[20px]">
              <div className="hidden pc:block">
                <Image
                  src={`/images/Check.png`}
                  width={32}
                  height={28}
                  alt="Check"
                />
              </div>
              <div className="text-ym-blue-3 text-[14px] pc:text-[22px] flex items-center font-bold mt-[30px] pc:mt-[0px] pc:w-[70px]">
                빈뇨
              </div>
              <div className="text-black text-[14px] pc:text-[18px] flex items-center pc:mt-[5px] mb-[20px] pc:mb-[0px]">
                화장실을 2시간이내에 한번씩 계속감
              </div>
            </div>
            <div className="w-full pc:py-[20px] flex flex-col pc:flex-row items-center justify-center pc:justify-start gap-[10px] pc:gap-[20px]">
              <div className="hidden pc:block">
                <Image
                  src={`/images/Check.png`}
                  width={32}
                  height={28}
                  alt="Check"
                />
              </div>
              <div className="text-ym-blue-3 text-[14px] pc:text-[22px] flex items-center font-bold mt-[30px] pc:mt-[0px] pc:w-[70px]">
                급박뇨
              </div>
              <div className="text-black text-[14px] pc:text-[18px] flex items-center pc:mt-[5px] mb-[20px] pc:mb-[0px]">
                급하게 소변이 마렵고 참을수가 없음
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-[14px] pc:text-[22px]">
            <div className="hidden pc:block">
              <div className="flex justify-center">
                전립선 비대증은 소변 배출을 방해하는 질병으로
              </div>
              <div className="flex justify-center">
                <nav className="font-bold">
                  방치시 신장/방광에 문제가 되서 합병증
                </nav>
                <nav>을 일으킬수 있습니다.</nav>
              </div>
            </div>
            <div className="block pc:hidden">
              <div className="flex justify-center">
                전립선 비대증은 소변 배출을
              </div>
              <div className="flex justify-center">방해하는 질병으로</div>
              <div className="flex justify-center font-bold">
                방치시 신장/방광에 문제가 되서 합병증
              </div>
              <div className="flex justify-center">을 일으킬수 있습니다.</div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white flex flex-col items-center">
          <div className="relative w-[7.2px] pc:w-[11px] h-[85px] pc:h-[130px]">
            <Image src={`/images/LineBlue.png`} fill alt="Line" />
          </div>
          <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
            <div className="text-[10px] pc:text-[14px] text-ym-gray tracking-[6px]">
              UROLIFT
            </div>
            <div className="text-[28px] pc:text-[50px] text-ym-blue-2 font-semibold">
              유로리프트
            </div>
          </div>
          <div className="w-full pc:w-[72.916vw] h-[39.186vw] pc:h-[28.646vw]">
            <div className="hidden pc:block z-30 absolute mt-[13.8vw] ml-[7.71vw]">
              <div className="text-[24px] text-ym-blue-3 font-bold mb-[1.04vw]">
                유로리프트란?
              </div>
              <div className="text-black text-[20px] mb-[2.08vw] font-semibold">
                <div>약물치료와 수술치료의 단점을 모두 해결해주는</div>
                <div>
                  신의료기술(2014년도 등재)이며 FDA(미국식약처)와
                  MFDS(한국식약처)에
                </div>
                <div>
                  정식으로 허가되어 입증 된 비수술적 시술(최소 침습적 치료)
                </div>
              </div>
              <div className="flex text-white text-[16px] gap-[5px]">
                <div className="flex items-center justify-center bg-ym-blue-3 rounded-[8px] px-[20px] h-[40px]">
                  짧은 시술시간(약 10~20분)
                </div>
                <div className="flex items-center justify-center bg-ym-blue-3 rounded-[8px] px-[20px] h-[40px]">
                  국소마취
                </div>
                <div className="flex items-center justify-center bg-ym-blue-3 rounded-[8px] px-[20px] h-[40px]">
                  입원 불필요
                </div>
                <div className="flex items-center justify-center bg-ym-blue-3 rounded-[8px] px-[20px] h-[40px]">
                  빠른 회복기간
                </div>
                <div className="flex items-center justify-center bg-ym-blue-3 rounded-[8px] px-[20px] h-[40px]">
                  성기능 보존
                </div>
              </div>
            </div>
            <div className="relative w-full pc:w-[72.916vw] h-[39.186vw] pc:h-[28.646vw]">
              <Image
                src={`/images/Urolift.png`}
                fill
                quality={100}
                priority
                alt="Urolift"
              />
            </div>
          </div>
          <div className="block pc:hidden bg-white px-[30px]">
            <div className="text-[16px] text-ym-blue-3 font-bold mb-[13px]">
              유로리프트란?
            </div>
            <div className="text-black text-[14px] font-semibold mb-[25px]">
              <div>약물치료와 수술치료의 단점을 모두 해결해주는</div>
              <div>신의료기술(2014년도 등재)이며 FDA(미국식약처)와</div>
              <div>MFDS(한국식약처)에 정식으로 허가되어 입증 된</div>
              <div>비수술적 시술(최소 침습적 치료)</div>
            </div>
            <div className="flex text-white text-[14px] gap-[5px]">
              <div className="flex items-center justify-center bg-ym-blue-3 rounded-[5px] px-[20px] h-[34px]">
                짧은 시술시간(약 10~20분)
              </div>
              <div className="flex items-center justify-center bg-ym-blue-3 rounded-[5px] px-[15px] h-[34px]">
                국소마취
              </div>
            </div>
            <div className="flex text-white text-[14px] gap-[5px] pt-[5px]">
              <div className="flex items-center justify-center bg-ym-blue-3 rounded-[5px] px-[10px] h-[34px]">
                입원 불필요
              </div>
              <div className="flex items-center justify-center bg-ym-blue-3 rounded-[5px] px-[10px] h-[34px]">
                빠른 회복기간
              </div>
              <div className="flex items-center justify-center bg-ym-blue-3 rounded-[5px] px-[10px] h-[34px]">
                성기능 보존
              </div>
            </div>
          </div>
          <div className="relative mt-[70px] pc:mt-[45px] w-full pc:w-[72.916vw] h-[112.468vw] pc:h-[33.073vw] flex items-center">
            <Image
              className="block pc:hidden"
              src={'/images/Man.png'}
              alt="Man"
              quality={100}
              priority
              fill
            />
            <div className="hidden pc:block pc:absolute z-30 right-[40px] w-[25vw] bg-black bg-opacity-50 text-white h-[28.646vw] px-[60px] pt-[3.646vw] font-apple overflow-hidden">
              <div className="text-[36px] mb-[1.04vw]">시술대상 및 강점</div>
              <div className="text-[20px] mb-[0.9vw]">
                전립선비대증을 앓고 있는 중년이상의 남성
              </div>
              <div className="text-[20px] mb-[0.9vw]">
                약물 치료에 대해 부작용을 걱정하시는 분들
              </div>
              <div className="text-[20px] mb-[1.71vw]">
                마취에 대한 위험, 수술후 부작용, 두려움으로 치료를 미루시는 분들
              </div>
              <div className="text-[18px] mb-[0.1vw]">• 즉시효과</div>
              <div className="text-[18px] mb-[0.1vw]">• 실손보험적용가능</div>
              <div className="text-[18px] mb-[0.1vw]">• 당일퇴원가능</div>
              <div className="text-[18px] mb-[0.1vw]">
                • 국소마취, 10~20분내외소요
              </div>
              <div className="text-[18px] mb-[0.1vw]">• 일상생활 복귀가능</div>
              <div className="text-[18px] mb-[0.1vw]">
                • 사정장애 후유증으로부터 안전
              </div>
            </div>
            <Image
              className="hidden pc:block"
              src={'/images/ManPC.png'}
              alt="Man"
              quality={100}
              priority
              fill
            />
          </div>
          <div className="block pc:hidden w-full bg-black bg-opacity-50 text-white  px-[12.72vw] py-[6.87vw] font-apple">
            <div className="text-[24px] mb-[5vw]">시술대상 및 강점</div>
            <div className="text-[14px] mb-[2.5vw]">
              전립선비대증을 앓고 있는 중년이상의 남성
            </div>
            <div className="text-[14px] mb-[2.5vw]">
              약물 치료에 대해 부작용을 걱정하시는 분들
            </div>
            <div className="text-[14px] mb-[5vw]">
              마취에 대한 위험, 수술후 부작용, 두려움으로 치료를 미루시는 분들
            </div>
            <div className="text-[13px] mb-[1vw]">• 즉시효과</div>
            <div className="text-[13px] mb-[1vw]">• 실손보험적용가능</div>
            <div className="text-[13px] mb-[1vw]">• 당일퇴원가능</div>
            <div className="text-[13px] mb-[1vw]">
              • 국소마취, 10~20분내외소요
            </div>
            <div className="text-[13px] mb-[1vw]">• 일상생활 복귀가능</div>
            <div className="text-[13px] mb-[1vw]">
              • 사정장애 후유증으로부터 안전
            </div>
          </div>
          <div className="h-[110px] pc:h-[200px] flex flex-col items-center justify-center">
            <div className="border border-ym-blue-2 w-[50px] pc:w-[80px] mb-[10px]"></div>
            <div className="text-[24px] pc:text-[46px] text-ym-blue-2 font-semibold">
              유로리프트 원리
            </div>
          </div>
          <div className="grid grid-cols-2 pc:grid-cols-4 gap-[10px] pc:gap-[20px] items-center justify-center">
            <div>
              <div className="relative w-[170px] pc:w-[285px] h-[170px] pc:h-[284px]">
                <Image src={'/images/Urolift1.png'} fill alt="Urolift" />
              </div>
              <div className="flex flex-col w-[170px] pc:w-[285px] items-center justify-center">
                <div className="mt-[15px] text-[18px] text-ym-blue-3 font-bold">
                  STEP01
                </div>
                <div className="mt-[5px] pc:mt-[10px] text-[14px] pc:text-[22px] text-black text-center pc:h-[100px]">
                  <div>전립선이 비대해져</div>
                  <div>요도가 좁아지거나 막힘</div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative w-[170px] pc:w-[285px] h-[170px] pc:h-[284px]">
                <Image src={'/images/Urolift2.png'} fill alt="Urolift" />
              </div>
              <div className="flex flex-col w-[170px] pc:w-[285px] items-center justify-center">
                <div className="mt-[15px] text-[18px] text-ym-blue-3 font-bold">
                  STEP02
                </div>
                <div className="mt-[5px] pc:mt-[10px] text-[14px] pc:text-[22px] text-black text-center pc:h-[100px]">
                  <div>유로리프트 기구 진입하여</div>
                  <div>전립선을 묶어준다</div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative w-[170px] pc:w-[285px] h-[170px] pc:h-[284px]">
                <Image src={'/images/Urolift3.png'} fill alt="Urolift" />
              </div>
              <div className="flex flex-col w-[170px] pc:w-[285px] items-center justify-center">
                <div className="mt-[15px] text-[18px] text-ym-blue-3 font-bold">
                  STEP03
                </div>
                <div className="mt-[5px] pc:mt-[10px] text-[14px] pc:text-[22px] text-black text-center pc:h-[100px]">
                  <div>묶인 특수금속실은</div>
                  <div>영구적으로 전립선을</div>
                  <div>열어 유지된다.</div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative w-[170px] pc:w-[285px] h-[170px] pc:h-[284px]">
                <Image src={'/images/Urolift4.png'} fill alt="Urolift" />
              </div>
              <div className="flex flex-col w-[170px] pc:w-[285px] items-center justify-center">
                <div className="mt-[15px] text-[18px] text-ym-blue-3 font-bold">
                  STEP04
                </div>
                <div className="mt-[5px] pc:mt-[10px] text-[14px] pc:text-[22px] text-black text-center pc:h-[100px]">
                  <div>전문의가 판단한 필요한 수</div>
                  <div>만큼 추가로 묶어줘</div>
                  <div>완벽히 요도를 개방시킨다.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col pc:flex-row gap-[25px] pc:gap-[60px] items-center justify-center mb-[55px] pc:mb-[155px] mt-[40px] pc:mt-[70px] font-bold">
            <div>
              <div className="text-[16px] pc:text-[24px] text-ym-blue-3 mb-[10px] pc:mb-[30px] flex items-center justify-center">
                [위에서 볼때]
              </div>
              <div className="relative w-[330px] pc:w-[567px] h-[184px] pc:h-[316px]">
                <Image src={'/images/Urolift5.png'} fill alt="Urolift" />
              </div>
            </div>
            <div>
              <div className="text-[16px] pc:text-[24px] text-ym-blue-3 mb-[10px] pc:mb-[30px] flex items-center justify-center">
                [정면에서 볼때]
              </div>
              <div className="relative w-[330px] pc:w-[567px] h-[184px] pc:h-[316px]">
                <Image src={'/images/Urolift6.png'} fill alt="Urolift" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-ym-blue-2 w-[50px] pc:w-[80px] mb-[10px] mt-[50px] pc:mt-[100px]"></div>
        <div className="text-[24px] pc:text-[46px] text-ym-blue-2 font-semibold mb-[30px] pc:mb-[80px]">
          유로리프트 장점
        </div>
        <div className="grid grid-cols-2 pc:grid-cols-3 items-center justify-center gap-[10px] pc:gap-[35px] mb-[50px] pc:mb-[100px]">
          <div className="rounded-[14px] bg-white w-[170px] pc:w-[351px] h-[170px] pc:h-[322px] flex flex-col items-center px-[10px] pc:px-[30px]">
            <div className="pt-[30px] pc:pt-[60px] pb-[20px] pc:pb-[40px] text-[16px] pc:text-[18px] text-ym-blue-2 font-bold">
              POINT01
            </div>
            <div className="text-[14px] pc:text-[22px] text-black text-center">
              성기능(발기부전포함)에 영향을 주지 않고, 역사정과 같은 사정장애가
              생기지 않습니다.
            </div>
          </div>
          <div className="rounded-[14px] bg-white w-[170px] pc:w-[351px] h-[170px] pc:h-[322px] flex flex-col items-center px-[10px] pc:px-[30px]">
            <div className="pt-[30px] pc:pt-[60px] pb-[20px] pc:pb-[40px] text-[16px] pc:text-[18px] text-ym-blue-2 font-bold">
              POINT02
            </div>
            <div className="text-[14px] pc:text-[22px] text-black text-center">
              최소 침습적이라 회복도 빠르고 부작용이 거의없습니다.
            </div>
          </div>
          <div className="rounded-[14px] bg-white w-[170px] pc:w-[351px] h-[170px] pc:h-[322px] flex flex-col items-center px-[10px] pc:px-[30px]">
            <div className="pt-[30px] pc:pt-[60px] pb-[20px] pc:pb-[40px] text-[16px] pc:text-[18px] text-ym-blue-2 font-bold">
              POINT03
            </div>
            <div className="text-[14px] pc:text-[22px] text-black text-center">
              짧은 수술시간
            </div>
          </div>
          <div className="rounded-[14px] bg-white w-[170px] pc:w-[351px] h-[170px] pc:h-[322px] flex flex-col items-center px-[10px] pc:px-[30px]">
            <div className="pt-[30px] pc:pt-[60px] pb-[20px] pc:pb-[40px] text-[16px] pc:text-[18px] text-ym-blue-2 font-bold">
              POINT04
            </div>
            <div className="text-[14px] pc:text-[22px] text-black text-center">
              내구성이 뛰어난 소재의 특수금속실 사용
            </div>
          </div>
          <div className="rounded-[14px] bg-white w-[170px] pc:w-[351px] h-[170px] pc:h-[322px] flex flex-col items-center px-[10px] pc:px-[30px]">
            <div className="pt-[30px] pc:pt-[60px] pb-[20px] pc:pb-[40px] text-[16px] pc:text-[18px] text-ym-blue-2 font-bold">
              POINT05
            </div>
            <div className="text-[14px] pc:text-[22px] text-black text-center">
              신속한 증상완화와 회복
            </div>
          </div>
          <div className="rounded-[14px] bg-white w-[170px] pc:w-[351px] h-[170px] pc:h-[322px] flex flex-col items-center px-[10px] pc:px-[30px]">
            <div className="pt-[30px] pc:pt-[60px] pb-[20px] pc:pb-[40px] text-[16px] pc:text-[18px] text-ym-blue-2 font-bold">
              POINT06
            </div>
            <div className="text-[14px] pc:text-[22px] text-black text-center">
              삶의 질 크게 향상
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prostate;
