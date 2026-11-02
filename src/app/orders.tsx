import { SectionScreen } from '@/components/section-screen';

export default function OrdersScreen() {
  return (
    <SectionScreen
      title="订单"
      description="管理内销订单进度和客户交付。"
      emptyTitle="订单页面已就绪"
      emptyDescription="这里将展示订单列表、筛选和订单详情入口。"
    />
  );
}
