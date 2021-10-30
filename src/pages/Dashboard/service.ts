import { request } from 'umi';
import type { PerformanceData } from './data';

export async function fakeChartData(): Promise<{ data: PerformanceData }> {
  return request('/api/perf/info');
}
