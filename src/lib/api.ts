import { PageState } from '../modules/reducer/page';
import { useSelector } from 'react-redux';
import { stateType } from '../modules/reducer';
import { BoardObj } from '../components/default/Board/Board';

type valueType = [string, string];

interface UrlObj {
  home: valueType;
  notice: valueType;
  circles: valueType;
  outing: valueType;
  admin: {
    [key: string]: string[];
  };
}

const urlObj: UrlObj = {
  home: ['홈', ''],
  notice: ['공지', ''],
  circles: ['동아리', '공지사항'],
  outing: ['외출신청', '유의사항'],
  admin: {
    out: ['외출 관리', '승인대기 외출증'],
    notice: ['공지사항', '전체 공지'],
  },
};

interface SubUrlObj {
  [key: string]: string;
}

const subUrlObj: SubUrlObj = {
  notice: '공지사항',
  wanted: '부원 모집',
  all: '동아리 전체보기',
  waring: '유의사항',
  apply: '외출신청',
  history: '내 외출신청 내역',
};

const adminUrlObj: SubUrlObj = {
  certified: '미인증 외출증',
  now: '현재 외출 학생',
  wait: '승인대기 외출증',
  all: '전체 공지',
  mine: '내가 올린 공지',
  write: '공지사항 작성',
};

export const getNavUrl = (url: string): PageState => {
  const stringArr = url.split('/');
  const filterStr = stringArr[3] as 'home' | 'notice' | 'circles' | 'outing';
  const urlArr = urlObj.admin[stringArr[4]] || urlObj[filterStr] || ['', ''];
  return {
    mainUrl: urlArr[0],
    subUrl: adminUrlObj[stringArr[5]] || subUrlObj[stringArr[4]] || urlArr[1],
  };
};

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

export type CallbackFunc = (state: stateType) => any;
export const customSelector = (callback: CallbackFunc) => useSelector(callback);

export const makeFilterFunc = <T>(
  data: T[],
  callback: (data: T, str: string) => boolean,
): ((keyword: string) => T[]) => {
  return (keyword: string) => data.filter((item) => callback(item, keyword));
};
