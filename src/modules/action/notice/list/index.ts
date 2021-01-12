import { ResBoardList } from "../../../../lib/api/payloads/Board";

export const GET_NOTICE_LIST = "notice/GET_NOTICE_LIST" as const;
export const GET_NOTICE_SCHOOL_LIST = "notice/GET_NOTICE_SCHOOL_LIST" as const;
export const GET_NOTICE_CLUB_LIST = "notice/GET_NOTICE_CLUB_LIST" as const;
export const GET_NOTICE_WRITER_LIST = "notice/GET_NOTICE_WRITER_LIST" as const;
export const GET_NOTICE_LIST_SUCCESS = "notice/GET_NOTICE_LIST_SUCCESS" as const;
export const GET_NOTICE_LIST_FAIL = "notice/GET_NOTICE_LIST_FAIL" as const;

export const getNoticeSchoolList = (page: number) => ({
  type: GET_NOTICE_SCHOOL_LIST,
  payload: page
});
export const getNoticeClubList = (page: number) => ({
  type: GET_NOTICE_CLUB_LIST,
  payload: page
});
export const getNoticeWriterList = (page: { uuid: string; page: number }) => ({
  type: GET_NOTICE_WRITER_LIST,
  payload: page
});

export const getNoticeListSuccess = (res: ResBoardList) => ({
  type: GET_NOTICE_LIST_SUCCESS,
  payload: res
});
export const getNoticeListFail = () => ({
  type: GET_NOTICE_LIST_FAIL
});

type NoticeListAction = ReturnType<
  typeof getNoticeListSuccess | typeof getNoticeListFail
>;

export default NoticeListAction;
