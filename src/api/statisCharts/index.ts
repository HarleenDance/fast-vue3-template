// 权限问题后期增加
import { get, post } from '/@/utils/http/axios';
import { StatisDevice } from './type';
// import axios from 'axios';
enum URL {
  statisDeviceByUserObject = '/api/device/home/statisDeviceByUserObject',
}

const getDeviceByUserObject = async () => get<UserState>({ url: URL.statisDeviceByUserObject });
export { getDeviceByUserObject };
