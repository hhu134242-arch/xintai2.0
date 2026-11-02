import { SectionScreen } from '@/components/section-screen';

export default function CustomersScreen() {
  return (
    <SectionScreen
      title="客户"
      description="查看客户资料、跟进记录和关联订单。"
      emptyTitle="客户页面已就绪"
      emptyDescription="这里将展示客户列表、搜索和客户详情入口。"
    />
  );
}
