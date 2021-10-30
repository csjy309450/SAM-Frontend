// import { DataItem } from '@antv/g2plot/esm/interface/config';

// export { DataItem };

// export interface VisitDataType {
//   x: string;
//   y: number;
// }

// export type SearchDataType = {
//   index: number;
//   keyword: string;
//   count: number;
//   range: number;
//   status: number;
// };

// export type OfflineDataType = {
//   name: string;
//   cvr: number;
// };

// export interface OfflineChartData {
//   date: number;
//   type: number;
//   value: number;
// }

// export type RadarData = {
//   name: string;
//   label: string;
//   value: number;
// };
export interface ILoadInfo {
  level: number;
  date: string[];
  oneMin: string[];
  fiveMin: string[];
  fiftenMin: string[];
}
export enum procStatType {}
// User = 'User',
// root = 'root',
// polkitd = 'polkitd',
// chrony = 'chrony',
// dbus = 'dbus',
// postfix = 'postfix',
// mysql = 'mysql',
// www = 'www'

// Stat = "Stat",
// T = "T",
// S = "S",
// I = "I",
// Z = "Z",
// D = "D",
// P = "P",
// W = "W",
// X = "X",
// ['<'] = "<",
// N = "N",
// L = "L",
// s = "s",
export interface IProcInfo {
  procCount: number;
  procStatDistribution: [string, string[]][];
  procUserDistribution: [string, string[]][];
}
export interface IMemoryInfo {
  date: string[];
  memSize: number;
  memUsage: number[][];
  swapSize: number;
  swapUsage: number[][];
}
export interface IDiskInfo {
  diskSize: number;
  diskUsage: { [key in string]: number[] };
  diskIoRate: any[];
}
export interface INetInfo {
  netIoRate: { [key in string]: number[] | string[] };
}
export interface PerformanceData {
  hostRunTime: number;
  hostIdleRate: number;
  loginUserCount: number;
  loadInfo: ILoadInfo;
  procInfo: IProcInfo;
  memoryInfo: IMemoryInfo;
  diskInfo: IDiskInfo;
  netInfo: INetInfo;
}
