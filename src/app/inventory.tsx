import { SectionScreen } from '@/components/section-screen';

export default function InventoryScreen() {
  return (
    <SectionScreen
      title="库存"
      description="掌握款式、颜色和尺码的库存情况。"
      emptyTitle="库存页面已就绪"
      emptyDescription="这里将展示商品库存、出入库记录和预警。"
    />
  );
}
