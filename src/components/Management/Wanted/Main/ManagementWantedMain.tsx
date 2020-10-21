import React, { FC } from "react";
import { FacebookIcon } from "../../../../assets";
import * as S from "../../../../styles/CircleWantedDetail";
import { FaceBookBtn } from "../../../default/Info/Header/styles";
import ManagementWantedContent from "./Content/ManagementWantedContent";

const ManagementWantedMain: FC = () => {
  return (
    <S.Main>
      <S.Header>
        <S.CircleName>VCC</S.CircleName>
        <FaceBookBtn>
          <img src={FacebookIcon} />
          <div>지원하기</div>
        </FaceBookBtn>
      </S.Header>
      <ManagementWantedContent />
    </S.Main>
  );
};

export default ManagementWantedMain;