// import { PageContainer } from '@ant-design/pro-layout';
import { Suspense } from 'react';
import PageLoading from '@/components/Common/PageLoading';
import IntroduceRow from './components/IntroduceRow';
import type { FC } from 'react';
// import { Spin } from 'antd';
// import styles from './index.less';
import { GridContent } from '@ant-design/pro-layout';
import humps from 'humps';
import { fakeChartData } from './service';
import { useRequest } from 'umi';
import type { PerformanceData } from './data.d';

type PerformanceProps = {
  dashboardAndAnalysis: PerformanceData;
  loading: boolean;
};

const Performance: FC<PerformanceProps> = () => {
  const { loading, data } = useRequest(fakeChartData);
  if (data) {
    console.log(humps.camelizeKeys(data));
    const IntroduceData = {
      a: data?.hostRunTime,
    };
    console.log(IntroduceData);
    return (
      <GridContent>
        <>
          <Suspense fallback={<PageLoading />}>
            <IntroduceRow loading={loading} visitData={[]} />
          </Suspense>
        </>
      </GridContent>
    );
  } else {
    return null;
    // <PageContainer content="这是一个新页面，从这里进行开发！" className={styles.main}>
    //   <div style={{ paddingTop: 100, textAlign: 'center' }}>
    //     <Spin spinning={loading} size="large" />
    //   </div>
    // </PageContainer>
  }

  // const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  // return (
  //   <PageContainer content="这是一个新页面，从这里进行开发！" className={styles.main}>
  //     <div style={{ paddingTop: 100, textAlign: 'center' }}>
  //       <Spin spinning={loading} size="large" />
  //     </div>
  //   </PageContainer>
  // );
};
export default Performance;
