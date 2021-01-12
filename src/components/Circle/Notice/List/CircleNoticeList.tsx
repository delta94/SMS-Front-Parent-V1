import React, { FC } from "react";
import { NavIconNoticeBlue } from "../../../../assets";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";
import { NoticeList } from "../../../default";
import { NoticeListSet } from "../../../default/NoticeList/NoticeList";

const CircleNoticeList: FC = () => {
  const { announcements, size, loading } = useSelector((state: stateType) => ({
    ...state.noticeList,
    loading: state.loading["notice/GET_NOTICE_LIST"]
  }));

  const noticeListSet: NoticeListSet = {
    title: "동아리 공지사항",
    size,
    imgSrc: NavIconNoticeBlue,
    names: ["번호", "제목", "날짜", "동아리", "조회수"]
  };

  return (
    <NoticeList
      loading={loading}
      notices={announcements}
      setting={noticeListSet}
    />
  );
};

export default CircleNoticeList;
